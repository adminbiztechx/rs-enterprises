import React from 'react';
import { Star } from 'lucide-react';

export const ImpactAndTestimonials = () => {
  const stats = [
    { number: '20+', label: 'Years of Experience', color: 'text-[#0052cc]' },
    { number: '10,000+', label: 'Happy Customers', color: 'text-[#0052cc]' },
    { number: '50+', label: 'Tally Experts', color: 'text-[#059669]' },
    { number: '500+', label: 'Cities Covered', color: 'text-[#ea580c]' },
  ];

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Soft Blue Card Container */}
        <div className="bg-[#f0f6ff] rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100/80 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
            
            {/* Left: Our Impact in Numbers */}
            <div className="flex-1 lg:max-w-[58%]">
              <h3 className="text-base sm:text-lg font-bold text-[#0a1a38] mb-5 tracking-tight">
                Our Impact in Numbers
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-blue-50/80 hover:shadow-md transition-all flex flex-col justify-center items-center h-28"
                  >
                    <div className={`text-2xl sm:text-3xl font-black ${stat.color} mb-1 tracking-tight`}>
                      {stat.number}
                    </div>
                    <div className="text-[11.5px] font-bold text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Blue Line Divider */}
            <div className="hidden lg:block w-[1.5px] bg-[#0052cc]/30 self-stretch my-1" />

            {/* Right: What Our Clients Say */}
            <div className="flex-1 lg:max-w-[38%] flex flex-col justify-center">
              <h3 className="text-base sm:text-lg font-bold text-[#0a1a38] mb-3 tracking-tight">
                What Our Clients Say
              </h3>

              <blockquote className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-3">
                "Syn N Sol has been instrumental in automating our accounting process. Their support team is excellent and always available whenever we need them."
              </blockquote>

              {/* 5 Golden Yellow Stars */}
              <div className="flex items-center gap-1 text-[#f59e0b] mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Author */}
              <div className="leading-tight">
                <div className="text-xs sm:text-sm font-bold text-[#0a1a38]">
                  — Rajesh Mehta, Director
                </div>
                <div className="text-[11.5px] font-semibold text-slate-500 mt-0.5">
                  Mehta Traders
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactAndTestimonials;
