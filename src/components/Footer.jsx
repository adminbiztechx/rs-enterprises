import React from 'react';
import BrandLogo from './BrandLogo';
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const productLinks = [
    'TallyPrime',
    'TallyPrime Server',
    'TallyPrime Cloud',
    'TallyPrime Edit Log',
    'Tally Software Services',
    'All Products',
  ];

  const serviceLinks = [
    'Implementation',
    'Customization',
    'Cloud Solutions',
    'GST Solutions',
    'AMC & Support',
    'All Services',
  ];

  const solutionLinks = [
    'Accounting Automation',
    'GST Compliance',
    'Inventory Management',
    'Payroll Management',
    'Cloud Accounting',
    'All Solutions',
  ];

  const industryLinks = [
    'Manufacturing',
    'Retail',
    'Wholesale & Distribution',
    'Healthcare',
    'Education',
    'View All',
  ];

  const resourceLinks = [
    'Blogs',
    'GST Updates',
    'Tally Updates',
    'Downloads',
    'Case Studies',
    'FAQ',
  ];

  const supportLinks = [
    'Raise Ticket',
    'Remote Support',
    'AMC Plans',
    'License Renewal',
    'Knowledge Base',
    'Contact Support',
  ];

  const handleProductClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSolutionClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('solutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleIndustryClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResourceClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('resources');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061224] text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Grid: Responsive 2-col on mobile, 4-col on tablet, 12-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Info */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 space-y-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left focus:outline-none cursor-pointer"
            >
              <BrandLogo variant="light" />
            </button>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for Tally Software, Implementation, Customization, Cloud Solutions and Business Automation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500 hover:bg-red-600 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-600 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {productLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleProductClick}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleServiceClick}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleSolutionClick}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Industries */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {industryLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleIndustryClick}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Resources */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleResourceClick}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 7: Support */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#support" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 8: Contact Us */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2 space-y-3 pt-2 lg:pt-0">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-white uppercase tracking-wider hover:text-blue-400 transition-colors text-left cursor-pointer"
            >
              Contact Us
            </button>
            <ul className="space-y-3 text-[11.5px] text-slate-400">
              {/* Head Office */}
              <li className="space-y-1">
                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Head Office:</div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-300">
                    1st Floor, Madhuri Bhawan, Jamal Road, Patna, Bihar 800001
                  </span>
                </div>
                <div className="flex items-center gap-1.5 pl-5">
                  <Phone className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <a href="tel:+919386896383" className="hover:text-white transition-colors">
                    +91-9386896383
                  </a>
                  <span>/</span>
                  <a href="tel:+917004128603" className="hover:text-white transition-colors">
                    7004128603
                  </a>
                </div>
              </li>

              {/* Branch Office */}
              <li className="space-y-1 border-t border-slate-800 pt-2">
                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Branch Office:</div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-300">
                    Kumar Apartment, Kailash Nagar, Old GT Road, Sasaram, Rohtas–821115
                  </span>
                </div>
                <div className="flex items-center gap-1.5 pl-5">
                  <Phone className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <a href="tel:+919060819603" className="hover:text-white transition-colors">
                    +91-9060819603
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-1.5 border-t border-slate-800 pt-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@sysnsol.in" className="hover:text-white text-slate-300 transition-colors">
                  info@sysnsol.in
                </a>
              </li>

              {/* WhatsApp Quick Link */}
              <li className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol,%20I%20would%20like%20to%20know%20more%20about%20your%20Tally%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: +91-9386896383
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <div>
            © 2025 Syn N Sol. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <span>|</span>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <span>|</span>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a
              href="http://localhost/rs-backend/admin/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/80 hover:text-blue-300 transition-colors inline-flex items-center gap-1 font-semibold"
              title="Open XAMPP Backend Admin Panel"
            >
              <span>Admin Panel</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
