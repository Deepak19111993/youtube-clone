import React from 'react';

const LeftNavMenuItem = ({ text, className, action }) => {
  return (
    <div
      className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${className}`}
      onClick={action}
    >
      <span className='text-[14px] mr-5'>{text}</span>
    </div>
  );
};

export default LeftNavMenuItem;