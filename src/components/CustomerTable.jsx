import { formatCurrency, formatDate } from '../utils/formatters';
import StatusBadge from './StatusBadge';

/**
 * CustomerTable Component
 * แสดง: ตารางลูกค้า กับ columns หลัก
 * ฟังก์ชัน: คลิกแถวเพื่อเลือก customer
 */
const CustomerTable = ({ customers, selectedCustomer, onSelectCustomer }) => {
  // ถ้าไม่มี customer data ให้แสดงข้อความ
  if (!customers || customers.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl shadow-lg p-8 text-center border border-slate-700">
        <p className="text-gray-400 text-lg">No customers found</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
      {/* Table wrapper กับ horizontal scroll บน tablet */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 border-b-2 border-slate-600">
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Group</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Owner</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-red-400">Balance</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Payment</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-red-400">Risk</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.customerCode}
                onClick={() => onSelectCustomer(customer)}
                className={`border-b border-slate-700 cursor-pointer transition ${
                  selectedCustomer?.customerCode === customer.customerCode
                    ? 'bg-red-900 bg-opacity-30 border-red-600'
                    : 'hover:bg-slate-700'
                }`}
              >
                <td className="px-6 py-3 text-sm font-medium text-white">{customer.customerCode}</td>
                <td className="px-6 py-3 text-sm text-gray-200">{customer.customerName}</td>
                <td className="px-6 py-3 text-sm text-gray-300">{customer.customerGroup}</td>
                <td className="px-6 py-3">
                  <StatusBadge value={customer.status} type="status" />
                </td>
                <td className="px-6 py-3 text-sm text-gray-200">{customer.marketingOwner}</td>
                <td className="px-6 py-3 text-sm text-right font-semibold text-red-400">
                  {formatCurrency(customer.outstandingBalance)}
                </td>
                <td className="px-6 py-3">
                  <StatusBadge value={customer.paymentStatus} type="payment" />
                </td>
                <td className="px-6 py-3">
                  <StatusBadge value={customer.riskLevel} type="risk" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer แสดงจำนวน rows */}
      <div className="bg-slate-900 px-6 py-3 text-sm text-gray-400 border-t border-slate-700">
        Showing {customers.length} customer{customers.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default CustomerTable;
