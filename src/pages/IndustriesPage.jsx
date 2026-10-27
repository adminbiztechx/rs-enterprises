import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import IndustryDetailModal from '../components/IndustryDetailModal';
import {
  Factory,
  ShoppingCart,
  Truck,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Building2,
  Utensils,
  Pill,
  Car,
  HandHeart,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Calendar,
  PhoneCall,
  Users,
  Sliders,
  CheckCircle2,
  Timer,
  Award,
  ShieldCheck,
  Settings,
  Sparkles
} from 'lucide-react';

export const IndustriesPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industriesList = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      desc: 'Streamline production, manage inventory, track costs and improve profitability.',
      icon: Factory,
      tag: 'BOM & Costing',
      badgeGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(37,99,235,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-indigo-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
      detailDesc: 'End-to-end multi-stage manufacturing solution in TallyPrime covering raw material consumption, Bill of Materials (BOM), job work processing, scrap valuation, and accurate per-unit production costing.',
      features: [
        'Multi-level Bill of Materials (BOM) creation',
        'Job-work in / out order & vendor stock tracking',
        'Batch, lot & serial number lifecycle tracking',
        'Direct vs indirect overhead cost allocation',
        'Real-time work-in-progress (WIP) stock valuation',
        'Scrap, byproduct, and wastage audit reports'
      ]
    },
    {
      id: 'retail',
      title: 'Retail',
      desc: 'Manage sales, inventory, billing and multi-store operations seamlessly.',
      icon: ShoppingCart,
      tag: 'POS & Multi-Store',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-amber-400',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(16,185,129,0.18)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/20 via-teal-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      titleHover: 'group-hover:text-emerald-600',
      detailDesc: 'High-speed POS billing and multi-outlet retail solution with barcode scanning, scheme & discount management, cashier shifts, and centralized master control.',
      features: [
        'Rapid POS checkout with thermal printer support',
        'Barcode / QR code generation & scanning',
        'Promotional schemes, coupons & customer loyalty points',
        'Credit card, UPI, and cash multi-tender payment',
        'Centralized stock sync across multiple retail stores',
        'Fastest moving items & gross margin per shelf report'
      ]
    },
    {
      id: 'wholesale-distribution',
      title: 'Wholesale & Distribution',
      desc: 'Optimize stock, manage suppliers, orders and distribution efficiently.',
      icon: Truck,
      tag: 'Supply Chain & Slabs',
      badgeGradient: 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(245,158,11,0.18)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/20 via-orange-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      titleHover: 'group-hover:text-amber-600',
      detailDesc: 'High-volume wholesale management handling distributor pricing slabs, credit limits, multi-godown transfers, route-wise sales dispatch, and automated party statements.',
      features: [
        'Customer-wise dynamic price lists and discounts',
        'Credit limit & overdue bill payment locks',
        'Sales order to delivery challan & dispatch packing list',
        'Inter-branch godown stock transfer with transit tracking',
        'Salesperson commission & route-wise collection reports',
        'Automated WhatsApp ledger statements to parties'
      ]
    },
    {
      id: 'trading',
      title: 'Trading',
      desc: 'Simplify accounting, stock management, GST and financial reporting.',
      icon: TrendingUp,
      tag: 'GST & Profit MIS',
      badgeGradient: 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(147,51,234,0.18)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/20 via-violet-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-violet-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
      detailDesc: 'Comprehensive solution for traders and merchants covering purchase order fulfillment, landed cost calculation, automated GST return matching, and debtor collection follow-ups.',
      features: [
        'Import / domestic purchase landed cost calculation',
        'Real-time gross profit per invoice & per item',
        'Automated GSTR-2B input tax credit reconciliation',
        'One-click E-Invoice & E-Way Bill generation',
        'Aging analysis for outstanding debtor collections',
        'Multi-currency import/export billing support'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      desc: 'Manage clinic, pharmacy and hospital operations with ease and accuracy.',
      icon: HeartPulse,
      tag: 'OPD & Pharmacy',
      badgeGradient: 'bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white',
      gradientBorder: 'from-rose-500 via-pink-400 to-red-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(244,63,94,0.18)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/20 via-pink-500/15 to-red-500/10',
      cardBg: 'bg-gradient-to-b from-rose-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400',
      arrowBtnStyle: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      titleHover: 'group-hover:text-rose-600',
      detailDesc: 'Specialized healthcare and clinical accounting managing doctor fees, pharmacy batch expiry, OPD/IPD bill generation, insurance TPA claims, and statutory hospital compliance.',
      features: [
        'Pharmacy batch number and expiry date tracking',
        'Doctor visiting charge & referral fee sharing',
        'Departmental cost center accounting (Lab, ICU, OPD)',
        'TPA & cashless corporate insurance claims ledger',
        'Automated near-expiry stock alerts to prevent loss',
        'Drug license & statutory tax report compliance'
      ]
    },
    {
      id: 'education',
      title: 'Education',
      desc: 'Automate fee management, expenses, payroll and financial reporting.',
      icon: GraduationCap,
      tag: 'Campuses & Fees',
      badgeGradient: 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white',
      gradientBorder: 'from-indigo-500 via-blue-400 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(79,70,229,0.18)] hover:border-indigo-400/80',
      ambientGradient: 'from-indigo-500/20 via-blue-500/15 to-cyan-500/10',
      cardBg: 'bg-gradient-to-b from-indigo-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-200/90 shadow-indigo-500/10 group-hover:border-indigo-400',
      arrowBtnStyle: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      titleHover: 'group-hover:text-indigo-600',
      detailDesc: 'Designed for schools, colleges, coaching institutes, and universities to automate student fee structures, installment tracking, staff payroll, and scholarship fund accounting.',
      features: [
        'Student master with category-wise fee structures',
        'Automated fee receipt printing & SMS/WhatsApp alerts',
        'Installment overdue notices & fine calculation',
        'Teacher & staff payroll with statutory PF/ESI/TDS',
        'Hostel, transport & library fee collection ledgers',
        'Departmental grant & trust fund expenditure reports'
      ]
    },
    {
      id: 'construction',
      title: 'Construction',
      desc: 'Track project costs, manage contracts, vendors and improve cash flow.',
      icon: Building2,
      tag: 'Projects & RA Bills',
      badgeGradient: 'bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white',
      gradientBorder: 'from-amber-600 via-yellow-500 to-orange-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(217,119,6,0.18)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/20 via-yellow-500/15 to-orange-500/10',
      cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      titleHover: 'group-hover:text-amber-600',
      detailDesc: 'Project-based cost accounting for real estate builders, civil contractors, and infra developers managing site-wise material consumption, sub-contractor RA bills, and labor payroll.',
      features: [
        'Site-wise & project-wise cost center accounting',
        'Sub-contractor Running Account (RA) billing & retention money',
        'Raw material procurement & site transfer tracking',
        'Daily labor muster roll & site supervisor advances',
        'TDS on contractor payments (Section 194C/194J/194Q)',
        'Project completion percentage & profitability MIS'
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      desc: 'Manage hotel operations, POS billing, inventory and financials efficiently.',
      icon: Utensils,
      tag: 'KOT & Room Folios',
      badgeGradient: 'bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-blue-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.18)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/20 via-emerald-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-teal-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      titleHover: 'group-hover:text-teal-600',
      detailDesc: 'Tailored for hotels, restaurants, cafes, and banquet halls to manage kitchen order tickets (KOT), recipe costings, room tariff billing, and banquet advance ledgers.',
      features: [
        'Restaurant KOT printing & table management',
        'Food & beverage recipe ingredient consumption',
        'Guest room folio billing with room service aggregation',
        'Banquet hall advance bookings & event invoicing',
        'Multi-rate GST configuration for food vs room tariffs',
        'Daily operational cash register & shift closure reconciliations'
      ]
    },
    {
      id: 'pharma',
      title: 'Pharma',
      desc: 'Maintain batch-wise inventory, expiry tracking and ensure regulatory compliance.',
      icon: Pill,
      tag: 'Batch & Expiry Alert',
      badgeGradient: 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white',
      gradientBorder: 'from-fuchsia-500 via-purple-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(192,38,211,0.18)] hover:border-purple-400/80',
      ambientGradient: 'from-fuchsia-500/20 via-purple-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
      detailDesc: 'Strict compliance accounting for pharmaceutical manufacturers, C&F agents, and wholesale medicine dealers managing drug licenses, narcotic schedules, and expiry returns.',
      features: [
        'Strict batch-wise inventory with Mfg & Exp dates',
        'Automated blocking of expired medicine sales',
        'Expiry / breakage credit note management',
        'Schedule H & H1 narcotic drug sales register',
        'Price to Retailer (PTR) & Price to Consumer (PTC) calculations',
        'Cold-chain and godown location stock allocation'
      ]
    },
    {
      id: 'automobile',
      title: 'Automobile',
      desc: 'Manage spare parts, service operations, inventory and workshop billing.',
      icon: Car,
      tag: 'Workshops & Spares',
      badgeGradient: 'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white',
      gradientBorder: 'from-cyan-500 via-blue-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(6,182,212,0.18)] hover:border-cyan-400/80',
      ambientGradient: 'from-cyan-500/20 via-blue-500/15 to-indigo-500/10',
      cardBg: 'bg-gradient-to-b from-cyan-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-cyan-50/90 via-white to-blue-50/70 border-2 border-cyan-200/90 shadow-cyan-500/10 group-hover:border-cyan-400',
      arrowBtnStyle: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
      titleHover: 'group-hover:text-cyan-600',
      detailDesc: 'Automobile dealership and workshop management tracking chassis numbers, spare part bin locations, mechanic labor charges, insurance claim billing, and vehicle servicing histories.',
      features: [
        'Vehicle chassis & engine number tracking',
        'Job-card opening with estimated parts and labor',
        'Spare part bin rack numbering & interchangeability search',
        'Insurance company surveyor survey & claim settlement',
        'Service advisor & mechanic productivity commissions',
        'Automated vehicle next-service WhatsApp reminders'
      ]
    },
    {
      id: 'ngos',
      title: 'NGOs & Trusts',
      desc: 'Track funds, manage expenses and ensure transparency in reporting.',
      icon: HandHeart,
      tag: '80G & FCRA Grants',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 text-white',
      gradientBorder: 'from-emerald-500 via-green-400 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(16,185,129,0.18)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/20 via-green-500/15 to-amber-500/10',
      cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-green-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      titleHover: 'group-hover:text-emerald-600',
      detailDesc: 'Non-profit, NGO, and charitable trust accounting adhering strictly to Section 80G, FCRA foreign contribution guidelines, grant utilization certificates, and donor receipt generation.',
      features: [
        'Project-wise donor grant & fund tracking',
        'Utilization certificate (UC) statement preparation',
        'Foreign Contribution Regulation Act (FCRA) compliance',
        'Automated 80G tax exemption receipt emailing',
        'Corpus fund vs earmarked general fund ledgers',
        'Income & Expenditure statement matching government formats'
      ]
    },
    {
      id: 'ca-firms',
      title: 'CA Firms & Professional Services',
      desc: 'Manage clients, audits, TDS, GST returns and compliance efficiently.',
      icon: Briefcase,
      tag: 'Audit & MCA Compliance',
      badgeGradient: 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white',
      gradientBorder: 'from-blue-600 via-indigo-500 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(29,78,216,0.18)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/20 via-indigo-500/15 to-blue-500/10',
      cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
      detailDesc: 'Empowering Chartered Accountants, tax practitioners, legal firms, and consultants with multi-company audit tools, TDS computation, MCA edit log review, and client billing.',
      features: [
        'TallyPrime Audit & Compliance analytical tools',
        'Fast sampling & voucher verification flags for audit teams',
        'Multi-client company master database management',
        'Client-wise time-sheet billing & out-of-pocket expenses',
        'Automated 3CD audit report scheduling & data export',
        'TallyPrime Edit Log trail inspection for MCA audit requirements'
      ]
    }
  ];

  // Render 3D high-definition SVG emblem with authentic logo colors and gradient grading
  const renderIndustryIcon = (id, FallbackIcon) => {
    switch (id) {
      case 'manufacturing':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="mfgGrad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0a1a38" />
              </linearGradient>
              <linearGradient id="gearM" x1="18" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <path d="M4 27V15L11 20V15L18 20V11L25 16V27H4Z" fill="url(#mfgGrad)" />
            <path d="M6 15V8H9V15" fill="#2563eb" />
            <circle cx="7.5" cy="5.5" r="1.5" fill="#93c5fd" opacity="0.85" />
            <circle cx="9" cy="3" r="1.2" fill="#bfdbfe" opacity="0.7" />
            <rect x="7" y="21" width="3" height="3" rx="0.5" fill="#fde047" />
            <rect x="13" y="21" width="3" height="3" rx="0.5" fill="#fde047" />
            <rect x="7" y="16" width="3" height="2" rx="0.5" fill="#fde047" />
            <g transform="translate(16, 15) scale(0.55)">
              <circle cx="12" cy="12" r="11" fill="url(#gearM)" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" fill="#0a1a38" />
              <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
              <path d="M12 0V4M12 20V24M0 12H4M20 12H24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'retail':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="retGrad" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="60%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
              <linearGradient id="boxGrad1" x1="11" y1="7" x2="19" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="boxGrad2" x1="17" y1="7" x2="26" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <rect x="11" y="9" width="7" height="6" rx="1.2" fill="url(#boxGrad1)" />
            <rect x="17" y="7" width="8" height="8" rx="1.2" fill="url(#boxGrad2)" />
            <line x1="21" y1="7" x2="21" y2="15" stroke="#ffffff" strokeWidth="0.8" />
            <path d="M4 5H7.5L10.5 19H25L28 9H9" stroke="url(#retGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="24.5" r="2.5" fill="#059669" stroke="#ffffff" strokeWidth="1" />
            <circle cx="23" cy="24.5" r="2.5" fill="#059669" stroke="#ffffff" strokeWidth="1" />
            <circle cx="12" cy="24.5" r="0.8" fill="#ffffff" />
            <circle cx="23" cy="24.5" r="0.8" fill="#ffffff" />
            <circle cx="26" cy="4" r="1.5" fill="#f59e0b" />
          </svg>
        );

      case 'wholesale-distribution':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="trkTruck" x1="3" y1="8" x2="29" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="cargoCont" x1="3" y1="7" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <path d="M1 11H3M1 15H4M1 19H2" stroke="#fdba74" strokeWidth="1.6" strokeLinecap="round" />
            <rect x="4" y="7" width="15" height="13" rx="1.5" fill="url(#cargoCont)" stroke="#bfdbfe" strokeWidth="0.6" />
            <line x1="9" y1="7" x2="9" y2="20" stroke="#93c5fd" strokeWidth="0.8" />
            <line x1="14" y1="7" x2="14" y2="20" stroke="#93c5fd" strokeWidth="0.8" />
            <rect x="6" y="11" width="11" height="2" fill="#f59e0b" rx="0.5" />
            <path d="M19 11H23L27 15V20H19V11Z" fill="url(#trkTruck)" />
            <path d="M20 12.5H22.5L25 15H20V12.5Z" fill="#e0f2fe" />
            <circle cx="27" cy="18" r="1.2" fill="#fef08a" />
            <rect x="4" y="19" width="23" height="2" fill="#0f172a" />
            <circle cx="9" cy="22.5" r="2.8" fill="#1e293b" stroke="#ffffff" strokeWidth="1" />
            <circle cx="23" cy="22.5" r="2.8" fill="#1e293b" stroke="#ffffff" strokeWidth="1" />
            <circle cx="9" cy="22.5" r="1" fill="#f97316" />
            <circle cx="23" cy="22.5" r="1" fill="#f97316" />
          </svg>
        );

      case 'trading':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="trdGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#7e22ce" />
                <stop offset="100%" stopColor="#581c87" />
              </linearGradient>
              <linearGradient id="coinGrad" x1="18" y1="16" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect x="5" y="18" width="4.5" height="10" rx="1.5" fill="#c084fc" />
            <rect x="12" y="13" width="4.5" height="15" rx="1.5" fill="#9333ea" />
            <rect x="19" y="8" width="4.5" height="20" rx="1.5" fill="url(#trdGrad)" />
            <path d="M4 17L11 11L18 14L27 4" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 4H27V10" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="23" cy="21" r="5" fill="url(#coinGrad)" stroke="#ffffff" strokeWidth="1" />
            <text x="23" y="24" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">₹</text>
          </svg>
        );

      case 'healthcare':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="hcGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>
            <path d="M16 3L5 7.5V15C5 22.5 9.5 28 16 30C22.5 28 27 22.5 27 15V7.5L16 3Z" fill="url(#hcGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
            <path d="M16 8V22M9 15H23" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M7 16H11L13 12L16 20L19 14L21 16H25" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="20" r="1.2" fill="#ffffff" />
          </svg>
        );

      case 'education':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="eduGrad" x1="4" y1="4" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#312e81" />
              </linearGradient>
            </defs>
            <path d="M16 4L3 10L16 16L29 10L16 4Z" fill="url(#eduGrad)" stroke="#c7d2fe" strokeWidth="0.8" />
            <path d="M8 13.5V19.5C8 23 11.5 25.5 16 25.5C20.5 25.5 24 23 24 19.5V13.5L16 17.5L8 13.5Z" fill="#3730a3" />
            <path d="M25 11.5V20.5M25 20.5C25 21.5 23.5 22 23.5 23" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="16" cy="10" r="1.8" fill="#fbbf24" />
            <circle cx="24" cy="22" r="1.5" fill="#f59e0b" />
            <rect x="9" y="26.5" width="14" height="3" rx="1.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.6" />
            <rect x="14" y="26.5" width="4" height="3" fill="#ef4444" />
          </svg>
        );

      case 'construction':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="cstGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
            </defs>
            <rect x="5" y="11" width="11" height="17" rx="1.5" fill="#0f172a" />
            <rect x="7" y="14" width="2" height="2" fill="#fbbf24" rx="0.3" />
            <rect x="11" y="14" width="2" height="2" fill="#fbbf24" rx="0.3" />
            <rect x="7" y="18" width="2" height="2" fill="#fbbf24" rx="0.3" />
            <rect x="11" y="18" width="2" height="2" fill="#94a3b8" rx="0.3" />
            <rect x="7" y="22" width="2" height="2" fill="#fbbf24" rx="0.3" />
            <rect x="11" y="22" width="2" height="2" fill="#fbbf24" rx="0.3" />
            <path d="M19 28V6M19 7H29M19 11L25 7M22 6L19 3" stroke="url(#cstGrad)" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 7V13M25 13H27L26 15" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="3" y="27" width="26" height="2" fill="#f59e0b" rx="1" />
          </svg>
        );

      case 'hospitality':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="hspGrad" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#115e59" />
              </linearGradient>
            </defs>
            <path d="M12 5C12 7 13 8 13 9M16 3C16 6 17 7 17 9M20 5C20 7 21 8 21 9" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 21C6 14 10.5 10 16 10C21.5 10 26 14 26 21H6Z" fill="url(#hspGrad)" stroke="#ccfbf1" strokeWidth="0.8" />
            <circle cx="16" cy="8.5" r="2" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
            <rect x="4" y="21" width="24" height="3" rx="1.5" fill="#f59e0b" />
            <rect x="7" y="24" width="18" height="2" rx="1" fill="#d97706" />
            <circle cx="11" cy="16" r="1" fill="#ffffff" opacity="0.8" />
            <circle cx="21" cy="16" r="1" fill="#ffffff" opacity="0.8" />
          </svg>
        );

      case 'pharma':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="phmTop" x1="6" y1="6" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
              <linearGradient id="phmBtm" x1="12" y1="12" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <g transform="rotate(-35 16 16)">
              <path d="M11 6C11 3.2 13.2 1 16 1C18.8 1 21 3.2 21 6V16H11V6Z" fill="url(#phmTop)" />
              <path d="M11 16H21V26C21 28.8 18.8 31 16 31C13.2 31 11 28.8 11 26V16Z" fill="url(#phmBtm)" />
              <line x1="10" y1="16" x2="22" y2="16" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M13 5V13" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M16 20V24M14 22H18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <circle cx="26" cy="8" r="1.5" fill="#f59e0b" />
            <circle cx="6" cy="24" r="1.2" fill="#c084fc" />
          </svg>
        );

      case 'automobile':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="autoGrad" x1="3" y1="8" x2="29" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <path d="M7 17L10 10H20L24 17H7Z" fill="#bae6fd" />
            <path d="M3 17C3 16 4 15 5 15H25C26.5 15 28 16 28.5 17.5L29 20C29 21.5 28 22.5 26.5 22.5H4C2.5 22.5 2 21.5 2 20L3 17Z" fill="url(#autoGrad)" stroke="#e0f2fe" strokeWidth="0.8" />
            <line x1="16" y1="10" x2="16" y2="17" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="27" cy="18" r="1.2" fill="#fef08a" />
            <circle cx="4" cy="18" r="1" fill="#f43f5e" />
            <circle cx="8" cy="22.5" r="3.2" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
            <circle cx="23" cy="22.5" r="3.2" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
            <circle cx="8" cy="22.5" r="1.2" fill="#38bdf8" />
            <circle cx="23" cy="22.5" r="1.2" fill="#38bdf8" />
            <path d="M21 4L27 10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="4" r="1.5" fill="#f59e0b" />
          </svg>
        );

      case 'ngos':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="hrtGrad" x1="10" y1="4" x2="22" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <linearGradient id="hndGrad" x1="4" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <path d="M16 15L14.5 13.5C12.5 11.5 12.5 8.5 14.5 6.5C16.5 4.5 19.5 4.5 21.5 6.5L16 15Z" fill="url(#hrtGrad)" />
            <path d="M16 15L17.5 13.5C19.5 11.5 19.5 8.5 17.5 6.5C15.5 4.5 12.5 4.5 10.5 6.5L16 15Z" fill="#fb7185" />
            <path d="M4 22C6 19 9 18 12 19L16 21L20 19C23 18 26 19 28 22L25 26H7L4 22Z" fill="url(#hndGrad)" stroke="#a7f3d0" strokeWidth="0.8" />
            <circle cx="16" cy="4" r="1.8" fill="#f59e0b" />
            <circle cx="8" cy="11" r="1.2" fill="#fbbf24" />
          </svg>
        );

      case 'ca-firms':
        return (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="caGrad" x1="4" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0a1a38" />
              </linearGradient>
              <linearGradient id="sealGrad" x1="18" y1="16" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <path d="M12 9V6C12 4.9 12.9 4 14 4H18C19.1 4 20 4.9 20 6V9" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <rect x="4" y="9" width="24" height="18" rx="3" fill="url(#caGrad)" stroke="#93c5fd" strokeWidth="0.8" />
            <line x1="4" y1="17" x2="28" y2="17" stroke="#60a5fa" strokeWidth="1" />
            <rect x="8" y="15" width="2.5" height="3.5" rx="0.5" fill="#f59e0b" />
            <rect x="21.5" y="15" width="2.5" height="3.5" rx="0.5" fill="#f59e0b" />
            <circle cx="16" cy="17" r="4.2" fill="url(#sealGrad)" stroke="#ffffff" strokeWidth="1" />
            <path d="M14.5 17L15.5 18.2L17.8 15.8" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      default:
        return FallbackIcon ? <FallbackIcon className="w-6 h-6 text-blue-600" /> : null;
    }
  };

  // Reusable industry card renderer with logo gradient styling, ambient glow & micro-interactions
  const renderIndustryCard = (ind, isMobile = false) => {
    return (
      <div
        key={ind.id}
        onClick={() => handleIndustryClick(ind)}
        className={`group relative ${ind.cardBg} rounded-2xl sm:rounded-3xl p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${ind.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        {/* 1. Top Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${ind.gradientBorder} transition-all duration-300`} />

        {/* 2. Ambient Gradient Glow in Corner */}
        <div className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${ind.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

        {/* 3. Specular Shimmer Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* 4. Card Header: Icon Squircle + Tag Badge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${ind.iconBoxBg}`}>
              {renderIndustryIcon(ind.id, ind.icon)}
            </div>
            <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border border-white/60 ${ind.badgeGradient}`}>
              {ind.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base sm:text-[17px] font-extrabold text-[#0a1a38] ${ind.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {ind.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[38px]">
            {ind.desc}
          </p>
        </div>

        {/* 5. Card Footer: Action Link + Gradient Arrow Circle */}
        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold text-[#0a1a38] ${ind.titleHover} transition-colors`}>
            View Solutions
          </span>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${ind.arrowBtnStyle}`}>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  const caseStudies = [
    {
      id: 'mfg',
      tag: 'Manufacturing',
      title: 'Streamlined Production & Cost Management',
      desc: 'Reduced production cost by 18% and improved reporting accuracy with Tally.',
      image: '/assets/images/cs-mfg-hd.jpg'
    },
    {
      id: 'retail',
      tag: 'Retail',
      title: 'Better Inventory Control & Higher Sales',
      desc: 'Improved stock visibility and increased sales by 25%.',
      image: '/assets/images/cs-retail-hd.jpg'
    },
    {
      id: 'trading',
      tag: 'Trading',
      title: 'Faster GST Compliance & Accurate Reporting',
      desc: 'Achieved 100% GST compliance and saved 30% time in reporting.',
      image: '/assets/images/cs-trading-hd.jpg'
    }
  ];

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section (Clean Daylight Aesthetics) */}
      <section className="relative bg-white text-slate-800 pt-8 pb-14 lg:pb-16 border-b border-slate-100 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 font-medium">
            <button
              onClick={() => {
                onNavigate && onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Industries</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading & 4 Badges */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1a38] tracking-tight leading-[1.15]">
                  Tally Solutions for <br />
                  <span className="text-[#0052cc]">Every Industry</span>
                </h1>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Industry-specific solutions to streamline operations, ensure compliance and drive growth with Tally.
              </p>

              {/* 4 Feature Badges in horizontal row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                {/* Badge 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0a1a38] leading-tight">
                    Industry <br /> Expertise
                  </span>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0a1a38] leading-tight">
                    Customized <br /> Solutions
                  </span>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0a1a38] leading-tight">
                    Better <br /> Compliance
                  </span>
                </div>

                {/* Badge 4 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Timer className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0a1a38] leading-tight">
                    Improved <br /> Efficiency
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup (Daylight Desk 4K) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-white group">
                <img
                  src="/assets/images/industry-hero-desk-hd.jpg"
                  alt="Tally Solutions for Every Industry Mockup"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Industries We Serve" (12 Cards Grid) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>TAILORED ERP SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1a38] tracking-tight mb-3">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored Tally solutions designed to meet the unique needs of different businesses.
            </p>
          </div>

          {/* Desktop View: Exact Original 12 Cards Grid (4 columns) */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {industriesList.map((ind) => renderIndustryCard(ind, false))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Industry Cards (Right to Left) */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {industriesList.map((ind) => renderIndustryCard(ind, true))}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 3. "One Solution. Multiple Industries. Endless Possibilities." (Stats Card) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="bg-[#edf5ff] rounded-3xl p-8 sm:p-12 border border-blue-100/60 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Subtitle & CTA Button */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight leading-snug">
                  One Solution. Multiple Industries. <br />
                  Endless Possibilities.
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Tally adapts to your industry and your business, not the other way around.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal()}
                    className="inline-flex items-center gap-2 bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition duration-200 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to Our Expert</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 4 Key Metrics with Vertical Dividers */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-blue-200/70">
                  {/* Metric 1 */}
                  <div className="flex flex-col items-center text-center px-3 space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0a1a38]">
                      500+
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                      Industries <br /> Served
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col items-center text-center px-3 space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0a1a38]">
                      10,000+
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                      Businesses <br /> Empowered
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-col items-center text-center px-3 space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0a1a38]">
                      20+
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                      Years of <br /> Experience
                    </p>
                  </div>

                  {/* Metric 4 */}
                  <div className="flex flex-col items-center text-center px-3 space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-xs flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0a1a38]">
                      100%
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                      Customer <br /> Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Real Businesses. Real Results." (Case Studies) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight mb-2">
              Real Businesses. Real Results.
            </h2>
          </div>

          {/* 3 Case Study Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onOpenDemoModal && onOpenDemoModal(`${cs.tag} Industry Case Study`)}
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
                    <h4 className="text-sm sm:text-base font-bold text-[#0a1a38] mb-2 group-hover:text-blue-600 transition-colors leading-snug">
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
      </section>

      {/* 5. CTA Banner: "Let's Build the Right Solutions for Your Industry" */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="relative bg-gradient-to-r from-[#071d3d] via-[#09264f] to-[#0d346b] rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden">
            {/* Decorative dot matrix pattern */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content with circular icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Settings className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Let's Build the Right Solutions for Your Industry
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                    Our experts understand your industry and are ready to help you grow.
                  </p>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
                <button
                  onClick={() => onOpenDemoModal && onOpenDemoModal('General Industry Demo')}
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

      {/* Interactive Modal for detailed industry view */}
      <IndustryDetailModal
        isOpen={!!selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        industry={selectedIndustry}
        onBookDemo={(title) => {
          setSelectedIndustry(null);
          if (onOpenDemoModal) onOpenDemoModal(title);
        }}
        onContactExpert={() => {
          setSelectedIndustry(null);
          if (onOpenContactModal) onOpenContactModal();
        }}
      />
    </div>
  );
};

export default IndustriesPage;
