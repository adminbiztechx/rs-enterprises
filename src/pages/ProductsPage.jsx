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
  ArrowRight
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

  // 9 Products from the design
  const allProducts = [
    // Row 1 (4 Main Products)
    {
      id: 'tallyprime',
      title: 'TallyPrime',
      category: 'TallyPrime',
      desc: 'The all-new business management software designed for SMBs.',
      iconType: 'tally-square',
      iconBg: 'bg-amber-50 text-amber-600',
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
      iconBg: 'bg-emerald-50 text-emerald-600',
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
      iconBg: 'bg-orange-50 text-orange-600',
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
      iconBg: 'bg-purple-50 text-purple-600',
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
      iconBg: 'bg-slate-100 text-slate-500',
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
      iconBg: 'bg-amber-100 text-amber-500',
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
      iconBg: 'bg-blue-600 text-white',
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
      iconBg: 'bg-teal-50 text-teal-600',
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
      iconBg: 'bg-pink-50 text-pink-500',
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

  // Render matching product icon
  const renderProductIcon = (type) => {
    switch (type) {
      case 'tally-square':
        return (
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
            <span className="bg-[#0052cc] rounded-xs" />
            <span className="bg-[#38bdf8] rounded-xs" />
            <span className="bg-[#f59e0b] rounded-xs" />
            <span className="bg-[#0052cc] rounded-xs" />
          </div>
        );
      case 'server':
        return (
          <div className="flex flex-col gap-1 w-6 h-6 justify-center">
            <span className="h-1.5 bg-emerald-500 rounded flex items-center px-0.5 gap-0.5"><span className="w-1 h-1 bg-white rounded-full" /></span>
            <span className="h-1.5 bg-emerald-500 rounded flex items-center px-0.5 gap-0.5"><span className="w-1 h-1 bg-white rounded-full" /></span>
            <span className="h-1.5 bg-emerald-500 rounded flex items-center px-0.5 gap-0.5"><span className="w-1 h-1 bg-white rounded-full" /></span>
          </div>
        );
      case 'edit-doc':
        return (
          <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M10 13l4 4m0-4l-4 4" />
          </svg>
        );
      case 'cloud':
        return <Cloud className="w-6 h-6 text-purple-600" />;
      case 'silver-medal':
        return (
          <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 font-black text-xs shadow-inner">
            ★
          </div>
        );
      case 'gold-medal':
        return (
          <div className="w-7 h-7 rounded-full bg-amber-200 border-2 border-amber-400 flex items-center justify-center text-amber-700 font-black text-xs shadow-inner">
            ★
          </div>
        );
      case 'tss-badge':
        return (
          <div className="w-7 h-7 rounded bg-[#0052cc] text-white flex items-center justify-center font-black text-[10px] tracking-tighter">
            TSS
          </div>
        );
      case 'tag':
        return (
          <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        );
      case 'rosette':
        return <Award className="w-6 h-6 text-pink-500" />;
      default:
        return <Package className="w-6 h-6 text-blue-600" />;
    }
  };

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

          {/* Desktop View: Exact original 4-card row + 5-card row */}
          <div className="hidden lg:block">
            {/* Row 1: 4 Main Cards */}
            <div className="grid grid-cols-4 gap-5 mb-6">
              {filteredProducts.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.iconBg}`}>
                      {renderProductIcon(p.iconType)}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-base font-black text-[#0a1a38] mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 min-h-[34px]">
                      {p.desc}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-2 mb-6">
                      {p.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span className="text-[11.5px] font-semibold text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-2 flex flex-col gap-2.5">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="w-full py-2 rounded-lg text-xs font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenDemoModal(p.title)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors cursor-pointer"
                    >
                      <span>{p.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 5 Cards Grid */}
            {filteredProducts.length > 4 && (
              <div className="grid grid-cols-5 gap-5">
                {filteredProducts.slice(4).map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 ${p.iconBg}`}>
                        {renderProductIcon(p.iconType)}
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-[14.5px] font-black text-[#0a1a38] mb-1">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mb-4 min-h-[32px] leading-snug">
                        {p.desc}
                      </p>

                      {/* Checklist */}
                      <div className="space-y-1.5 mb-5">
                        {p.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-slate-400 flex-shrink-0" />
                            <span className="text-[11px] font-semibold text-slate-700">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="w-full py-1.5 rounded-lg text-[11px] font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onOpenDemoModal(p.title)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors cursor-pointer"
                      >
                        <span>{p.linkText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile View: Right to Left Auto-Sliding Single Row */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="w-[280px] sm:w-[310px] flex-shrink-0 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.iconBg}`}>
                      {renderProductIcon(p.iconType)}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-base font-black text-[#0a1a38] mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 min-h-[34px]">
                      {p.desc}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-2 mb-6">
                      {p.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span className="text-[11.5px] font-semibold text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-2 flex flex-col gap-2.5">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="w-full py-2 rounded-lg text-xs font-bold text-[#0052cc] border border-[#0052cc] hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenDemoModal(p.title)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors cursor-pointer"
                    >
                      <span>{p.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
