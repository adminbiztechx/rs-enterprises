import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import SolutionDetailModal from '../components/SolutionDetailModal';
import {
  Calculator,
  FileCheck,
  Boxes,
  Users,
  Cloud,
  TrendingUp,
  Smartphone,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Calendar,
  PhoneCall,
  Sliders,
  CheckCircle2,
  Target,
  UserCheck,
  Puzzle,
  Maximize2,
  Coins,
  Headphones,
  Zap,
  Factory,
  ShoppingCart,
  Truck,
  HeartPulse,
  GraduationCap
} from 'lucide-react';

export const SolutionsPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutionsList = [
    {
      id: 'accounting-automation',
      title: 'Accounting Automation',
      desc: 'Automate your day-to-day accounting tasks, reduce manual effort and improve accuracy.',
      icon: Calculator,
      iconBg: 'bg-blue-50 text-blue-600',
      detailDesc: 'Eliminate repetitive manual accounting tasks with automated bank reconciliation, voucher numbering, recurrent billing, and auto-posting of recurring entries into TallyPrime.',
      features: [
        'Automated bank statement reconciliation (BRS)',
        'Bulk voucher import and Excel auto-posting',
        'Recurring sales and purchase voucher scheduling',
        'Automated interest calculation & debit note generation',
        'Pre-set voucher approval and verification hierarchy',
        'Zero manual entry errors guarantee'
      ]
    },
    {
      id: 'gst-compliance',
      title: 'GST Compliance Solution',
      desc: 'Stay 100% GST compliant with automated GST returns, e-invoice, e-way bill and reporting.',
      icon: FileCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      detailDesc: 'End-to-end GST compliance suite built into TallyPrime for automated GSTR-1, GSTR-3B preparation, real-time GSTR-2B reconciliation, and one-click E-Invoice & E-Way Bill generation.',
      features: [
        'Direct API integration with GSTN & NIC e-Invoice portal',
        'Instant IRN generation with verified QR code',
        'Automated supplier ITC reconciliation with GSTR-2B',
        'HSN / SAC rate validator & mismatch notifications',
        'Multi-GSTIN centralized management',
        'Audit-ready GST liability & input tax reports'
      ]
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management',
      desc: 'Real-time inventory tracking, stock valuation, batch & serial management and reorder alerts.',
      icon: Boxes,
      iconBg: 'bg-purple-50 text-purple-600',
      detailDesc: 'Precision inventory optimization enabling multi-location godown management, FIFO/LIFO/Average stock valuation, batch-wise tracking with manufacturing/expiry dates, and automated reorder alerts.',
      features: [
        'Real-time multi-warehouse & godown visibility',
        'Batch, lot and serial number lifecycle tracking',
        'Automated minimum stock alerts & purchase reorder levels',
        'Bill of Materials (BOM) & manufacturing job costing',
        'Barcode / QR code scanning at stock inward/dispatch',
        'Dead stock and slow-moving item analytical reports'
      ]
    },
    {
      id: 'payroll-management',
      title: 'Payroll Management',
      desc: 'Complete payroll processing, salary slips, tax calculations and statutory compliance made easy.',
      icon: Users,
      iconBg: 'bg-amber-50 text-amber-600',
      detailDesc: 'Comprehensive human resource and payroll automation in TallyPrime covering employee attendance, pay heads, statutory PF/ESI/PT/TDS deductions, and automated payslip generation.',
      features: [
        'Biometric attendance machine integration',
        'Configurable pay structure & incentive formulas',
        'Automated PF, ESI, Professional Tax & TDS computation',
        'One-click monthly payroll processing',
        'Password-protected payslip emailing directly to staff',
        'Statutory returns (PF ECR, Form 16, Form 24Q) generation'
      ]
    },
    {
      id: 'cloud-accounting',
      title: 'Cloud Accounting',
      desc: 'Access your business data securely from anywhere, anytime on any device.',
      icon: Cloud,
      iconBg: 'bg-orange-50 text-orange-600',
      detailDesc: 'Empower your finance team and leadership with secure cloud-hosted Tally accessible 24/7 from laptops, Macs, iPads, and smartphones with zero latency.',
      features: [
        'Ultra-fast cloud infrastructure hosted in Indian Tier-IV data centers',
        'Cross-platform access: Windows, Mac, iPad, Android & Web',
        'Automatic daily offsite backups with ransomware protection',
        'Enterprise multi-factor authentication (2FA/MFA)',
        'Local printer and thermal invoice driver pass-through',
        '99.9% uptime SLA with 24/7 server monitoring'
      ]
    },
    {
      id: 'bi-reporting',
      title: 'Business Intelligence & Reporting',
      desc: 'Powerful dashboards, MIS reports and insights to make faster, data-driven decisions.',
      icon: TrendingUp,
      iconBg: 'bg-teal-50 text-teal-600',
      detailDesc: 'Transform raw accounting ledgers into dynamic visual management dashboards, cash flow forecasts, debtor aging curves, and revenue growth analytics.',
      features: [
        'Interactive executive KPI & MIS dashboards',
        'Cash flow forecast & working capital liquidity projection',
        'Customer credit limit & payment default risk scoring',
        'Product & salesperson profitability analytics',
        'Customizable scheduled WhatsApp & email report delivery',
        'Multi-company consolidated balance sheet & P&L view'
      ]
    },
    {
      id: 'mobile-access',
      title: 'Mobile Access',
      desc: 'Manage your business on-the-go with Tally mobile apps and remote access solutions.',
      icon: Smartphone,
      iconBg: 'bg-rose-50 text-rose-600',
      detailDesc: 'Access real-time business health, pending sales orders, customer balances, and create orders directly on the field via native Android and iOS Tally mobile apps.',
      features: [
        'Native iOS & Android mobile applications',
        'Instant customer outstanding balances & ledger view',
        'Field salesperson sales order creation & stock check',
        'Digital receipt & payment entry with location geotagging',
        'Direct WhatsApp invoice & statement dispatch from phone',
        'Role-based permissions restricting sensitive company data'
      ]
    },
    {
      id: 'security-data-protection',
      title: 'Security & Data Protection',
      desc: 'Role-based access, data encryption, audit trails and secure backup.',
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 text-blue-600',
      detailDesc: 'Enterprise-grade cybersecurity architecture protecting your sensitive financial records from ransomware, unauthorized employee tampering, and accidental data corruption.',
      features: [
        'Granular role-based user permissions (voucher-level controls)',
        'TallyPrime Edit Log compliance as per MCA regulations',
        'AES-256 encrypted automated local and cloud backups',
        'Ransomware-isolated air-gapped backup repository',
        'Complete user login audit trail & activity change logs',
        'Emergency disaster recovery protocol with 1-hour RTO'
      ]
    }
  ];

  const whyChooseSolutions = [
    {
      icon: UserCheck,
      title: 'Tailored for Your Business',
      desc: 'Custom solutions as per your needs'
    },
    {
      icon: Puzzle,
      title: 'Seamless Integration',
      desc: 'Works with Tally and third-party apps'
    },
    {
      icon: Maximize2,
      title: 'Scalable & Flexible',
      desc: 'Grows with your business'
    },
    {
      icon: Coins,
      title: 'Cost Effective',
      desc: 'Maximize efficiency and ROI'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      desc: 'Dedicated support when you need it'
    },
    {
      icon: Zap,
      title: 'Future Ready',
      desc: 'Technology that keeps you ahead'
    }
  ];

  const industriesList = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Retail', icon: ShoppingCart },
    { name: 'Wholesale & Distribution', icon: Truck },
    { name: 'Trading', icon: TrendingUp },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Education', icon: GraduationCap }
  ];

  const caseStudies = [
    {
      id: 'mfg',
      tag: 'Manufacturing',
      title: 'Improved Reporting & Reduced Costs',
      desc: 'Integrated Tally with advanced reporting. Saved 30% of time and improved accuracy.',
      image: '/assets/images/cs-mfg-hd.jpg'
    },
    {
      id: 'retail',
      tag: 'Retail',
      title: 'Real-time Inventory Visibility',
      desc: 'Implemented inventory solution with barcode. Reduced stock mismatches by 45%.',
      image: '/assets/images/cs-retail-hd.jpg'
    },
    {
      id: 'trading',
      tag: 'Trading',
      title: 'Faster GST Filing & Compliance',
      desc: 'Automated GST processes and e-invoicing. 100% on-time compliance achieved.',
      image: '/assets/images/cs-trading-hd.jpg'
    }
  ];

  const handleExploreSolution = (solution) => {
    setSelectedSolution(solution);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Solutions Hero Section */}
      <section className="relative bg-gradient-to-br from-[#061427] via-[#091e38] to-[#0d284d] text-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle mesh & backlights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
            <span className="text-white font-semibold">Solutions</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading & 4 Badges */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Smart Solutions for <br />
                  Smarter Businesses
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Powerful, scalable and reliable Tally solutions to automate your accounting, ensure compliance and accelerate business growth.
              </p>

              {/* 4 Feature Badges in horizontal row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/60">
                {/* Badge 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Automate <br />
                    <span className="text-slate-300 font-normal">Your Processes</span>
                  </span>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Ensure <br />
                    <span className="text-slate-300 font-normal">Compliance</span>
                  </span>
                </div>

                {/* Badge 3 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Improve <br />
                    <span className="text-slate-300 font-normal">Accuracy</span>
                  </span>
                </div>

                {/* Badge 4 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Make Better <br />
                    <span className="text-slate-300 font-normal">Decisions</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup (Laptop + Phone) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#061427] group">
                <img
                  src="/assets/images/solutions-hero-devices-4k.jpg"
                  alt="TallyPrime Enterprise Solutions Dashboard and Mobile App"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main "Complete Business Solutions with Tally" (8 Cards) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0052cc] uppercase block mb-2">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2347] tracking-tight mb-3">
              Complete Business Solutions with Tally
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              End-to-end solutions to streamline operations, improve productivity and drive growth.
            </p>
          </div>

          {/* Desktop View: Exact Original 8 Cards Grid (4 columns) */}
          <div className="hidden lg:grid grid-cols-4 gap-5 sm:gap-6">
            {solutionsList.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  onClick={() => handleExploreSolution(sol)}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${sol.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0d2347] mb-2 group-hover:text-blue-600 transition-colors">
                      {sol.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                      {sol.desc}
                    </p>
                  </div>

                  {/* Explore link */}
                  <div className="pt-2 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Solutions (Right to Left) */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {solutionsList.map((sol) => {
                const Icon = sol.icon;
                return (
                  <div
                    key={sol.id}
                    onClick={() => handleExploreSolution(sol)}
                    className="w-[280px] sm:w-[310px] flex-shrink-0 group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Icon container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${sol.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#0d2347] mb-2 group-hover:text-blue-600 transition-colors">
                        {sol.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                        {sol.desc}
                      </p>
                    </div>

                    {/* Explore link */}
                    <div className="pt-2 border-t border-slate-50">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </AutoSlidingRow>
          </div>

          {/* Center Button: View All Solutions */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (onOpenDemoModal) onOpenDemoModal('General Solution Inquiry');
              }}
              className="inline-flex items-center justify-center border-2 border-[#0052cc] text-[#0052cc] hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition duration-200 shadow-sm cursor-pointer"
            >
              View All Solutions
            </button>
          </div>
        </div>
      </section>

      {/* 3. Why Our Solutions Make a Difference? */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#edf5ff] rounded-3xl p-8 sm:p-12 border border-blue-100/60 shadow-xs">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight">
                Why Our Solutions Make a Difference?
              </h2>
            </div>

            {/* Desktop View: Exact Original 6 items row with vertical dividers */}
            <div className="hidden lg:grid grid-cols-6 gap-0 divide-x divide-blue-200/70">
              {whyChooseSolutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center px-4 space-y-2.5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0d2347] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Single Row Auto-Sliding Features */}
            <div className="block lg:hidden">
              <AutoSlidingRow speed={0.7} gap="gap-6">
                {whyChooseSolutions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="w-[190px] sm:w-[210px] flex-shrink-0 flex flex-col items-center text-center px-4 py-3 bg-white/70 rounded-2xl border border-blue-100 shadow-xs space-y-2.5"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-[#0d2347] leading-snug whitespace-nowrap">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </AutoSlidingRow>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions for Every Industry */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight mb-2">
              Solutions for Every Industry
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Industry-specific solutions designed to address unique business challenges.
            </p>
          </div>

          {/* 6 Industries + 1 "View All" link card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onOpenDemoModal && onOpenDemoModal(`${ind.name} Industry Solution`)}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition duration-200 flex flex-col items-center text-center justify-center space-y-3 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d2347] group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </h4>
                </div>
              );
            })}

            {/* View All Industries Link Card */}
            <div
              onClick={() => onOpenContactModal && onOpenContactModal()}
              className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition duration-200 flex flex-col items-center text-center justify-center space-y-2 cursor-pointer group"
            >
              <span className="text-xs sm:text-sm font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors leading-snug">
                View All <br /> Industries
              </span>
              <ArrowRight className="w-4 h-4 text-[#0052cc] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Results from Real Businesses (Case Studies) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Heading, 4 Stats in 2x2 grid, & Link */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-50/70 via-slate-50 to-white rounded-3xl p-8 border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight mb-8">
                  Real Results from Real Businesses
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-black text-[#0052cc] tracking-tight">500+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">Businesses Transformed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#0052cc] tracking-tight">98%</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#0052cc] tracking-tight">50%</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">Average Time Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#0052cc] tracking-tight">40%</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">Increase in Productivity</div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenContactModal && onOpenContactModal()}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors cursor-pointer"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Case Study Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => onOpenDemoModal && onOpenDemoModal(`${cs.tag} Case Study Inquiry`)}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Image with Tag Pill */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wide border border-slate-100">
                        {cs.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-sm sm:text-base font-bold text-[#0d2347] mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {cs.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {cs.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Ready to Transform Your Business?" CTA Banner */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative bg-gradient-to-r from-[#071d3d] via-[#09264f] to-[#0d346b] rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden">
            {/* Decorative dot matrix pattern */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content with circular icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Headphones className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                    Talk to our experts and find the perfect solution for your business needs.
                  </p>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
                <button
                  onClick={() => onOpenDemoModal && onOpenDemoModal('General Solution Demo')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#071d3d] font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Book Free Demo</span>
                </button>

                <button
                  onClick={() => onOpenContactModal && onOpenContactModal()}
                  className="w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to Expert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal for detailed solution view */}
      <SolutionDetailModal
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        solution={selectedSolution}
        onBookDemo={(title) => {
          setSelectedSolution(null);
          if (onOpenDemoModal) onOpenDemoModal(title);
        }}
        onContactExpert={() => {
          setSelectedSolution(null);
          if (onOpenContactModal) onOpenContactModal();
        }}
      />
    </div>
  );
};

export default SolutionsPage;
