"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardSummary = ({ transactions }) => {
  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);
  const mostRecentTransaction = transactions.length
    ? transactions[transactions.length - 1].date
    : "No transactions";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{mostRecentTransaction}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{[...new Set(transactions.map((t) => t.category))].length}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;