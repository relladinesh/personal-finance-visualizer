"use client";
import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold mb-4">Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div>
              <p className="text-gray-700">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div>
              <p className="text-gray-900 font-bold">${transaction.amount.toFixed(2)}</p>
              <button
                onClick={() => onDelete(transaction.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;