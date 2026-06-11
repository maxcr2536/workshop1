# AGENTS.md - Project Scope & Constraints

This document defines the scope, constraints, and guidelines for the Customer Status Dashboard prototype project.

## 📋 Project Overview

**Project Name**: Customer Status Dashboard Prototype  
**Purpose**: Create a quick dashboard prototype for Marketing teams to monitor customer status and financial risk  
**Target Users**: Marketing teams, team leads, management  
**Technology**: React + Tailwind CSS + Recharts  
**Data**: Mock data only (no backend/database)

## ✅ In Scope

### Core Features
- Single-page dashboard with no navigation between pages
- Customer data display in table format
- Customer detail card with financial information
- Search functionality (customer code + name)
- Filter functionality (status + risk level)
- KPI cards showing aggregate metrics
- Analytics charts (Recharts) for data visualization
- Responsive design for desktop and tablet
- Dark theme with red/burgundy accents

### Components
- Header (title + description + date)
- KPI Cards (4 cards: Total, Active, Balance, High Risk)
- Filter Bar (search + 2 dropdowns + reset button)
- Customer Table (8 columns: code, name, group, status, owner, balance, payment, risk)
- Customer Detail Card (financial info, payment status, risk level, remark)
- Chart Section (2 bar charts: by status, by risk level)
- Status Badge (colored badges for status/risk/payment)

### Data
- 10-15 mock customers per plan
- Fields: customerCode, customerName, customerGroup, status, marketingOwner, supervisor, creditLimit, availableCredit, outstandingBalance, monthlyUsage, lastTransactionDate, paymentStatus, riskLevel, remark
- Status values: Active, Credit Hold, Suspended, Inactive
- Risk levels: Low, Medium, High
- Payment status: On Time, Overdue, Pending, Partial Paid

### Formatting
- Currency: THB 180,000 format
- Dates: 8 Jun 2026 format
- AND logic for filter combinations

## ❌ Out of Scope

### Not Included
- Login/authentication system
- Backend API/server
- Database integration
- Real customer data (mock only)
- Edit/add/delete customer operations
- Permission/role-based access control
- Data export functionality
- Pagination (small mock dataset)
- Real-time data updates
- Email notifications
- User management
- Multi-language support
- Advanced charting (pie charts, line charts, etc.)
- Drill-down analytics
- Custom date range filtering

### No External Dependencies
- No third-party authentication (OAuth, etc.)
- No real airline data
- No payment processing
- No external APIs
- No CRM integrations
- No real customer identifiers

## 🎨 Design Constraints

### Theme
- Dark theme (slate-900 background)
- Red/burgundy accents
- White text on dark background
- Rounded corners (rounded-xl)
- Inspired by Flight Search design

### Colors
- Status Active: Green
- Status Credit Hold: Orange
- Status Suspended: Red
- Status Inactive: Gray
- Risk Level Low: Green
- Risk Level Medium: Yellow/Orange
- Risk Level High: Red
- Header: Red gradient

### Breakpoints
- Primary: Desktop (1024px+)
- Secondary: Tablet (768px-1023px)
- Mobile: 640px+ (secondary support)

## 📊 Filter Logic

### Requirements
- Search filters by customerCode OR customerName (case-insensitive)
- Status filter narrows results to selected status
- Risk level filter narrows results to selected risk level
- **AND Logic**: All active filters must match (search AND status AND risk)
- Reset button clears all filters

### Edge Cases
- No results: Show "No customers found" message
- Filter removes selected customer: Auto-select first from filtered list
- First load: Auto-select first customer

## 🧮 KPI Calculations

All KPIs calculated from **filtered data** only:
- **Total Customers**: Count of filtered customers
- **Active Customers**: Count where status = "Active"
- **Total Outstanding Balance**: Sum of outstandingBalance
- **High Risk Customers**: Count where riskLevel = "High"

## 📱 Responsive Requirements

