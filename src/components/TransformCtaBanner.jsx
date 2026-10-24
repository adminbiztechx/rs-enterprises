import React from 'react';
import { Target, Calendar, PhoneCall } from 'lucide-react';

export const TransformCtaBanner = ({ onOpenDemoModal, onOpenContactModal }) => {
  return (
    <section className="bg-[#0052cc] py-6 sm:py-7 relative overflow-hidden">
      {/* Decorative background light circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* White Target Badge */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0052cc] shadow-md">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Headline and text */}
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xs sm:text-[13px] text-blue-100 font-medium mt-0.5">
                Join thousands of businesses using Tally solutions to automate, simplify and grow.
              </p>
            </div>
          </div>

          {/* Right: CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            {/* White Button */}
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-[#0052cc] bg-white hover:bg-blue-50 active:scale-[0.98] transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#0052cc]" />
              <span>Book Free Demo</span>
            </button>

            {/* Dark Blue with White Border Button */}
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#004099] border border-white/80 hover:bg-[#003580] active:scale-[0.98] transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Talk to Expert</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformCtaBanner;
