import React from 'react';
import AutoSlidingRow from './AutoSlidingRow';
import {
  Factory,
  Store,
  Boxes,
  ArrowLeftRight,
  HeartPulse,
  GraduationCap,
  HardHat,
  Hotel,
  Pill,
  Users,
  Briefcase
} from 'lucide-react';

export const IndustriesWeServe = ({ onNavigate }) => {
  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Retail', icon: Store },
    { name: 'Wholesale', icon: Boxes },
    { name: 'Trading', icon: ArrowLeftRight },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Education', icon: GraduationCap },
    { name: 'Construction', icon: HardHat },
    { name: 'Hospitality', icon: Hotel },
    { name: 'Pharma', icon: Pill },
    { name: 'NGOs', icon: Users },
    { name: 'CA Firms', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-8 sm:py-12 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight">
            Industries We Serve
          </h2>
        </div>

        {/* Desktop View: Exact original 11-column static grid */}
        <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm px-6 sm:px-8 lg:px-10 py-6">
          <div className="grid grid-cols-11 gap-3 items-center justify-items-center">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('industries');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex flex-col items-center justify-center gap-2 group cursor-pointer p-2 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/80 border-2 border-blue-200/80 flex items-center justify-center text-[#0052cc] shadow-2xs group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-md group-hover:shadow-blue-500/15 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.9]" />
                  </div>
                  <span className="text-[12.5px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-center whitespace-nowrap">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Single Row Auto-Sliding */}
        <div className="block lg:hidden bg-white rounded-2xl border border-slate-100 shadow-sm px-4 sm:px-6 py-4">
          <AutoSlidingRow speed={0.7} gap="gap-4" showControls={true}>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('industries');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex flex-col items-center justify-center gap-2 group cursor-pointer py-2 px-5 rounded-xl hover:bg-blue-50/70 transition-all duration-200 flex-shrink-0 min-w-[100px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/80 border-2 border-blue-200/80 flex items-center justify-center text-[#0052cc] shadow-2xs group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-md group-hover:shadow-blue-500/15 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.9]" />
                  </div>
                  <span className="text-[12.5px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-center whitespace-nowrap">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </AutoSlidingRow>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
