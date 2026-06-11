/**
 * KPI Card Component
 * แสดง: ตัวเลขสำคัญ (Key Performance Indicators)
 * ใช้ได้กับ: จำนวนลูกค้า, ยอดรวม, ฯลฯ
 */
const KpiCard = ({ title, value, icon: Icon, color = 'blue' }) => {
  const colorStyles = {
    blue: 'bg-slate-800 border-red-600 text-red-400',
    green: 'bg-slate-800 border-emerald-600 text-emerald-400',
    red: 'bg-slate-800 border-red-600 text-red-400',
    orange: 'bg-slate-800 border-orange-600 text-orange-400',
    purple: 'bg-slate-800 border-purple-600 text-purple-400',
  };

  return (
    <div className={`${colorStyles[color]} border rounded-lg p-6 flex items-center gap-4`}>
      {Icon && (
        <div className={`text-4xl ${color === 'blue' ? 'text-blue-600' : ''} ${color === 'green' ? 'text-green-600' : ''} ${color === 'red' ? 'text-red-600' : ''} ${color === 'orange' ? 'text-orange-600' : ''} ${color === 'purple' ? 'text-purple-600' : ''}`}>
          <Icon size={40} />
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm font-medium opacity-75">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default KpiCard;
