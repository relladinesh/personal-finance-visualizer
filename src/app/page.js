"use client";

import React, { useState } from "react";
import TransactionForm from "../app/components/TransactionForm";
import TransactionList from "../app/components/TransactionList";
import MonthlyExpenseChart from "../app/components/MonthlyExpensesChart";
import DashboardSummary from "../app/components/DashboardSummary";
import BudgetForm from "../app/components/BudgetForm"; // Import new component
import BudgetVsActualChart from "../app/components/BudgetVsActualChart"; // Import new component
import SpendingInsights from "../app/components/SpendingInsights"; // Import new component

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment"];

export default function Page() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState(
    categories.reduce((acc, category) => {
      acc[category] = "";
      return acc;
    }, {})
  );

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-500">Personal Finance Dashboard</h1>
        <TransactionForm onSubmit={addTransaction} />
        <DashboardSummary transactions={transactions} />
        <BudgetForm categories={categories} onSetBudgets={setBudgets} />
        <BudgetVsActualChart budgets={budgets} transactions={transactions} />
        <SpendingInsights budgets={budgets} transactions={transactions} />
        <MonthlyExpenseChart transactions={transactions} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}