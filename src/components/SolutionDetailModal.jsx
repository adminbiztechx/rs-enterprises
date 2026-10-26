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
  TrendingUp,
  Award
} from 'lucide-react';

export const SolutionDetailModal = ({ isOpen, onClose, solution, onBookDemo, onContactExpert }) => {
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

  if (!isOpen || !solution) return null;

  const Icon = solution.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#071d3d] via-[#09264f] to-[#0d346b] text-white p-6 sm:p-8 relative">
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
                Syn N Sol • Enterprise Business Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {solution.title}
              </h2>
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-2">
            {solution.detailDesc || solution.desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Solution Highlights & Business Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(solution.features || [
                'End-to-end process automation',
                'Real-time data synchronization',
                'Comprehensive audit trails & compliance',
                'Tailored reports & executive dashboards',
                'High-performance multi-user architecture',
                'Dedicated implementation specialist'
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

          {/* Benefits Box */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0052cc] text-white flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0d2347]">Proven ROI & Efficiency</h4>
                <p className="text-xs text-slate-500">Accelerate month-end closures by up to 50% with zero data loss.</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-full shadow-xs border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Certified</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Speak to a Tally Solution Architect: <span className="font-semibold text-slate-800">+91 98765 43210</span>
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
                onBookDemo && onBookDemo(solution.title);
              }}
              className="flex-1 sm:flex-none bg-[#0052cc] hover:bg-[#0747a6] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Solution Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailModal;
