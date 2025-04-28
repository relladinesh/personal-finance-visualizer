"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

const TransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("None");

  const categories = ["None", "Food", "Transport", "Shopping", "Bills", "Entertainment"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !date || !description || category === "None") {
      alert("All fields are required!");
      return;
    }

    // Call the onSubmit prop with the transaction details
    onSubmit({ amount: parseFloat(amount), date, description, category });

    // Clear all fields after submission
    setAmount("");
    setDate("");
    setDescription("");
    setCategory("None");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md">
      <div>
        <Label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </Label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </Label>
        <Input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </Label>
        <Select onValueChange={(value) => setCategory(value)} value={category}>
          <SelectTrigger id="category" className="mt-1">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Add Transaction
      </Button>
    </form>
  );
};

export default TransactionForm;