import React from 'react';
import HeroMockup from './HeroMockup';
import { Calendar, PhoneCall, ArrowRight, Award, Users, Smile, Globe } from 'lucide-react';

export const Hero = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const trustMetrics = [
    {
      icon: Award,
      title: 'Authorized',
      subtitle: 'Tally Partner',
    },
    {
      icon: Users,
      title: '20+ Years',
      subtitle: 'of Experience',
    },
    {
      icon: Smile,
      title: '10,000+',
      subtitle: 'Happy Clients',
    },
    {
      icon: Globe,
      title: 'PAN India',
      subtitle: 'Support',
    },
  ];

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 xl:pb-24 overflow-hidden hero-gradient">
      
      {/* Curved radial wave lines in background matching the 4K design */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <svg
          className="absolute -top-32 right-0 w-[900px] h-[900px] opacity-35"
          viewBox="0 0 800 800"
          fill="none"
        >
          {[...Array(14)].map((_, i) => (
            <circle
              key={i}
              cx="700"
              cy="250"
              r={140 + i * 50}
              stroke="#0284c7"
              strokeWidth="1.2"
              strokeOpacity={0.35 - i * 0.02}
            />
          ))}
        </svg>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Container with comfortable, balanced gap */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, CTA, Trust Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-[#0a1a38] tracking-tight leading-[1.12]">
              Your Trusted <br />
              <span className="text-[#0d5dd6]">Tally Partner</span> for <br />
              Smarter Business
            </h1>

            {/* Description */}
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-lg">
              We provide Tally Software, Implementation, Customization, Cloud Solutions, GST Compliance and End-to-End Support to help businesses grow with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Primary Blue Button */}
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] active:scale-[0.98] transition-all shadow-md shadow-blue-600/25 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Demo</span>
              </button>

              {/* Secondary Outline Button */}
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-[#0052cc] bg-white border border-[#0052cc] hover:bg-blue-50 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Expert</span>
              </button>

              {/* Text Link */}
              <button
                onClick={() => {
                  onNavigate && onNavigate('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors group pl-1 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Trust Badges Horizontal Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 mt-2 border-t border-slate-100">
              {trustMetrics.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0052cc]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] leading-tight">
                      <div className="font-extrabold text-[#0a1a38]">{item.title}</div>
                      <div className="text-slate-500 font-medium">{item.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Hero Visual Mockup (7 cols) with comfortable spacing */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center lg:pl-6 xl:pl-10">
            <HeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
