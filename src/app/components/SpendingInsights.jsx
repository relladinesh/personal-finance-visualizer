"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SpendingInsights = ({ budgets, transactions }) => {
  const categories = Object.keys(budgets);

  const totalSpent = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const largestSpendingCategory = categories.reduce(
    (max, category) => {
      const total = transactions
        .filter((transaction) => transaction.category === category)
        .reduce((sum, transaction) => sum + transaction.amount, 0);
      return total > max.amount ? { category, amount: total } : max;
    },
    { category: null, amount: 0 }
  );
  const overBudgetCategories = categories.filter((category) => {
    const total = transactions
      .filter((transaction) => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    return total > (parseFloat(budgets[category]) || 0);
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Total Spent:</strong> ${totalSpent.toFixed(2)}</p>
        <p><strong>Largest Spending Category:</strong> {largestSpendingCategory.category || "None"} (${largestSpendingCategory.amount.toFixed(2)})</p>
        <p><strong>Over Budget Categories:</strong> {overBudgetCategories.length > 0 ? overBudgetCategories.join(", ") : "None"}</p>
      </CardContent>
    </Card>
  );
};

export default SpendingInsights;