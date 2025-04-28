"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BudgetForm = ({ categories, onSetBudgets }) => {
  const [budgets, setBudgets] = useState(
    categories.reduce((acc, category) => {
      acc[category] = "";
      return acc;
    }, {})
  );

  const handleBudgetChange = (category, value) => {
    setBudgets((prevBudgets) => ({
      ...prevBudgets,
      [category]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetBudgets(budgets);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Set Monthly Budgets</h2>
      {categories.map((category) => (
        <div key={category} className="space-y-2">
          <Label htmlFor={`budget-${category}`} className="block text-sm font-medium text-gray-700">
            {category} Budget
          </Label>
          <Input
            id={`budget-${category}`}
            type="number"
            placeholder={`Enter budget for ${category}`}
            value={budgets[category]}
            onChange={(e) => handleBudgetChange(category, e.target.value)}
            className="mt-1"
            min="0"
          />
        </div>
      ))}
      <Button type="submit" className="w-full">
        Save Budgets
      </Button>
    </form>
  );
};

export default BudgetForm;