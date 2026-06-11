/**
 * Butterfly Component
 * แสดง: Animated butterfly icon บินออกจากจุดคลิก
 */
import { useEffect, useState } from 'react';

const ButterflyEmoji = () => {
  return '🦋';
};

const Butterfly = ({ id, startX, startY, delay }) => {
  const [style, setStyle] = useState({
    left: startX,
    top: startY,
    position: 'fixed',
    fontSize: '24px',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 1,
  });

  useEffect(() => {
    // สร้างแนวบินแบบสุ่ม
    const randomAngle = Math.random() * 360 * (Math.PI / 180);
    const randomDistance = 150 + Math.random() * 100; // 150-250px
    const endX = startX + Math.cos(randomAngle) * randomDistance;
    const endY = startY + Math.sin(randomAngle) * randomDistance - 100; // ให้บินขึ้นด้วย

    const animationDuration = 2 + Math.random() * 1; // 2-3 วินาที

    // สร้าง animation keyframes
    const keyframes = `
      @keyframes butterfly-${id} {
        0% {
          transform: translate(0, 0) scale(1) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: translate(${(endX - startX) * 0.5}px, ${(endY - startY) * 0.5}px) scale(1.1) rotate(180deg);
        }
        100% {
          transform: translate(${endX - startX}px, ${endY - startY}px) scale(0.8) rotate(360deg);
          opacity: 0;
        }
      }
    `;

    // เพิ่ม keyframes ไป styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    // ตั้ง animation
    setStyle(prev => ({
      ...prev,
      animation: `butterfly-${id} ${animationDuration}s ease-out ${delay}s forwards`,
    }));

    return () => {
      styleSheet.remove();
    };
  }, [id, startX, startY, delay]);

  return (
    <div
      style={style}
      className="butterfly"
    >
      <ButterflyEmoji />
    </div>
  );
};

export default Butterfly;
