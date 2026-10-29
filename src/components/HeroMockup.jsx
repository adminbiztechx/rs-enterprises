import React, { useState, useEffect, useRef } from 'react';
import {
  TrendingUp,
  BarChart3,
  Smartphone,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Lock,
  Award,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';

export const HeroMockup = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 'suite',
      tabLabel: 'Tally Suite',
      tag: 'TALLYPRIME 5.0 LIVE',
      tagColor: 'bg-blue-50 text-[#0052cc] border-blue-200/80',
      title: 'TallyPrime Business Management',
      subtitle: 'Powerful business management software for accounting, inventory & compliance',
      image: '/assets/images/hero-tallyprime-banner.jpg',
      alt: 'TallyPrime Powerful Business Management Software Dashboard',
      hotspots: [],
      showPartnerBadge: false,
    },
    {
      id: 'cloud',
      tabLabel: 'Cloud Access',
      tag: 'TALLY ON CLOUD',
      tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
      title: 'High-Speed Anywhere Cloud Access',
      subtitle: 'Run Tally seamlessly on Mac, Windows, iPad & Android with 99.9% uptime',
      image: '/assets/images/solutions-hero-devices-4k.jpg',
      alt: 'Tally on Cloud high speed multi device enterprise dashboard',
      hotspots: [
        {
          id: 's2-h1',
          position: 'top-[22%] left-[16%]',
          label: 'Cloud Uptime: 99.9% Active',
          dotColor: 'bg-cyan-500',
          animClass: 'animate-float-slow',
          icon: Cloud,
        },
        {
          id: 's2-h2',
          position: 'bottom-[32%] left-[22%]',
          label: 'Multi-Branch Connected',
          dotColor: 'bg-emerald-500',
          animClass: 'animate-float-delay',
          icon: CheckCircle2,
        },
        {
          id: 's2-h3',
          position: 'top-[20%] right-[16%]',
          label: 'AES-256 Bit Encryption',
          dotColor: 'bg-indigo-500',
          animClass: 'animate-float-slow',
          icon: ShieldCheck,
        },
      ],
      showPartnerBadge: false,
    },
    {
      id: 'gst',
      tabLabel: 'GST & E-Way',
      tag: 'AUTOMATED GST & E-INVOICE',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
      title: '1-Click E-Invoicing & E-Way Bill',
      subtitle: 'Zero-error GSTR-1, 3B, 2A/2B match & automated compliance filing',
      image: '/assets/images/hero-devices-4k.jpg',
      alt: 'TallyPrime automated GST and e-invoicing desk setup',
      hotspots: [
        {
          id: 's3-h1',
          position: 'top-[20%] left-[18%]',
          label: '1-Click E-Invoice Active',
          dotColor: 'bg-amber-500',
          animClass: 'animate-float-slow',
          icon: Zap,
        },
        {
          id: 's3-h2',
          position: 'bottom-[32%] left-[36%]',
          label: '100% Error-Free Reconciliation',
          dotColor: 'bg-emerald-500',
          animClass: 'animate-float-delay',
          icon: CheckCircle2,
        },
        {
          id: 's3-h3',
          position: 'top-[22%] right-[16%]',
          label: 'GSTR-1 & 3B Auto Match',
          dotColor: 'bg-blue-600',
          animClass: 'animate-float-slow',
          icon: Sparkles,
        },
      ],
      showPartnerBadge: false,
    },
    {
      id: 'analytics',
      tabLabel: 'BI Analytics',
      tag: 'EXECUTIVE INTELLIGENCE',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      title: 'Actionable Cash Flow & Growth Reports',
      subtitle: 'Real-time profit & loss projection, inventory turnover & audit trails',
      image: '/assets/images/industry-hero-desk-hd.jpg',
      alt: 'Executive business intelligence and financial reports in TallyPrime',
      hotspots: [
        {
          id: 's4-h1',
          position: 'top-[20%] left-[15%]',
          label: 'Cash Flow Growth: +18.4%',
          dotColor: 'bg-emerald-500',
          animClass: 'animate-float-slow',
          icon: TrendingUp,
        },
        {
          id: 's4-h2',
          position: 'bottom-[32%] left-[28%]',
          label: 'Audit Trail & Access Locked',
          dotColor: 'bg-indigo-600',
          animClass: 'animate-float-delay',
          icon: Lock,
        },
        {
          id: 's4-h3',
          position: 'top-[20%] right-[16%]',
          label: '3,500+ Active Pan-India Clients',
          dotColor: 'bg-blue-600',
          animClass: 'animate-float-slow',
          icon: Award,
        },
      ],
      showPartnerBadge: false,
    },
  ];

  // Auto-play timer (slides every 4.8 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const current = slides[activeSlide];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-4xl mx-auto select-none group/slider"
    >
      {/* Dynamic Ambient Background Lighting with Pulsing Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-gradient-to-tr from-blue-200/35 via-sky-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      {/* Main Glassmorphic Slide Frame with Soft Blended Edges */}
      <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/80 backdrop-blur-xl border border-blue-100/60 shadow-[0_20px_60px_-15px_rgba(0,82,204,0.08),0_0_40px_rgba(56,189,248,0.12)] overflow-hidden transition-all duration-300">
        
        {/* Top Tag & Status Header Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-blue-50/80 mb-1">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider border shadow-2xs ${current.tagColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span>{current.tag}</span>
            </span>
            <span className="text-slate-300 text-xs hidden sm:inline">•</span>
            <span className="text-[11.5px] font-bold text-slate-700 hidden sm:inline truncate max-w-[260px]">
              {current.title}
            </span>
          </div>

          {/* Quick Slide Navigation Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? 'w-7 sm:w-8 bg-[#0052cc] shadow-xs'
                    : 'w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Viewport for Sliding Images & Animated Hotspots */}
        <div className="relative aspect-[16/9.5] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#051124]">
          
          {/* Images Stack with Smooth Crossfade & Slight Zoom */}
          {slides.map((s, idx) => {
            const isActive = activeSlide === idx;
            return (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${
                  isActive
                    ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                    : 'opacity-0 scale-[1.02] z-0 pointer-events-none'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-[1.01]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Animated Floating Hotspots for Active Slide */}
                {isActive &&
                  s.hotspots.map((h) => {
                    const HIcon = h.icon;
                    return (
                      <div
                        key={h.id}
                        className={`absolute ${h.position} hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.09)] border border-slate-200/80 text-slate-800 scale-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-30 ${h.animClass}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${h.dotColor} animate-pulse flex-shrink-0`} />
                        <HIcon className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                        <span className="text-[11px] sm:text-[11.5px] font-black text-[#0a1a38] whitespace-nowrap">
                          {h.label}
                        </span>
                      </div>
                    );
                  })}
              </div>
            );
          })}

          {/* Navigation Arrow: Previous */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-700 hover:text-[#0052cc] hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-30 opacity-80 sm:opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Navigation Arrow: Next */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-700 hover:text-[#0052cc] hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-30 opacity-80 sm:opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Bottom Interactive Thumbnail / Tab Pills with Soft Rounded Borders */}
        <div className="mt-2 pt-2 border-t border-blue-50/80 grid grid-cols-4 gap-1.5 sm:gap-2">
          {slides.map((s, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`py-1.5 px-1.5 sm:px-2 rounded-xl text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                  isActive
                    ? 'bg-blue-50/90 border border-blue-200/80 shadow-2xs'
                    : 'bg-slate-50/50 hover:bg-slate-100/70 border border-slate-100'
                }`}
              >
                <span
                  className={`text-[10px] sm:text-[11.5px] font-extrabold tracking-tight truncate w-full ${
                    isActive ? 'text-[#0052cc]' : 'text-slate-600'
                  }`}
                >
                  {s.tabLabel}
                </span>
                <span className="text-[8px] sm:text-[9.5px] text-slate-400 hidden sm:block truncate w-full">
                  {idx === 0 ? 'Laptop & Mobile' : idx === 1 ? 'Anywhere Access' : idx === 2 ? '1-Click GST' : 'Growth BI'}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HeroMockup;
