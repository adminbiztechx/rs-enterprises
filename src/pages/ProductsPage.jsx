import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import ProductDetailModal from '../components/ProductDetailModal';
import {
  LayoutGrid,
  Laptop,
  Server,
  Puzzle,
  Cloud,
  Headphones,
  Package,
  CheckCircle2,
  Check,
  Minus,
  Calendar,
  PhoneCall,
  ShieldCheck,
  Smile,
  FileCheck,
  TrendingUp,
  BarChart3,
  Award,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export const ProductsPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [activeTab, setActiveTab] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const tabs = [
    { name: 'All Products', icon: LayoutGrid },
    { name: 'TallyPrime', icon: Laptop },
    { name: 'TallyPrime Server', icon: Server },
    { name: 'Add-ons', icon: Puzzle },
    { name: 'Cloud Solutions', icon: Cloud },
    { name: 'Services', icon: Headphones },
    { name: 'Other Products', icon: Package },
  ];

  // 9 Products from the design with rich gradient themes, authentic emblems & badges
  const allProducts = [
    // Row 1 (4 Main Products)
    {
      id: 'tallyprime',
      title: 'TallyPrime',
      category: 'TallyPrime',
      desc: 'The all-new business management software designed for SMBs.',
      iconType: 'tally-square',
      tag: 'Most Popular',
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-sky-500 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-amber-500',
      glowShadow: 'hover:shadow-blue-500/15 hover:border-blue-300',
      ambientGradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
      checkColor: 'text-blue-600 bg-blue-50',
      features: [
        'Advanced Reporting',
        'Inventory Management',
        'GST & Compliance',
        'Multi-Company Management',
      ],
      linkText: 'Request Demo',
    },
    {
      id: 'tallyprime-server',
      title: 'TallyPrime Server',
      category: 'TallyPrime Server',
      desc: 'Access TallyPrime from multiple systems in your network.',
      iconType: 'server',
      tag: 'Enterprise Speed',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-cyan-500',
      glowShadow: 'hover:shadow-emerald-500/15 hover:border-emerald-300',
      ambientGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      checkColor: 'text-emerald-600 bg-emerald-50',
      features: [
        'Multi-user Access',
        'Centralized Data',
        'Advanced Security',
        'Seamless Performance',
      ],
      linkText: 'Request Demo',
    },
    {
      id: 'tallyprime-edit-log',
      title: 'TallyPrime Edit Log',
      category: 'TallyPrime',
      desc: 'Track and monitor all data changes with edit log.',
      iconType: 'edit-doc',
      tag: 'MCA Compliant',
      badgeGradient: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-rose-500',
      glowShadow: 'hover:shadow-amber-500/15 hover:border-amber-300',
      ambientGradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
      checkColor: 'text-amber-600 bg-amber-50',
      features: [
        'Track All Modifications',
        'User-wise Tracking',
        'Data Security',
        'Audit Trail',
      ],
      linkText: 'Request Demo',
    },
    {
      id: 'tallyprime-cloud',
      title: 'TallyPrime Cloud',
      category: 'Cloud Solutions',
      desc: 'Access your business data securely from anywhere, anytime.',
      iconType: 'cloud',
      tag: 'Cloud Ready',
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-indigo-500',
      glowShadow: 'hover:shadow-purple-500/15 hover:border-purple-300',
      ambientGradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
      checkColor: 'text-purple-600 bg-purple-50',
      features: [
        'Secure Cloud Access',
        'Automatic Backup',
        'Work From Anywhere',
        'Cost Effective',
      ],
      linkText: 'Request Demo',
    },

    // Row 2 (5 Editions & Services)
    {
      id: 'tallyprime-silver',
      title: 'TallyPrime Silver',
      category: 'TallyPrime',
      desc: 'Single user edition for small businesses.',
      iconType: 'silver-medal',
      tag: 'Single User',
      badgeGradient: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white',
      gradientBorder: 'from-slate-400 via-slate-300 to-zinc-400',
      glowShadow: 'hover:shadow-slate-500/15 hover:border-slate-300',
      ambientGradient: 'from-slate-500/10 via-zinc-500/5 to-transparent',
      checkColor: 'text-slate-600 bg-slate-100',
      features: [
        'Single User Access',
        'Essential Features',
        'Easy & Intuitive',
        'Cost Effective',
      ],
      linkText: 'Buy Now',
    },
    {
      id: 'tallyprime-gold',
      title: 'TallyPrime Gold',
      category: 'TallyPrime',
      desc: 'Advanced features for growing businesses.',
      iconType: 'gold-medal',
      tag: 'Multi-User',
      badgeGradient: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
      gradientBorder: 'from-amber-400 via-yellow-300 to-amber-600',
      glowShadow: 'hover:shadow-amber-500/20 hover:border-amber-300',
      ambientGradient: 'from-amber-500/15 via-yellow-500/5 to-transparent',
      checkColor: 'text-amber-600 bg-amber-50',
      features: [
        'Advanced Reporting',
        'Inventory & GST',
        'Multi-Company',
        'Priority Support',
      ],
      linkText: 'Buy Now',
    },
    {
      id: 'tss',
      title: 'TSS (Tally Software Services)',
      category: 'Services',
      desc: 'Get the latest updates & support for your Tally software.',
      iconType: 'tss-badge',
      tag: 'Essential Care',
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-blue-400',
      glowShadow: 'hover:shadow-blue-600/20 hover:border-blue-300',
      ambientGradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      checkColor: 'text-blue-600 bg-blue-50',
      features: [
        'Product Updates',
        'Technical Support',
        'Error Resolutions',
        'Compliance Updates',
      ],
      linkText: 'Renew Now',
    },
    {
      id: 'tally-capital',
      title: 'Tally Capital',
      category: 'Other Products',
      desc: 'Simplify your working capital financing.',
      iconType: 'tag',
      tag: 'Easy Finance',
      badgeGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-cyan-500',
      glowShadow: 'hover:shadow-teal-500/15 hover:border-teal-300',
      ambientGradient: 'from-teal-500/10 via-cyan-500/5 to-transparent',
      checkColor: 'text-teal-600 bg-teal-50',
      features: [
        'Business Loans',
        'Quick Approval',
        'Flexible Tenure',
        'Power of Tally Data',
      ],
      linkText: 'Know More',
    },
    {
      id: 'tally-certification',
      title: 'Tally Certification',
      category: 'Services',
      desc: 'Get certified and enhance your Tally skills.',
      iconType: 'rosette',
      tag: 'Official Exam',
      badgeGradient: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
      gradientBorder: 'from-rose-500 via-pink-400 to-purple-500',
      glowShadow: 'hover:shadow-pink-500/15 hover:border-pink-300',
      ambientGradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
      checkColor: 'text-rose-600 bg-rose-50',
      features: [
        'Official Certification',
        'Skill Validation',
        'Career Growth',
        'Industry Recognition',
      ],
      linkText: 'Learn More',
    },
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'All Products'
    ? allProducts
    : allProducts.filter(p => p.category === activeTab);

  // Render high-polish custom branded product icons with squircle containers
  const renderProductIcon = (type) => {
    switch (type) {
      case 'tally-square':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-blue-50/60 p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <div className="grid grid-cols-2 gap-1 w-7 h-7">
              <span className="bg-gradient-to-br from-[#0052cc] to-[#0043a8] rounded-sm shadow-xs" />
              <span className="bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] rounded-sm shadow-xs" />
              <span className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-sm shadow-xs" />
              <span className="bg-gradient-to-br from-[#0052cc] to-[#082a63] rounded-sm shadow-xs" />
            </div>
          </div>
        );
      case 'server':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 p-2.5 border border-emerald-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="3" width="24" height="6" rx="2" fill="url(#serverGrad1)" />
              <circle cx="5.5" cy="6" r="1.2" fill="#ffffff" />
              <circle cx="21.5" cy="6" r="1" fill="#34d399" />
              <circle cx="24" cy="6" r="1" fill="#38bdf8" />
              <rect x="2" y="11" width="24" height="6" rx="2" fill="url(#serverGrad1)" />
              <circle cx="5.5" cy="14" r="1.2" fill="#ffffff" />
              <circle cx="21.5" cy="14" r="1" fill="#34d399" />
              <circle cx="24" cy="14" r="1" fill="#38bdf8" />
              <rect x="2" y="19" width="24" height="6" rx="2" fill="url(#serverGrad1)" />
              <circle cx="5.5" cy="22" r="1.2" fill="#ffffff" />
              <circle cx="21.5" cy="22" r="1" fill="#34d399" />
              <circle cx="24" cy="22" r="1" fill="#38bdf8" />
              <defs>
                <linearGradient id="serverGrad1" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'edit-doc':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 p-2.5 border border-amber-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <path d="M5 4C5 2.89543 5.89543 2 7 2H17L23 8V24C23 25.1046 22.1046 26 21 26H7C5.89543 26 5 25.1046 5 24V4Z" fill="url(#docGrad)" />
              <path d="M17 2V8H23L17 2Z" fill="#fed7aa" />
              <line x1="9" y1="11" x2="19" y2="11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="15" x2="16" y2="15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="19" x2="13" y2="19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="19.5" cy="19.5" r="4.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M17.5 19.5L19 21L22 18" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="docGrad" x1="5" y1="2" x2="23" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'cloud':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/60 p-2.5 border border-purple-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <path d="M7.5 19C5.01472 19 3 16.9853 3 14.5C3 12.1895 4.74184 10.2863 7.00947 10.0322C7.57551 6.57726 10.5695 4 14.2 4C18.2869 4 21.6 7.31309 21.6 11.4C23.5882 11.8385 25 13.606 25 15.7C25 18.0748 23.0748 20 20.7 20H8" fill="url(#cloudGrad)" />
              <path d="M14 11V16M14 11L11.5 13.5M14 11L16.5 13.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="15" r="1" fill="#ffffff" opacity="0.8" />
              <circle cx="20" cy="16" r="1" fill="#ffffff" opacity="0.8" />
              <defs>
                <linearGradient id="cloudGrad" x1="3" y1="4" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'silver-medal':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-zinc-100 p-2.5 border border-slate-300/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="12" fill="url(#silverRim)" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="14" cy="14" r="9.5" fill="url(#silverInner)" stroke="#94a3b8" strokeWidth="0.8" />
              <path d="M14 7.5L15.8 11.2L19.8 11.8L16.9 14.6L17.6 18.5L14 16.6L10.4 18.5L11.1 14.6L8.2 11.8L12.2 11.2L14 7.5Z" fill="url(#silverStar)" stroke="#64748b" strokeWidth="0.5" />
              <circle cx="9" cy="9" r="1.5" fill="#ffffff" opacity="0.8" />
              <defs>
                <linearGradient id="silverRim" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                <radialGradient id="silverInner" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </radialGradient>
                <linearGradient id="silverStar" x1="14" y1="7.5" x2="14" y2="18.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'gold-medal':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-yellow-100/70 p-2.5 border border-amber-300/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="12" fill="url(#goldRim)" stroke="#fcd34d" strokeWidth="1" />
              <circle cx="14" cy="14" r="9.5" fill="url(#goldInner)" stroke="#d97706" strokeWidth="0.8" />
              <path d="M14 7.5L15.8 11.2L19.8 11.8L16.9 14.6L17.6 18.5L14 16.6L10.4 18.5L11.1 14.6L8.2 11.8L12.2 11.2L14 7.5Z" fill="url(#goldStar)" stroke="#b45309" strokeWidth="0.5" />
              <circle cx="9" cy="9" r="1.5" fill="#ffffff" opacity="0.9" />
              <defs>
                <linearGradient id="goldRim" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
                <radialGradient id="goldInner" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fef9c3" />
                  <stop offset="60%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </radialGradient>
                <linearGradient id="goldStar" x1="14" y1="7.5" x2="14" y2="18.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'tss-badge':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 p-2.5 border border-blue-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="3" width="24" height="22" rx="6" fill="url(#tssGrad)" stroke="#1d4ed8" strokeWidth="1" />
              <text x="14" y="17.5" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">TSS</text>
              <path d="M6 8C9 4 19 4 22 8" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
              <path d="M6 20C9 24 19 24 22 20" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
              <defs>
                <linearGradient id="tssGrad" x1="2" y1="3" x2="26" y2="25" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#082a63" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'tag':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/60 p-2.5 border border-teal-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="3" width="22" height="22" rx="6" fill="url(#capGrad)" stroke="#0f766e" strokeWidth="1" />
              <path d="M9 9H19M9 13H17M9 9V17M12 13L18 20" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="8" r="1.5" fill="#a7f3d0" />
              <defs>
                <linearGradient id="capGrad" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'rosette':
        return (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-pink-50/90 via-white to-rose-50/60 p-2.5 border border-pink-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md">
            <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="11" r="8.5" fill="url(#roseGrad)" stroke="#be123c" strokeWidth="1" />
              <path d="M10 17L8 25L13 22L14 25L13 18" fill="#e11d48" opacity="0.9" />
              <path d="M18 17L20 25L15 22L14 25L15 18" fill="#be123c" opacity="0.9" />
              <path d="M11 11L13 13L17 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="roseGrad" x1="6" y1="3" x2="22" y2="19" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 p-2.5 flex items-center justify-center">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
        );
    }
  };

  // Reusable card renderer with rich gradient look, ambient glow & animations
  const renderProductCard = (p, isRow2 = false) => (
    <div
      key={p.id}
      className={`group relative bg-white rounded-2xl ${isRow2 ? 'p-5' : 'p-6'} border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2 cursor-pointer ${p.glowShadow}`}
      onClick={() => setSelectedProduct(p)}
    >
      {/* 1. Top Gradient Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${p.gradientBorder} group-hover:h-[5px] transition-all duration-300`} />

      {/* 2. Ambient Gradient Glow */}
      <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${p.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

      {/* 3. Shimmer Sweep on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* 4. Card Content */}
      <div className="relative z-10">
        {/* Header: Icon + Gradient Tag Badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div>
            {renderProductIcon(p.iconType)}
          </div>
          <span className={`text-[9.5px] sm:text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-2xs border border-white/50 ${p.badgeGradient}`}>
            {p.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className={`${isRow2 ? 'text-[15px]' : 'text-base sm:text-[17px]'} font-black text-[#0a1a38] group-hover:text-[#0052cc] transition-colors duration-200 mb-1.5 tracking-tight`}>
          {p.title}
        </h3>

        {/* Description */}
        <p className={`${isRow2 ? 'text-[11px] min-h-[30px]' : 'text-xs min-h-[34px]'} text-slate-500 mb-4 leading-relaxed`}>
          {p.desc}
        </p>

        {/* Feature Checklist */}
        <div className={`${isRow2 ? 'space-y-1.5 mb-5' : 'space-y-2.5 mb-6'} pt-2 border-t border-slate-100/90`}>
          {p.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${p.checkColor}`}>
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span className={`${isRow2 ? 'text-[11px]' : 'text-[11.5px]'} font-semibold text-slate-700 group-hover:text-slate-900 transition-colors line-clamp-1`}>
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Bottom Actions */}
      <div className="relative z-10 pt-2 flex flex-col gap-2.5" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setSelectedProduct(p)}
          className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0052cc] border border-blue-200 bg-blue-50/40 hover:bg-[#0052cc] hover:text-white hover:border-[#0052cc] hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
        </button>
        <button
          onClick={() => onOpenDemoModal(p.title)}
          className="group/btn inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors cursor-pointer py-1"
        >
          <span>{p.linkText}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Dark Blue Gradient with Constellation Network matching reference) */}
      <section className="bg-gradient-to-r from-[#031533] via-[#072149] to-[#0a2c5f] text-white pt-8 pb-12 lg:pt-12 lg:pb-16 relative overflow-hidden">
        {/* Constellation / Geometric network overlay matching exact user reference */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Geometric constellation lines */}
          <line x1="8%" y1="20%" x2="22%" y2="45%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="22%" y1="45%" x2="35%" y2="25%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="35%" y1="25%" x2="48%" y2="60%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="48%" y1="60%" x2="62%" y2="30%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="62%" y1="30%" x2="78%" y2="65%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="78%" y1="65%" x2="92%" y2="25%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="22%" y1="45%" x2="15%" y2="85%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="15%" y1="85%" x2="48%" y2="60%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="48%" y1="60%" x2="55%" y2="88%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="55%" y1="88%" x2="78%" y2="65%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="62%" y1="30%" x2="88%" y2="15%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="88%" y1="15%" x2="92%" y2="25%" stroke="url(#netGrad)" strokeWidth="1" />
          <line x1="35%" y1="25%" x2="62%" y2="30%" stroke="url(#netGrad)" strokeWidth="1" />
          {/* Constellation nodes */}
          <circle cx="8%" cy="20%" r="2.5" fill="#38bdf8" opacity="0.6" />
          <circle cx="22%" cy="45%" r="3" fill="#38bdf8" opacity="0.8" />
          <circle cx="35%" cy="25%" r="2.5" fill="#38bdf8" opacity="0.6" />
          <circle cx="48%" cy="60%" r="3" fill="#38bdf8" opacity="0.7" />
          <circle cx="62%" cy="30%" r="2.5" fill="#38bdf8" opacity="0.6" />
          <circle cx="78%" cy="65%" r="3" fill="#38bdf8" opacity="0.8" />
          <circle cx="92%" cy="25%" r="2.5" fill="#38bdf8" opacity="0.6" />
          <circle cx="15%" cy="85%" r="2" fill="#38bdf8" opacity="0.5" />
          <circle cx="55%" cy="88%" r="2" fill="#38bdf8" opacity="0.5" />
          <circle cx="88%" cy="15%" r="2" fill="#38bdf8" opacity="0.5" />
        </svg>

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>&gt;</span>
                <span className="text-white">Products</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Tally Products
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[14.5px] text-blue-100/90 leading-relaxed max-w-xl">
                Powerful. Reliable. Secure. Choose the right Tally product for your business and experience the power of simplified accounting.
              </p>
            </div>

            {/* Right Graphic: Laptop + Tally Box matching exact user reference */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-lg w-full flex items-center justify-center">
                {/* Soft ambient blue glow behind device */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-90 pointer-events-none" />
                
                <img
                  src="/assets/images/product-hero-devices-clean.png"
                  alt="TallyPrime Software on Laptop and Retail Box"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10 transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/product-hero-devices-exact.png';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS STRIP */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#0052cc] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR TALLY PRODUCT RANGE */}
      <section className="py-12 sm:py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight">
              Our Tally Product Range
            </h2>
            <p className="text-xs sm:text-[13.5px] text-slate-500 max-w-2xl mx-auto mt-2">
              Explore our complete range of Tally products designed to streamline your accounting, ensure compliance and help your business grow.
            </p>
          </div>

          {/* Desktop View: Exact original 4-card row + 5-card row (or category grid) */}
          <div className="hidden lg:block">
            {activeTab === 'All Products' ? (
              <>
                {/* Row 1: 4 Main Cards */}
                <div className="grid grid-cols-4 gap-6 mb-7">
                  {filteredProducts.slice(0, 4).map((p) => renderProductCard(p, false))}
                </div>

                {/* Row 2: 5 Cards Grid */}
                {filteredProducts.length > 4 && (
                  <div className="grid grid-cols-5 gap-5">
                    {filteredProducts.slice(4).map((p) => renderProductCard(p, true))}
                  </div>
                )}
              </>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((p) => renderProductCard(p, false))}
              </div>
            )}
          </div>

          {/* Mobile View: Right to Left Auto-Sliding Single Row */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {filteredProducts.map((p) => (
                <div key={p.id} className="w-[290px] sm:w-[320px] flex-shrink-0">
                  {renderProductCard(p, false)}
                </div>
              ))}
            </AutoSlidingRow>
          </div>

        </div>
      </section>

      {/* 4. "WHY CHOOSE TALLY PRODUCTS?" */}
      <section className="py-6 sm:py-8">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#f0f6ff] rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100/80 shadow-sm text-center">
            
            <h3 className="text-xl sm:text-2xl font-black text-[#0a1a38] tracking-tight mb-1">
              Why Choose Tally Products?
            </h3>
            <p className="text-xs text-slate-500 mb-8">
              Trusted by millions of businesses across India.
            </p>

            {/* Desktop View: Exact original 6-item static row with dividers */}
            <div className="hidden lg:grid grid-cols-6 divide-x divide-blue-200/60">
              {[
                { icon: ShieldCheck, title: 'Reliable & Secure', desc: 'Data security you can count on' },
                { icon: Smile, title: 'Easy to Use', desc: 'Simple interface easy to learn' },
                { icon: FileCheck, title: 'GST Compliant', desc: 'Stay updated with latest compliance' },
                { icon: TrendingUp, title: 'Scalable', desc: 'Grows with your business' },
                { icon: BarChart3, title: 'Advanced Reporting', desc: 'Make smarter business decisions' },
                { icon: Award, title: 'Backed by Experts', desc: 'Support from certified Tally experts' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center px-3 pt-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#0052cc] mb-2.5">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{item.title}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Auto-sliding single row */}
            <div className="block lg:hidden">
              <AutoSlidingRow speed={0.7} gap="gap-4">
                {[
                  { icon: ShieldCheck, title: 'Reliable & Secure', desc: 'Data security you can count on' },
                  { icon: Smile, title: 'Easy to Use', desc: 'Simple interface easy to learn' },
                  { icon: FileCheck, title: 'GST Compliant', desc: 'Stay updated with latest compliance' },
                  { icon: TrendingUp, title: 'Scalable', desc: 'Grows with your business' },
                  { icon: BarChart3, title: 'Advanced Reporting', desc: 'Make smarter business decisions' },
                  { icon: Award, title: 'Backed by Experts', desc: 'Support from certified Tally experts' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="w-[180px] sm:w-[200px] flex-shrink-0 flex flex-col items-center text-center px-4 py-3 bg-white/70 rounded-2xl border border-blue-100 shadow-xs">
                      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0052cc] mb-2.5">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-0.5 whitespace-nowrap">{item.title}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                    </div>
                  );
                })}
              </AutoSlidingRow>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COMPARE TALLYPRIME EDITIONS TABLE */}
      <section className="py-10 sm:py-14">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Compare TallyPrime Editions
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 mt-1">
              Choose the edition that suits your business needs.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0052cc] text-white text-xs sm:text-[13px] font-bold">
                  <th className="py-3.5 px-6">Features</th>
                  <th className="py-3.5 px-6 text-center">TallyPrime Silver</th>
                  <th className="py-3.5 px-6 text-center">TallyPrime Gold</th>
                  <th className="py-3.5 px-6 text-center">TallyPrime Server</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-700 divide-y divide-slate-100 font-medium">
                
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">User Access</td>
                  <td className="py-3 px-6 text-center text-slate-600">Single User</td>
                  <td className="py-3 px-6 text-center text-slate-600">Single User</td>
                  <td className="py-3 px-6 text-center text-slate-600 font-bold">Multi User</td>
                </tr>

                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">Multi-Company</td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                </tr>

                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">Advanced Reporting</td>
                  <td className="py-3 px-6 text-center text-slate-400 font-bold">—</td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                </tr>

                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">Inventory Management</td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                </tr>

                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">GST & Compliance</td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                </tr>

                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-6 font-bold text-slate-900">Remote Access</td>
                  <td className="py-3 px-6 text-center text-slate-400 font-bold">—</td>
                  <td className="py-3 px-6 text-center text-slate-400 font-bold">—</td>
                  <td className="py-3 px-6 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" /></td>
                </tr>

                <tr className="hover:bg-slate-50/60 bg-slate-50/30">
                  <td className="py-3.5 px-6 font-bold text-slate-900">Ideal For</td>
                  <td className="py-3.5 px-6 text-center text-xs font-semibold text-slate-600">Small Businesses</td>
                  <td className="py-3.5 px-6 text-center text-xs font-semibold text-slate-600">Growing Businesses</td>
                  <td className="py-3.5 px-6 text-center text-xs font-semibold text-slate-600">Medium to Large Businesses</td>
                </tr>

                <tr className="bg-white">
                  <td className="py-4 px-6 font-bold text-slate-900">Buy / Know More</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => onOpenDemoModal('TallyPrime Silver - Buy')}
                      className="px-5 py-1.5 rounded-lg text-xs font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors"
                    >
                      Buy Now
                    </button>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => onOpenDemoModal('TallyPrime Gold - Buy')}
                      className="px-5 py-1.5 rounded-lg text-xs font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors"
                    >
                      Buy Now
                    </button>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => onOpenDemoModal('TallyPrime Server - Know More')}
                      className="px-5 py-1.5 rounded-lg text-xs font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors"
                    >
                      Know More
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. "NOT SURE WHICH PRODUCT IS RIGHT FOR YOU?" CTA BANNER */}
      <section className="bg-[#051e4d] py-6 sm:py-7 relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Icon + Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0052cc] shadow-md">
                <Calendar className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Not Sure Which Product is Right for You?
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  Our experts will help you choose the perfect Tally solution for your business.
                </p>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 flex-shrink-0">
              <button
                onClick={() => onOpenDemoModal('General Product Recommendation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0052cc] bg-white hover:bg-blue-50 active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0052cc]" />
                <span>Book Free Demo</span>
              </button>

              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#004099] border border-white/80 hover:bg-[#003580] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Talk to Expert</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onBookDemo={(prodName) => onOpenDemoModal(prodName)}
      />

    </div>
  );
};

export default ProductsPage;
