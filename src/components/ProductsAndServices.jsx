import React from 'react';
import AutoSlidingRow from './AutoSlidingRow';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ProductsAndServices = ({ onNavigate, onSelectService }) => {
  const items = [
    {
      id: 'software',
      title: 'Tally Software',
      desc: 'Latest TallyPrime editions for every business need.',
      linkText: 'Explore Products',
      href: '#products',
      tag: 'Flagship ERP',
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/15 via-sky-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-amber-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400 group-hover:shadow-blue-500/25',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
    },
    {
      id: 'implementation',
      title: 'Implementation',
      desc: 'Complete setup, data migration & configuration.',
      linkText: 'Learn More',
      href: '#services',
      tag: 'Zero Downtime',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(16,185,129,0.15)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/15 via-teal-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-emerald-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:shadow-emerald-500/25',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      titleHover: 'group-hover:text-emerald-600',
    },
    {
      id: 'customization',
      title: 'Customization',
      desc: 'Tailor-made solutions as per your workflow.',
      linkText: 'Learn More',
      href: '#services',
      tag: 'TDL Modules',
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/15 via-indigo-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-purple-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400 group-hover:shadow-purple-500/25',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Access your data securely from anywhere, anytime.',
      linkText: 'Learn More',
      href: '#solutions',
      tag: 'Anywhere Access',
      badgeGradient: 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white',
      gradientBorder: 'from-sky-500 via-cyan-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(14,165,233,0.15)] hover:border-sky-400/80',
      ambientGradient: 'from-sky-500/15 via-cyan-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-sky-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-200/90 shadow-sky-500/10 group-hover:border-sky-400 group-hover:shadow-sky-500/25',
      arrowBtnStyle: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
      titleHover: 'group-hover:text-sky-600',
    },
    {
      id: 'gst',
      title: 'GST Solutions',
      desc: 'Stay 100% compliant with latest GST regulations.',
      linkText: 'Learn More',
      href: '#solutions',
      tag: '100% Compliant',
      badgeGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-teal-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.15)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/15 via-emerald-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-teal-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400 group-hover:shadow-teal-500/25',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      titleHover: 'group-hover:text-teal-600',
    },
    {
      id: 'payroll',
      title: 'Payroll Solutions',
      desc: 'Simplify payroll & manage your employees better.',
      linkText: 'Learn More',
      href: '#solutions',
      tag: 'Salary & PF / ESI',
      badgeGradient: 'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white',
      gradientBorder: 'from-rose-500 via-pink-400 to-orange-400',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(244,63,94,0.15)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-rose-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400 group-hover:shadow-rose-500/25',
      arrowBtnStyle: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      titleHover: 'group-hover:text-rose-600',
    },
    {
      id: 'support',
      title: 'Support & AMC',
      desc: 'Reliable support with AMC plans & TSS.',
      linkText: 'Explore Plans',
      href: '#services',
      tag: '24/7 Dedicated',
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(79,70,229,0.15)] hover:border-indigo-400/80',
      ambientGradient: 'from-blue-600/15 via-indigo-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-indigo-200/90 shadow-indigo-500/10 group-hover:border-indigo-400 group-hover:shadow-indigo-500/25',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
    },
    {
      id: 'training',
      title: 'Training & Certification',
      desc: 'Corporate training, employee training & Tally certification.',
      linkText: 'Learn More',
      href: '#services',
      tag: 'Official Tally Cert',
      badgeGradient: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white',
      gradientBorder: 'from-amber-400 via-yellow-400 to-orange-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(245,158,11,0.16)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/15 via-yellow-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-amber-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400 group-hover:shadow-amber-500/25',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      titleHover: 'group-hover:text-amber-600',
    },
  ];

  // Render authentic branded SVG icons matching brand colors, logo themes & rich gradients
  const renderIcon = (id, iconBoxBg) => {
    switch (id) {
      case 'software':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="tallyTopBlue" x1="9" y1="2" x2="23" y2="10" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="tallyLeftBlue" x1="9" y1="6" x2="16" y2="17" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="tallyRightBlue" x1="16" y1="6" x2="23" y2="17" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0a1a38" />
                </linearGradient>

                <linearGradient id="tallyTopAmber" x1="2" y1="15" x2="15" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient id="tallyLeftAmber" x1="2" y1="18.5" x2="8.5" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="tallyRightAmber" x1="8.5" y1="18.5" x2="15" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>

                <linearGradient id="tallyTopSky" x1="17" y1="15" x2="30" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <linearGradient id="tallyLeftSky" x1="17" y1="18.5" x2="23.5" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="tallyRightSky" x1="23.5" y1="18.5" x2="30" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0369a1" />
                  <stop offset="100%" stopColor="#0c4a6e" />
                </linearGradient>
              </defs>

              {/* Top Isometric Cube (Royal Blue / Navy) */}
              <polygon points="16,2 23,6 16,10 9,6" fill="url(#tallyTopBlue)" />
              <polygon points="9,6 16,10 16,17 9,13" fill="url(#tallyLeftBlue)" />
              <polygon points="16,10 23,6 23,13 16,17" fill="url(#tallyRightBlue)" />
              <line x1="16" y1="10" x2="16" y2="17" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.5" />
              <line x1="9" y1="6" x2="16" y2="10" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" />

              {/* Bottom-Left Isometric Cube (Tally Golden Amber) */}
              <polygon points="8.5,15 15,18.5 8.5,22 2,18.5" fill="url(#tallyTopAmber)" />
              <polygon points="2,18.5 8.5,22 8.5,29 2,25.5" fill="url(#tallyLeftAmber)" />
              <polygon points="8.5,22 15,18.5 15,25.5 8.5,29" fill="url(#tallyRightAmber)" />
              <line x1="8.5" y1="22" x2="8.5" y2="29" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.5" />
              <line x1="2" y1="18.5" x2="8.5" y2="22" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" />

              {/* Bottom-Right Isometric Cube (Electric Sky Blue) */}
              <polygon points="23.5,15 30,18.5 23.5,22 17,18.5" fill="url(#tallyTopSky)" />
              <polygon points="17,18.5 23.5,22 23.5,29 17,25.5" fill="url(#tallyLeftSky)" />
              <polygon points="23.5,22 30,18.5 30,25.5 23.5,29" fill="url(#tallyRightSky)" />
              <line x1="23.5" y1="22" x2="23.5" y2="29" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.5" />
              <line x1="17" y1="18.5" x2="23.5" y2="22" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" />
            </svg>
          </div>
        );

      case 'implementation':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="implTopNode" x1="9" y1="2.5" x2="23" y2="12.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="implBotNode1" x1="2" y1="20" x2="14" y2="29.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
                <linearGradient id="implBotNode2" x1="18" y1="20" x2="30" y2="29.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>

              {/* Connecting Network Bus */}
              <path d="M16 12.5V17M16 17H7.5V20M16 17H24.5V20" stroke="#10b981" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="17" r="1.8" fill="#34d399" />

              {/* Top Central Hub Node */}
              <rect x="9" y="2.5" width="14" height="10" rx="3" fill="url(#implTopNode)" stroke="#a7f3d0" strokeWidth="0.6" />
              <line x1="12" y1="5.5" x2="18" y2="5.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="12" y1="8.5" x2="16" y2="8.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
              <circle cx="19.5" cy="8.5" r="1" fill="#fef08a" />

              {/* Bottom-Left Node */}
              <rect x="2" y="20" width="11" height="9.5" rx="2.5" fill="url(#implBotNode1)" stroke="#a7f3d0" strokeWidth="0.5" />
              <line x1="5" y1="23.5" x2="10" y2="23.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="26.5" r="0.8" fill="#ffffff" />

              {/* Bottom-Right Node */}
              <rect x="19" y="20" width="11" height="9.5" rx="2.5" fill="url(#implBotNode2)" stroke="#a7f3d0" strokeWidth="0.5" />
              <line x1="22" y1="23.5" x2="27" y2="23.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="24.5" cy="26.5" r="0.8" fill="#ffffff" />
            </svg>
          </div>
        );

      case 'customization':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="customPuzzleGrad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="30%" stopColor="#c084fc" />
                  <stop offset="70%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <path
                d="M6 9C6 7.343 7.343 6 9 6H13C13 4.343 14.343 3 16 3C17.657 3 19 4.343 19 6H23C24.657 6 26 7.343 26 9V13C27.657 13 29 14.343 29 16C29 17.657 27.657 19 26 19V23C26 24.657 24.657 26 23 26H19C19 24.343 17.657 23 16 23C14.343 23 13 24.343 13 26H9C7.343 26 6 24.657 6 23V19C4.343 19 3 17.657 3 16C3 14.343 4.343 13 6 13V9Z"
                fill="url(#customPuzzleGrad)"
                stroke="#f3e8ff"
                strokeWidth="0.8"
              />
              {/* TDL brackets glyph inside */}
              <path d="M12 13.5L9 16L12 18.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 13.5L23 16L20 18.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.5 12L14.5 20" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'cloud':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="cloudGrad1" x1="2" y1="3" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="40%" stopColor="#38bdf8" />
                  <stop offset="80%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <path
                d="M8.5 24C5.186 24 2.5 21.314 2.5 18C2.5 14.92 4.805 12.38 7.82 12.04C8.57 7.44 12.56 4 17.43 4C22.88 4 27.29 8.41 27.29 13.86C29.93 14.45 31.82 16.8 31.82 19.6C31.82 22.77 29.25 25.33 26.08 25.33H9"
                fill="url(#cloudGrad1)"
                stroke="#e0f2fe"
                strokeWidth="0.8"
              />
              <path d="M16.5 11.5V19.5M16.5 11.5L12.5 15.5M16.5 11.5L20.5 15.5" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8.5" cy="18.5" r="1.5" fill="#ffffff" opacity="0.9" />
              <circle cx="24.5" cy="20" r="1.5" fill="#ffffff" opacity="0.9" />
            </svg>
          </div>
        );

      case 'gst':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="gstShieldGrad" x1="5" y1="2.5" x2="27" y2="29.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#5eead4" />
                  <stop offset="40%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <path
                d="M16 2.5L5 7.2V14.5C5 22 9.5 28.2 16 30.5C22.5 28.2 27 22 27 14.5V7.2L16 2.5Z"
                fill="url(#gstShieldGrad)"
                stroke="#ccfbf1"
                strokeWidth="0.8"
              />
              <path d="M10.5 16L14.5 20L22 12" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="16.5" r="8.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            </svg>
          </div>
        );

      case 'payroll':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="payrollGrad" x1="3" y1="4" x2="29" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="40%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
              </defs>
              {/* Background Colleague Avatar */}
              <circle cx="21" cy="9.5" r="3.5" fill="#fca5a5" />
              <path d="M17 20C17 17 19.2 15.5 22 15.5C24.8 15.5 27 17 27 20" fill="#fca5a5" />

              {/* Primary Employee Avatar */}
              <circle cx="11.5" cy="10" r="4.5" fill="url(#payrollGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
              <path d="M4 25.5C4 20.5 7.5 18 11.5 18C15.5 18 19 20.5 19 25.5" fill="url(#payrollGrad)" stroke="#ffe4e6" strokeWidth="0.8" />

              {/* Front Salary / Currency Badge */}
              <circle cx="23" cy="22.5" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <text x="23" y="25.5" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="system-ui, sans-serif">₹</text>
            </svg>
          </div>
        );

      case 'support':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="supportGrad" x1="3" y1="4" x2="29" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
              {/* Headband arch */}
              <path d="M5.5 16C5.5 9.5 10.2 4.5 16 4.5C21.8 4.5 26.5 9.5 26.5 16" stroke="url(#supportGrad)" strokeWidth="3" strokeLinecap="round" />

              {/* Left Earcup */}
              <rect x="3" y="14" width="5.5" height="10" rx="2.5" fill="url(#supportGrad)" stroke="#dbeafe" strokeWidth="0.8" />

              {/* Right Earcup */}
              <rect x="23.5" y="14" width="5.5" height="10" rx="2.5" fill="url(#supportGrad)" stroke="#dbeafe" strokeWidth="0.8" />

              {/* Mic boom */}
              <path d="M25 21C25 25.5 21 27.5 16 27.5H13.5" stroke="#4f46e5" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="12" cy="27.5" r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="1" />

              {/* 24/7 Signal waves */}
              <path d="M9 10C11 8.5 13.5 7.5 16 7.5C18.5 7.5 21 8.5 23 10" stroke="#38bdf8" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
            </svg>
          </div>
        );

      case 'training':
        return (
          <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="certCapGrad" x1="3" y1="3" x2="29" y2="18" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="40%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
              {/* Cap Diamond Top */}
              <polygon points="16,3 29,9.5 16,16 3,9.5" fill="url(#certCapGrad)" stroke="#fef3c7" strokeWidth="0.8" />
              {/* Cap Base / Skullcap */}
              <path d="M8 12.5V19.5C8 23 11.5 25.5 16 25.5C20.5 25.5 24 23 24 19.5V12.5" fill="#b45309" opacity="0.9" />
              {/* Hanging Tassel */}
              <path d="M25.5 11.5V21.5" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="25.5" cy="22.5" r="1.6" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.6" />
              {/* Center Cap Button */}
              <circle cx="16" cy="9.5" r="1.8" fill="#ffffff" />
              {/* Official Rosette Ribbon below */}
              <path d="M12.5 25.5L16 29L19.5 25.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  // Reusable card renderer with rich gradient borders, ambient glow & micro-animations
  const renderCard = (item, isMobile = false) => {
    return (
      <div
        key={item.id}
        onClick={() => {
          if (item.id === 'software' && onNavigate) {
            onNavigate('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (item.href === '#services' && onNavigate) {
            onNavigate('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (item.href === '#solutions' && onNavigate) {
            onNavigate('solutions');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (onSelectService) {
            onSelectService(item);
          }
        }}
        className={`group relative ${item.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${item.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        {/* 1. Top Gradient Accent Stripe */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${item.gradientBorder} transition-all duration-300`} />

        {/* 2. Ambient Gradient Glow in Corner */}
        <div className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${item.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

        {/* 3. Specular Shimmer Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* 4. Card Header: Icon Container + Micro Tag Badge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            {renderIcon(item.id, item.iconBoxBg)}
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border border-white/60 ${item.badgeGradient}`}>
              {item.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${item.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
            {item.desc}
          </p>
        </div>

        {/* 5. Card Footer: Action Link + Gradient Arrow Circle */}
        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between">
          <span className={`text-xs font-bold text-[#0a1a38] ${item.titleHover} transition-colors`}>
            {item.linkText}
          </span>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${item.arrowBtnStyle}`}>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/40 to-white relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Heading with Enterprise Pill */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>ENTERPRISE SOLUTIONS & TALLY SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1a38] tracking-tight">
            Our Products & Services
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2.5 max-w-xl mx-auto leading-relaxed">
            Comprehensive TallyPrime software licenses, bespoke customizations, cloud hosting, and certified corporate support tailored for your business.
          </p>
        </div>

        {/* Desktop View: 4x2 Static Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => renderCard(item, false))}
        </div>

        {/* Mobile View: Single Row Auto-Sliding Cards */}
        <div className="block lg:hidden">
          <AutoSlidingRow speed={0.9} gap="gap-5">
            {items.map((item) => renderCard(item, true))}
          </AutoSlidingRow>
        </div>

      </div>
    </section>
  );
};

export default ProductsAndServices;