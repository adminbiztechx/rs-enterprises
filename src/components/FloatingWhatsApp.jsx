import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainWhatsAppNumber = '919386896383';
  const defaultMessage = 'Hello Syn N Sol, I would like to know more about your Tally solutions.';

  const handleOpenChat = (phone = mainWhatsAppNumber) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      
      {/* Quick WhatsApp Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-fadeIn duration-200">
          
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]"></span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold leading-tight">Syn N Sol Support</h4>
                <p className="text-[11px] text-emerald-200">Typically replies within 5 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD]/40 space-y-3 text-xs">
            
            {/* Auto Message Bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 max-w-[85%] text-slate-800 space-y-1">
              <p className="font-semibold text-slate-900">
                Namaste! Welcome to Syn N Sol. 👋
              </p>
              <p className="text-[11px] text-slate-600">
                How can we help with your Tally software, licensing or cloud setup today?
              </p>
              <span className="text-[9px] text-slate-400 block text-right">Just now</span>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-2 pt-1">
              <div className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider px-1">
                Select Office to Chat:
              </div>

              {/* Head Office (Patna) */}
              <button
                onClick={() => handleOpenChat('919386896383')}
                className="w-full bg-white hover:bg-emerald-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-left transition-all hover:border-emerald-300 group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Patna Head Office
                  </div>
                  <div className="text-[11px] text-slate-500">
                    +91-9386896383 / +91-7004128603
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Branch Office (Sasaram) */}
              <button
                onClick={() => handleOpenChat('919060819603')}
                className="w-full bg-white hover:bg-emerald-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-left transition-all hover:border-emerald-300 group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Sasaram Branch Office
                  </div>
                  <div className="text-[11px] text-slate-500">
                    +91-9060819603
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>

          </div>

          {/* Footer Direct Input Trigger */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={() => handleOpenChat(mainWhatsAppNumber)}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2.5">
        
        {/* Tooltip Badge (Visible on Desktop) */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Need Help? Chat with us</span>
          </button>
        )}

        {/* Big Green Round Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          {/* Subtle Ripple Animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>

      </div>

    </div>
  );
};

export default FloatingWhatsApp;
