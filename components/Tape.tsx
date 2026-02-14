
import React from 'react';

interface TapeProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical' | 'diagonal-left' | 'diagonal-right';
}

const Tape: React.FC<TapeProps> = ({ className = '', orientation = 'horizontal' }) => {
  const getRotation = () => {
    switch (orientation) {
      case 'diagonal-left': return '-rotate-45';
      case 'diagonal-right': return 'rotate-45';
      case 'vertical': return 'rotate-90';
      default: return 'rotate-2';
    }
  };

  return (
    <div 
      className={`mask-tape absolute h-8 w-24 opacity-60 z-10 pointer-events-none ${getRotation()} ${className}`}
      style={{
        clipPath: 'polygon(5% 0%, 95% 2%, 100% 15%, 98% 85%, 95% 100%, 5% 98%, 0% 85%, 2% 15%)'
      }}
    />
  );
};

export default Tape;
