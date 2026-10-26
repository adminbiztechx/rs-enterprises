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
      iconBg: 'bg-blue-50 text-blue-600',
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
      iconBg: 'bg-indigo-50 text-indigo-600',
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
      iconBg: 'bg-orange-50 text-orange-600',
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
      iconBg: 'bg-purple-50 text-purple-600',
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
      iconBg: 'bg-violet-50 text-violet-600',
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
      iconBg: 'bg-emerald-50 text-emerald-600',
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
      iconBg: 'bg-amber-50 text-amber-600',
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
      iconBg: 'bg-sky-50 text-sky-600',
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
      iconBg: 'bg-cyan-50 text-cyan-600',
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
      iconBg: 'bg-indigo-50 text-indigo-600',
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
      iconBg: 'bg-purple-50 text-purple-600',
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
      iconBg: 'bg-blue-50 text-blue-600',
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
      iconBg: 'bg-teal-50 text-teal-600',
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
      iconBg: 'bg-rose-50 text-rose-600',
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
      iconBg: 'bg-fuchsia-50 text-fuchsia-600',
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2347] tracking-tight mb-3">
              Our Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive Tally solutions to help you manage, automate and grow your business efficiently.
            </p>
          </div>

          {/* Desktop View: Exact Original 15 Cards Grid (5 columns) */}
          <div className="hidden lg:grid grid-cols-5 gap-5 sm:gap-6">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleLearnMore(service)}
                  className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${service.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0d2347] mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="pt-2 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Services Cards (Right to Left) */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.85} gap="gap-5">
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleLearnMore(service)}
                    className="w-[280px] sm:w-[310px] flex-shrink-0 group bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Icon container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${service.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#0d2347] mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                        {service.desc}
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div className="pt-2 border-t border-slate-50">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })}
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

      {/* 3. Why Choose R.S Enterprises? Section */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#edf5ff] rounded-3xl p-8 sm:p-12 border border-blue-100/60 shadow-xs">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2347] tracking-tight mb-2">
                Why Choose R.S Enterprises?
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
