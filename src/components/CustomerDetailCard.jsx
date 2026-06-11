import { formatCurrency, formatDate } from '../utils/formatters';
import StatusBadge from './StatusBadge';

/**
 * CustomerDetailCard Component
 * แสดง: รายละเอียด customer ที่ถูกเลือก
 */
const CustomerDetailCard = ({ customer }) => {
  // ถ้าไม่มี customer ให้แสดงข้อความ
  if (!customer) {
    return (
      <div className="bg-slate-800 rounded-xl shadow-lg p-8 text-center border border-slate-700">
        <p className="text-gray-400 text-lg">No customer selected</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700">
      {/* Header ของ Card */}
      <div className="border-b-2 border-slate-600 pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{customer.customerName}</h2>
            <p className="text-gray-400">Code: {customer.customerCode}</p>
          </div>
          <StatusBadge value={customer.status} type="status" />
        </div>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-300">Group</label>
            <p className="text-lg text-white">{customer.customerGroup}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">Marketing Owner</label>
            <p className="text-lg text-white">{customer.marketingOwner}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">Supervisor</label>
            <p className="text-lg text-white">{customer.supervisor}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">Payment Status</label>
            <StatusBadge value={customer.paymentStatus} type="payment" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-300">Risk Level</label>
            <StatusBadge value={customer.riskLevel} type="risk" />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">Last Transaction</label>
            <p className="text-lg text-white">{formatDate(customer.lastTransactionDate)}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">Monthly Usage</label>
            <p className="text-lg text-white">{formatCurrency(customer.monthlyUsage)}</p>
          </div>
        </div>
      </div>

      {/* Financial Info */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-6 mb-6 border border-red-700">
        <h3 className="text-lg font-bold text-white mb-4">Financial Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-semibold text-red-200">Credit Limit</label>
            <p className="text-2xl font-bold text-red-300">{formatCurrency(customer.creditLimit)}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-red-200">Available Credit</label>
            <p className="text-2xl font-bold text-emerald-300">{formatCurrency(customer.availableCredit)}</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-red-200">Outstanding Balance</label>
            <p className="text-2xl font-bold text-orange-300">{formatCurrency(customer.outstandingBalance)}</p>
          </div>
        </div>
      </div>

      {/* Remark */}
      <div>
        <label className="text-sm font-semibold text-gray-300">Remark</label>
        <p className="text-gray-200 bg-slate-700 p-3 rounded-lg mt-2">{customer.remark}</p>
      </div>
    </div>
  );
};

export default CustomerDetailCard;
