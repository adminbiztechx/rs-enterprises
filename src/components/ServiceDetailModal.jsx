import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Clock,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

export const ServiceDetailModal = ({ isOpen, onClose, service, onBookDemo, onContactExpert }) => {
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

  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#0d2347] to-[#1e3a8a] text-white p-6 sm:p-8 relative">
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
                Syn N Sol • Tally Certified Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-2">
            {service.detailDesc || service.desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              What We Deliver
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(service.features || [
                'End-to-end setup and validation',
                'Zero business disruption guarantee',
                'Comprehensive user guidance',
                'Dedicated certified Tally engineer',
                'Compliance verification & sign-off',
                '30-day post-implementation warranty'
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

          {/* Highlights & Guarantees */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0d2347]">Authorized Tally Partner Assurance</h4>
                <p className="text-xs text-slate-500">100% genuine licenses & official Tally protocols followed.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-xs border border-blue-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Need urgent assistance? Call us directly at <span className="font-semibold text-slate-800">+91 98765 43210</span>
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
                onBookDemo && onBookDemo(service.title);
              }}
              className="flex-1 sm:flex-none bg-[#0052cc] hover:bg-[#0747a6] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
