import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);
    return () => window.removeEventListener('scroll', updateScrollPercentage);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/80 backdrop-blur-sm z-40 transition-colors duration-300">
      <div
        className="h-full bg-primary-blue transition-all duration-300 shadow-soft"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;