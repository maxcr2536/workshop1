# Customer Status Dashboard - Prototype

A React-based dashboard prototype for monitoring customer status and financial risk. Built with mock data only—perfect for demonstration and prototyping without backend dependencies.

## 🎯 Overview

This is a **prototype dashboard** designed for Marketing teams and team leads to get a quick overview of customer statuses and financial risk at a glance. The entire application uses mock data, making it ideal for rapid development and demonstration purposes.

**⚠️ Important:** This is a prototype using simulated data only. No real customer data, no API connections, and no database integration.

## ✨ Features

- ✅ **Dashboard Header** - Title, description, and last update date
- ✅ **KPI Cards** - Total Customers, Active Customers, Outstanding Balance, High Risk Customers
- ✅ **Search & Filter** - Search by customer code/name, filter by status and risk level (AND logic)
- ✅ **Customer Table** - 8 columns with clickable rows for selection
- ✅ **Detail Card** - Shows selected customer information with financial details
- ✅ **Analytics Charts** - Bar charts showing customer distribution by status and risk level
- ✅ **Responsive Design** - Works on desktop and tablet
- ✅ **Dark Theme** - Modern dark UI with red/burgundy accents (inspired by Flight Search design)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd d:\WorkSpace\Traning\AI\ExampleCode
npm install
```

### Development Server

```bash
npm run dev
```

The app will start at: **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx                          # Main app component with filter logic
├── main.jsx                         # React entry point
├── index.css                        # Tailwind CSS setup
├── data/
│   └── mockCustomers.js            # 15 mock customer records
├── components/
│   ├── Header.jsx                  # Dashboard header
│   ├── KpiCard.jsx                 # KPI display cards
│   ├── FilterBar.jsx               # Search & filter controls
│   ├── CustomerTable.jsx           # Customer list table
│   ├── CustomerDetailCard.jsx      # Selected customer details
│   ├── ChartSection.jsx            # Analytics charts (Recharts)
│   └── StatusBadge.jsx             # Status badge component
└── utils/
    └── formatters.js               # Currency & date formatting utilities
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Styling
- **Recharts 2** - Charts & data visualization
- **PostCSS & Autoprefixer** - CSS processing

## 📊 Mock Data Structure

Each customer object contains:

```javascript
{
  customerCode: "CUST-001",
  customerName: "Alpha Retail Co.",
  customerGroup: "Retail",
  status: "Active", // Active, Credit Hold, Suspended, Inactive
  marketingOwner: "Narin",
  supervisor: "Suda",
  creditLimit: 500000,
  availableCredit: 320000,
  outstandingBalance: 180000,
  monthlyUsage: 75000,
  lastTransactionDate: "2026-06-08",
  paymentStatus: "On Time", // On Time, Overdue, Pending, Partial Paid
  riskLevel: "Low", // Low, Medium, High
  remark: "Stable monthly usage"
}
```

## 🎨 Color Scheme & Styling

- **Header**: Red/Burgundy gradient
- **Background**: Dark slate (slate-900)
- **Cards**: Dark slate (slate-800)
- **Accents**: Red (risk, highlights, buttons)
- **Text**: White/Light gray for dark theme
- **Status Colors**:
  - Active = Green
  - Credit Hold = Orange
  - Suspended = Red
  - Inactive = Gray

## 🔍 Key Features in Detail

### Filter Logic (AND Logic)
- Search filters by customer code OR name
- Status filter narrows by status value
- Risk level filter narrows by risk level
- All filters work together using **AND logic** (all conditions must match)

Example: Search "CUST" + Status "Active" + Risk "High" = Shows only active customers with "CUST" code AND high risk

### KPI Calculations
KPIs are calculated from **filtered data only**:
- **Total Customers**: Count of filtered customers
- **Active Customers**: Count where status = "Active"
- **Outstanding Balance**: Sum of all outstanding balances
- **High Risk Customers**: Count where riskLevel = "High"

### Default Behavior
- First customer in filtered list is automatically selected
- If selected customer is filtered out, selection resets to first customer
- If no results found, table shows "No customers found" message

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout (not primary focus)
- **Tablet**: 2-3 columns with horizontal table scroll
- **Desktop**: Full layout with 3-column detail card section

## 🧪 Testing Checklist

- [ ] Dashboard loads without errors
- [ ] KPI cards show correct totals
- [ ] Search by customer code works
- [ ] Search by customer name works
- [ ] Filter by status works
- [ ] Filter by risk level works
- [ ] Search + filters work together
- [ ] Clicking table row updates detail card
- [ ] Charts display correctly
- [ ] Layout works on tablet
- [ ] No console errors

## 📝 Demo Steps

1. Open dashboard at http://localhost:5173/
2. Show Header with last update date
3. Explain KPI cards (Total, Active, Balance, High Risk)
4. Search for a customer code (e.g., "CUST-003")
5. Filter by Status = "Active"
6. Filter by Risk Level = "High"
7. Combine search + filters to show results
8. Click a customer row to see detail card
9. Show Financial Information section
10. Scroll down to see Charts section
11. Mention prototype uses mock data only

## ⚠️ Limitations & Scope

**What's NOT included:**
- ❌ No login/authentication
- ❌ No backend API
- ❌ No database
- ❌ No real customer data
- ❌ No edit/add/delete functionality
- ❌ No permission/role management
- ❌ No data export
- ❌ No real-time updates

## 🔄 Next Steps for Production

To convert this prototype to a production app:
1. Replace mock data with real API calls
2. Add authentication/login system
3. Connect to backend database
4. Add edit/add/delete customer operations
5. Implement role-based access control
6. Add data export functionality
7. Add pagination for large datasets
8. Implement real-time data updates

## 📄 Format Standards

- **Currency**: THB 180,000 (Thai Baht with comma separator)
- **Dates**: 8 Jun 2026 (abbreviated month, no leading zeros)

## 🐛 Known Issues

None at this time. Prototype is stable.

## 💡 Tips for Beginners

- Check `src/App.jsx` to understand main filter logic
- Review `src/utils/formatters.js` for formatting functions
- Look at `src/components/*.jsx` to see component structure
- Comments in code explain key logic points
- All data flows through state management in App.jsx

## 📞 Support

For questions about this prototype, refer to AGENTS.md for scope and constraints.

---

**Created**: 2026-06-11  
**Version**: 1.0.0 (Prototype)  
**Status**: ✅ Ready for demonstration
