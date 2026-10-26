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
  Monitor
} from 'lucide-react';

export const ResourcesPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    { name: 'GST Updates', icon: FileCheck, color: 'text-blue-600 bg-blue-50' },
    { name: 'Tally Updates', iconType: 'tally-text', color: 'text-rose-600 bg-rose-50' },
    { name: 'Accounting & Finance', icon: Calculator, color: 'text-amber-600 bg-amber-50' },
    { name: 'Business Automation', icon: Sliders, color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Inventory Management', icon: Boxes, color: 'text-purple-600 bg-purple-50' },
    { name: 'Payroll Management', icon: Users, color: 'text-sky-600 bg-sky-50' },
    { name: 'Taxation', icon: Landmark, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Compliance', icon: ShieldCheck, color: 'text-blue-600 bg-blue-50' },
    { name: 'Cloud Accounting', icon: Cloud, color: 'text-cyan-600 bg-cyan-50' },
    { name: 'MSME Growth', icon: TrendingUp, color: 'text-teal-600 bg-teal-50' },
    { name: 'Case Studies', icon: FileText, color: 'text-orange-600 bg-orange-50' },
    { name: 'Video Tutorials', icon: Video, color: 'text-violet-600 bg-violet-50' },
  ];

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
      title: 'Guides & eBooks',
      desc: 'In-depth guides to help you master business processes.',
      icon: BookOpen,
      iconBg: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Templates & Tools',
      desc: 'Download free templates, checklists and calculators.',
      icon: ClipboardCheck,
      iconBg: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Videos',
      desc: 'Step-by-step videos and tutorials for easy learning.',
      icon: PlayCircle,
      iconBg: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Downloads',
      desc: 'Useful downloads, updates and reference documents.',
      icon: CloudDownload,
      iconBg: 'bg-purple-50 text-purple-600'
    }
  ];

  const popularDownloads = [
    {
      id: 'dl-1',
      title: 'GST Compliance Checklist 2025',
      desc: 'Complete checklist to stay GST compliant.',
      meta: 'PDF • 512 KB',
      icon: FileText,
      iconColor: 'bg-rose-50 text-rose-600'
    },
    {
      id: 'dl-2',
      title: 'Tally Shortcut Keys PDF',
      desc: 'Boost your productivity with essential Tally shortcuts.',
      meta: 'PDF • 1.2 MB',
      icon: FileText,
      iconColor: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'dl-3',
      title: 'Chart of Accounts Template',
      desc: 'Ready-to-use COA template for your business.',
      meta: 'XLSX • 198 KB',
      icon: FileSpreadsheet,
      iconColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'dl-4',
      title: 'TallyPrime System Requirements',
      desc: 'Check system requirements for smooth Tally performance.',
      meta: 'PDF • 245 KB',
      icon: Monitor,
      iconColor: 'bg-blue-50 text-blue-600'
    }
  ];

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
                  alt="R.S Enterprises Resource Center Portal"
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Explore Resources by Category
            </h2>
          </div>

          {/* Desktop View: Exact Original 6-Column Static Grid */}
          <div className="hidden lg:grid grid-cols-6 gap-4 sm:gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedResource({ title: cat.name, category: 'Category Guide', desc: `Explore detailed articles, guides, and tools related to ${cat.name}.` })}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition duration-200 flex flex-col items-center text-center justify-center space-y-3 cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${cat.color}`}>
                    {cat.iconType === 'tally-text' ? (
                      <span className="font-black text-xs tracking-tight text-[#e11d48]">Tally</span>
                    ) : (
                      Icon && <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0a1a38] group-hover:text-blue-600 transition-colors leading-snug">
                    {cat.name}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Single Row Auto-Sliding Categories */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.7} gap="gap-4">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedResource({ title: cat.name, category: 'Category Guide', desc: `Explore detailed articles, guides, and tools related to ${cat.name}.` })}
                    className="w-[180px] sm:w-[200px] flex-shrink-0 bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-200 transition duration-200 flex flex-col items-center text-center justify-center space-y-3 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${cat.color}`}>
                      {cat.iconType === 'tally-text' ? (
                        <span className="font-black text-xs tracking-tight text-[#e11d48]">Tally</span>
                      ) : (
                        Icon && <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0a1a38] group-hover:text-blue-600 transition-colors leading-snug whitespace-nowrap">
                      {cat.name}
                    </h4>
                  </div>
                );
              })}
            </AutoSlidingRow>
          </div>
        </div>
      </section>

      {/* 3. Latest from Our Resource Center (4 Featured Articles) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Resource Types
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map((rt, idx) => {
              const Icon = rt.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedResource({ title: rt.title, category: 'Resource Type', desc: rt.desc })}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${rt.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a1a38] mb-2 group-hover:text-blue-600 transition-colors">
                      {rt.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {rt.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Popular Downloads (4 Download Cards) */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight">
              Popular Downloads
            </h2>
            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal('All Downloads Inquiry')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052cc] hover:text-[#0747a6] transition cursor-pointer"
            >
              <span>View All Downloads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDownloads.map((dl) => {
              const Icon = dl.icon;
              return (
                <div
                  key={dl.id}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200 transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${dl.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0a1a38] mb-1.5 leading-snug">
                      {dl.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {dl.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      {dl.meta}
                    </span>
                    <button
                      onClick={() => handleDownloadClick(dl)}
                      className="w-8 h-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition cursor-pointer"
                      title="Download file"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. "Stay Informed. Stay Ahead." Newsletter Subscription Banner */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
