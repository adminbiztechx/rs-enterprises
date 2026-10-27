import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import ResourceDetailModal from '../components/ResourceDetailModal';
import {
  Search,
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Download,
  FileCheck,
  Calculator,
  Sliders,
  Boxes,
  Users,
  Landmark,
  ShieldCheck,
  Cloud,
  TrendingUp,
  FileText,
  Video,
  BookOpen,
  ClipboardCheck,
  PlayCircle,
  CloudDownload,
  Mail,
  Shield,
  Settings,
  Compass,
  CheckCircle2,
  FileSpreadsheet,
  Monitor,
  Sparkles
} from 'lucide-react';

export const ResourcesPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    {
      id: 'gst-updates',
      name: 'GST Updates',
      desc: 'Latest circulars & returns',
      tag: 'Circulars & HSN',
      icon: FileCheck,
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(37,99,235,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-indigo-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      titleHover: 'group-hover:text-blue-600',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      id: 'tally-updates',
      name: 'Tally Updates',
      desc: 'Releases & new features',
      tag: 'TallyPrime 5.0',
      iconType: 'tally-3d',
      badgeGradient: 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white',
      gradientBorder: 'from-rose-500 via-red-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(225,29,72,0.18)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/20 via-red-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-rose-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50/90 via-white to-amber-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400',
      titleHover: 'group-hover:text-rose-600',
      arrowBtnStyle: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
    },
    {
      id: 'accounting-finance',
      name: 'Accounting & Finance',
      desc: 'MIS, balance sheet & audit',
      tag: 'MIS & Ledgers',
      icon: Calculator,
      badgeGradient: 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.18)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/20 via-orange-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      titleHover: 'group-hover:text-amber-600',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    },
    {
      id: 'business-automation',
      name: 'Business Automation',
      desc: 'Workflows & integrations',
      tag: 'Auto Workflows',
      icon: Sliders,
      badgeGradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white',
      gradientBorder: 'from-indigo-500 via-purple-500 to-cyan-400',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(79,70,229,0.18)] hover:border-indigo-400/80',
      ambientGradient: 'from-indigo-500/20 via-purple-500/15 to-cyan-500/10',
      cardBg: 'bg-gradient-to-b from-indigo-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/70 border-2 border-indigo-200/90 shadow-indigo-500/10 group-hover:border-indigo-400',
      titleHover: 'group-hover:text-indigo-600',
      arrowBtnStyle: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management',
      desc: 'Batches, godowns & stock',
      tag: 'Stock & Batches',
      icon: Boxes,
      badgeGradient: 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(147,51,234,0.18)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/20 via-violet-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-violet-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      titleHover: 'group-hover:text-purple-600',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    },
    {
      id: 'payroll-management',
      name: 'Payroll Management',
      desc: 'Salary slips & PF/ESI laws',
      tag: 'Salary & PF/ESI',
      icon: Users,
      badgeGradient: 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white',
      gradientBorder: 'from-sky-500 via-blue-500 to-indigo-600',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(2,132,199,0.18)] hover:border-sky-400/80',
      ambientGradient: 'from-sky-500/20 via-blue-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-sky-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-sky-50/90 via-white to-blue-50/70 border-2 border-sky-200/90 shadow-sky-500/10 group-hover:border-sky-400',
      titleHover: 'group-hover:text-sky-600',
      arrowBtnStyle: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    },
    {
      id: 'taxation',
      name: 'Taxation',
      desc: 'TDS, TCS & corporate tax',
      tag: 'TDS & Income Tax',
      icon: Landmark,
      badgeGradient: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-amber-400',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/20 via-teal-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      titleHover: 'group-hover:text-emerald-600',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    },
    {
      id: 'compliance',
      name: 'Compliance',
      desc: 'MCA, audit trail & rules',
      tag: 'MCA & Audit Trail',
      icon: ShieldCheck,
      badgeGradient: 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(29,78,216,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-indigo-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      titleHover: 'group-hover:text-blue-600',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      id: 'cloud-accounting',
      name: 'Cloud Accounting',
      desc: 'Anywhere access & security',
      tag: 'Anywhere 24/7',
      icon: Cloud,
      badgeGradient: 'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white',
      gradientBorder: 'from-cyan-500 via-blue-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(6,182,212,0.18)] hover:border-cyan-400/80',
      ambientGradient: 'from-cyan-500/20 via-blue-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-cyan-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-cyan-50/90 via-white to-blue-50/70 border-2 border-cyan-200/90 shadow-cyan-500/10 group-hover:border-cyan-400',
      titleHover: 'group-hover:text-cyan-600',
      arrowBtnStyle: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
    },
    {
      id: 'msme-growth',
      name: 'MSME Growth',
      desc: 'Working capital & scaling',
      tag: 'Scaling & Growth',
      icon: TrendingUp,
      badgeGradient: 'bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(20,184,166,0.18)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/20 via-emerald-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-teal-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400',
      titleHover: 'group-hover:text-teal-600',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      desc: 'Real enterprise success',
      tag: 'Success Stories',
      icon: FileText,
      badgeGradient: 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white',
      gradientBorder: 'from-orange-500 via-amber-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(249,115,22,0.18)] hover:border-orange-400/80',
      ambientGradient: 'from-orange-500/20 via-amber-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-orange-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-orange-50/90 via-white to-amber-50/70 border-2 border-orange-200/90 shadow-orange-500/10 group-hover:border-orange-400',
      titleHover: 'group-hover:text-orange-600',
      arrowBtnStyle: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      id: 'video-tutorials',
      name: 'Video Tutorials',
      desc: 'Step-by-step masterclasses',
      tag: 'Video Guides',
      icon: Video,
      badgeGradient: 'bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white',
      gradientBorder: 'from-violet-500 via-purple-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(139,92,246,0.18)] hover:border-violet-400/80',
      ambientGradient: 'from-violet-500/20 via-purple-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-violet-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-violet-50/90 via-white to-purple-50/70 border-2 border-violet-200/90 shadow-violet-500/10 group-hover:border-violet-400',
      titleHover: 'group-hover:text-violet-600',
      arrowBtnStyle: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
    }
  ];

  // Custom 3D SVG emblem renderer for all 12 Resource categories
  const renderCategoryIcon = (id, FallbackIcon) => {
    switch (id) {
      case 'gst-updates':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="gstDoc" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="gstRibbon" x1="16" y1="16" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect x="5" y="3" width="18" height="24" rx="2.5" fill="url(#gstDoc)" stroke="#bfdbfe" strokeWidth="0.8" />
            <line x1="8" y1="8" x2="16" y2="8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="8" y1="12" x2="19" y2="12" stroke="#bfdbfe" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="8" y1="16" x2="15" y2="16" stroke="#bfdbfe" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M17 3V8H23" fill="#60a5fa" />
            <circle cx="21" cy="21" r="5" fill="url(#gstRibbon)" stroke="#ffffff" strokeWidth="1" />
            <path d="M19.5 21L20.8 22.3L23 19.8" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'tally-updates':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="tallyTopR" x1="8" y1="3" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#0052cc" />
              </linearGradient>
              <linearGradient id="tallyLeftR" x1="4" y1="11" x2="16" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0052cc" />
                <stop offset="100%" stopColor="#0a1a38" />
              </linearGradient>
              <linearGradient id="tallyRightR" x1="16" y1="11" x2="28" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <path d="M16 3L27 9.5L16 16L5 9.5L16 3Z" fill="url(#tallyTopR)" stroke="#ffffff" strokeWidth="0.8" />
            <path d="M5 9.5L16 16V29L5 22.5V9.5Z" fill="url(#tallyLeftR)" stroke="#ffffff" strokeWidth="0.8" />
            <path d="M16 16L27 9.5V22.5L16 29V16Z" fill="url(#tallyRightR)" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="16" cy="16" r="3.2" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
            <text x="16" y="18" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#ffffff">T</text>
          </svg>
        );

      case 'accounting-finance':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="calcGradR" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect x="6" y="3" width="20" height="26" rx="4" fill="url(#calcGradR)" stroke="#fef3c7" strokeWidth="0.8" />
            <rect x="8.5" y="6" width="15" height="6.5" rx="1.5" fill="#0f172a" />
            <text x="21" y="11" textAnchor="end" fontSize="5" fontWeight="bold" fill="#34d399">88,500</text>
            <rect x="8.5" y="15" width="3.5" height="3" rx="0.8" fill="#ffffff" />
            <rect x="14.2" y="15" width="3.5" height="3" rx="0.8" fill="#ffffff" />
            <rect x="20" y="15" width="3.5" height="3" rx="0.8" fill="#1e3a8a" />
            <rect x="8.5" y="19.5" width="3.5" height="3" rx="0.8" fill="#ffffff" />
            <rect x="14.2" y="19.5" width="3.5" height="3" rx="0.8" fill="#ffffff" />
            <rect x="20" y="19.5" width="3.5" height="3" rx="0.8" fill="#1e3a8a" />
            <rect x="8.5" y="24" width="3.5" height="3" rx="0.8" fill="#ffffff" />
            <rect x="14.2" y="24" width="9.3" height="3" rx="0.8" fill="#0052cc" />
          </svg>
        );

      case 'business-automation':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="autoGearR" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4338ca" />
              </linearGradient>
            </defs>
            <rect x="7" y="5" width="2" height="22" rx="1" fill="#c7d2fe" />
            <rect x="15" y="5" width="2" height="22" rx="1" fill="#c7d2fe" />
            <rect x="23" y="5" width="2" height="22" rx="1" fill="#c7d2fe" />
            <circle cx="8" cy="11" r="3.5" fill="url(#autoGearR)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="16" cy="20" r="3.5" fill="url(#autoGearR)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="24" cy="9" r="3.5" fill="url(#autoGearR)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="8" cy="11" r="1.2" fill="#fbbf24" />
            <circle cx="16" cy="20" r="1.2" fill="#fbbf24" />
            <circle cx="24" cy="9" r="1.2" fill="#fbbf24" />
          </svg>
        );

      case 'inventory-management':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="boxTopR" x1="6" y1="4" x2="26" y2="14" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
              <linearGradient id="boxLftR" x1="6" y1="14" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#581c87" />
              </linearGradient>
              <linearGradient id="boxRgtR" x1="16" y1="14" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            <path d="M16 4L26 9.5L16 15L6 9.5L16 4Z" fill="url(#boxTopR)" stroke="#f3e8ff" strokeWidth="0.8" />
            <path d="M6 9.5L16 15V27L6 21.5V9.5Z" fill="url(#boxLftR)" stroke="#f3e8ff" strokeWidth="0.8" />
            <path d="M16 15L26 9.5V21.5L16 27V15Z" fill="url(#boxRgtR)" stroke="#f3e8ff" strokeWidth="0.8" />
            <line x1="16" y1="4" x2="16" y2="15" stroke="#f59e0b" strokeWidth="2.2" />
            <line x1="16" y1="15" x2="16" y2="22" stroke="#f59e0b" strokeWidth="2.2" />
            <rect x="18" y="18" width="5" height="3" rx="0.5" fill="#ffffff" />
          </svg>
        );

      case 'payroll-management':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="payGradR" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="10" r="4.5" fill="url(#payGradR)" stroke="#e0f2fe" strokeWidth="0.8" />
            <path d="M9 24C9 20 12 18 16 18C20 18 23 20 23 24V26H9V24Z" fill="url(#payGradR)" stroke="#e0f2fe" strokeWidth="0.8" />
            <circle cx="8" cy="12" r="3" fill="#bae6fd" />
            <path d="M3 24C3 21 5.5 19.5 8 19.5C9.5 19.5 10.8 20.1 11.5 21" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="23" cy="21" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
            <text x="23" y="23.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ffffff">₹</text>
          </svg>
        );

      case 'taxation':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="taxGradR" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <path d="M16 4L4 10H28L16 4Z" fill="url(#taxGradR)" stroke="#d1fae5" strokeWidth="0.8" />
            <rect x="5" y="10" width="22" height="2" fill="#047857" />
            <rect x="7" y="12" width="2.5" height="11" rx="0.5" fill="url(#taxGradR)" />
            <rect x="12" y="12" width="2.5" height="11" rx="0.5" fill="url(#taxGradR)" />
            <rect x="17.5" y="12" width="2.5" height="11" rx="0.5" fill="url(#taxGradR)" />
            <rect x="22.5" y="12" width="2.5" height="11" rx="0.5" fill="url(#taxGradR)" />
            <rect x="4" y="23" width="24" height="2" fill="#047857" />
            <rect x="2" y="25" width="28" height="3" rx="1" fill="url(#taxGradR)" />
            <circle cx="16" cy="8" r="1.5" fill="#f59e0b" />
          </svg>
        );

      case 'compliance':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="compGradR" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <path d="M16 3L5 7.5V14.5C5 22 9.5 27.5 16 30C22.5 27.5 27 22 27 14.5V7.5L16 3Z" fill="url(#compGradR)" stroke="#bfdbfe" strokeWidth="0.8" />
            <path d="M16 5.5L7.5 9V14.5C7.5 20.5 11 25 16 27.5V5.5Z" fill="#3b82f6" opacity="0.35" />
            <path d="M11 15.5L14.5 19L21.5 12" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="22" cy="7" r="1.5" fill="#f59e0b" />
          </svg>
        );

      case 'cloud-accounting':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="cloudGradR" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <path
              d="M8.5 24C5.186 24 2.5 21.314 2.5 18C2.5 14.92 4.805 12.38 7.82 12.04C8.57 7.44 12.56 4 17.43 4C22.88 4 27.29 8.41 27.29 13.86C29.93 14.45 31.82 16.8 31.82 19.6C31.82 22.77 29.25 25.33 26.08 25.33H9"
              fill="url(#cloudGradR)"
              stroke="#cffafe"
              strokeWidth="0.8"
            />
            <path d="M16 12V20M16 12L12.5 15.5M16 12L19.5 15.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="18" r="1.2" fill="#ffffff" opacity="0.9" />
            <circle cx="24" cy="19" r="1.2" fill="#ffffff" opacity="0.9" />
          </svg>
        );

      case 'msme-growth':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="msmeGradR" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#115e59" />
              </linearGradient>
            </defs>
            <rect x="5" y="19" width="4.5" height="9" rx="1.2" fill="#99f6e4" />
            <rect x="13.5" y="13" width="4.5" height="15" rx="1.2" fill="#2dd4bf" />
            <rect x="22" y="7" width="4.5" height="21" rx="1.2" fill="url(#msmeGradR)" />
            <path d="M4 17L12 11L18 14L27 4" stroke="#0f766e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 4H27V10" stroke="#0f766e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="27" cy="4" r="2.2" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          </svg>
        );

      case 'case-studies':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="csGradR" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>
            <path d="M4 7C4 5.9 4.9 5 6 5H12L15 8H26C27.1 8 28 8.9 28 10V25C28 26.1 27.1 27 26 27H6C4.9 27 4 26.1 4 25V7Z" fill="url(#csGradR)" stroke="#ffedd5" strokeWidth="0.8" />
            <rect x="8" y="11" width="16" height="13" rx="1.5" fill="#ffffff" />
            <line x1="11" y1="14" x2="19" y2="14" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="11" y1="17" x2="21" y2="17" stroke="#cbd5e1" strokeWidth="1" strokeLinecap="round" />
            <rect x="11" y="20" width="2" height="3" fill="#3b82f6" />
            <rect x="14" y="19" width="2" height="4" fill="#3b82f6" />
            <rect x="17" y="18" width="2" height="5" fill="#f59e0b" />
          </svg>
        );

      case 'video-tutorials':
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="vidGradR" x1="4" y1="5" x2="28" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#5b21b6" />
              </linearGradient>
            </defs>
            <rect x="4" y="7" width="17" height="18" rx="3.5" fill="url(#vidGradR)" stroke="#ede9fe" strokeWidth="0.8" />
            <path d="M21 12L28 8V24L21 20V12Z" fill="#7c3aed" stroke="#ede9fe" strokeWidth="0.8" />
            <path d="M10.5 12.5L16 16L10.5 19.5V12.5Z" fill="#ffffff" />
            <circle cx="8" cy="10" r="1.3" fill="#f59e0b" />
            <circle cx="25" cy="5" r="1.5" fill="#38bdf8" />
          </svg>
        );

      default:
        return FallbackIcon ? <FallbackIcon className="w-6 h-6 text-blue-600" /> : null;
    }
  };

  // Reusable Category Card Renderer with Logo Gradient Styling, Ambient Glow & Micro-Interactions
  const renderCategoryCard = (cat, isMobile = false) => {
    return (
      <div
        key={cat.id || cat.name}
        onClick={() => setSelectedResource({ title: cat.name, category: 'Category Guide', desc: `Explore detailed articles, guides, and tools related to ${cat.name}.` })}
        className={`group relative ${cat.cardBg} rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 ${cat.glowShadow} ${
          isMobile ? 'w-[200px] sm:w-[220px] flex-shrink-0' : ''
        }`}
      >
        {/* 1. Top Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[5px] bg-gradient-to-r ${cat.gradientBorder} transition-all duration-300`} />

        {/* 2. Ambient Gradient Glow in Corner */}
        <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${cat.ambientGradient} rounded-full blur-xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

        {/* 3. Specular Shimmer Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* 4. Top Row: Micro Tag Badge */}
        <div className="w-full flex justify-end mb-2 relative z-10">
          <span className={`text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-2xs border border-white/60 ${cat.badgeGradient}`}>
            {cat.tag}
          </span>
        </div>

        {/* 5. Squircle Icon Box */}
        <div className="relative z-10 mb-3">
          <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${cat.iconBoxBg}`}>
            {renderCategoryIcon(cat.id, cat.icon)}
          </div>
        </div>

        {/* 6. Title & Short Description */}
        <div className="relative z-10 w-full mb-3">
          <h4 className={`text-xs sm:text-[13.5px] font-extrabold text-[#0a1a38] ${cat.titleHover} transition-colors duration-200 mb-1 leading-snug`}>
            {cat.name}
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-tight line-clamp-1">
            {cat.desc}
          </p>
        </div>

        {/* 7. Footer: Subtle Explore Arrow Link */}
        <div className="relative z-10 pt-2 border-t border-slate-100/90 w-full flex items-center justify-between mt-auto">
          <span className={`text-[11px] font-bold text-[#0a1a38] ${cat.titleHover} transition-colors`}>
            Explore
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${cat.arrowBtnStyle}`}>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  const featuredArticles = [
    {
      id: 'gst-updates-may-2025',
      tag: 'GST Updates',
      tagColor: 'bg-emerald-50 text-emerald-700',
      title: 'Latest GST Updates May 2025',
      desc: 'Key changes, notifications and compliance updates you should know.',
      date: 'May 18, 2025',
      readTime: '5 min read',
      image: '/assets/images/blog-gst-hd.jpg'
    },
    {
      id: 'tally-tips-productivity',
      tag: 'Tally Tips',
      tagColor: 'bg-blue-50 text-blue-700',
      title: '10 Tally Tips to Improve Productivity',
      desc: 'Useful tips and shortcuts to save time and work more efficiently in TallyPrime.',
      date: 'May 15, 2025',
      readTime: '7 min read',
      image: '/assets/images/blog-tally-tips-hd.jpg'
    },
    {
      id: 'improve-cash-flow',
      tag: 'Accounting',
      tagColor: 'bg-orange-50 text-orange-700',
      title: 'How to Improve Cash Flow Management',
      desc: 'Practical strategies to manage cash flow better and grow your business.',
      date: 'May 12, 2025',
      readTime: '6 min read',
      image: '/assets/images/blog-cloud-accounting-hd.jpg'
    },
    {
      id: 'business-automation-tally',
      tag: 'Automation',
      tagColor: 'bg-purple-50 text-purple-700',
      title: 'Business Automation with Tally & Integrations',
      desc: 'Automate repetitive tasks and integrate Tally with powerful add-ons.',
      date: 'May 10, 2025',
      readTime: '8 min read',
      image: '/assets/images/blog-automation-hd.jpg'
    }
  ];

  const resourceTypes = [
    {
      id: 'guides-ebooks',
      title: 'Guides & eBooks',
      desc: 'In-depth guides to help you master business processes.',
      tag: 'E-Books & Guides',
      icon: BookOpen,
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(37,99,235,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-sky-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-sky-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      titleHover: 'group-hover:text-blue-600',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      id: 'templates-tools',
      title: 'Templates & Tools',
      desc: 'Download free templates, checklists and calculators.',
      tag: 'Ready Tools',
      icon: ClipboardCheck,
      badgeGradient: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-amber-400',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/20 via-teal-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      titleHover: 'group-hover:text-emerald-600',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    },
    {
      id: 'videos',
      title: 'Videos',
      desc: 'Step-by-step videos and tutorials for easy learning.',
      tag: 'Tutorials',
      icon: PlayCircle,
      badgeGradient: 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-rose-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.18)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/20 via-orange-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      titleHover: 'group-hover:text-amber-600',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    },
    {
      id: 'downloads',
      title: 'Downloads',
      desc: 'Useful downloads, updates and reference documents.',
      tag: 'Resources',
      icon: CloudDownload,
      badgeGradient: 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-indigo-600',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(147,51,234,0.18)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/20 via-violet-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-violet-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      titleHover: 'group-hover:text-purple-600',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    }
  ];

  const popularDownloads = [
    {
      id: 'dl-1',
      title: 'GST Compliance Checklist 2025',
      desc: 'Complete checklist to stay GST compliant.',
      meta: 'PDF • 512 KB',
      tag: 'Checklist',
      icon: FileText,
      badgeGradient: 'bg-gradient-to-r from-rose-500 to-red-600 text-white',
      gradientBorder: 'from-rose-500 via-red-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(244,63,94,0.18)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/20 via-red-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-rose-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50/90 via-white to-red-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400',
      titleHover: 'group-hover:text-rose-600',
      downloadBtnStyle: 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white',
    },
    {
      id: 'dl-2',
      title: 'Tally Shortcut Keys PDF',
      desc: 'Boost your productivity with essential Tally shortcuts.',
      meta: 'PDF • 1.2 MB',
      tag: 'Shortcuts',
      icon: FileText,
      badgeGradient: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.18)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/20 via-orange-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      titleHover: 'group-hover:text-amber-600',
      downloadBtnStyle: 'bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-600 hover:text-white',
    },
    {
      id: 'dl-3',
      title: 'Chart of Accounts Template',
      desc: 'Ready-to-use COA template for your business.',
      meta: 'XLSX • 198 KB',
      tag: 'Excel COA',
      icon: FileSpreadsheet,
      badgeGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/20 via-teal-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      titleHover: 'group-hover:text-emerald-600',
      downloadBtnStyle: 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white',
    },
    {
      id: 'dl-4',
      title: 'TallyPrime System Requirements',
      desc: 'Check system requirements for smooth Tally performance.',
      meta: 'PDF • 245 KB',
      tag: 'Tech Spec',
      icon: Monitor,
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-indigo-600',
      glowShadow: 'hover:shadow-[0_12px_28px_rgba(37,99,235,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-sky-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-blue-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      titleHover: 'group-hover:text-blue-600',
      downloadBtnStyle: 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white',
    }
  ];

  // 3D SVG emblem renderer for Resource Types
  const renderResourceTypeEmblem = (id, FallbackIcon) => {
    switch (id) {
      case 'guides-ebooks':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="bookLft" x1="4" y1="6" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="bookRgt" x1="16" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <path d="M16 8C12 6 6 6.5 4 8V25C6 23.5 12 23 16 25V8Z" fill="url(#bookLft)" stroke="#bfdbfe" strokeWidth="0.8" />
            <path d="M16 8C20 6 26 6.5 28 8V25C26 23.5 20 23 16 25V8Z" fill="url(#bookRgt)" stroke="#bfdbfe" strokeWidth="0.8" />
            <line x1="16" y1="8" x2="16" y2="25" stroke="#0a1a38" strokeWidth="1.2" />
            <line x1="7" y1="12" x2="13" y2="12" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="7" y1="16" x2="13" y2="16" stroke="#bfdbfe" strokeWidth="1" strokeLinecap="round" />
            <line x1="7" y1="20" x2="11" y2="20" stroke="#bfdbfe" strokeWidth="1" strokeLinecap="round" />
            <line x1="19" y1="12" x2="25" y2="12" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="19" y1="16" x2="25" y2="16" stroke="#bfdbfe" strokeWidth="1" strokeLinecap="round" />
            <path d="M16 8V17L18.5 15L21 17V8" fill="#f59e0b" />
          </svg>
        );

      case 'templates-tools':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="clipBrd" x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <rect x="6" y="5" width="20" height="24" rx="3" fill="url(#clipBrd)" stroke="#a7f3d0" strokeWidth="0.8" />
            <rect x="11" y="2" width="10" height="5" rx="1.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="16" cy="4.5" r="1.2" fill="#ffffff" />
            <rect x="9" y="8" width="14" height="18" rx="1.5" fill="#ffffff" />
            <circle cx="12" cy="13" r="1.5" fill="#10b981" />
            <line x1="15" y1="13" x2="20" y2="13" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1.5" fill="#10b981" />
            <line x1="15" y1="17" x2="20" y2="17" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="12" cy="21" r="1.5" fill="#f59e0b" />
            <line x1="15" y1="21" x2="18" y2="21" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );

      case 'videos':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="vidPlr" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect x="4" y="6" width="24" height="18" rx="4" fill="url(#vidPlr)" stroke="#fef3c7" strokeWidth="0.8" />
            <rect x="13" y="24" width="6" height="3" fill="#0f172a" rx="0.5" />
            <rect x="10" y="27" width="12" height="2" fill="#d97706" rx="1" />
            <rect x="6.5" y="8.5" width="19" height="13" rx="2" fill="#0a1a38" />
            <path d="M14 11.5L20 15L14 18.5V11.5Z" fill="#ffffff" />
            <circle cx="24" cy="5" r="1.8" fill="#f59e0b" />
          </svg>
        );

      case 'downloads':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="cldDown" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>
            </defs>
            <path
              d="M8.5 23C5.5 23 3 20.5 3 17.5C3 14.7 5.1 12.4 7.8 12.1C8.5 7.8 12.2 4.5 16.7 4.5C21.7 4.5 25.8 8.6 25.8 13.6C28.2 14.1 30 16.3 30 18.9C30 21.8 27.6 24.2 24.7 24.2H9"
              fill="url(#cldDown)"
              stroke="#f3e8ff"
              strokeWidth="0.8"
            />
            <path d="M16 11V21M16 21L12 17M16 21L20 17" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 25H21" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );

      default:
        return FallbackIcon ? <FallbackIcon className="w-6 h-6 text-blue-600" /> : null;
    }
  };

  // 3D SVG emblem renderer for Popular Downloads
  const renderDownloadEmblem = (id, FallbackIcon) => {
    switch (id) {
      case 'dl-1':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="gstDlGrad" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>
            <path d="M7 3H19L25 9V27C25 28.1 24.1 29 23 29H7C5.9 29 5 28.1 5 27V5C5 3.9 5.9 3 7 3Z" fill="url(#gstDlGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
            <path d="M19 3V9H25" fill="#fda4af" />
            <rect x="7" y="12" width="13" height="5" rx="1" fill="#ffffff" />
            <text x="13.5" y="16" textAnchor="middle" fontSize="3.8" fontWeight="900" fill="#be123c">GST</text>
            <path d="M8 22L11 25L17 19" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'dl-2':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="scDlGrad" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <path d="M7 3H19L25 9V27C25 28.1 24.1 29 23 29H7C5.9 29 5 28.1 5 27V5C5 3.9 5.9 3 7 3Z" fill="url(#scDlGrad)" stroke="#fef3c7" strokeWidth="0.8" />
            <path d="M19 3V9H25" fill="#fde68a" />
            <rect x="7" y="13" width="7" height="6" rx="1.5" fill="#ffffff" />
            <text x="10.5" y="17.2" textAnchor="middle" fontSize="4.2" fontWeight="900" fill="#0a1a38">F1</text>
            <rect x="15" y="13" width="7" height="6" rx="1.5" fill="#ffffff" />
            <text x="18.5" y="17.2" textAnchor="middle" fontSize="4.2" fontWeight="900" fill="#0a1a38">F2</text>
            <path d="M15 21L12 25H16L14 28L19 23H15L17 21H15Z" fill="#ffffff" />
          </svg>
        );

      case 'dl-3':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="coaDlGrad" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <path d="M7 3H19L25 9V27C25 28.1 24.1 29 23 29H7C5.9 29 5 28.1 5 27V5C5 3.9 5.9 3 7 3Z" fill="url(#coaDlGrad)" stroke="#a7f3d0" strokeWidth="0.8" />
            <path d="M19 3V9H25" fill="#6ee7b7" />
            <rect x="8" y="13" width="14" height="12" rx="1" fill="#ffffff" />
            <line x1="8" y1="17" x2="22" y2="17" stroke="#047857" strokeWidth="0.8" />
            <line x1="8" y1="21" x2="22" y2="21" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="13" y1="13" x2="13" y2="25" stroke="#cbd5e1" strokeWidth="0.8" />
            <line x1="17.5" y1="13" x2="17.5" y2="25" stroke="#cbd5e1" strokeWidth="0.8" />
            <rect x="6" y="10" width="5" height="4" rx="0.5" fill="#047857" />
            <text x="8.5" y="13" textAnchor="middle" fontSize="3" fontWeight="bold" fill="#ffffff">X</text>
          </svg>
        );

      case 'dl-4':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="monDlGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <rect x="4" y="5" width="24" height="17" rx="3" fill="url(#monDlGrad)" stroke="#bfdbfe" strokeWidth="0.8" />
            <rect x="6.5" y="7.5" width="19" height="12" rx="1.5" fill="#0f172a" />
            <rect x="13.5" y="22" width="5" height="4" fill="#0a1a38" />
            <rect x="10" y="26" width="12" height="2" rx="1" fill="#3b82f6" />
            <path d="M8 13.5H12L14 10L17 17L19 12L21 13.5H24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="22" cy="6" r="2.5" fill="#10b981" stroke="#ffffff" strokeWidth="0.8" />
          </svg>
        );

      default:
        return FallbackIcon ? <FallbackIcon className="w-6 h-6 text-blue-600" /> : null;
    }
  };

  // Reusable card renderer for Resource Types
  const renderResourceTypeCard = (rt, isMobile = false) => {
    return (
      <div
        key={rt.id || rt.title}
        onClick={() => setSelectedResource({ title: rt.title, category: 'Resource Type', desc: rt.desc })}
        className={`group relative ${rt.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${rt.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${rt.gradientBorder} transition-all duration-300`} />
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${rt.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${rt.iconBoxBg}`}>
              {renderResourceTypeEmblem(rt.id, rt.icon)}
            </div>
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border border-white/60 ${rt.badgeGradient}`}>
              {rt.tag}
            </span>
          </div>

          <h3 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${rt.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {rt.title}
          </h3>

          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
            {rt.desc}
          </p>
        </div>

        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold text-[#0a1a38] ${rt.titleHover} transition-colors`}>
            Explore
          </span>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${rt.arrowBtnStyle}`}>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  // Reusable card renderer for Popular Downloads
  const renderDownloadCard = (dl, isMobile = false) => {
    return (
      <div
        key={dl.id}
        className={`group relative ${dl.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${dl.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${dl.gradientBorder} transition-all duration-300`} />
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${dl.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${dl.iconBoxBg}`}>
              {renderDownloadEmblem(dl.id, dl.icon)}
            </div>
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border border-white/60 ${dl.badgeGradient}`}>
              {dl.tag}
            </span>
          </div>

          <h4 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${dl.titleHover} transition-colors duration-200 mb-1.5 leading-snug`}>
            {dl.title}
          </h4>

          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
            {dl.desc}
          </p>
        </div>

        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {dl.meta}
          </span>
          <button
            onClick={() => handleDownloadClick(dl)}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs cursor-pointer ${dl.downloadBtnStyle}`}
            title="Download file"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleDownloadClick = (item) => {
    alert(`Downloading ${item.title} (${item.meta})... Your file will start shortly.`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Resources Hero Section */}
      <section className="relative bg-gradient-to-br from-[#061427] via-[#091e38] to-[#0d284d] text-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        {/* Glowing dot grid on top left */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-15 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 font-medium">
            <button
              onClick={() => {
                onNavigate && onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">Resources</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading, Subtitle & Search */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Knowledge. Insights. <br />
                  Business Growth.
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Stay updated with the latest insights, guides and updates on Tally, GST, accounting and business automation.
              </p>

              {/* Search Box */}
              <div className="pt-2 max-w-lg">
                <div className="relative flex items-center bg-white rounded-xl shadow-lg p-1.5 border border-slate-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for blogs, guides, updates..."
                    className="w-full bg-transparent px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (searchQuery) alert(`Searching for: "${searchQuery}"`);
                    }}
                    className="bg-[#0052cc] hover:bg-[#0747a6] text-white p-2.5 rounded-lg transition cursor-pointer flex-shrink-0"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-900 group">
                <img
                  src="/assets/images/resources-hero-desk-hd.jpg"
                  alt="Syn N Sol Resource Center Portal"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Explore Resources by Category (12 Badges Grid) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>RESOURCE DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight mb-2">
              Explore Resources by Category
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Discover in-depth knowledge, regulatory guidelines, masterclasses and tools.
            </p>
          </div>

          {/* Desktop View: Exact Original 6-Column Static Grid */}
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {categories.map((cat) => renderCategoryCard(cat, false))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Categories */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.75} gap="gap-4">
              {categories.map((cat) => renderCategoryCard(cat, true))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 3. Latest from Our Resource Center (4 Featured Articles) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Latest from Our Resource Center
            </h2>
            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal('All Resources Inquiry')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052cc] hover:text-[#0747a6] transition cursor-pointer"
            >
              <span>View All Resources</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop View: Exact Original 4 Cards Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {featuredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedResource({ title: art.title, category: art.tag, desc: art.desc, date: art.date, readTime: art.readTime, image: art.image })}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wide border border-slate-100">
                      {art.tag}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h4 className="text-sm sm:text-base font-bold text-[#0a1a38] mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {art.desc}
                    </p>
                  </div>
                </div>

                {/* Footer with date and read time */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.date}</span>
                  </span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Featured Articles */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.8} gap="gap-6">
              {featuredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setSelectedResource({ title: art.title, category: art.tag, desc: art.desc, date: art.date, readTime: art.readTime, image: art.image })}
                  className="w-[280px] sm:w-[310px] flex-shrink-0 group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Article Thumbnail */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wide border border-slate-100">
                        {art.tag}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h4 className="text-sm sm:text-base font-bold text-[#0a1a38] mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[36px] line-clamp-2">
                        {art.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer with date and read time */}
                  <div className="px-5 pb-5 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.date}</span>
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                </div>
              ))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 4. Resource Types (4 Types in a Row) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>CURATED LEARNING & TOOLS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight mb-2">
              Resource Types
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Everything you need to learn, evaluate, and scale your business with Tally.
            </p>
          </div>

          {/* Desktop 4-column Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map((rt) => renderResourceTypeCard(rt, false))}
          </div>

          {/* Mobile Auto Sliding Row Carousel */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.8} gap="gap-5">
              {resourceTypes.map((rt) => renderResourceTypeCard(rt, true))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 5. Popular Downloads (4 Download Cards) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-2 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
                <span>READY-TO-USE ASSETS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
                Popular Downloads
              </h2>
            </div>
            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal('All Downloads Inquiry')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052cc] hover:text-[#0747a6] transition cursor-pointer"
            >
              <span>View All Downloads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop 4-column Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDownloads.map((dl) => renderDownloadCard(dl, false))}
          </div>

          {/* Mobile Auto Sliding Row Carousel */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.8} gap="gap-5">
              {popularDownloads.map((dl) => renderDownloadCard(dl, true))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 6. "Stay Informed. Stay Ahead." Newsletter Subscription Banner */}
      <section className="pb-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="bg-[#071d3d] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content with circular mail icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Stay Informed. Stay Ahead.
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                    Subscribe to get the latest updates, tips and resources directly in your inbox.
                  </p>
                </div>
              </div>

              {/* Right: Email Input & Subscribe Button */}
              <div className="w-full lg:w-auto">
                {newsletterSubscribed ? (
                  <div className="bg-emerald-500/20 border border-emerald-400 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Thank you for subscribing! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full sm:w-80 px-4 py-3 rounded-xl text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4 Trust Badges Strip */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
            {/* Badge 1 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-[#0a1a38]">Trusted by 10,000+</h4>
                <p className="text-[11px] text-slate-500">Businesses Across India</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-[#0a1a38]">Expertly Curated</h4>
                <p className="text-[11px] text-slate-500">By Tally Professionals</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-[#0a1a38]">100% Accurate</h4>
                <p className="text-[11px] text-slate-500">Reliable & Updated</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-[#0a1a38]">Practical & Actionable</h4>
                <p className="text-[11px] text-slate-500">Solutions for Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal for detailed resource viewing */}
      <ResourceDetailModal
        isOpen={!!selectedResource}
        onClose={() => setSelectedResource(null)}
        resource={selectedResource}
        onOpenDemo={onOpenDemoModal}
      />
    </div>
  );
};

export default ResourcesPage;
