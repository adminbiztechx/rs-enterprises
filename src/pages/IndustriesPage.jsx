import React, { useState } from 'react';
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
  Settings
} from 'lucide-react';

export const IndustriesPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industriesList = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      desc: 'Streamline production, manage inventory, track costs and improve profitability.',
      icon: Factory,
      iconBg: 'bg-blue-50 text-blue-600',
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
      iconBg: 'bg-emerald-50 text-emerald-600',
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
      iconBg: 'bg-orange-50 text-orange-600',
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
      iconBg: 'bg-purple-50 text-purple-600',
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
      iconBg: 'bg-rose-50 text-rose-600',
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
      iconBg: 'bg-indigo-50 text-indigo-600',
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
      iconBg: 'bg-amber-50 text-amber-600',
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
      iconBg: 'bg-teal-50 text-teal-600',
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
      iconBg: 'bg-purple-50 text-purple-600',
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
      iconBg: 'bg-cyan-50 text-cyan-600',
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
      title: 'NGOs',
      desc: 'Track funds, manage expenses and ensure transparency in reporting.',
      icon: HandHeart,
      iconBg: 'bg-emerald-50 text-emerald-600',
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
      iconBg: 'bg-blue-50 text-blue-600',
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1a38] tracking-tight mb-3">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored Tally solutions designed to meet the unique needs of different businesses.
            </p>
          </div>

          {/* 12 Cards Grid (4 columns on lg, 2 on sm/md, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  onClick={() => handleIndustryClick(ind)}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${ind.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0a1a38] mb-2 group-hover:text-blue-600 transition-colors">
                      {ind.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                      {ind.desc}
                    </p>
                  </div>

                  {/* View Solutions link */}
                  <div className="pt-2 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                      <span>View Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "One Solution. Multiple Industries. Endless Possibilities." (Stats Card) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
