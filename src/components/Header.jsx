import { formatDate } from '../utils/formatters';

/**
 * Header Component
 * แสดง: ชื่อ Dashboard, คำอธิบาย, และวันที่อัปเดตล่าสุด
 */
const Header = ({ lastUpdated = new Date().toISOString().split('T')[0] }) => {
  return (
    <div className="bg-gradient-to-r from-red-700 to-red-900 text-white px-6 py-8 mb-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">Customer Status Dashboard</h1>
          <p className="text-red-100 text-lg">
            Prototype dashboard for monitoring customer status and financial risk
          </p>
        </div>
        <div className="text-right">
          <p className="text-red-100 text-sm">Last Updated</p>
          <p className="text-white text-lg font-semibold">{formatDate(lastUpdated)}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
