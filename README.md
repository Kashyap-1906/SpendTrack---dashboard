# SpendTrack – Finance Dashboard

FinSight is a modern finance dashboard built using **React + Vite** that allows users to track transactions, analyze spending patterns, and visualize financial data using charts.

This project was built as part of the **Frontend Developer Intern assignment for Zorvyn**.

---

## Live Demo

Deployed on Vercel:

spend-track-dashboard.vercel.app


---

## GitHub Repository

https://github.com/Kashyap-1906/SpendTrack---dashboard

---

# Features

## Dashboard Overview

* Financial summary cards (Total Balance, Income, Expenses)
* Spending charts
* Latest transactions preview
* Dynamic insights based on spending patterns

## Transactions Section

* View all transactions
* Search transactions
* Category icons (🍔 Food, 🛒 Shopping, 🚕 Transport)
* Admin can add new transactions

## Role Based UI

* Viewer → View only
* Admin → Can add transactions

## Insights

Automatically detects:

* Highest spending category
* Total amount spent
* Spending observations

Insights update **automatically when new transactions are added.**

## Charts

* Pie chart → Spending breakdown
* Bar chart → Spending by category

Charts update dynamically when transactions change.

## Responsive UI

* Works on desktop
* Mobile responsive navigation
* Clean dashboard layout

---

# Tech Stack

* React
* Vite
* Recharts
* JavaScript
* CSS

---

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/SpendTrack---dashboard.git
```

Go into project folder

```bash
cd SpendTrack---dashboard
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# Project Structure

```
src
 ├── components
 │   ├── Charts.jsx
 │   ├── Insights.jsx
 │   ├── TransactionTable.jsx
 │
 ├── pages
 │   ├── Dashboard.jsx
 │
 ├── data
 │   ├── transactions.js
 │
 ├── assets
 │   ├── profile.png
```

---

# Author

**Ivaturi N S Venkata Ramana Kashyap**
