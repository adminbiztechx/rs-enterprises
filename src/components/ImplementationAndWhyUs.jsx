import React from 'react';
import {
  CheckCircle2,
  Calendar,
  MessageSquare,
  Search,
  Settings2,
  Users,
  Send,
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

export const ImplementationAndWhyUs = ({ onOpenDemoModal }) => {
  const whyUsPoints = [
    'Authorized Tally Partner',
    'Certified & Experienced Experts',
    'Quick Implementation',
    'Customized Solutions',
    'Affordable Pricing',
    'Data Security & Backup',
    'PAN India Support',
    '24/7 Dedicated Support',
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      desc: 'Understand your business needs',
      icon: MessageSquare,
    },
    {
      step: 2,
      title: 'Analysis',
      desc: 'Analyze & plan the best solution',
      icon: Search,
    },
    {
      step: 3,
      title: 'Implementation',
      desc: 'Setup, configure & customize Tally',
      icon: Settings2,
    },
    {
      step: 4,
      title: 'Training',
      desc: 'Train your team for smooth usage',
      icon: Users,
    },
    {
      step: 5,
      title: 'Go Live',
      desc: 'Go live with complete support',
      icon: Send,
    },
    {
      step: 6,
      title: 'Support',
      desc: 'Ongoing support for your growth',
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Card: Why Businesses Choose Us */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#f5f9ff] to-[#edf4fc] rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100/70 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Subtle dot pattern in top right */}
            <div className="absolute top-2 right-2 w-28 h-28 bg-[radial-gradient(#0052cc_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

            <div>
              <h2 className="text-2xl sm:text-[28px] font-black text-[#0a1a38] tracking-tight leading-tight mb-6">
                Why Businesses <br />
                <span className="text-[#0d5dd6]">Choose Us</span>
              </h2>

              <ul className="space-y-4">
                {whyUsPoints.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-emerald-500">
                      <CheckCircle2 className="w-5 h-5 fill-emerald-50 text-emerald-500" />
                    </div>
                    <span className="text-[13.5px] font-semibold text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card: Our Implementation Process */}
          <div className="lg:col-span-8 bg-gradient-to-r from-[#0047b3] via-[#0052cc] to-[#0a58ca] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl flex flex-col justify-between">
            
            {/* Process Header */}
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Our Implementation Process
              </h3>
            </div>

            {/* 6 Step Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-2 relative mb-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex flex-col items-center text-center relative group">
                    
                    {/* Step Circle Badge */}
                    <div className="w-14 h-14 rounded-full bg-white text-[#0052cc] flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    {/* Step Title */}
                    <h4 className="text-[13.5px] font-bold text-white mb-1">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-[11.5px] text-blue-100/80 leading-snug px-1">
                      {step.desc}
                    </p>

                    {/* Connector Arrow for desktop */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-7 -right-3 text-blue-200/60 z-10">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Inner Bottom CTA Card */}
            <div className="bg-[#05225c]/80 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
              <div className="text-center sm:text-left">
                <div className="text-sm sm:text-base font-bold text-white">
                  Ready to streamline your business with Tally?
                </div>
                <div className="text-xs text-blue-200">
                  Book a free consultation with our experts today!
                </div>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#0052cc] bg-white hover:bg-blue-50 active:scale-[0.98] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#0052cc]" />
                <span>Book Free Demo</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ImplementationAndWhyUs;
