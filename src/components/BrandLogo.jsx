import React from 'react';

export const BrandLogo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge */}
      <div className={`relative flex items-center justify-center w-11 h-11 rounded-xl font-bold shadow-sm transition-transform hover:scale-105 ${
        isLight ? 'bg-white text-[#0a1a38]' : 'bg-[#0a1a38] text-white'
      }`}>
        {/* Stylized SnS monogram */}
        <div className="flex items-baseline font-black tracking-tighter text-lg">
          <span className="relative">S</span>
          <span className="relative text-blue-500 text-xs font-black mx-0.5">n</span>
          <span className="relative">S</span>
        </div>
        <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 ${
          isLight ? 'bg-blue-500 border-[#0a1a38]' : 'bg-blue-600 border-white'
        }`} />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-[17px] font-black tracking-tight leading-tight uppercase ${
          isLight ? 'text-white' : 'text-[#0a1a38]'
        }`}>
          SYN N SOL
        </span>
        <span className={`text-[9.5px] font-bold tracking-wider uppercase ${
          isLight ? 'text-blue-300' : 'text-slate-500'
        }`}>
          AUTHORIZED TALLY PARTNER
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
