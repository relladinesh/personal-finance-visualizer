"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const MonthlyExpensesChart = ({ data }) => {
  return (
    <div className="bg-white rounded shadow p-4 mt-4">
      <h2 className="text-lg font-bold mb-4">Monthly Expenses</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MonthlyExpensesChart;