import React from 'react';

export const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto select-none py-2">
      
      {/* Background Soft Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 4K Ultra-Clean Hero Mockup Image */}
      <div className="relative rounded-2xl overflow-visible transition-all duration-300">
        <img
          src="/assets/images/hero-clean-4k@2x.png"
          alt="TallyPrime Enterprise Dashboard Laptop and Mobile Mockup 4K Ultra HD"
          className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          loading="eager"
        />

        {/* Interactive Floating Hotspots */}
        <div className="absolute top-[28%] left-[28%] hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-blue-100/90 scale-95 hover:scale-105 transition-all cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11.5px] font-black text-slate-800">Total Sales: ₹45,80,000 (↑12%)</span>
        </div>

        <div className="absolute bottom-[36%] left-[48%] hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-blue-100/90 scale-95 hover:scale-105 transition-all cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11.5px] font-black text-slate-800">Expenses: ₹18,76,000</span>
        </div>
      </div>

    </div>
  );
};

export default HeroMockup;
