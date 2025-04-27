# Personal Finance Visualizer

**Personal Finance Visualizer** is a web application built with Next.js 13, React, and Tailwind CSS. It allows users to track their expenses, view transaction history, and visualize monthly spending using charts.

---

## Features

- **Add Transactions**: Input details like amount, date, and description of transactions.
- **Transaction List**: View all past transactions in an organized list.
- **Monthly Expenses Chart**: Visualize monthly spending with an interactive bar chart using Recharts.
- **Responsive Design**: Optimized for various devices using Tailwind CSS.
- **API Integration**: Backend APIs to handle transactions and data storage.

---

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Charting**: Recharts
- **Database**: MongoDB (or any database of your choice)
- **Deployment**: Vercel

---

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js (>=16.x)
- npm or yarn
- MongoDB database (optional for full functionality)

### Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env.local` file in the root of your project and add the following:
```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
NEXT_PUBLIC_API_KEY=your_api_key
```

Replace `<username>`, `<password>`, and `<database>` with your MongoDB credentials, or skip this step if you're not using a database.

### Run the Development Server
```bash
npm run dev
```

Visit the app at `http://localhost:3000`.

---

## Running the Application

Once the development server is running:
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the web interface to:
   - Add new transactions (amount, date, and description).
   - View a list of all transactions.
   - Visualize your monthly expenses in a chart.

---

## Deployment

This project is deployed on **Vercel**. To deploy your own version:

### Steps to Deploy on Vercel
1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [Vercel](https://vercel.com/) and import your GitHub repository.

3. Set environment variables in Vercel under "Settings > Environment Variables".

4. Deploy your application. Vercel will provide a live URL.

---

## File Structure

```plaintext
personal-finance-visualizer/
├── .next/               # Next.js build output
├── node_modules/        # Installed npm packages
├── public/              # Public assets (e.g., favicon)
├── src/
│   ├── app/
│   │   ├── components/  # Reusable React components
│   │   │   ├── MonthlyExpensesChart.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── pages/       # App pages and API routes
│   │   │   ├── api/
│   │   │   │   ├── index.jsx
│   │   │   │   └── transactions.js
│   │   │   └── index.jsx
│   │   ├── utils/       # Utility functions
│   │   │   ├── db.js
│   │   │   └── types.js
│   │   ├── layout.js    # Global layout
│   │   └── page.js      # Root page for `/`
├── .gitignore           # Files and folders to ignore in Git
├── jsconfig.json        # JavaScript path aliases
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # Tailwind CSS configuration
├── README.md            # Project documentation (this file)
```

---

## Usage

- **Add Transactions**: Use the form to input a transaction with amount, date, and description.
- **View Transactions**: All transactions will appear in a list below the form.
- **Visualize Expenses**: View monthly spending trends in the bar chart.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your fork and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)