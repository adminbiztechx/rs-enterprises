import React from 'react';
import { X, CheckCircle2, Calendar, ShoppingCart, ShieldCheck } from 'lucide-react';

export const ProductDetailModal = ({ product, isOpen, onClose, onBookDemo }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-xs ${product.iconBg || 'bg-blue-50 text-blue-600'}`}>
              {product.iconComponent ? <product.iconComponent className="w-6 h-6" /> : '📦'}
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0a1a38]">
                {product.title}
              </h3>
              <p className="text-xs text-slate-500">
                Official Tally Solution by Syn N Sol
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              {product.desc}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Included Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features?.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookDemo(product.title);
              }}
              className="w-full sm:flex-1 py-3 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-[0.99]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Demo</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDemo(`${product.title} - Quotation/Buy`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-[#0052cc] bg-blue-50 hover:bg-blue-100 transition-all border border-blue-200"
            >
              Get Price Quote
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;
