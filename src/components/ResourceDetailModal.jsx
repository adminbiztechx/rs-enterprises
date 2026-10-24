import React, { useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Download,
  Share2,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const ResourceDetailModal = ({ isOpen, onClose, resource, onOpenDemo }) => {
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

  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with cover image if available */}
        {resource.image ? (
          <div className="relative h-52 sm:h-64 w-full bg-slate-900">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block bg-[#0052cc] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                {resource.category || 'Resource'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {resource.title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#071d3d] to-[#0d346b] text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-300 block mb-1">
              {resource.category || 'Knowledge Base • Guide'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {resource.title}
            </h2>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[55vh] overflow-y-auto">
          <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
            {resource.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{resource.date}</span>
              </span>
            )}
            {resource.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{resource.readTime}</span>
              </span>
            )}
            <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
              Verified & Current
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {resource.desc}
          </p>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Takeaways & Checklist Points
            </h4>
            <div className="space-y-2">
              {[
                'Practical step-by-step guidance applicable directly in TallyPrime',
                'Avoid common GST compliance pitfalls and input tax mismatch issues',
                'Accelerate month-end closing procedures by utilizing keyboard shortcuts',
                'Standard operating guidelines approved by senior chartered accountants'
              ].map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Need hands-on training for your team?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`Downloading ${resource.title}... Your file will start shortly.`);
              }}
              className="flex-1 sm:flex-none border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDemo && onOpenDemo('Resource Consultation');
              }}
              className="flex-1 sm:flex-none bg-[#0052cc] hover:bg-[#0747a6] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Expert Help</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailModal;
