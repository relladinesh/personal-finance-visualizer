"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Register Chart.js components
Chart.register(...registerables);

const BudgetVsActualChart = ({ budgets, transactions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Prepare data for chart
      const categories = Object.keys(budgets);
      const actuals = categories.map((category) =>
        transactions
          .filter((transaction) => transaction.category === category)
          .reduce((sum, transaction) => sum + transaction.amount, 0)
      );
      const budgetValues = categories.map((category) => parseFloat(budgets[category]) || 0);

      // Destroy existing chart instance
      if (Chart.getChart(chartRef.current)) {
        Chart.getChart(chartRef.current).destroy();
      }

      // Create new chart instance
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: categories,
          datasets: [
            {
              label: "Actual Spending",
              data: actuals,
              backgroundColor: "#36A2EB",
            },
            {
              label: "Budget",
              data: budgetValues,
              backgroundColor: "#FF6384",
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
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [budgets, transactions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget vs Actual</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas ref={chartRef}></canvas>
      </CardContent>
    </Card>
  );
};

export default BudgetVsActualChart;