import { getStatusColor, getRiskColor, getPaymentStatusColor } from '../utils/formatters';

/**
 * Component สำหรับแสดง Status Badge ต่างๆ
 * ใช้ได้กับ: status, riskLevel, paymentStatus
 */
export const StatusBadge = ({ value, type = 'status' }) => {
  let colorClass = '';
  
  // เลือกสี ตาม type ของ badge
  if (type === 'status') {
    colorClass = getStatusColor(value);
  } else if (type === 'risk') {
    colorClass = getRiskColor(value);
  } else if (type === 'payment') {
    colorClass = getPaymentStatusColor(value);
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap inline-block ${colorClass}`}>
      {value}
    </span>
  );
};

export default StatusBadge;
