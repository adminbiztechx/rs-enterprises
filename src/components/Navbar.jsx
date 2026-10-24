import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { Calendar, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = ({ currentPage = 'home', onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          
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
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold transition-colors duration-150 relative cursor-pointer ${
                      isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180 duration-200" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-blue-600 rounded-full" />
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
                            if (link.id === 'services') {
                              onNavigate && onNavigate('services');
                            } else if (link.id === 'solutions') {
                              onNavigate && onNavigate('solutions');
                            } else if (link.id === 'industries') {
                              onNavigate && onNavigate('industries');
                            } else if (link.id === 'resources') {
                              onNavigate && onNavigate('resources');
                            } else {
                              onNavigate && onNavigate('products');
                            }
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full text-left block px-3.5 py-2 hover:bg-blue-50/70 transition-colors group/item"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-blue-600">
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
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] active:scale-[0.98] transition-all shadow-sm shadow-blue-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemoModal}
              className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
              title="Book Demo"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
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
              <div key={link.name} className="py-1">
                <button
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link.id);
                  }}
                  className={`w-full text-left block px-3 py-2 rounded-lg text-sm font-semibold ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
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
