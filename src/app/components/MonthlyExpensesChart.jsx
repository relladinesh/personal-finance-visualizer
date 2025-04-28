"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js"; // Import Chart.js and registerables
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Add button for toggling

// Register Chart.js components
Chart.register(...registerables);

const MonthlyExpenseChart = ({ transactions }) => {
  const chartRef = useRef(null);
  const [chartType, setChartType] = useState("pie"); // State to toggle between pie and bar charts

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Data preparation
      const categories = [...new Set(transactions.map((transaction) => transaction.category))];
      const categoryTotals = categories.map((category) =>
        transactions
          .filter((transaction) => transaction.category === category)
          .reduce((sum, transaction) => sum + transaction.amount, 0)
      );

      // Destroy existing chart instance to avoid duplication
      if (Chart.getChart(chartRef.current)) {
        Chart.getChart(chartRef.current).destroy();
      }

      // Create new Chart.js instance
      new Chart(ctx, {
        type: chartType, // Toggle between "pie" and "bar"
        data: {
          labels: categories,
          datasets: [
            {
              label: chartType === "bar" ? "Category Totals" : undefined,
              data: categoryTotals,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: chartType === "bar" ? { y: { beginAtZero: true } } : undefined, // Add scales for bar chart
        },
      });
    }
  }, [transactions, chartType]); // Re-run effect when chartType changes

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span>Toggle Chart Type:</span>
          <Button onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}>
            Switch to {chartType === "pie" ? "Bar Chart" : "Pie Chart"}
          </Button>
        </div>
        <canvas ref={chartRef}></canvas>
      </CardContent>
    </Card>
  );
};

export default MonthlyExpenseChart;