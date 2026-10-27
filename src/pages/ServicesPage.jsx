import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import ServiceDetailModal from '../components/ServiceDetailModal';
import {
  Download,
  Settings,
  Database,
  Sliders,
  GraduationCap,
  FileCheck,
  FileText,
  Users,
  Cloud,
  Network,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Headphones,
  Puzzle,
  ChevronRight,
  ArrowRight,
  Calendar,
  PhoneCall,
  Award,
  BadgeCheck,
  Clock,
  Sparkles,
  Coins,
  Search,
  CheckCircle2,
  HeartHandshake,
  UserCheck,
  Zap
} from 'lucide-react';

export const ServicesPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      id: 'tally-installation',
      title: 'Tally Installation',
      desc: 'Quick and hassle-free installation of Tally software.',
      icon: Download,
      tag: 'Quick Setup',
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-sky-500 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-amber-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/15 via-sky-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50/90 via-white to-amber-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
      detailDesc: 'Professional end-to-end installation and initial system configuration of TallyPrime single-user, multi-user, or server editions across your corporate network.',
      features: [
        'Single & Multi-user installation',
        'Licensing & activation configuration',
        'Network firewall & anti-virus exception setup',
        'Data folder & security permissions setup',
        'Printer and peripheral hardware mapping',
        'Post-installation verification check'
      ]
    },
    {
      id: 'implementation',
      title: 'Implementation',
      desc: 'End-to-end implementation as per your business needs.',
      icon: Settings,
      tag: 'Zero Downtime',
      badgeGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white',
      gradientBorder: 'from-emerald-500 via-teal-400 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(16,185,129,0.15)] hover:border-emerald-400/80',
      ambientGradient: 'from-emerald-500/15 via-teal-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-emerald-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-200/90 shadow-emerald-500/10 group-hover:border-emerald-400',
      arrowBtnStyle: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      titleHover: 'group-hover:text-emerald-600',
      detailDesc: 'Tailored enterprise implementation mapping your exact chart of accounts, statutory rules, cost centers, and inventory workflows into TallyPrime.',
      features: [
        'Business workflow analysis & charter mapping',
        'Chart of Accounts & ledger hierarchy design',
        'Voucher types & numbering configuration',
        'Multi-currency & cost-centre enablement',
        'User roles & security control matrix',
        'User acceptance testing & sign-off'
      ]
    },
    {
      id: 'data-migration',
      title: 'Data Migration',
      desc: 'Safe and accurate migration of your data to Tally.',
      icon: Database,
      tag: '100% Accuracy',
      badgeGradient: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      gradientBorder: 'from-amber-500 via-orange-400 to-rose-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(245,158,11,0.15)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/15 via-orange-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-amber-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      titleHover: 'group-hover:text-amber-600',
      detailDesc: 'Flawless and verified migration of historic ledgers, stock items, customer balances, and pending vouchers from legacy software (Busy, Marg, SAP, Excel) to TallyPrime.',
      features: [
        'Legacy data extraction & sanity audit',
        'Field-to-field schema mapping & cleaning',
        'Opening trial balance reconciliation',
        'Item master, batch & serial data import',
        'Zero data loss verification certificate',
        'Seamless transition without business downtime'
      ]
    },
    {
      id: 'customization',
      title: 'Customization',
      desc: 'Customize Tally as per your workflow and requirements.',
      icon: Sliders,
      tag: 'TDL Tailored',
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white',
      gradientBorder: 'from-purple-500 via-violet-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/15 via-indigo-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-purple-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
      detailDesc: 'Custom Tally Definition Language (TDL) development to tailor invoices, vouchers, business approval workflows, and specialized industry features.',
      features: [
        'Custom invoice & voucher print formatting',
        'Multi-level authorization workflows',
        'Industry-specific entry screens & fields',
        'Customized MIS & analytical reports',
        'Barcode / QR code generation & scanning',
        'Seamless compatibility with TallyPrime updates'
      ]
    },
    {
      id: 'tally-training',
      title: 'Tally Training',
      desc: 'Training for your team to improve productivity.',
      icon: GraduationCap,
      tag: 'Certified Skills',
      badgeGradient: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white',
      gradientBorder: 'from-violet-500 via-purple-400 to-pink-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(139,92,246,0.15)] hover:border-violet-400/80',
      ambientGradient: 'from-violet-500/15 via-purple-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-violet-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-violet-50/90 via-white to-purple-50/70 border-2 border-violet-200/90 shadow-violet-500/10 group-hover:border-violet-400',
      arrowBtnStyle: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
      titleHover: 'group-hover:text-violet-600',
      detailDesc: 'Hands-on practical training for your accounting, billing, and management staff by certified Tally experts to maximize speed and accuracy.',
      features: [
        'Role-specific training for billing & accounting',
        'GST compliance & return filing hands-on',
        'Keyboard shortcuts & productivity hacks',
        'Inventory management best practices',
        'Management reporting & dashboard analysis',
        'Training materials & certificate of completion'
      ]
    },
    {
      id: 'gst-setup',
      title: 'GST Setup',
      desc: 'Complete GST configuration & compliance setup.',
      icon: FileCheck,
      tag: 'GST Returns',
      badgeGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-teal-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.15)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/15 via-emerald-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-teal-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      titleHover: 'group-hover:text-teal-600',
      detailDesc: 'Comprehensive configuration of GST rates, HSN/SAC codes, reverse charge, RCM, multi-state GST registration, and GSTR-1, 2B, 3B return setups.',
      features: [
        'GSTIN master setup & tax ledger hierarchy',
        'HSN / SAC master classification mapping',
        'GSTR-1, GSTR-3B auto-reconciliation setup',
        'RCM & composition scheme configuration',
        'ITC verification & JSON file generation',
        'Quarterly & monthly filing workflow guidance'
      ]
    },
    {
      id: 'e-invoice-e-way-bill',
      title: 'E-Invoice & E-Way Bill',
      desc: 'Setup & integration for E-Invoice & E-Way Bill.',
      icon: FileText,
      tag: 'Direct IRP API',
      badgeGradient: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      gradientBorder: 'from-amber-500 via-yellow-400 to-orange-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(245,158,11,0.15)] hover:border-amber-400/80',
      ambientGradient: 'from-amber-500/15 via-yellow-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-amber-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 border-2 border-amber-200/90 shadow-amber-500/10 group-hover:border-amber-400',
      arrowBtnStyle: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      titleHover: 'group-hover:text-amber-600',
      detailDesc: 'Direct, single-click API integration between TallyPrime and the government IRP portal for instantaneous IRN, QR code, and E-Way Bill generation.',
      features: [
        'GSP / NIC government portal integration',
        'Direct IRN & signed QR code generation',
        'Real-time E-Way bill generation with invoice',
        'Bulk generation & cancellation handling',
        'Offline JSON & direct online mode support',
        'Automated error validation before dispatch'
      ]
    },
    {
      id: 'payroll-setup',
      title: 'Payroll Setup',
      desc: 'Full payroll setup with salary processing and reports.',
      icon: Users,
      tag: 'Salary & PF / ESI',
      badgeGradient: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white',
      gradientBorder: 'from-sky-500 via-blue-500 to-indigo-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(14,165,233,0.15)] hover:border-sky-400/80',
      ambientGradient: 'from-sky-500/15 via-blue-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-sky-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-sky-50 via-white to-blue-50/70 border-2 border-sky-200/90 shadow-sky-500/10 group-hover:border-sky-400',
      arrowBtnStyle: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
      titleHover: 'group-hover:text-sky-600',
      detailDesc: 'Complete employee lifecycle management in TallyPrime covering attendance, pay heads, statutory PF/ESI/PT/TDS deductions, and automated payslips.',
      features: [
        'Employee master & salary structure design',
        'Attendance & overtime production types',
        'Statutory deductions (PF, ESI, Professional Tax)',
        'One-click monthly payroll processing',
        'Emailing password-protected payslips',
        'PF ECR text file & ESI return generation'
      ]
    },
    {
      id: 'cloud-setup',
      title: 'Cloud Setup',
      desc: 'Access Tally securely from anywhere, anytime.',
      icon: Cloud,
      tag: '99.9% Uptime',
      badgeGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white',
      gradientBorder: 'from-cyan-500 via-sky-400 to-blue-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(6,182,212,0.15)] hover:border-cyan-400/80',
      ambientGradient: 'from-cyan-500/15 via-sky-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-cyan-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50/70 border-2 border-cyan-200/90 shadow-cyan-500/10 group-hover:border-cyan-400',
      arrowBtnStyle: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
      titleHover: 'group-hover:text-cyan-600',
      detailDesc: 'Host your Tally on high-speed AWS / Tier-IV cloud infrastructure with 99.9% uptime, daily automated snapshots, and encrypted remote access.',
      features: [
        'Access Tally from Windows, Mac, iPad or Android',
        'Tier-IV Indian data center hosting',
        'Automated daily offsite cloud backups',
        'Ransomware protection & 2FA security',
        'High concurrency multi-user performance',
        'Local printer & barcode hardware pass-through'
      ]
    },
    {
      id: 'multi-branch-setup',
      title: 'Multi-Branch Setup',
      desc: 'Centralized management for multiple branches.',
      icon: Network,
      tag: 'Centralized Sync',
      badgeGradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
      gradientBorder: 'from-indigo-500 via-blue-500 to-purple-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(99,102,241,0.15)] hover:border-indigo-400/80',
      ambientGradient: 'from-indigo-500/15 via-blue-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-indigo-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50/70 border-2 border-indigo-200/90 shadow-indigo-500/10 group-hover:border-indigo-400',
      arrowBtnStyle: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      titleHover: 'group-hover:text-indigo-600',
      detailDesc: 'Centralized enterprise architecture connecting head office, factories, godowns, and retail branches with consolidated management reporting.',
      features: [
        'Centralized server or cloud architecture',
        'Branch-wise stock, ledger & voucher isolation',
        'Inter-branch transfer & reconciliation',
        'Consolidated group company financial statements',
        'Centralized credit limit & price list control',
        'Role-based branch user restrictions'
      ]
    },
    {
      id: 'remote-desktop',
      title: 'Tally on Remote Desktop',
      desc: 'Work on Tally remotely with secure connectivity.',
      icon: Monitor,
      tag: 'Work Anywhere',
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
      gradientBorder: 'from-purple-500 via-pink-400 to-indigo-600',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)] hover:border-purple-400/80',
      ambientGradient: 'from-purple-500/15 via-pink-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-purple-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-purple-50 via-white to-pink-50/70 border-2 border-purple-200/90 shadow-purple-500/10 group-hover:border-purple-400',
      arrowBtnStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      titleHover: 'group-hover:text-purple-600',
      detailDesc: 'Cost-effective multi-user Remote Desktop (RDS/TSplus) solution enabling branch offices and work-from-home accountants to access Tally smoothly.',
      features: [
        'High-speed remote screen delivery',
        'Local printer driver universal redirection',
        'Encrypted SSL/TLS connection tunnels',
        'Fine-grained user session timeouts & rights',
        'Bandwidth optimized for 4G/low-speed connections',
        'Concurrent user license management'
      ]
    },
    {
      id: 'data-sync',
      title: 'Data Synchronization',
      desc: 'Sync data across locations in real time.',
      icon: RefreshCw,
      tag: 'Two-Way Sync',
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-sky-500 text-white',
      gradientBorder: 'from-blue-600 via-sky-400 to-indigo-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)] hover:border-blue-400/80',
      ambientGradient: 'from-blue-500/15 via-sky-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-blue-50 via-white to-sky-50/70 border-2 border-blue-200/90 shadow-blue-500/10 group-hover:border-blue-400',
      arrowBtnStyle: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      titleHover: 'group-hover:text-blue-600',
      detailDesc: 'Two-way automated data synchronization between your central server and distributed branches without requiring high-speed static IP at every outlet.',
      features: [
        'Automated scheduled two-way data sync',
        'Master and voucher synchronization',
        'Conflict resolution protocols',
        'Bandwidth compression for rapid sync',
        'Sync log auditing & failure notifications',
        'Works smoothly over intermittent internet'
      ]
    },
    {
      id: 'backup-recovery',
      title: 'Backup & Recovery',
      desc: 'Automated backup & quick disaster recovery.',
      icon: ShieldCheck,
      tag: 'AES-256 Safe',
      badgeGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white',
      gradientBorder: 'from-teal-500 via-emerald-400 to-cyan-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.15)] hover:border-teal-400/80',
      ambientGradient: 'from-teal-500/15 via-emerald-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-teal-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-teal-50 via-white to-emerald-50/70 border-2 border-teal-200/90 shadow-teal-500/10 group-hover:border-teal-400',
      arrowBtnStyle: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      titleHover: 'group-hover:text-teal-600',
      detailDesc: 'Foolproof automated backup systems storing encrypted copies of your Tally database locally and to secure cloud storage with one-click restoration.',
      features: [
        'Automated hourly / daily backup scheduler',
        'Dual backup: Local NAS + Cloud storage',
        'Military-grade AES-256 data encryption',
        'Ransomware-isolated storage repository',
        'Periodic test-restore integrity drills',
        'Zero-disaster quick recovery protocol'
      ]
    },
    {
      id: 'amc-support',
      title: 'AMC & Support',
      desc: 'Annual Maintenance Contract with priority support.',
      icon: Headphones,
      tag: 'Priority 24/7',
      badgeGradient: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
      gradientBorder: 'from-rose-500 via-pink-400 to-orange-400',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(244,63,94,0.15)] hover:border-rose-400/80',
      ambientGradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-rose-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-rose-50 via-white to-pink-50/70 border-2 border-rose-200/90 shadow-rose-500/10 group-hover:border-rose-400',
      arrowBtnStyle: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      titleHover: 'group-hover:text-rose-600',
      detailDesc: 'Comprehensive Annual Maintenance Contracts (AMC) providing priority telephonic, remote, and onsite support with guaranteed SLA response times.',
      features: [
        'Unlimited remote & telephonic helpdesk support',
        'Dedicated certified Tally relationship manager',
        'Priority SLA resolution within 30 minutes',
        'Quarterly preventive system health audits',
        'Assistance with Tally updates & version upgrades',
        'Emergency weekend & year-end support'
      ]
    },
    {
      id: 'addon-integration',
      title: 'Add-on Integration',
      desc: 'Integrate Tally with POS, Barcode, WhatsApp & more.',
      icon: Puzzle,
      tag: 'API & WhatsApp',
      badgeGradient: 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white',
      gradientBorder: 'from-fuchsia-500 via-purple-400 to-pink-500',
      glowShadow: 'hover:shadow-[0_12px_32px_rgba(217,70,239,0.15)] hover:border-fuchsia-400/80',
      ambientGradient: 'from-fuchsia-500/15 via-purple-400/10 to-transparent',
      cardBg: 'bg-gradient-to-b from-fuchsia-50/30 via-white to-white',
      iconBoxBg: 'bg-gradient-to-br from-fuchsia-50 via-white to-purple-50/70 border-2 border-fuchsia-200/90 shadow-fuchsia-500/10 group-hover:border-fuchsia-400',
      arrowBtnStyle: 'bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white',
      titleHover: 'group-hover:text-fuchsia-600',
      detailDesc: 'Supercharge Tally with specialized ready-to-deploy add-ons including WhatsApp invoice messaging, POS billing, e-commerce sync, and CRM connectors.',
      features: [
        'WhatsApp direct PDF invoice & payment reminder',
        'Barcode generation & rapid POS scanning',
        'Bank statement auto-reconciliation',
        'CRM, Shopify, WooCommerce & Amazon API sync',
        'SMS gateway integration for dispatch alerts',
        'Digital signature (DSC) auto-affixing to invoices'
      ]
    }
  ];

  // Render high-definition authentic service emblems matching logo themes & rich gradients
  const renderServiceIcon = (id, iconBoxBg, FallbackIcon) => {
    return (
      <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${iconBoxBg}`}>
        {(() => {
          switch (id) {
            case 'tally-installation':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="instCubeTop" x1="16" y1="2" x2="23" y2="6" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="instCubeLeft" x1="9" y1="6" x2="16" y2="13" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="instCubeRight" x1="16" y1="6" x2="23" y2="13" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="100%" stopColor="#0a1a38" />
                    </linearGradient>
                    <linearGradient id="instArrow" x1="16" y1="9" x2="16" y2="21" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                  {/* Tally Cube */}
                  <polygon points="16,2 23,6 16,10 9,6" fill="url(#instCubeTop)" />
                  <polygon points="9,6 16,10 16,16 9,12" fill="url(#instCubeLeft)" />
                  <polygon points="16,10 23,6 23,12 16,16" fill="url(#instCubeRight)" />
                  {/* Download Tray Base */}
                  <path d="M5 21V25C5 26.657 6.343 28 8 28H24C25.657 28 27 26.657 27 25V21" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Vibrant Download Arrow */}
                  <path d="M16 11V22M16 22L12 18M16 22L20 18" stroke="url(#instArrow)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );

            case 'implementation':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="gearGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  {/* Precision 8-tooth gear */}
                  <path
                    d="M14 3H18L18.7 6.2C19.5 6.5 20.3 7 21 7.6L24.1 6.5L26.5 10.5L24.1 12.8C24.3 13.7 24.3 14.5 24.1 15.4L26.5 17.7L24.1 21.7L21 20.6C20.3 21.2 19.5 21.7 18.7 22L18 25.2H14L13.3 22C12.5 21.7 11.7 21.2 11 20.6L7.9 21.7L5.5 17.7L7.9 15.4C7.7 14.5 7.7 13.7 7.9 12.8L5.5 10.5L7.9 6.5L11 7.6C11.7 7 12.5 6.5 13.3 6.2L14 3Z"
                    fill="url(#gearGrad)"
                    stroke="#a7f3d0"
                    strokeWidth="0.8"
                  />
                  {/* Inner Processor Core */}
                  <circle cx="16" cy="14" r="5" fill="#ffffff" />
                  <circle cx="16" cy="14" r="3" fill="#059669" />
                  <circle cx="16" cy="14" r="1.2" fill="#a7f3d0" />
                </svg>
              );

            case 'data-migration':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="dbDiskGrad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  {/* Top Cylinder */}
                  <ellipse cx="16" cy="7" rx="10" ry="3.5" fill="url(#dbDiskGrad)" stroke="#fef3c7" strokeWidth="0.7" />
                  {/* Mid Cylinder */}
                  <path d="M6 7V13C6 15 10.5 16.5 16 16.5C21.5 16.5 26 15 26 13V7" fill="url(#dbDiskGrad)" stroke="#fef3c7" strokeWidth="0.7" />
                  <ellipse cx="16" cy="13" rx="10" ry="3.5" fill="none" stroke="#fef3c7" strokeWidth="0.7" opacity="0.6" />
                  {/* Bot Cylinder */}
                  <path d="M6 13V19C6 21 10.5 22.5 16 22.5C21.5 22.5 26 21 26 19V13" fill="url(#dbDiskGrad)" stroke="#fef3c7" strokeWidth="0.7" />
                  {/* Migration Sync Curved Wave */}
                  <path d="M21 22L25 26L21 30" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 26H25" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              );

            case 'customization':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="custSliderGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  {/* Slider Track 1 */}
                  <line x1="8" y1="5" x2="8" y2="27" stroke="#e9d5ff" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="5" y="14" width="6" height="7" rx="2" fill="url(#custSliderGrad)" stroke="#ffffff" strokeWidth="1" />

                  {/* Slider Track 2 */}
                  <line x1="16" y1="5" x2="16" y2="27" stroke="#e9d5ff" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="13" y="8" width="6" height="7" rx="2" fill="url(#custSliderGrad)" stroke="#ffffff" strokeWidth="1" />

                  {/* Slider Track 3 */}
                  <line x1="24" y1="5" x2="24" y2="27" stroke="#e9d5ff" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="21" y="18" width="6" height="7" rx="2" fill="url(#custSliderGrad)" stroke="#ffffff" strokeWidth="1" />
                </svg>
              );

            case 'tally-training':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="trainCapGrad" x1="4" y1="4" x2="28" y2="22" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="50%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                  </defs>
                  {/* Cap Diamond Top */}
                  <polygon points="16,4 28,10 16,16 4,10" fill="url(#trainCapGrad)" stroke="#f3e8ff" strokeWidth="0.8" />
                  {/* Cap Skullcap */}
                  <path d="M8 12.5V18.5C8 21.5 11.5 24 16 24C20.5 24 24 21.5 24 18.5V12.5" fill="#6b21a8" />
                  {/* Golden Tassel */}
                  <path d="M25 12V21" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="25" cy="22" r="1.5" fill="#f59e0b" />
                  <circle cx="16" cy="10" r="1.5" fill="#ffffff" />
                  {/* Rosette ribbon */}
                  <path d="M13 24.5L16 28L19 24.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );

            case 'gst-setup':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="gstDocGrad" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  {/* Document */}
                  <path d="M7 4C7 2.895 7.895 2 9 2H19L25 8V27C25 28.105 24.105 29 23 29H9C7.895 29 7 28.105 7 27V4Z" fill="url(#gstDocGrad)" stroke="#ccfbf1" strokeWidth="0.8" />
                  <path d="M19 2V8H25L19 2Z" fill="#a7f3d0" />
                  {/* Checkmark in circle */}
                  <circle cx="16" cy="18" r="6" fill="#ffffff" />
                  <path d="M13 18L15 20L19 16" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );

            case 'e-invoice-e-way-bill':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="einvGrad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  {/* Bill paper */}
                  <rect x="6" y="3" width="20" height="26" rx="3" fill="url(#einvGrad)" stroke="#fef3c7" strokeWidth="0.8" />
                  {/* Text lines */}
                  <line x1="10" y1="8" x2="22" y2="8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="12" x2="18" y2="12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                  {/* QR code stamp placeholder */}
                  <rect x="10" y="16" width="12" height="9" rx="1.5" fill="#ffffff" />
                  <rect x="12" y="18" width="3" height="3" fill="#d97706" />
                  <rect x="17" y="18" width="3" height="3" fill="#d97706" />
                  <rect x="12" y="21" width="3" height="2" fill="#d97706" />
                  <circle cx="18" cy="22" r="1" fill="#10b981" />
                </svg>
              );

            case 'payroll-setup':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="payrollSvcGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  {/* Avatar Colleague */}
                  <circle cx="21" cy="9.5" r="3.5" fill="#bae6fd" />
                  <path d="M17 20C17 17 19.2 15.5 22 15.5C24.8 15.5 27 17 27 20" fill="#bae6fd" />

                  {/* Primary Avatar */}
                  <circle cx="11.5" cy="10" r="4.5" fill="url(#payrollSvcGrad)" stroke="#e0f2fe" strokeWidth="0.8" />
                  <path d="M4 25.5C4 20.5 7.5 18 11.5 18C15.5 18 19 20.5 19 25.5" fill="url(#payrollSvcGrad)" stroke="#e0f2fe" strokeWidth="0.8" />

                  {/* Golden Salary Badge */}
                  <circle cx="23" cy="22.5" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="23" y="25.5" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="system-ui, sans-serif">₹</text>
                </svg>
              );

            case 'cloud-setup':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="cloudSvcGrad" x1="3" y1="4" x2="29" y2="26" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8.5 23C5.186 23 2.5 20.314 2.5 17C2.5 13.92 4.805 11.38 7.82 11.04C8.57 6.44 12.56 3 17.43 3C22.88 3 27.29 7.41 27.29 12.86C29.93 13.45 31.82 15.8 31.82 18.6C31.82 21.77 29.25 24.33 26.08 24.33H9"
                    fill="url(#cloudSvcGrad)"
                    stroke="#cffafe"
                    strokeWidth="0.8"
                  />
                  <path d="M16.5 11V18.5M16.5 11L13 14.5M16.5 11L20 14.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="17.5" r="1.3" fill="#ffffff" opacity="0.9" />
                  <circle cx="24" cy="18.5" r="1.3" fill="#ffffff" opacity="0.9" />
                </svg>
              );

            case 'multi-branch-setup':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="branchGrad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </linearGradient>
                  </defs>
                  {/* Network Trunk Lines */}
                  <path d="M16 12V17M16 17H7V21M16 17H25V21" stroke="#6366f1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="17" r="1.8" fill="#a5b4fc" />

                  {/* HQ Central Node */}
                  <rect x="9.5" y="3" width="13" height="9" rx="2.5" fill="url(#branchGrad)" stroke="#e0e7ff" strokeWidth="0.7" />
                  <line x1="12" y1="6" x2="17" y2="6" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="19" cy="8" r="0.8" fill="#fde047" />

                  {/* Branch Left */}
                  <rect x="2" y="21" width="10" height="8" rx="2" fill="url(#branchGrad)" />
                  <line x1="4.5" y1="24" x2="8" y2="24" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />

                  {/* Branch Right */}
                  <rect x="20" y="21" width="10" height="8" rx="2" fill="url(#branchGrad)" />
                  <line x1="22.5" y1="24" x2="26" y2="24" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                </svg>
              );

            case 'remote-desktop':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="rdsGrad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#e879f9" />
                      <stop offset="50%" stopColor="#c026d3" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                  </defs>
                  {/* Monitor frame */}
                  <rect x="3" y="4" width="26" height="17" rx="3" fill="url(#rdsGrad)" stroke="#fae8ff" strokeWidth="0.8" />
                  {/* Screen display */}
                  <rect x="5.5" y="6.5" width="21" height="12" rx="1.5" fill="#ffffff" />
                  {/* Remote cloud signal inside */}
                  <circle cx="16" cy="12.5" r="3.5" fill="#c026d3" />
                  <path d="M14.5 12.5L15.5 13.5L17.5 11.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Stand */}
                  <path d="M13 21H19L20 27H12L13 21Z" fill="#a21caf" />
                  <line x1="10" y1="27" x2="22" y2="27" stroke="#86198f" strokeWidth="2" strokeLinecap="round" />
                </svg>
              );

            case 'data-sync':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="syncSvcGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  {/* Top arc & arrow */}
                  <path d="M16 6C21.523 6 26 10.477 26 16C26 17.5 25.6 18.9 25 20.2" stroke="url(#syncSvcGrad)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 6L26 6L26 10" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Bottom arc & arrow */}
                  <path d="M16 26C10.477 26 6 21.523 6 16C6 14.5 6.4 13.1 7 11.8" stroke="url(#syncSvcGrad)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 26L6 26L6 22" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  <circle cx="16" cy="16" r="2.5" fill="#0284c7" />
                </svg>
              );

            case 'backup-recovery':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="bkpGrad" x1="5" y1="2.5" x2="27" y2="29.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>
                  {/* Armored Shield */}
                  <path
                    d="M16 2.5L5 7.2V14.5C5 22 9.5 28.2 16 30.5C22.5 28.2 27 22 27 14.5V7.2L16 2.5Z"
                    fill="url(#bkpGrad)"
                    stroke="#ccfbf1"
                    strokeWidth="0.8"
                  />
                  <path d="M10.5 16L14.5 20L22 12" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="16.5" r="8.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                </svg>
              );

            case 'amc-support':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="amcGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="50%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                  </defs>
                  {/* Headband arch */}
                  <path d="M5.5 16C5.5 9.5 10.2 4.5 16 4.5C21.8 4.5 26.5 9.5 26.5 16" stroke="url(#amcGrad)" strokeWidth="3" strokeLinecap="round" />
                  {/* Left Earcup */}
                  <rect x="3" y="14" width="5.5" height="10" rx="2.5" fill="url(#amcGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
                  {/* Right Earcup */}
                  <rect x="23.5" y="14" width="5.5" height="10" rx="2.5" fill="url(#amcGrad)" stroke="#ffe4e6" strokeWidth="0.8" />
                  {/* Mic boom */}
                  <path d="M25 21C25 25.5 21 27.5 16 27.5H13.5" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="12" cy="27.5" r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
                  {/* Signal waves */}
                  <path d="M9 10C11 8.5 13.5 7.5 16 7.5C18.5 7.5 21 8.5 23 10" stroke="#fda4af" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
                </svg>
              );

            case 'addon-integration':
              return (
                <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="addonGrad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f0abfc" />
                      <stop offset="50%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#a21caf" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M6 9C6 7.343 7.343 6 9 6H13C13 4.343 14.343 3 16 3C17.657 3 19 4.343 19 6H23C24.657 6 26 7.343 26 9V13C27.657 13 29 14.343 29 16C29 17.657 27.657 19 26 19V23C26 24.657 24.657 26 23 26H19C19 24.343 17.657 23 16 23C14.343 23 13 24.343 13 26H9C7.343 26 6 24.657 6 23V19C4.343 19 3 17.657 3 16C3 14.343 4.343 13 6 13V9Z"
                    fill="url(#addonGrad)"
                    stroke="#fae8ff"
                    strokeWidth="0.8"
                  />
                  {/* Plug / Connector glyph inside */}
                  <rect x="12" y="12" width="8" height="8" rx="2" fill="#ffffff" />
                  <circle cx="16" cy="16" r="2" fill="#a21caf" />
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
  const renderServiceCard = (service, isMobile = false) => {
    return (
      <div
        key={service.id}
        onClick={() => handleLearnMore(service)}
        className={`group relative ${service.cardBg} rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 ${service.glowShadow} ${
          isMobile ? 'w-[285px] sm:w-[315px] flex-shrink-0' : ''
        }`}
      >
        {/* 1. Top Gradient Stripe */}
        <div className={`absolute top-0 left-0 right-0 h-[4px] group-hover:h-[6px] bg-gradient-to-r ${service.gradientBorder} transition-all duration-300`} />

        {/* 2. Ambient Gradient Glow in Corner */}
        <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${service.ambientGradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />

        {/* 3. Specular Shimmer Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* 4. Card Header: Icon Container + Micro Tag Badge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-2.5 mb-4">
            {renderServiceIcon(service.id, service.iconBoxBg, service.icon)}
            <span className={`text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-2xs border border-white/60 ${service.badgeGradient}`}>
              {service.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-[15px] sm:text-base font-extrabold text-[#0a1a38] ${service.titleHover} transition-colors duration-200 mb-1.5 tracking-tight`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
            {service.desc}
          </p>
        </div>

        {/* 5. Card Footer: Action Link + Gradient Arrow Circle */}
        <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold text-[#0a1a38] ${service.titleHover} transition-colors`}>
            Learn More
          </span>
          <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs ${service.arrowBtnStyle}`}>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  const whyChooseItems = [
    {
      icon: Award,
      title: 'Authorized Tally Partner',
      desc: 'Genuine products and licensed solutions'
    },
    {
      icon: BadgeCheck,
      title: 'Certified Experts',
      desc: 'Trained & certified Tally professionals'
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      desc: 'Quick turnaround with quality delivery'
    },
    {
      icon: Sparkles,
      title: 'Tailored Solutions',
      desc: 'Customized as per your business requirements'
    },
    {
      icon: Coins,
      title: 'Affordable Pricing',
      desc: 'Best value for your investment'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      desc: 'Reliable post-sale support & guidance'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: Users,
      title: 'Consultation',
      desc: 'We understand your business requirements.'
    },
    {
      number: '02',
      icon: Search,
      title: 'Analysis',
      desc: 'We analyze & suggest the right solution.'
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Implementation',
      desc: 'We implement and configure Tally.'
    },
    {
      number: '04',
      icon: GraduationCap,
      title: 'Training',
      desc: 'We train your team for smooth operations.'
    },
    {
      number: '05',
      icon: Headphones,
      title: 'Support',
      desc: 'We provide ongoing support & assistance.'
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Services Hero Section */}
      <section className="relative bg-gradient-to-br from-[#061427] via-[#091e38] to-[#0d284d] text-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle background glow */}
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
            <span className="text-white font-semibold">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-sm font-bold tracking-wider text-blue-400 uppercase block mb-2">
                  Our Services
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Solutions That Simplify <br className="hidden sm:block" />
                  Your Business
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                From installation to implementation and beyond, we provide end-to-end Tally solutions to help you streamline accounting, ensure compliance and drive business growth.
              </p>

              {/* 3 Badges under hero text */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60">
                {/* Badge 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Expert Team</h4>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                      Certified & Experienced Tally Professionals
                    </p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Quick Support</h4>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                      Timely assistance, when you need it.
                    </p>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Customer Focused</h4>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                      Tailored solutions for your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-900 group">
                <img
                  src="/assets/images/services-hero-desk-hd.jpg"
                  alt="TallyPrime Services Setup & Dashboard"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Floating Tally Authorized Partner Badge on Top Right */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-3 sm:p-4 border border-slate-100 flex flex-col items-center text-center z-10 transition-transform hover:scale-105">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[#e11d48] font-black text-lg tracking-tight">Tally</span>
                  </div>
                  <span className="text-[9px] tracking-wider font-bold text-slate-500 uppercase">
                    POWER OF SIMPLICITY
                  </span>
                  <div className="mt-1.5 pt-1.5 border-t border-slate-200 flex items-center gap-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                    <span>AUTHORIZED TALLY PARTNER</span>
                    <span className="text-amber-500 text-xs">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main "Our Services" Grid Section (15 Cards) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0052cc] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>END-TO-END TALLY SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2347] tracking-tight mb-3">
              Our Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive Tally solutions to help you manage, automate and grow your business efficiently.
            </p>
          </div>

          {/* Desktop View: Exact Original 15 Cards Grid (5 columns) */}
          <div className="hidden lg:grid grid-cols-5 gap-5 sm:gap-6">
            {servicesList.map((service) => renderServiceCard(service, false))}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Services Cards (Right to Left) */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {servicesList.map((service) => renderServiceCard(service, true))}
            </AutoSlidingRow>
          </div>

          {/* Center Button: Explore All Services */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (onOpenDemoModal) onOpenDemoModal('General Service Inquiry');
              }}
              className="inline-flex items-center justify-center border-2 border-[#0052cc] text-[#0052cc] hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition duration-200 shadow-sm cursor-pointer"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Syn N Sol? Section */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#edf5ff] rounded-3xl p-8 sm:p-12 border border-blue-100/60 shadow-xs">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight mb-2">
                Why Choose Syn N Sol?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We deliver more than just software – we deliver peace of mind.
              </p>
            </div>

            {/* Desktop View: Exact original 6 items row with vertical dividers */}
            <div className="hidden lg:grid grid-cols-6 gap-0 divide-x divide-blue-200/70">
              {whyChooseItems.map((item, idx) => {
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

            {/* Mobile View: Auto-Sliding Single Row */}
            <div className="block lg:hidden">
              <AutoSlidingRow speed={0.7} gap="gap-6">
                {whyChooseItems.map((item, idx) => {
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

      {/* 4. Our Process Section */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-4 space-y-4">
                <div className="w-12 h-1 bg-[#0052cc] rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight">
                  Our Process
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A proven process to deliver the best Tally solutions for your business.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal()}
                    className="inline-flex items-center justify-center bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition duration-200 cursor-pointer"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>

              {/* Right Column: 5 Sequential Process Steps */}
              <div className="lg:col-span-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                  {processSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <React.Fragment key={idx}>
                        {/* Step Card */}
                        <div className="flex flex-col items-center text-center w-full md:w-36 space-y-2">
                          {/* Circle Icon */}
                          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs relative">
                            <Icon className="w-7 h-7" />
                          </div>

                          {/* Step Pill */}
                          <div className="inline-block bg-[#0d2347] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                            {step.number}
                          </div>

                          {/* Title */}
                          <h4 className="text-sm font-bold text-[#0d2347]">
                            {step.title}
                          </h4>

                          {/* Description */}
                          <p className="text-[11px] text-slate-500 leading-tight">
                            {step.desc}
                          </p>
                        </div>

                        {/* Chevron Connector */}
                        {idx < processSteps.length - 1 && (
                          <div className="hidden md:flex items-center justify-center text-blue-300">
                            <div className="flex items-center -space-x-1.5">
                              <ChevronRight className="w-5 h-5 text-blue-300" />
                              <ChevronRight className="w-5 h-5 text-blue-400" />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Let's Simplify Your Business Together" CTA Banner */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative bg-gradient-to-r from-[#071d3d] via-[#09264f] to-[#0d346b] rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden">
            {/* Decorative dot matrix pattern */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Let's Simplify Your Business Together
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                  Talk to our experts and find the perfect Tally solution for your business.
                </p>
              </div>

              {/* Right Buttons */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
                <button
                  onClick={() => onOpenDemoModal && onOpenDemoModal('General Service Demo')}
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

      {/* Interactive Modal for detailed service view */}
      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onBookDemo={(title) => {
          setSelectedService(null);
          if (onOpenDemoModal) onOpenDemoModal(title);
        }}
        onContactExpert={() => {
          setSelectedService(null);
          if (onOpenContactModal) onOpenContactModal();
        }}
      />
    </div>
  );
};

export default ServicesPage;
