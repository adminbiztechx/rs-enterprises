import React from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  PhoneCall,
  CheckCircle2,
  Target,
  Eye,
  Gem,
  ShieldCheck,
  UserCheck,
  Puzzle,
  Headphones,
  ThumbsUp,
  Building2,
  Handshake,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Check,
  CheckCircle,
  FileCheck2
} from 'lucide-react';

export const AboutUsPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const stats = [
    {
      value: '10+',
      label: 'Years of Experience',
      icon: (
        <svg className="w-6 h-6 text-[#0052cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: '5000+',
      label: 'Happy Clients',
      icon: (
        <svg className="w-6 h-6 text-[#0052cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: '100+',
      label: 'Tally Certified Experts',
      icon: (
        <svg className="w-6 h-6 text-[#0052cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: '20+',
      label: 'Cities Pan India',
      icon: (
        <svg className="w-6 h-6 text-[#0052cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      value: '99%',
      label: 'Customer Satisfaction',
      icon: (
        <svg className="w-6 h-6 text-[#0052cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: '2013',
      title: 'Company Founded',
      icon: Building2
    },
    {
      year: '2015',
      title: 'Authorized Tally Partner',
      icon: Handshake
    },
    {
      year: '2018',
      title: 'Expanded Pan India',
      icon: MapPin
    },
    {
      year: '2021',
      title: '5000+ Clients Milestone',
      icon: Users
    },
    {
      year: '2024+',
      title: 'Growing Stronger Together',
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      title: 'Authorized Tally Partner',
      desc: 'Genuine products and licensed solutions',
      icon: ShieldCheck
    },
    {
      title: 'Expert Professionals',
      desc: 'Certified experts with deep product knowledge',
      icon: UserCheck
    },
    {
      title: 'End-to-End Solutions',
      desc: 'From implementation to support — we do it all',
      icon: Puzzle
    },
    {
      title: 'Timely Support',
      desc: 'Quick response and dedicated support',
      icon: Headphones
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Committed to delivering maximum value',
      icon: ThumbsUp
    }
  ];

  const certifications = [
    {
      id: 'tally-partner',
      image: '/assets/images/cert-tally-partner.png',
      fallbackTitle: 'Tally Authorized Partner',
      badge: (
        <div className="flex flex-col items-center">
          <div className="text-[#a81c1d] font-serif font-black italic text-lg tracking-wider">Tally</div>
          <div className="text-[8px] font-semibold tracking-widest text-slate-500 uppercase mt-0.5">POWER OF SIMPLICITY</div>
          <div className="mt-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            AUTHORIZED PARTNER ★
          </div>
        </div>
      )
    },
    {
      id: 'tallyprime-pro',
      image: '/assets/images/cert-tallyprime-pro.png',
      fallbackTitle: 'TallyPrime Certified Professional',
      badge: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 bg-[#e88024] rounded-sm"></div>
            <span className="font-bold text-[#002f6c] text-sm tracking-tight">TallyPrime</span>
          </div>
          <div className="text-[8px] font-semibold text-slate-600 mt-1">Certified Professional</div>
          <div className="text-amber-500 text-[10px] tracking-wider mt-0.5">★★★★★</div>
        </div>
      )
    },
    {
      id: 'tally-tss',
      image: '/assets/images/cert-tally-tss.png',
      fallbackTitle: 'Tally TSS Certified',
      badge: (
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-slate-500 font-bold tracking-wider">tally</span>
          <span className="text-base font-black text-slate-800 tracking-wider">TSS</span>
          <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600">
            <span>CERTIFIED</span>
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
        </div>
      )
    },
    {
      id: 'iso-9001',
      image: '/assets/images/cert-iso-9001.png',
      fallbackTitle: 'ISO 9001:2015 Certified',
      badge: (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border-2 border-[#00388d] flex flex-col items-center justify-center p-1">
            <span className="text-[6.5px] font-bold uppercase text-[#00388d] leading-none">CERTIFIED</span>
            <span className="text-[9.5px] font-black text-[#00388d] leading-tight">ISO</span>
            <span className="text-[6px] font-semibold text-[#00388d] leading-none">9001:2015</span>
          </div>
          <span className="text-[8.5px] font-bold text-[#00388d] mt-1 tracking-tight">COMPANY</span>
        </div>
      )
    },
    {
      id: 'msme',
      image: '/assets/images/cert-msme.png',
      fallbackTitle: 'MSME Registered',
      badge: (
        <div className="flex flex-col items-center">
          <div className="text-slate-600 font-bold text-[9px] uppercase tracking-wider">Govt. of India</div>
          <div className="text-slate-900 font-black text-sm tracking-wider my-0.5">MSME</div>
          <div className="text-[8px] text-slate-500 font-medium">सूक्ष्म, लघु एवं मध्यम उद्यम</div>
        </div>
      )
    },
    {
      id: 'gem',
      image: '/assets/images/cert-gem.png',
      fallbackTitle: 'GeM Registered',
      badge: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rotate-45 bg-gradient-to-tr from-amber-500 via-rose-500 to-blue-500 rounded-xs"></div>
            <span className="font-extrabold text-slate-800 text-sm">GeM</span>
          </div>
          <div className="text-[8px] text-slate-500 font-medium text-center leading-tight mt-0.5">
            Government <br /> e-Marketplace
          </div>
        </div>
      )
    }
  ];

  const handleScrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-slate-50/70 via-white to-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">About Us</span>
          </div>

          {/* Hero Content Split: Text & Corporate Office Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Story intro */}
            <div className="lg:col-span-5 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] text-[#0a1a38]">
                About <br />
                <span className="text-[#0052cc]">Syn N Sol</span>
              </h1>

              <p className="text-base sm:text-lg font-semibold text-slate-800 pt-1">
                Your Trusted Partner for Tally Solutions
              </p>

              {/* Blue accent underline bar */}
              <div className="w-12 h-1 bg-[#0052cc] rounded-full"></div>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl pt-2">
                Syn N Sol is a leading Authorized Tally Partner committed to empowering businesses with reliable accounting solutions, expert support and innovative technology. We help organizations streamline their operations, ensure compliance and drive sustainable growth.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleScrollToStory}
                  className="inline-flex items-center gap-2 bg-[#0052cc] hover:bg-[#0042a4] text-white text-sm font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: High Definition Office Reception Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group">
                <img
                  src="/assets/images/about-hero-reception-hd.jpg"
                  alt="Syn N Sol Corporate Office Reception"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Corporate Headquarters • Mumbai, India
                </div>
              </div>
            </div>

          </div>

          {/* 2. STATS STRIP (5 Key Metrics) */}
          <div className="mt-12 sm:mt-16 bg-white rounded-2xl border border-slate-150 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 md:pt-0' : ''} ${idx >= 2 ? 'col-span-1' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0052cc] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SPLIT SECTION: OUR STORY & OUR JOURNEY */}
      <section id="our-story" className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Our Story */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
                  Our Story
                </h2>
                <div className="w-10 h-1 bg-[#0052cc] rounded-full mt-2 mb-6"></div>

                <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  <p>
                    Syn N Sol was founded with a simple vision — to deliver world-class accounting and business management solutions powered by Tally. Over the years, we have grown into a trusted technology partner for thousands of businesses across industries.
                  </p>
                  <p>
                    From humble beginnings to becoming a recognized name in the industry, our journey is driven by customer trust, innovative solutions and unwavering commitment to excellence.
                  </p>
                </div>
              </div>

              {/* Founder Signature Graphic */}
              <div className="pt-6 border-t border-slate-100 mt-6">
                <div className="flex items-center gap-4">
                  <svg className="w-28 h-10 text-slate-800" viewBox="0 0 160 50" fill="none">
                    <path
                      d="M10 35 C 25 15, 35 10, 45 25 C 55 40, 60 15, 75 22 C 90 30, 95 10, 110 28 C 120 40, 130 30, 145 20 M35 28 L 135 28"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-xs font-bold text-slate-800 tracking-wide">
                    Team Syn N Sol
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Our Journey Timeline */}
            <div className="lg:col-span-7 bg-[#f8faff] border border-blue-100/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0a1a38] tracking-tight mb-8">
                  Our Journey
                </h3>

                {/* Horizontal Milestones Flow */}
                <div className="relative">
                  {/* Connecting line behind milestones on desktop */}
                  <div className="hidden sm:block absolute top-7 left-8 right-8 h-0.5 bg-blue-200/80 -z-0"></div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-2 relative z-10">
                    {milestones.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={item.year} className="flex flex-col items-center text-center group">
                          {/* Circle Icon */}
                          <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-400 group-hover:border-[#0052cc] group-hover:bg-blue-50 flex items-center justify-center text-[#0052cc] shadow-sm transition-all duration-300 transform group-hover:scale-110 mb-3">
                            <IconComponent className="w-6 h-6" />
                          </div>

                          {/* Year */}
                          <div className="text-sm sm:text-base font-extrabold text-[#0052cc]">
                            {item.year}
                          </div>

                          {/* Title */}
                          <div className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-1 max-w-[100px]">
                            {item.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Consistent Innovation & Excellence
                </span>
                <span className="text-slate-400">2013 – 2026+</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION, VISION & VALUES CONTAINER */}
      <section className="py-10 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#f8faff] rounded-2xl border border-slate-100 p-8 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/70">
              
              {/* Mission */}
              <div className="flex flex-col items-start pr-0 md:pr-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-[#0052cc] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1a38] mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide innovative and reliable Tally solutions that simplify business processes, ensure compliance and help our clients achieve excellence and growth.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-start pt-6 md:pt-0 px-0 md:px-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1a38] mb-2">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be the most trusted and preferred technology partner empowering businesses to transform, grow and succeed in a digital world.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col items-start pt-6 md:pt-0 pl-0 md:pl-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-4">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1a38] mb-2">
                  Our Values
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {[
                    'Customer First',
                    'Integrity & Transparency',
                    'Quality & Excellence',
                    'Innovation',
                    'Teamwork'
                  ].map((value) => (
                    <li key={value} className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE SYN N SOL? */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Why Choose Syn N Sol?
            </h2>
            <div className="w-12 h-1 bg-[#0052cc] rounded-full mx-auto mt-2"></div>
          </div>

          {/* Desktop View: Exact Original 5-Column Grid with dividers */}
          <div className="hidden lg:grid grid-cols-5 gap-4 divide-x divide-slate-100">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center text-center ${idx > 0 ? 'pl-4' : ''} group`}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0052cc] flex items-center justify-center mb-4 group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0a1a38] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Single Row Auto-Sliding */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.7} gap="gap-6">
              {whyChooseUs.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="w-[200px] sm:w-[220px] flex-shrink-0 flex flex-col items-center text-center px-4 py-4 bg-[#f8faff] rounded-2xl border border-blue-50 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0052cc] flex items-center justify-center mb-4 group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0a1a38] leading-snug whitespace-nowrap">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-[200px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS & PARTNERSHIPS */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Certifications & Partnerships
            </h2>
            <div className="w-12 h-1 bg-[#0052cc] rounded-full mx-auto mt-2"></div>
          </div>

          {/* Desktop View: Exact Original 6-Column Static Grid */}
          <div className="hidden lg:grid grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl border border-slate-200/80 p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all min-h-[110px]"
              >
                {cert.badge}
              </div>
            ))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.6} gap="gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="w-[160px] sm:w-[180px] flex-shrink-0 bg-white rounded-xl border border-slate-200/80 p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all min-h-[110px]"
                >
                  {cert.badge}
                </div>
              ))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER: LET'S WORK TOGETHER */}
      <section className="py-8 pb-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#00388d] rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-4 sm:gap-6 text-center lg:text-left flex-col sm:flex-row">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#00388d] flex-shrink-0 shadow-md">
                <Headphones className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Let's Work Together
                </h3>
                <p className="text-sm sm:text-base text-blue-100 max-w-xl font-normal leading-relaxed">
                  We're here to help you transform your business with the power of Tally. Let's build success, together.
                </p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onOpenDemoModal && onOpenDemoModal('Free Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#00388d] text-sm font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#00388d]" />
                <span>Book Free Demo</span>
              </button>

              <button
                onClick={() => onOpenContactModal && onOpenContactModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-md border border-white/60 hover:border-white transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Our Expert</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
