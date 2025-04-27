import React, { useState } from "react";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import MonthlyExpensesChart from "../../components/MonthlyExpensesChart";

const IndexPage = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const monthlyData = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", { month: "short" });
    const existing = acc.find((data) => data.month === month);
    if (existing) {
      existing.total += transaction.amount;
    } else {
      acc.push({ month, total: transaction.amount });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Personal Finance Visualizer
        </h1>
        <TransactionForm onSubmit={addTransaction} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        <MonthlyExpensesChart data={monthlyData} />
      </div>
    </div>
  );
};

export default IndexPage;