import React, { useState, useRef, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Calendar, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = ({ currentPage = 'home', onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [expandedMobileDrawerItem, setExpandedMobileDrawerItem] = useState(null);

  const mobileNavRef = useRef(null);
  const activeTabRef = useRef(null);

  // Auto-scroll active tab into view in small screen horizontal navigation strip
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentPage]);

  // Close small screen dropdown on outside click
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setMobileDropdownOpen(null);
      }
    };
    if (mobileDropdownOpen) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [mobileDropdownOpen]);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'products') {
      onNavigate && onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'services') {
      onNavigate && onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'solutions') {
      onNavigate && onNavigate('solutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'industries') {
      onNavigate && onNavigate('industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'resources') {
      onNavigate && onNavigate('resources');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      onNavigate && onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'contact') {
      onNavigate && onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'home') {
      onNavigate && onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we are on products or services page and user clicks an anchor on home, go home then scroll
      if (currentPage !== 'home') {
        onNavigate && onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById(target.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', isPage: true },
    {
      name: 'Products',
      id: 'products',
      isPage: true,
      hasDropdown: true,
      items: [
        { title: 'TallyPrime', desc: 'Powerful business management software' },
        { title: 'TallyPrime Server', desc: 'High concurrency enterprise data access' },
        { title: 'TallyPrime Cloud', desc: 'Anywhere, anytime secure cloud access' },
        { title: 'TallyPrime Edit Log', desc: 'Audit compliance as per MCA norms' },
        { title: 'TSS Renewal', desc: 'Software services & regular updates' },
        { title: 'TallyPrime Silver', desc: 'Single user edition for small businesses' },
        { title: 'TallyPrime Gold', desc: 'Unlimited multi-user enterprise edition' },
        { title: 'Tally Capital', desc: 'Working capital & business financing' },
        { title: 'Tally Certification', desc: 'Official examination & skills test' },
      ],
    },
    {
      name: 'Services',
      id: 'services',
      isPage: true,
      hasDropdown: true,
      items: [
        { title: 'Implementation', desc: 'Fast, seamless setup and data migration' },
        { title: 'Customization (TDL)', desc: 'Tailor-made modules for specific flows' },
        { title: 'Support & AMC', desc: '24/7 dedicated certified engineers' },
        { title: 'Data Synchronization', desc: 'Multi-branch unified sync' },
        { title: 'Training & Upskilling', desc: 'Corporate coaching & certifications' },
      ],
    },
    {
      name: 'Solutions',
      id: 'solutions',
      isPage: true,
      hasDropdown: true,
      items: [
        { title: 'GST Compliance', desc: 'E-invoicing, E-way bill & GSTR filing' },
        { title: 'Payroll Management', desc: 'PF, ESI, TDS & automated slips' },
        { title: 'Inventory Optimization', desc: 'Batch, expiry & multi-godown' },
        { title: 'Cloud Accounting', desc: 'Remote work with enterprise safety' },
      ],
    },
    {
      name: 'Industries',
      id: 'industries',
      isPage: true,
      hasDropdown: true,
      items: [
        { title: 'Manufacturing & Assembly', desc: 'BOM, job-work, costing' },
        { title: 'Wholesale & Retail', desc: 'POS, barcode, schemes' },
        { title: 'Healthcare & Pharma', desc: 'Batch tracking, expiry alerts' },
        { title: 'Construction & Real Estate', desc: 'Cost center & project tracking' },
      ],
    },
    {
      name: 'Resources',
      id: 'resources',
      isPage: true,
      hasDropdown: true,
      items: [
        { title: 'Knowledge Base', desc: 'Tally tutorials & tips' },
        { title: 'GST Circulars', desc: 'Latest government notifications' },
        { title: 'Downloads & Tools', desc: 'Utility add-ons and drivers' },
        { title: 'Case Studies', desc: 'Real customer transformation stories' },
      ],
    },
    { name: 'About Us', id: 'about', isPage: true },
    { name: 'Contact', id: 'contact', isPage: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="w-full px-3 sm:px-6 lg:px-4 xl:px-8 2xl:px-12">
        <div className="flex items-center justify-between flex-nowrap gap-2 lg:gap-3 xl:gap-6 h-16 sm:h-20 min-w-0 w-full">
          
          {/* Left: Brand Logo (Clicks back to Home) */}
          <button
            onClick={() => {
              onNavigate && onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0 text-left cursor-pointer focus:outline-none"
          >
            <BrandLogo />
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center flex-nowrap space-x-0.5 xl:space-x-1.5 flex-shrink-0 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = (currentPage === 'home' && link.id === 'home') ||
                               (currentPage === 'products' && link.id === 'products') ||
                               (currentPage === 'services' && link.id === 'services') ||
                               (currentPage === 'solutions' && link.id === 'solutions') ||
                               (currentPage === 'industries' && link.id === 'industries') ||
                               (currentPage === 'resources' && link.id === 'resources') ||
                               (currentPage === 'about' && link.id === 'about') ||
                               (currentPage === 'contact' && link.id === 'contact');

              return (
                <div
                  key={link.name}
                  className="relative group flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`inline-flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-2 text-[12px] xl:text-[13.5px] font-semibold transition-colors duration-150 relative cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180 duration-200 flex-shrink-0" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-[2.5px] bg-blue-600 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 transition-all duration-200 origin-top-left z-50 ${
                        activeDropdown === link.name
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {link.name} Overview
                      </div>
                      {link.items?.map((item) => (
                        <button
                          key={item.title}
                          onClick={() => {
                            setActiveDropdown(null);
                            onNavigate && onNavigate(link.id, item.title);
                          }}
                          className="w-full text-left block px-3.5 py-2 hover:bg-blue-50/70 transition-colors group/item cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-blue-600 whitespace-nowrap">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-lg text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] active:scale-[0.98] transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap flex-shrink-0 min-w-fit"
            >
              <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 flex-shrink-0"
              title="Book Demo"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Small Screen Horizontal Navigation Bar (Exact same layout & active style as desktop image) */}
      <div
        ref={mobileNavRef}
        className="lg:hidden border-t border-slate-100/90 bg-white/95 backdrop-blur-md relative"
      >
        <div className="overflow-x-auto scrollbar-none px-2 sm:px-4">
          <div className="flex items-center min-w-max space-x-1 sm:space-x-2 h-11">
            {navLinks.map((link) => {
              const isActive = (currentPage === 'home' && link.id === 'home') ||
                               (currentPage === 'products' && link.id === 'products') ||
                               (currentPage === 'services' && link.id === 'services') ||
                               (currentPage === 'solutions' && link.id === 'solutions') ||
                               (currentPage === 'industries' && link.id === 'industries') ||
                               (currentPage === 'resources' && link.id === 'resources') ||
                               (currentPage === 'about' && link.id === 'about') ||
                               (currentPage === 'contact' && link.id === 'contact');

              return (
                <div key={link.name} className="relative flex-shrink-0" ref={isActive ? activeTabRef : null}>
                  <button
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name);
                      } else {
                        setMobileDropdownOpen(null);
                        handleLinkClick(e, link.id);
                      }
                    }}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold transition-colors duration-150 relative cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          mobileDropdownOpen === link.name
                            ? 'rotate-180 text-blue-600'
                            : isActive
                            ? 'text-blue-600'
                            : 'text-slate-400'
                        }`}
                      />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-blue-600 rounded-full" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Screen Dropdown Menu Panel */}
        {mobileDropdownOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-b border-slate-100 shadow-2xl px-4 py-3 max-h-[75vh] overflow-y-auto z-50">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {mobileDropdownOpen}
              </span>
              <button
                onClick={(e) => {
                  const link = navLinks.find((l) => l.name === mobileDropdownOpen);
                  if (link) handleLinkClick(e, link.id);
                  setMobileDropdownOpen(null);
                }}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer flex items-center gap-1"
              >
                <span>Go to {mobileDropdownOpen} Page</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navLinks
                .find((l) => l.name === mobileDropdownOpen)
                ?.items?.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      const link = navLinks.find((l) => l.name === mobileDropdownOpen);
                      setMobileDropdownOpen(null);
                      if (link) onNavigate && onNavigate(link.id, item.title);
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/70 active:bg-blue-100/70 transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      {item.desc}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = (currentPage === 'home' && link.id === 'home') ||
                             (currentPage === 'products' && link.id === 'products') ||
                             (currentPage === 'services' && link.id === 'services') ||
                             (currentPage === 'solutions' && link.id === 'solutions') ||
                             (currentPage === 'industries' && link.id === 'industries') ||
                             (currentPage === 'resources' && link.id === 'resources') ||
                             (currentPage === 'about' && link.id === 'about') ||
                             (currentPage === 'contact' && link.id === 'contact');

            const isExpanded = expandedMobileDrawerItem === link.name;

            return (
              <div key={link.name} className="py-0.5">
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link.id);
                    }}
                    className={`flex-1 text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                  {link.hasDropdown && (
                    <button
                      onClick={() => setExpandedMobileDrawerItem(isExpanded ? null : link.name)}
                      className="p-2 text-slate-400 hover:text-slate-700"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu Accordion in Drawer */}
                {link.hasDropdown && isExpanded && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1">
                    {link.items?.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onNavigate && onNavigate(link.id, item.title);
                        }}
                        className="w-full text-left py-2 px-2.5 rounded-md hover:bg-white text-xs font-medium text-slate-600 hover:text-blue-600"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Expert</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
