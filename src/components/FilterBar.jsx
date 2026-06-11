/**
 * FilterBar Component
 * แสดง: Search input, Status filter dropdown, RiskLevel filter dropdown
 * Logic: ฟังก์ชัน filter จะ combine ทั้ง search และ filter dropdowns ด้วย AND logic
 */
import { useState } from 'react';
import Butterfly from './Butterfly';

const FilterBar = ({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedRiskLevel,
  onRiskLevelChange,
}) => {
  const [butterflies, setButterflies] = useState([]);

  const handleReset = (e) => {
    // รับพิกัดของเมาส์
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // สร้าง butterflies 8 ตัว
    const newButterflies = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      startX: mouseX,
      startY: mouseY,
      delay: i * 0.1, // 0.1s ช่วง เพื่อให้ slow motion effect
    }));

    setButterflies(prev => [...prev, ...newButterflies]);

    // ลบ butterflies หลังจาก 4 วินาที
    setTimeout(() => {
      setButterflies(prev => prev.filter(b => !newButterflies.find(nb => nb.id === b.id)));
    }, 4000);

    // Reset filters
    onSearchChange('');
    onStatusChange('');
    onRiskLevelChange('');
  };
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-6 border border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Search by Code or Name
          </label>
          <input
            type="text"
            placeholder="e.g., CUST-001 or Alpha"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Credit Hold">Credit Hold</option>
            <option value="Suspended">Suspended</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Risk Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Risk Level
          </label>
          <select
            value={selectedRiskLevel}
            onChange={(e) => onRiskLevelChange(e.target.value)}
            className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          >
            <option value="">All Risk</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Butterflies */}
      {butterflies.map(butterfly => (
        <Butterfly
          key={butterfly.id}
          id={butterfly.id}
          startX={butterfly.startX}
          startY={butterfly.startY}
          delay={butterfly.delay}
        />
      ))}
    </div>
  );
};

export default FilterBar;
