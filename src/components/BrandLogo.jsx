import React from 'react';

export const BrandLogo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 xl:gap-3 select-none flex-shrink-0 ${className}`}>
      {/* Icon Badge */}
      <div className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-xl font-bold shadow-sm transition-transform hover:scale-105 flex-shrink-0 ${
        isLight ? 'bg-white text-[#0a1a38]' : 'bg-[#0a1a38] text-white'
      }`}>
        {/* Stylized SnS monogram */}
        <div className="flex items-baseline font-black tracking-tighter text-base sm:text-lg">
          <span className="relative">S</span>
          <span className="relative text-blue-500 text-[10px] sm:text-xs font-black mx-0.5">n</span>
          <span className="relative">S</span>
        </div>
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 ${
          isLight ? 'bg-blue-500 border-[#0a1a38]' : 'bg-blue-600 border-white'
        }`} />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col flex-shrink-0">
        <span className={`text-[15px] sm:text-[16px] xl:text-[17px] font-black tracking-tight leading-tight uppercase whitespace-nowrap ${
          isLight ? 'text-white' : 'text-[#0a1a38]'
        }`}>
          SYN N SOL
        </span>
        <span className={`text-[8px] sm:text-[9px] xl:text-[9.5px] font-bold tracking-wider uppercase whitespace-nowrap ${
          isLight ? 'text-blue-300' : 'text-slate-500'
        }`}>
          AUTHORIZED TALLY PARTNER
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