### Desktop (1024px+)
- 4 KPI cards in row
- 3-column layout: Table (2 cols) + Detail Card (1 col)
- Full-width charts

### Tablet (768px-1023px)
- 2 KPI cards per row
- Horizontal scroll on table
- Detail card stacks below table
- Charts full width

### Mobile (640px+)
- 1 KPI card per row
- Single column layout
- Optional support

## 🧪 Testing Scope

### Must Test
- [x] Dashboard renders without errors
- [x] KPI values are correct
- [x] Search works with code and name
- [x] Filters work individually
- [x] Filters work together (AND logic)
- [x] Table row selection updates detail card
- [x] Charts display data correctly
- [x] No API calls or database connections
- [x] Mock data only

### Should Test
- [ ] Responsive on tablet
- [ ] No console errors
- [ ] Filter reset works
- [ ] Empty search results handling
- [ ] All status types display correctly

## 📝 Code Standards

### File Organization
```
src/
├── App.jsx (main logic)
├── main.jsx (entry point)
├── index.css (styles)
├── components/ (7 React components)
├── data/ (mock data)
└── utils/ (formatters)
```

### Comments Required
- Component purpose at top
- Complex logic explanation
- Props documentation
- Filter logic explanation

### Naming Conventions
- Components: PascalCase (Header.jsx)
- Functions: camelCase (formatCurrency)
- Variables: camelCase (selectedCustomer)
- Constants: UPPER_CASE (if any)

## 🚫 Restrictions

### Must NOT
- Use real customer data
- Make API calls to external services
- Store data in database
- Include authentication logic
- Include payment processing
- Use real airline information
- Hardcode sensitive data
- Create user accounts
- Store user preferences
- Implement role permissions

### Should NOT
- Add features outside scope
- Create new pages/navigation
- Use state management libraries (Redux/Zustand)
- Add complex animations
- Create custom charts from scratch (use Recharts)

## ✍️ Commit Message Format

When pushing to GitHub:
```
feat: Add [feature name]
fix: Fix [issue name]
style: Update theme/styling
docs: Update documentation
refactor: Improve [component name]
```

Example:
```
feat: Add dark theme with red accents
fix: Fix filter AND logic
docs: Update README with demo steps
```

## 🔄 Version Control

### Branches
- `main` - Production/demo ready
- `develop` - Development branch
- `feature/*` - Feature branches

### Before Pushing
- [ ] No console errors
- [ ] All filters work
- [ ] Responsive tested
- [ ] Mock data verified
- [ ] Comments clear

## 📚 Documentation Requirements

### Files to Create
- [x] README.md - Setup & features guide
- [x] AGENTS.md - This file (scope & constraints)
- [x] .gitignore - Node modules & build files
- [x] package.json - Dependencies

### Files NOT Needed
- No .env files (no secrets)
- No API documentation (no API)
- No Database schema (no database)
- No User guide (mock data only)

## 🎯 Success Criteria

✅ Prototype is successful if:
1. Dashboard displays without errors
2. All filter combinations work correctly
3. KPI calculations are accurate
4. No real data or API calls present
5. Responsive on desktop and tablet
6. Dark theme applied consistently
7. Mock data clearly marked
8. README and AGENTS.md complete
9. Code is readable with comments
10. Ready for demonstration

## ⚠️ Deployment Constraints

### For Demo
- Run locally with `npm run dev`
- No deployment to production
- No user authentication needed
- No data persistence

### If Extending to Production
- Add API layer
- Implement authentication
- Connect to database
- Add real customer data
- Implement access controls
- Add data validation
- Set up error handling
- Add logging

## 📞 Contact & Questions

For questions about scope:
- Check this AGENTS.md file
- Review README.md for features
- Check component comments in code
- Review mockCustomers.js for data structure

---

**Last Updated**: 2026-06-11  
**Version**: 1.0.0  
**Status**: Final (Scope Locked)
