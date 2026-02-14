
import React from 'react';

const Paperclip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: '40px', height: '100px', transform: 'rotate(15deg)' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        <path d="M15 7V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.79086 10.7909 1 13 1C15.2091 1 17 2.79086 17 5V17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17V7" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default Paperclip;
