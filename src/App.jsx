import { useState, useMemo } from 'react';
import { mockCustomers } from './data/mockCustomers';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import KpiCard from './components/KpiCard';
import CustomerTable from './components/CustomerTable';
import CustomerDetailCard from './components/CustomerDetailCard';
import ChartSection from './components/ChartSection';
import { formatCurrency } from './utils/formatters';

/**
 * App Component - Main Application
 * 
 * ข้อมูล state:
 * - selectedCustomer: customer ที่ถูกเลือก (default = customer แรก)
 * - searchTerm: keyword ที่ search
 * - selectedStatus: filter ตาม status
 * - selectedRiskLevel: filter ตาม risk level
 * 
 * Logic:
 * - ใช้ useMemo เพื่อ filter ข้อมูล ด้วย AND logic
 * - คำนวณ KPI จากข้อมูล filtered
 * - เลือก customer แรกจากตาราง ถ้า current selected customer ไม่อยู่ในตาราง
 */
function App() {
  // State ของ component
  const [selectedCustomer, setSelectedCustomer] = useState(mockCustomers[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('');

  // ฟังก์ชัน Filter กับ Search (AND logic)
  // ข้อมูลต้องตรงกับทั้ง search, status filter, และ riskLevel filter
  const filteredCustomers = useMemo(() => {
    return mockCustomers.filter((customer) => {
      // Filter 1: Search - ค้นหาจาก customerCode หรือ customerName
      const searchMatch =
        searchTerm === '' ||
        customer.customerCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.customerName.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter 2: Status - ถ้าเลือก status มา ต้องตรงกัน
      const statusMatch = selectedStatus === '' || customer.status === selectedStatus;

      // Filter 3: Risk Level - ถ้าเลือก risk level มา ต้องตรงกัน
      const riskMatch = selectedRiskLevel === '' || customer.riskLevel === selectedRiskLevel;

      // AND Logic: ต้องตรงกับทั้ง 3 เงื่อนไข
      return searchMatch && statusMatch && riskMatch;
    });
  }, [searchTerm, selectedStatus, selectedRiskLevel]);

  // ถ้า selected customer ไม่อยู่ใน filtered results
  // ให้เลือก customer แรกจาก filtered results แทน
  useMemo(() => {
    if (
      selectedCustomer &&
      !filteredCustomers.find((c) => c.customerCode === selectedCustomer.customerCode)
    ) {
      if (filteredCustomers.length > 0) {
        setSelectedCustomer(filteredCustomers[0]);
      }
    }
  }, [filteredCustomers, selectedCustomer]);

  // ฟังก์ชันคำนวณ KPI จากข้อมูล filtered
  const calculateKPIs = () => {
    const totalCustomers = filteredCustomers.length;
    const activeCustomers = filteredCustomers.filter((c) => c.status === 'Active').length;
    const totalOutstandingBalance = filteredCustomers.reduce((sum, c) => sum + c.outstandingBalance, 0);
    const highRiskCustomers = filteredCustomers.filter((c) => c.riskLevel === 'High').length;

    return {
      totalCustomers,
      activeCustomers,
      totalOutstandingBalance,
      highRiskCustomers,
    };
  };

  const kpis = calculateKPIs();

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header lastUpdated="2026-06-11" />

        {/* KPI Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard
            title="Total Customers"
            value={kpis.totalCustomers}
            color="red"
          />
          <KpiCard
            title="Active Customers"
            value={kpis.activeCustomers}
            color="green"
          />
          <KpiCard
            title="Outstanding Balance"
            value={formatCurrency(kpis.totalOutstandingBalance)}
            color="orange"
          />
          <KpiCard
            title="High Risk Customers"
            value={kpis.highRiskCustomers}
            color="red"
          />
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedRiskLevel={selectedRiskLevel}
          onRiskLevelChange={setSelectedRiskLevel}
        />

        {/* Main Content: Table and Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Customer Table - Wider on left */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Customer List</h2>
            <CustomerTable
              customers={filteredCustomers}
              selectedCustomer={selectedCustomer}
              onSelectCustomer={setSelectedCustomer}
            />
          </div>

          {/* Customer Detail Card - Smaller on right */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Customer Details</h2>
            <CustomerDetailCard customer={selectedCustomer} />
          </div>
        </div>

        {/* Chart Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
          <ChartSection customers={filteredCustomers} />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            This is a prototype dashboard with mock data only.
            <br />
            No real customer data, no API connections, no database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
