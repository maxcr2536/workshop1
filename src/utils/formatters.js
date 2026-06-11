// Utility functions สำหรับ formatting ข้อมูล

/**
 * Format ตัวเลขเป็น Currency แบบไทย (THB)
 * ตัวอย่าง: formatCurrency(180000) => "THB 180,000"
 */
export const formatCurrency = (amount) => {
  if (!amount) return "THB 0";
  return `THB ${amount.toLocaleString('en-US')}`;
};

/**
 * Format วันที่ด้วย format "8 Jun 2026"
 * ตัวอย่าง: formatDate("2026-06-08") => "8 Jun 2026"
 */
export const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Format วันที่เป็นรูปแบบ "Today", "Yesterday", หรือ "8 Jun 2026"
 */
export const formatDateRelative = (dateString) => {
  if (!dateString) return "-";
  
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const yesterdayOnly = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
  
  if (dateOnly.getTime() === todayOnly.getTime()) {
    return "Today";
  } else if (dateOnly.getTime() === yesterdayOnly.getTime()) {
    return "Yesterday";
  }
  
  return formatDate(dateString);
};

/**
 * Get color class ตามสถานะลูกค้า
 * ตัวอย่าง: getStatusColor("Active") => "bg-green-100 text-green-800"
 */
export const getStatusColor = (status) => {
  const statusColorMap = {
    "Active": "bg-green-100 text-green-800",
    "Credit Hold": "bg-orange-100 text-orange-800",
    "Suspended": "bg-red-100 text-red-800",
    "Inactive": "bg-gray-100 text-gray-800"
  };
  return statusColorMap[status] || "bg-gray-100 text-gray-800";
};

/**
 * Get color class ตาม Risk Level
 * ตัวอย่าง: getRiskColor("High") => "bg-red-100 text-red-800"
 */
export const getRiskColor = (risk) => {
  const riskColorMap = {
    "Low": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "High": "bg-red-100 text-red-800"
  };
  return riskColorMap[risk] || "bg-gray-100 text-gray-800";
};

/**
 * Get color class ตาม Payment Status
 */
export const getPaymentStatusColor = (status) => {
  const paymentColorMap = {
    "On Time": "bg-green-100 text-green-800",
    "Overdue": "bg-red-100 text-red-800",
    "Pending": "bg-blue-100 text-blue-800",
    "Partial Paid": "bg-yellow-100 text-yellow-800"
  };
  return paymentColorMap[status] || "bg-gray-100 text-gray-800";
};

/**
 * ทำให้ Customer Data สำหรับแสดงในตาราง
 * ตัวอย่าง: formatCustomerForTable(customer) => {...formatted data}
 */
export const formatCustomerForTable = (customer) => {
  return {
    ...customer,
    outstandingBalanceFormatted: formatCurrency(customer.outstandingBalance),
    lastTransactionDateFormatted: formatDate(customer.lastTransactionDate)
  };
};
