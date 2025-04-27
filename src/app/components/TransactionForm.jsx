"use client";
import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date || !description) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ amount, date, description });
    setAmount(0);
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;