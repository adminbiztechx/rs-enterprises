import React from 'react';
import AutoSlidingRow from './AutoSlidingRow';

export const TrustedClients = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1a38] tracking-tight leading-snug">
              Trusted by 10,000+ <br className="hidden sm:inline" />
              Businesses Across India
            </h3>
          </div>

          {/* Right: Client Logos Auto-Sliding Single Row */}
          <div className="flex-1 w-full overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
            <AutoSlidingRow speed={0.6} gap="gap-8" showControls={false}>
              
              {/* 1. MEDICARE Hospitals & Clinics */}
              <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <svg className="w-5 h-5 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 7v6" />
                  <path d="M9 10h6" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[13px] font-black tracking-tight text-slate-800 whitespace-nowrap">MEDICARE</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Hospitals & Clinics</span>
                </div>
              </div>

              {/* 2. KAPIL ENTERPRISE */}
              <div className="flex items-center gap-1.5 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <svg className="w-4 h-4 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[13px] font-black tracking-widest text-slate-800 whitespace-nowrap">KAPIL</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">ENTERPRISE</span>
                </div>
              </div>

              {/* 3. ShivShakti TRADERS */}
              <div className="flex items-center gap-1.5 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <svg className="w-5 h-5 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[13px] font-extrabold text-slate-800 whitespace-nowrap">ShivShakti</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">TRADERS</span>
                </div>
              </div>

              {/* 4. Urban HOSPITALITY */}
              <div className="flex items-center gap-1.5 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <div className="flex flex-col leading-none text-left">
                  <span className="text-[14px] font-black tracking-tight text-slate-800 whitespace-nowrap">Urban</span>
                  <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">HOSPITALITY</span>
                </div>
              </div>

              {/* 5. Global PHARMA */}
              <div className="flex items-center gap-1.5 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <svg className="w-5 h-5 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[13px] font-black tracking-tight text-slate-800 whitespace-nowrap">Global</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">PHARMA</span>
                </div>
              </div>

              {/* 6. Sapphire INDUSTRIES */}
              <div className="flex items-center gap-1.5 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
                <svg className="w-5 h-5 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M10 3l-4 6 6 12 6-12-4-6" />
                  <path d="M2 9h20" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[13px] font-black tracking-tight text-slate-800 whitespace-nowrap">Sapphire</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">INDUSTRIES</span>
                </div>
              </div>

            </AutoSlidingRow>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
