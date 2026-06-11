import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * ChartSection Component
 * แสดง: 2 Bar Charts
 * - Chart 1: จำนวนลูกค้า ตาม Status
 * - Chart 2: จำนวนลูกค้า ตาม Risk Level
 */
const ChartSection = ({ customers }) => {
  // คำนวณข้อมูล Chart 1: Status Distribution
  const statusCounts = {};
  customers.forEach((c) => {
    statusCounts[c.status] = (statusCounts[c.status] || 0) + 1;
  });

  const statusData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    count: count,
  }));

  // คำนวณข้อมูล Chart 2: Risk Level Distribution
  const riskCounts = {};
  customers.forEach((c) => {
    riskCounts[c.riskLevel] = (riskCounts[c.riskLevel] || 0) + 1;
  });

  const riskData = Object.entries(riskCounts).map(([risk, count]) => ({
    name: risk,
    count: count,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart 1: Status Distribution */}
      <div className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-4">Customers by Status</h3>
        {statusData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={statusData}
              margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fill: '#d1d5db' }}
              />
              <YAxis tick={{ fill: '#d1d5db' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
              <Bar dataKey="count" fill="#ef4444" name="Number of Customers" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>

      {/* Chart 2: Risk Level Distribution */}
      <div className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-4">Customers by Risk Level</h3>
        {riskData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={riskData}
              margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="name" tick={{ fill: '#d1d5db' }} />
              <YAxis tick={{ fill: '#d1d5db' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
              <Bar
                dataKey="count"
                fill="#10b981"
                name="Number of Customers"
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default ChartSection;
