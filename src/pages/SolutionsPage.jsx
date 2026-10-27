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
  Sparkles,
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
      tag: 'Smart Accounts',
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/15 via-sky-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-amber-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
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
      tag: '100% Tax Ready',
      badgeGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-teal-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.15)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/15 via-emerald-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-teal-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      titleHover: 'group-hover:text-teal-600',
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
      tag: 'Real-Time Stock',
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/15 via-indigo-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-purple-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
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
      tag: 'Salary & PF/ESI',
      badgeGradient: 'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white',
      gradientBorder: 'from-rose-500 via-pink-400 to-orange-400',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(244,63,94,0.15)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-rose-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400',
      arrowBtnStyle: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      titleHover: 'group-hover:text-rose-600',
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
      tag: 'Anywhere 24/7',
      badgeGradient: 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white',
      gradientBorder: 'from-sky-500 via-cyan-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(14,165,233,0.15)] hover:border-sky-400/80',
      ambientGradient: 'from-sky-500/15 via-cyan-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-sky-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-sky-50/90 via-white to-blue-50/70 border-2 border-sky-200/90 shadow-sky-500/10 group-hover:border-sky-400',
      arrowBtnStyle: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
      titleHover: 'group-hover:text-sky-600',
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
      tag: 'Smart Analytics',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(16,185,129,0.15)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/15 via-teal-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-emerald-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      titleHover: 'group-hover:text-emerald-600',
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
      tag: 'iOS & Android',
      badgeGradient: 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white',
      gradientBorder: 'from-fuchsia-500 via-pink-400 to-purple-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(217,70,239,0.15)] hover:border-fuchsia-400/80',
      ambientGradient: 'from-fuchsia-500/15 via-pink-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-fuchsia-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-fuchsia-50/90 via-white to-pink-50/70 border-2 border-fuchsia-200/90 shadow-fuchsia-500/10 group-hover:border-fuchsia-400',
      arrowBtnStyle: 'bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white',
      titleHover: 'group-hover:text-fuchsia-600',
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
      tag: 'AES-256 Vault',
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(79,70,229,0.15)] hover:border-indigo-400/80',
      ambientGradient: 'from-blue-600/15 via-indigo-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-indigo-200/90 shadow-indigo-500/10 group-hover:border-indigo-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
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

  // Render authentic branded solution emblems matching logo themes & rich gradients
  const renderSolutionIcon = (id, iconBoxBg, FallbackIcon) => {
    return (
      <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
        {(() => {
          switch (id) {
            case 'accounting-automation':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="calcGrad" x1="5" y1="2" x2="27" y2="30" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="keyAmber" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                  {/* Calculator Body */}
                  <rect x="5" y="2" width="22" height="28" rx="4" fill="url(#calcGrad)" stroke="#bfdbfe" strokeWidth="0.8" />
                  {/* Digital Display Screen */}
                  <rect x="8" y="5.5" width="16" height="6.5" rx="2" fill="#0a1a38" />
                  <circle cx="10.5" cy="8.7" r="1" fill="#10b981" />
                  <line x1="14" y1="8.7" x2="21.5" y2="8.7" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                  {/* Keypad Buttons with Tally Colors */}
                  {/* Row 1 */}
                  <rect x="8" y="14.5" width="4" height="3" rx="1" fill="url(#keyAmber)" />
                  <rect x="14" y="14.5" width="4" height="3" rx="1" fill="#60a5fa" />
                  <rect x="20" y="14.5" width="4" height="3" rx="1" fill="#38bdf8" />

                  {/* Row 2 */}
                  <rect x="8" y="19.5" width="4" height="3" rx="1" fill="#ffffff" />
                  <rect x="14" y="19.5" width="4" height="3" rx="1" fill="#ffffff" />
                  <rect x="20" y="19.5" width="4" height="3" rx="1" fill="#ffffff" />

                  {/* Row 3 */}
                  <rect x="8" y="24.5" width="4" height="3" rx="1" fill="#ffffff" />
                  <rect x="14" y="24.5" width="4" height="3" rx="1" fill="#ffffff" />
                  <rect x="20" y="24.5" width="4" height="3" rx="1" fill="url(#keyAmber)" />
                </svg>
              );

            case 'gst-compliance':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="gstSolGrad" x1="5" y1="2" x2="27" y2="30" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  {/* Document & Shield */}
                  <path d="M16 2.5L5 7.2V14.5C5 22 9.5 28.2 16 30.5C22.5 28.2 27 22 27 14.5V7.2L16 2.5Z" fill="url(#gstSolGrad)" stroke="#ccfbf1" strokeWidth="0.8" />
                  <path d="M10.5 16L14.5 20L22 12" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="16.5" r="8.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                </svg>
              );

            case 'inventory-management':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="invTopPurple" x1="9" y1="2" x2="23" y2="10" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <linearGradient id="invLeftPurple" x1="9" y1="6" x2="16" y2="17" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                    <linearGradient id="invRightPurple" x1="16" y1="6" x2="23" y2="17" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3730a3" />
                    </linearGradient>
                  </defs>
                  {/* Top Warehouse Cube */}
                  <polygon points="16,2 23,6 16,10 9,6" fill="url(#invTopPurple)" />
                  <polygon points="9,6 16,10 16,17 9,13" fill="url(#invLeftPurple)" />
                  <polygon points="16,10 23,6 23,13 16,17" fill="url(#invRightPurple)" />

                  {/* Bottom-Left Cube */}
                  <polygon points="8.5,15 15,18.5 8.5,22 2,18.5" fill="#c084fc" />
                  <polygon points="2,18.5 8.5,22 8.5,29 2,25.5" fill="#a855f7" />
                  <polygon points="8.5,22 15,18.5 15,25.5 8.5,29" fill="#7e22ce" />

                  {/* Bottom-Right Cube */}
                  <polygon points="23.5,15 30,18.5 23.5,22 17,18.5" fill="#818cf8" />
                  <polygon points="17,18.5 23.5,22 23.5,29 17,25.5" fill="#6366f1" />
                  <polygon points="23.5,22 30,18.5 30,25.5 23.5,29" fill="#4338ca" />

                  {/* Scan beam */}
                  <line x1="2" y1="18.5" x2="30" y2="18.5" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 1" />
                </svg>
              );

            case 'payroll-management':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="paySolGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fda4af" />
                      <stop offset="40%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                  </defs>
                  <circle cx="21" cy="9.5" r="3.5" fill="#fca5a5" />
                  <path d="M17 20C17 17 19.2 15.5 22 15.5C24.8 15.5 27 17 27 20" fill="#fca5a5" />
                  <circle cx="11.5" cy="10" r="4.5" fill="url(#paySolGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
                  <path d="M4 25.5C4 20.5 7.5 18 11.5 18C15.5 18 19 20.5 19 25.5" fill="url(#paySolGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
                  <circle cx="23" cy="22.5" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="23" y="25.5" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="system-ui, sans-serif">₹</text>
                </svg>
              );

            case 'cloud-accounting':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="cldSolGrad" x1="2" y1="3" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7dd3fc" />
                      <stop offset="40%" stopColor="#38bdf8" />
                      <stop offset="80%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8.5 24C5.186 24 2.5 21.314 2.5 18C2.5 14.92 4.805 12.38 7.82 12.04C8.57 7.44 12.56 4 17.43 4C22.88 4 27.29 8.41 27.29 13.86C29.93 14.45 31.82 16.8 31.82 19.6C31.82 22.77 29.25 25.33 26.08 25.33H9"
                    fill="url(#cldSolGrad)"
                    stroke="#e0f2fe"
                    strokeWidth="0.8"
                  />
                  <path d="M16.5 11.5V19.5M16.5 11.5L12.5 15.5M16.5 11.5L20.5 15.5" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8.5" cy="18.5" r="1.5" fill="#ffffff" opacity="0.9" />
                  <circle cx="24.5" cy="20" r="1.5" fill="#ffffff" opacity="0.9" />
                </svg>
              );

            case 'bi-reporting':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="biSolGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                  {/* Chart Bars */}
                  <rect x="5" y="19" width="5" height="9" rx="1.5" fill="#a7f3d0" />
                  <rect x="13.5" y="13" width="5" height="15" rx="1.5" fill="#34d399" />
                  <rect x="22" y="7" width="5" height="21" rx="1.5" fill="url(#biSolGrad)" />
                  {/* Ascending Trend Line */}
                  <path d="M6 15L15 9L25 4" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="25" cy="4" r="2.2" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                </svg>
              );

            case 'mobile-access':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="phoneSolGrad" x1="7" y1="2" x2="25" y2="30" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="50%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                  </defs>
                  {/* Phone Body */}
                  <rect x="8" y="2" width="16" height="28" rx="4" fill="url(#phoneSolGrad)" stroke="#fce7f3" strokeWidth="0.8" />
                  {/* Screen */}
                  <rect x="10.5" y="5.5" width="11" height="19" rx="2" fill="#ffffff" />
                  {/* Tally Micro Chart on Phone Screen */}
                  <path d="M12 18L14.5 15L17 16.5L20 12" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="12" r="1" fill="#e11d48" />
                  {/* Home Button Indicator */}
                  <circle cx="16" cy="27" r="1.3" fill="#ffffff" />
                  {/* Earpiece Speaker */}
                  <line x1="14" y1="3.8" x2="18" y2="3.8" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                </svg>
              );

            case 'security-data-protection':
              return (
                <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="secSolGrad" x1="5" y1="2.5" x2="27" y2="29.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                  {/* Cyber Security Shield */}
                  <path d="M16 2.5L5 7.2V14.5C5 22 9.5 28.2 16 30.5C22.5 28.2 27 22 27 14.5V7.2L16 2.5Z" fill="url(#secSolGrad)" stroke="#bfdbfe" strokeWidth="0.8" />
                  {/* Keyhole / Lock Core */}
                  <circle cx="16" cy="14" r="3.5" fill="#ffffff" />
                  <path d="M14.5 14H17.5L18.5 20H13.5L14.5 14Z" fill="#ffffff" />
                  <circle cx="16" cy="14" r="1.2" fill="#1e3a8a" />
                </svg>
              );

            default:
              return FallbackIcon ? <FallbackIcon className="w-6 h-6 text-blue-600" /> : null;
          }
        })()}
      </div>
    );
  };

  // Reusable card renderer with rich gradient borders, ambient glow & micro-animations
  const renderSolutionCard = (sol, isMobile = false) => {
    return (
      <div
        key={sol.id}
        onClick={() => handleExploreSolution(sol)}
        className={`group relative ${sol.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${sol.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        {/* 1. Top Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${sol.gradientBorder} transition-all duration-300`} />

        {/* 2. Ambient Gradient Glow in Corner */}
        <div className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${sol.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

        {/* 3. Specular Shimmer Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* 4. Card Header: Icon Container + Micro Tag Badge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            {renderSolutionIcon(sol.id, sol.iconBoxBg, sol.icon)}
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border border-white/60 ${sol.badgeGradient}`}>
              {sol.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${sol.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {sol.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
            {sol.desc}
          </p>
        </div>

        {/* 5. Card Footer: Action Link + Gradient Arrow Circle */}
        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold text-[#0a1a38] ${sol.titleHover} transition-colors`}>
            Explore Solution
          </span>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${sol.arrowBtnStyle}`}>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

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

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>ENTERPRISE TALLY SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2347] tracking-tight mb-3">
              Complete Business Solutions with Tally
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              End-to-end solutions to streamline operations, improve productivity and drive growth.
            </p>
          </div>

          {/* Desktop View: Exact Original 8 Cards Grid (4 columns) */}
          <div className="hidden lg:grid grid-cols-4 gap-5 sm:gap-6">
            {solutionsList.map((sol) => renderSolutionCard(sol, false))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Solutions (Right to Left) */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {solutionsList.map((sol) => renderSolutionCard(sol, true))}
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
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
