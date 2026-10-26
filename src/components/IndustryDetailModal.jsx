import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Building2,
  Award
} from 'lucide-react';

export const IndustryDetailModal = ({ isOpen, onClose, industry, onBookDemo, onContactExpert }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !industry) return null;

  const Icon = industry.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#0a1a38] via-[#0d284d] to-[#0052cc] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-3">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white text-blue-600 shadow-md`}>
              {Icon && <Icon className="w-7 h-7" />}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                Syn N Sol • Industry-Specific Tally ERP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {industry.title}
              </h2>
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-2">
            {industry.detailDesc || industry.desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Industry Modules & Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Tailored Industry Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(industry.features || [
                'Custom entry screens & industry vouchers',
                'Statutory tax compliance & automated returns',
                'Multi-godown & batch-wise tracking',
                'Real-time job-costing & profitability audit',
                'Role-based multi-user security matrix',
                'Seamless integration with POS & external hardware'
              ]).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Assurance Box */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0052cc] text-white flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0a1a38]">20+ Years Domain Experience</h4>
                <p className="text-xs text-slate-500">Over 500+ successful implementations in this vertical.</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-xs border border-blue-200">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Certified Tally Partner</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Talk to an Industry Specialist: <a href="tel:+919386896383" className="font-semibold text-slate-800 hover:text-[#0052cc] transition-colors">+91-9386896383</a> / <a href="tel:+917004128603" className="font-semibold text-slate-800 hover:text-[#0052cc] transition-colors">+91-7004128603</a>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onContactExpert && onContactExpert();
              }}
              className="flex-1 sm:flex-none border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-lg transition cursor-pointer"
            >
              Contact Expert
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDemo && onBookDemo(`${industry.title} Industry Demo`);
              }}
              className="flex-1 sm:flex-none bg-[#0052cc] hover:bg-[#0747a6] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Industry Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetailModal;
