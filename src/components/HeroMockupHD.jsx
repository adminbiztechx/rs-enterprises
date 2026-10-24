import React from 'react';
import { Search, HelpCircle, User, TrendingUp, BarChart2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const HeroMockupHD = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto select-none py-4">
      
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Composite Area */}
      <div className="relative flex items-end justify-center">

        {/* 1. LAPTOP MOCKUP (MacBook Pro Space Gray) */}
        <div className="relative w-full max-w-[700px] z-10 transition-transform duration-300 hover:scale-[1.01]">
          
          {/* Laptop Lid / Bezel */}
          <div className="relative bg-[#1c1d21] rounded-t-[18px] p-2.5 sm:p-3 pb-2 shadow-2xl border-t border-l border-r border-[#3a3b40]">
            
            {/* Top Webcam Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a0a0c] border border-[#2b2c30] flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-[#1e3a8a]/70" />
            </div>

            {/* Laptop Screen (TallyPrime UI) */}
            <div className="relative bg-[#f8fafc] rounded-lg overflow-hidden border border-[#2c2d33] shadow-inner aspect-[16/10]">
              
              {/* TallyPrime Top Bar */}
              <div className="bg-[#0b1c36] text-white px-3 sm:px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-extrabold tracking-tight text-white ml-2 text-xs sm:text-[13px]">
                    Tally<span className="text-[#38bdf8]">Prime</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <HelpCircle className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white">
                    RS
                  </div>
                </div>
              </div>

              {/* Main App Layout */}
              <div className="flex h-[calc(100%-28px)]">
                
                {/* Left Dark Sidebar */}
                <div className="w-24 sm:w-28 bg-[#0e2444] text-slate-300 p-2 sm:p-2.5 flex flex-col gap-1 text-[9.5px] sm:text-[10.5px] font-medium border-r border-blue-900/40">
                  <div className="px-2 py-1 rounded bg-blue-600/30 text-white font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Gateway</span>
                  </div>
                  <div className="px-2 py-0.5 hover:bg-white/5 rounded transition-colors text-slate-300">Masters</div>
                  <div className="px-2 py-0.5 hover:bg-white/5 rounded transition-colors text-slate-300">Transactions</div>
                  <div className="px-2 py-0.5 hover:bg-white/5 rounded transition-colors text-slate-300">Reports</div>
                  <div className="px-2 py-0.5 hover:bg-white/5 rounded transition-colors text-slate-300">Utilities</div>
                  <div className="px-2 py-0.5 hover:bg-white/5 rounded transition-colors text-slate-300">Company</div>
                </div>

                {/* Central Dashboard Area */}
                <div className="flex-1 p-2.5 sm:p-3.5 bg-slate-50/70 overflow-hidden flex flex-col justify-between">
                  
                  {/* Top Metric Cards */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {/* Card 1: Total Sales */}
                    <div className="bg-white rounded-lg p-2 sm:p-2.5 border border-slate-200/80 shadow-xs">
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Total Sales
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 tracking-tight mt-0.5">
                        ₹ 45,80,000
                      </div>
                    </div>

                    {/* Card 2: Total Purchase */}
                    <div className="bg-white rounded-lg p-2 sm:p-2.5 border border-slate-200/80 shadow-xs">
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Total Purchase
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 tracking-tight mt-0.5">
                        ₹ 32,76,000
                      </div>
                    </div>
                  </div>

                  {/* Bottom Charts Row */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-2.5 h-[62%]">
                    
                    {/* Cash-Flow Bar Chart */}
                    <div className="bg-white rounded-lg p-2 sm:p-2.5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-slate-700">
                        <span>Cash-Flow</span>
                        <span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1 rounded">+18.4%</span>
                      </div>
                      
                      {/* Bar Graphic */}
                      <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-16 sm:h-20 pt-2 px-1">
                        {[
                          { m: 'Jan', h: '60%' },
                          { m: 'Feb', h: '40%' },
                          { m: 'Mar', h: '55%' },
                          { m: 'Apr', h: '95%' },
                          { m: 'May', h: '75%' },
                          { m: 'Jun', h: '85%' },
                        ].map((b) => (
                          <div key={b.m} className="flex-1 flex flex-col items-center h-full justify-end group">
                            <div
                              style={{ height: b.h }}
                              className="w-full bg-[#0052cc] rounded-t-xs group-hover:bg-blue-500 transition-all shadow-xs"
                            />
                            <span className="text-[7.5px] sm:text-[8.5px] text-slate-400 font-bold mt-1">
                              {b.m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expense Donut Chart */}
                    <div className="bg-white rounded-lg p-2 sm:p-2.5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-700">
                        Expense: <span className="font-extrabold text-slate-900">₹ 18,74,000</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 h-16 sm:h-20">
                        {/* SVG Donut */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            {/* Segment 1: Purchase (Blue) */}
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#0052cc" strokeWidth="5.5" strokeDasharray="38 100" strokeDashoffset="0" />
                            {/* Segment 2: Salary (Teal) */}
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#06b6d4" strokeWidth="5.5" strokeDasharray="22 100" strokeDashoffset="-38" />
                            {/* Segment 3: Rent (Green) */}
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5.5" strokeDasharray="18 100" strokeDashoffset="-60" />
                            {/* Segment 4: Transport (Orange) */}
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5.5" strokeDasharray="14 100" strokeDashoffset="-78" />
                            {/* Segment 5: Others (Slate) */}
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#64748b" strokeWidth="5.5" strokeDasharray="8 100" strokeDashoffset="-92" />
                          </svg>
                          <div className="absolute text-[8px] font-black text-slate-700">62%</div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-col gap-0.5 text-[7.5px] sm:text-[8.5px] font-bold text-slate-600">
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> Purchase</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" /> Salary</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Rent</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> Transport</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" /> Others</div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Laptop Base / Keyboard Deck */}
          <div className="relative bg-gradient-to-b from-[#2e2f34] via-[#24252a] to-[#1a1b1f] h-3.5 sm:h-4 rounded-b-[14px] shadow-2xl border-t border-[#44454b] flex items-center justify-center">
            {/* Display Open Notch */}
            <div className="w-16 sm:w-20 h-1 bg-[#151619] rounded-b-sm border-t border-[#3e3f45]" />
          </div>

          {/* Bottom Desk Reflection & Shadow */}
          <div className="w-[96%] mx-auto h-3 bg-gradient-to-b from-slate-900/25 to-transparent blur-sm rounded-full" />
        </div>

        {/* 2. SMARTPHONE COMPANION MOCKUP (Standing Right) */}
        <div className="absolute right-6 sm:right-10 -bottom-3 sm:-bottom-4 w-32 sm:w-40 z-20 shadow-2xl rounded-[24px] p-1.5 sm:p-2 bg-[#121316] border border-[#303138] transition-transform duration-300 hover:scale-105">
          {/* Dynamic Island / Speaker Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1.5 sm:h-2 rounded-full bg-[#050507] z-30" />

          {/* Phone Screen */}
          <div className="relative bg-[#f8fafc] rounded-[18px] overflow-hidden aspect-[9/18] border border-[#232429] flex flex-col justify-between">
            {/* Phone Top Header */}
            <div className="bg-[#0b1c36] text-white pt-4 pb-2 px-2.5 text-center">
              <span className="font-extrabold text-[10px] tracking-tight">TallyPrime</span>
              <div className="text-[8px] font-bold text-slate-300 text-left mt-1">Dashboard</div>
            </div>

            {/* Quick Actions Grid */}
            <div className="p-2 space-y-1.5">
              <div className="grid grid-cols-2 gap-1 text-[7.5px] font-bold text-slate-700">
                <div className="bg-white p-1 rounded border border-slate-200 text-center shadow-2xs">Reports</div>
                <div className="bg-white p-1 rounded border border-slate-200 text-center shadow-2xs">Cash Flow</div>
                <div className="bg-white p-1 rounded border border-slate-200 text-center shadow-2xs">Payables</div>
                <div className="bg-white p-1 rounded border border-slate-200 text-center shadow-2xs">Receivables</div>
              </div>
              <div className="bg-white p-1 rounded border border-slate-200 text-center text-[7.5px] font-bold text-slate-700 shadow-2xs">
                Banking
              </div>
            </div>

            {/* Mini Chart */}
            <div className="px-2 pb-2">
              <div className="text-[7px] font-bold text-slate-400 mb-1">Weekly Summary</div>
              <div className="flex items-end justify-between gap-0.5 h-10 bg-white p-1 rounded border border-slate-200">
                <div className="w-1.5 h-[40%] bg-blue-600 rounded-t-xs" />
                <div className="w-1.5 h-[65%] bg-blue-600 rounded-t-xs" />
                <div className="w-1.5 h-[85%] bg-blue-600 rounded-t-xs" />
                <div className="w-1.5 h-[50%] bg-blue-600 rounded-t-xs" />
                <div className="w-1.5 h-[100%] bg-blue-600 rounded-t-xs" />
              </div>
            </div>

            {/* Home Indicator */}
            <div className="pb-1 flex justify-center">
              <div className="w-10 h-0.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* 3. FLOATING TALLY AUTHORIZED PARTNER BADGE (Bottom Left of Laptop) */}
        <div className="absolute -left-2 sm:-left-6 bottom-1 sm:bottom-2 z-30 bg-white/98 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-2xl border border-slate-200/80 transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col items-center text-center">
            {/* Tally cursive logo style */}
            <span className="font-serif italic text-lg sm:text-2xl font-black text-[#8b1515] tracking-tight leading-none mb-1">
              Tally
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-widest text-slate-600 uppercase">
              POWER OF SIMPLICITY
            </span>
            
            {/* Green Badge Banner */}
            <div className="mt-1.5 px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
              <span>★</span>
              <span>AUTHORIZED PARTNER</span>
              <span>★</span>
            </div>
          </div>
        </div>

        {/* 4. DECORATIVE POTTED PLANT (Far Right) */}
        <div className="absolute -right-4 sm:-right-8 bottom-0 z-10 hidden sm:flex flex-col items-center">
          {/* Leaves SVG */}
          <svg className="w-16 h-20 text-emerald-600 drop-shadow-sm -mb-2" viewBox="0 0 100 120" fill="currentColor">
            <path d="M50 80 C40 50, 10 40, 20 20 C40 20, 50 60, 50 80 Z" />
            <path d="M50 80 C60 45, 90 35, 80 15 C60 18, 50 55, 50 80 Z" className="text-emerald-700" />
            <path d="M50 80 C45 35, 50 10, 55 5 C60 10, 55 45, 50 80 Z" className="text-emerald-500" />
            <path d="M50 80 C30 65, 5 70, 0 55 C10 45, 40 65, 50 80 Z" className="text-emerald-600" />
            <path d="M50 80 C70 65, 95 70, 100 55 C90 45, 60 65, 50 80 Z" className="text-emerald-700" />
          </svg>
          {/* Ceramic White Pot */}
          <div className="w-9 h-10 bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-b-lg border border-slate-300 shadow-md" />
        </div>

      </div>

    </div>
  );
};

export default HeroMockupHD;
