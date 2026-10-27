import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import { submitInquiry } from '../services/api';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Globe,
  Car,
  ArrowUpRight,
  ShieldCheck,
  Send,
  MessageCircle,
  PhoneCall,
  Headphones,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ContactPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    agreeTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    await submitInquiry({
      type: 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      product_interest: formData.subject,
      message: formData.message
    });
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3D SVG emblem renderer for Other Ways to Connect
  const renderConnectEmblem = (id) => {
    switch (id) {
      case 'connect-wa':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="waGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            {/* Circular Chat Bubble with Tail */}
            <path
              d="M16 4C9.4 4 4 9.4 4 16C4 18.3 4.6 20.4 5.7 22.3L4 28L9.9 26.4C11.7 27.4 13.8 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4Z"
              fill="url(#waGrad)"
              stroke="#a7f3d0"
              strokeWidth="0.8"
            />
            {/* Subtle Inner Highlight */}
            <circle cx="16" cy="16" r="11" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.35" />
            {/* WhatsApp Handset Icon */}
            <path
              d="M21.5 19.3C21.2 19.2 19.7 18.5 19.4 18.4C19.1 18.3 18.9 18.2 18.7 18.5C18.5 18.8 17.9 19.5 17.7 19.7C17.5 19.9 17.3 19.9 17 19.8C16.7 19.7 15.7 19.3 14.5 18.2C13.6 17.4 13 16.4 12.8 16.1C12.6 15.8 12.8 15.7 12.9 15.5C13 15.4 13.2 15.2 13.4 15C13.6 14.8 13.7 14.6 13.8 14.4C13.9 14.2 13.8 14 13.7 13.9C13.6 13.8 13 12.3 12.8 11.7C12.6 11.1 12.3 11.2 12.1 11.2C11.9 11.2 11.7 11.2 11.5 11.2C11.3 11.2 10.9 11.3 10.6 11.6C10.3 12 9.5 12.8 9.5 14.4C9.5 16 10.7 17.6 10.8 17.8C11 18 13.1 21.2 16.3 22.6C19.5 24 19.5 23.6 20.1 23.5C20.7 23.4 21.9 22.8 22.2 22C22.5 21.2 22.5 20.5 22.4 20.4C22.3 20.2 22.1 20.1 21.5 19.3Z"
              fill="#ffffff"
            />
            {/* Active Online Indicator */}
            <circle cx="23.5" cy="8.5" r="2.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
          </svg>
        );

      case 'connect-call':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="callGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#fbbf24" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            {/* Pulse Wave Rings */}
            <circle cx="16" cy="16" r="13" stroke="#fde68a" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="16" cy="16" r="10" stroke="#fcd34d" strokeWidth="1.4" opacity="0.8" />
            {/* Central Badge */}
            <rect x="7" y="7" width="18" height="18" rx="6" fill="url(#callGrad)" stroke="#fef3c7" strokeWidth="0.8" />
            {/* Phone Handset */}
            <path
              d="M12.5 11.5C12.5 11.5 13.5 11 14.5 12C15.5 13 15 14 14.5 14.5C14.8 15.5 16.5 17.2 17.5 17.5C18 17 19 16.5 20 17.5C21 18.5 20.5 19.5 20.5 19.5C19.5 20.5 18 20.5 16 19.5C14 18.5 12.5 16.5 12 14.5C11.5 13 11.5 12.5 12.5 11.5Z"
              fill="#ffffff"
            />
            {/* Audio Waves */}
            <path d="M19.5 10.5C21 12 21 14 21 14" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M22 8C24.5 10.5 24.5 13.5 24.5 13.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10" cy="10" r="1.5" fill="#ffffff" />
          </svg>
        );

      case 'connect-desk':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="deskGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4338ca" />
              </linearGradient>
            </defs>
            {/* Outer Squircle */}
            <rect x="5" y="5" width="22" height="22" rx="7" fill="url(#deskGrad)" stroke="#c7d2fe" strokeWidth="0.8" />
            {/* Headset Arc */}
            <path d="M10 16C10 12.7 12.7 10 16 10C19.3 10 22 12.7 22 16" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
            {/* Earcups */}
            <rect x="8" y="14.5" width="4" height="6.5" rx="2" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
            <rect x="20" y="14.5" width="4" height="6.5" rx="2" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
            {/* Mic Boom */}
            <path d="M22 18.5V20.5C22 21.6 21.1 22.5 20 22.5H17.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="15" y="21.5" width="3" height="2" rx="1" fill="#fbbf24" />
            {/* Support Sparkle */}
            <path d="M16 6L16.8 7.8L18.5 8.5L16.8 9.2L16 11L15.2 9.2L13.5 8.5L15.2 7.8L16 6Z" fill="#fef08a" />
          </svg>
        );

      case 'connect-demo':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="demoGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="45%" stopColor="#0052cc" />
                <stop offset="100%" stopColor="#0a1a38" />
              </linearGradient>
            </defs>
            {/* Calendar Main Plate */}
            <rect x="5" y="7" width="22" height="20" rx="4" fill="url(#demoGrad)" stroke="#bfdbfe" strokeWidth="0.8" />
            {/* Top Bar */}
            <path d="M5 11C5 8.8 6.8 7 9 7H23C25.2 7 27 8.8 27 11V12.5H5V11Z" fill="#1e40af" />
            {/* Gold Rings */}
            <rect x="9" y="4.5" width="2.5" height="4.5" rx="1.25" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.6" />
            <rect x="15" y="4.5" width="2.5" height="4.5" rx="1.25" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.6" />
            <rect x="21" y="4.5" width="2.5" height="4.5" rx="1.25" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.6" />
            {/* Calendar Grid & Scheduled Star */}
            <rect x="8" y="16" width="3.5" height="3" rx="0.75" fill="#ffffff" fillOpacity="0.8" />
            <rect x="13.5" y="16" width="3.5" height="3" rx="0.75" fill="#ffffff" fillOpacity="0.8" />
            <rect x="19" y="16" width="5" height="5" rx="1.5" fill="#fbbf24" />
            <path d="M21.5 17L22 18.2L23.2 18.5L22.3 19.3L22.6 20.5L21.5 19.8L20.4 20.5L20.7 19.3L19.8 18.5L21 18.2L21.5 17Z" fill="#0a1a38" />
            <rect x="8" y="21.5" width="3.5" height="3" rx="0.75" fill="#ffffff" fillOpacity="0.8" />
            <rect x="13.5" y="21.5" width="3.5" height="3" rx="0.75" fill="#ffffff" fillOpacity="0.8" />
          </svg>
        );

      default:
        return null;
    }
  };

  const connectWays = [
    {
      id: 'connect-wa',
      title: 'WhatsApp Us',
      desc: 'Chat with our experts on WhatsApp for quick support.',
      tag: 'INSTANT CHAT',
      badgeGradient: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      gradientBorder: 'from-[#10b981] via-[#059669] to-[#047857]',
      ambientGradient: 'from-emerald-400/20 to-teal-400/5',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] hover:border-emerald-300',
      iconBoxBg: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-200/60',
      cardBg: 'bg-gradient-to-b from-white via-white to-emerald-50/20',
      titleHover: 'group-hover:text-emerald-600',
      btnType: 'link',
      btnHref: 'https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol,%20I%20would%20like%20to%20know%20more%20about%20your%20Tally%20solutions.',
      btnLabel: 'Chat on WhatsApp',
      btnIcon: MessageCircle,
      btnStyle: 'bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-300/80 hover:border-emerald-600 shadow-2xs hover:shadow-emerald-500/25',
    },
    {
      id: 'connect-call',
      title: 'Request a Callback',
      desc: "Share your details and we'll call you back shortly.",
      tag: 'QUICK RESPONSE',
      badgeGradient: 'bg-amber-50 text-amber-700 border-amber-200/80',
      gradientBorder: 'from-[#fbbf24] via-[#f59e0b] to-[#d97706]',
      ambientGradient: 'from-amber-400/20 to-yellow-400/5',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.18)] hover:border-amber-300',
      iconBoxBg: 'bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-200/60',
      cardBg: 'bg-gradient-to-b from-white via-white to-amber-50/20',
      titleHover: 'group-hover:text-amber-600',
      btnType: 'button',
      onClick: () => onOpenContactModal && onOpenContactModal(),
      btnLabel: 'Request Callback',
      btnIcon: PhoneCall,
      btnStyle: 'bg-amber-50 hover:bg-amber-500 text-amber-700 hover:text-white border border-amber-300/80 hover:border-amber-500 shadow-2xs hover:shadow-amber-500/25',
    },
    {
      id: 'connect-desk',
      title: 'Support Desk',
      desc: 'For existing customers, get dedicated priority support.',
      tag: '24/7 HELPDESK',
      badgeGradient: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      gradientBorder: 'from-[#818cf8] via-[#6366f1] to-[#4338ca]',
      ambientGradient: 'from-indigo-400/20 to-purple-400/5',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(99,102,241,0.18)] hover:border-indigo-300',
      iconBoxBg: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-200/60',
      cardBg: 'bg-gradient-to-b from-white via-white to-indigo-50/20',
      titleHover: 'group-hover:text-indigo-600',
      btnType: 'button',
      onClick: () => onOpenContactModal && onOpenContactModal(),
      btnLabel: 'Raise a Ticket →',
      btnIcon: Headphones,
      btnStyle: 'bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-300/80 hover:border-indigo-600 shadow-2xs hover:shadow-indigo-500/25',
    },
    {
      id: 'connect-demo',
      title: 'Book a Demo',
      desc: 'Schedule a free demo with our Tally solution experts.',
      tag: '1-ON-1 DEMO',
      badgeGradient: 'bg-blue-50 text-blue-700 border-blue-200/80',
      gradientBorder: 'from-[#38bdf8] via-[#0052cc] to-[#0a1a38]',
      ambientGradient: 'from-blue-400/20 to-sky-400/5',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(0,82,204,0.18)] hover:border-blue-300',
      iconBoxBg: 'bg-gradient-to-br from-blue-500/10 to-sky-500/5 border border-blue-200/60',
      cardBg: 'bg-gradient-to-b from-white via-white to-blue-50/20',
      titleHover: 'group-hover:text-[#0052cc]',
      btnType: 'button',
      onClick: () => onOpenDemoModal && onOpenDemoModal('Free Consultation'),
      btnLabel: 'Book Free Demo',
      btnIcon: Calendar,
      btnStyle: 'bg-blue-50 hover:bg-[#0052cc] text-[#0052cc] hover:text-white border border-blue-300/80 hover:border-[#0052cc] shadow-2xs hover:shadow-blue-500/25',
    },
  ];

  // Reusable card renderer for Other Ways to Connect
  const renderConnectCard = (item, isMobile = false) => {
    const BtnIcon = item.btnIcon;
    return (
      <div
        key={item.id}
        className={`group relative ${item.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${item.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        {/* 4px top gradient stripe */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${item.gradientBorder} transition-all duration-300`} />
        
        {/* Ambient colored corner glow */}
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        
        {/* Specular shimmer light sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        <div className="relative z-10 flex flex-col">
          {/* Top Row: Squircle 3D Emblem Container & Micro Badge */}
          <div className="w-full flex items-start justify-between gap-3 mb-4">
            <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${item.iconBoxBg}`}>
              {renderConnectEmblem(item.id)}
            </div>
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border ${item.badgeGradient}`}>
              {item.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${item.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6 min-h-[38px]">
            {item.desc}
          </p>
        </div>

        {/* Action Button */}
        <div className="relative z-10 w-full mt-auto pt-2">
          {item.btnType === 'link' ? (
            <a
              href={item.btnHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${item.btnStyle}`}
            >
              <BtnIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>{item.btnLabel}</span>
            </a>
          ) : (
            <button
              onClick={item.onClick}
              className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${item.btnStyle}`}
            >
              <BtnIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>{item.btnLabel}</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* 1. TOP SECTION: HERO & CONTACT FORM SPLIT */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-16 bg-gradient-to-b from-slate-50/70 via-white to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading, intro & Direct Contact Details */}
            <div className="lg:col-span-5 relative space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 text-[#0052cc] text-xs font-bold tracking-wider uppercase">
                WE'RE HERE TO HELP
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0a1a38] leading-[1.15]">
                Let's Connect & . <br />
                <span className="text-[#0052cc]">Grow Together</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                Have questions about Tally solutions, services or support? <br className="hidden sm:inline" />
                Our experts are ready to assist you.
              </p>

              {/* 3 Contact Info Blocks */}
              <div className="space-y-5 pt-2">
                
                {/* 1. Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Call Us (Patna Head Office)</div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href="tel:+919386896383"
                        className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                      >
                        +91-9386896383
                      </a>
                      <span className="text-slate-300 hidden sm:inline">|</span>
                      <a
                        href="tel:+917004128603"
                        className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                      >
                        +91-7004128603
                      </a>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Branch (Sasaram): <a href="tel:+919060819603" className="font-semibold text-blue-700 hover:underline">+91-9060819603</a>
                    </div>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Email Us</div>
                    <a
                      href="mailto:info@sysnsol.in"
                      className="text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                    >
                      info@sysnsol.in
                    </a>
                  </div>
                </div>

                {/* 3. Working Hours */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Working Hours</div>
                    <div className="text-base font-bold text-slate-900">
                      Mon - Sat : 9:30 AM - 7:00 PM
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Dot Grid Pattern */}
              <div className="pt-4 opacity-40 select-none pointer-events-none">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#0052cc" />
                  </pattern>
                  <rect width="120" height="60" fill="url(#dotPattern)" />
                </svg>
              </div>

            </div>

            {/* Right Column: "Send Us a Message" Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1a38] tracking-tight">
                    Send Us a Message
                  </h2>
                  <div className="w-10 h-1 bg-[#0052cc] rounded-full mt-2"></div>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Your message has been sent successfully. One of our Tally certified consultants will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-[#0052cc] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="TallyPrime License">TallyPrime License / Purchase</option>
                          <option value="Implementation & Customization">Implementation & Customization</option>
                          <option value="AMC & Dedicated Support">AMC & Support Plan</option>
                          <option value="Cloud Accounting">Tally on Cloud</option>
                          <option value="Other">Other Query</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message*"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Row 4: Agreement Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#0052cc] border-slate-300 rounded focus:ring-[#0052cc] cursor-pointer"
                      />
                      <label htmlFor="agreeTerms" className="text-xs text-slate-600 select-none cursor-pointer">
                        I agree to the{' '}
                        <a href="#privacy" className="text-[#0052cc] font-medium hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="#terms" className="text-[#0052cc] font-medium hover:underline">
                          Terms & Conditions
                        </a>
                        .
                      </label>
                    </div>

                    {/* Row 5: Submit button & Security Badge */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0042a4] text-white text-sm font-semibold px-7 py-3 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Send Message</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-[#0052cc]" />
                        <span>Your information is safe with us.</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MIDDLE SECTION: VISIT OUR OFFICES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0052cc] uppercase tracking-wider">
              OUR LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight mt-1.5">
              Visit Our Offices
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Walk in or connect directly with our Tally certified teams at our Patna Head Office or Sasaram Branch.
            </p>
          </div>

          {/* Dual Offices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            
            {/* Card 1: Head Office (Patna, Bihar) */}
            <div className="bg-[#082a63] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-blue-900/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold tracking-wide uppercase border border-blue-400/30">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Head Office
                  </span>
                  <span className="text-xs text-blue-300 font-medium">Patna, Bihar</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
                  Syn N Sol — Patna
                </h3>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Office Address</div>
                      <p className="text-slate-100 leading-relaxed font-medium">
                        1st Floor, Madhuri Bhawan, Jamal Road,<br />
                        Patna, Bihar – 800001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Contact Numbers</div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-100 font-bold">
                        <a href="tel:+919386896383" className="hover:text-blue-300 transition-colors">+91-9386896383</a>
                        <span className="text-blue-400/60">/</span>
                        <a href="tel:+917004128603" className="hover:text-blue-300 transition-colors">+91-7004128603</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Email Support</div>
                      <a href="mailto:info@sysnsol.in" className="text-slate-100 font-bold hover:text-blue-300 transition-colors">
                        info@sysnsol.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Office Hours</div>
                      <div className="text-slate-200">Mon – Sat: 9:30 AM to 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-blue-800/60 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Madhuri+Bhawan,+Jamal+Road,+Patna,+Bihar+800001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol%20Patna%20Office,%20I%20need%20assistance%20with%20Tally."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Branch Office (Sasaram, Rohtas) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md border border-slate-200/90 relative overflow-hidden group transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Branch Office
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Sasaram, Rohtas</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0a1a38] tracking-tight mb-4">
                  Syn N Sol — Sasaram
                </h3>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Office Address</div>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        Kumar Apartment, Kailash Nagar,<br />
                        Old GT Road, Sasaram, Rohtas – 821115
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Contact Number</div>
                      <div className="text-slate-900 font-bold">
                        <a href="tel:+919060819603" className="hover:text-[#0052cc] transition-colors">+91-9060819603</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Email Support</div>
                      <a href="mailto:info@sysnsol.in" className="text-slate-900 font-bold hover:text-[#0052cc] transition-colors">
                        info@sysnsol.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Office Hours</div>
                      <div className="text-slate-600">Mon – Sat: 9:30 AM to 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Kumar+Apartment,+Kailash+Nagar,+Old+GT+Road,+Sasaram,+Rohtas+821115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/919060819603?text=Hello%20Syn%20N%20Sol%20Sasaram%20Office,%20I%20need%20assistance%20with%20Tally."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Unified Location Map Banner */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0052cc] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0a1a38]">
                  Serving Businesses Across Bihar, Jharkhand & Pan-India
                </div>
                <div className="text-xs text-slate-500 leading-snug">
                  On-site visits available in Patna & Sasaram regions • 100% remote instant support pan-India.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                Patna Pin: 800001
              </span>
              <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                Sasaram Pin: 821115
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BOTTOM SECTION: OTHER WAYS TO CONNECT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>FAST & RELIABLE SUPPORT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight mb-2">
              Other Ways to Connect
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Choose your preferred channel to get in touch with our certified Tally experts.
            </p>
          </div>

          {/* Desktop 4-column Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectWays.map((item) => renderConnectCard(item, false))}
          </div>

          {/* Mobile Auto-Sliding Row Carousel */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.8} gap="gap-5">
              {connectWays.map((item) => renderConnectCard(item, true))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
