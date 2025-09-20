
import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 bg-primary-blue rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-difference ${
        isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
      }}
    />
  );
};

export default CursorFollower;
