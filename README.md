# Personal Finance Dashboard

A **Personal Finance Dashboard** built with **Next.js** to help users track expenses, set monthly budgets, compare spending with budgets, and gain insights into their financial habits. This project is modular and scalable, making it easy to extend and customize.

---

## Features

### 1. **Transaction Management**
- Add, delete, and list financial transactions.
- Track transactions with details like amount, date, description, and category.

### 2. **Monthly Expense Breakdown**
- Visualize expenses categorized by type (Food, Transport, Shopping, etc.).
- **Pie Chart** and **Bar Chart** comparison for better clarity.

### 3. **Monthly Category Budgets**
- Set a budget for each spending category.
- Budgets can be updated monthly to adapt to changing financial goals.

### 4. **Budget vs Actual Comparison**
- Compare actual spending with set budgets using a **bar chart**.
- Identify areas where spending exceeds the budget.

### 5. **Spending Insights**
- Get simple insights into your spending patterns:
  - Largest spending category.
  - Categories exceeding the budget.
  - Remaining budget for the month.
  - Total spending summary.

---

## Components Overview

### `TransactionForm`
- A form to add new transactions with fields for:
  - Amount
  - Date
  - Description
  - Category

### `TransactionList`
- A list displaying all transactions.
- Includes a delete option for removing transactions.

### `MonthlyExpenseChart`
- A visual representation of expenses using **Pie Chart** and **Bar Chart**.
- Toggle between chart types.

### `DashboardSummary`
- Provides a quick summary of all transactions:
  - Total income
  - Total expenditure
  - Net balance

### `BudgetForm`
- Allows users to set or update monthly budgets for each category.
- Budgets are stored and used for comparisons.

### `BudgetVsActualChart`
- Displays a **bar chart** to compare actual spending vs. budgets for each category.

### `SpendingInsights`
- Highlights key spending patterns:
  - Largest spending category
  - Categories exceeding budgets
  - Total spending for the month

---

## File Structure

```plaintext
nextdemo/
├── .next/                   # Next.js build output (generated)
├── node_modules/            # Node.js dependencies (generated)
├── public/                  # Static files like images, fonts, etc.
├── src/
│   ├── app/
│   │   ├── components/      # Reusable React components
│   │   │   ├── BudgetForm.jsx
│   │   │   ├── BudgetVsActualChart.jsx
│   │   │   ├── SpendingInsights.jsx
│   │   │   ├── DashboardSummary.jsx
│   │   │   ├── MonthlyExpenseChart.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── TransactionList.jsx
│   │   ├── pages/           # Page components (Next.js routing)
│   │   │   ├── page.js      # Main dashboard page
│   ├── utils/               # Utility files (if any)
├── globals.css              # Global CSS for styling
├── jsconfig.json            # JavaScript configuration for path aliases
├── layout.js                # Layout component for the app
├── next.config.mjs          # Next.js configuration file
├── package.json             # Project dependencies and scripts
├── README.md                # Documentation for the project
```

---

## How to Use

### 1. **Clone the Repository**
```bash
git clone https://github.com/<your-username>/personal-finance-dashboard.git
cd personal-finance-dashboard
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Run the Development Server**
```bash
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### 4. **Build for Production**
```bash
npm run build
```

### 5. **Start the Production Server**
```bash
npm start
```

---

## Future Enhancements
- Add support for recurring transactions.
- Integration with external APIs for real-time currency exchange rates.
- Export transaction data as CSV or Excel.
- Dark mode toggle for better user experience.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Questions or Feedback?
Feel free to reach out by opening an issue or submitting a pull request!