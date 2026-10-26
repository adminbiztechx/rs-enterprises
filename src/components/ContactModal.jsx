import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { submitInquiry } from '../services/api';

export const ContactModal = ({ isOpen, onClose }) => {
  const [called, setCalled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitInquiry({
      type: 'callback',
      name: 'Callback Request',
      phone: phone,
      product_interest: 'Immediate Callback Assistance',
      message: 'Client requested an instant callback within 10 minutes.'
    });
    setLoading(false);
    setCalled(true);
  };

  const handleReset = () => {
    setCalled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {called ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 text-[#0052cc] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              Callback Requested!
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Our Senior Tally Consultant will call you at <span className="font-bold text-slate-900">{phone}</span> within 10 minutes.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0a1a38]">
                  Talk to a Tally Expert
                </h3>
                <p className="text-xs text-slate-500">
                  Instant guidance on licensing, migration & custom features.
                </p>
              </div>
            </div>

            {/* Direct Dial Banner */}
            <div className="bg-blue-50 rounded-2xl p-4 mb-5 border border-blue-100">
              <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Direct Helpdesk (Immediate Assistance)</span>
                <span className="text-[10px] text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded-full font-bold">Patna & Sasaram</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 my-1">
                <a
                  href="tel:+919386896383"
                  className="text-base sm:text-lg font-extrabold text-[#0052cc] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#0052cc]" />
                  <span>+91-9386896383</span>
                </a>
                <a
                  href="tel:+917004128603"
                  className="text-base sm:text-lg font-extrabold text-[#0052cc] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#0052cc]" />
                  <span>+91-7004128603</span>
                </a>
              </div>
              <div className="text-[11px] text-slate-600 flex items-center gap-1 mt-1">
                <span className="font-semibold text-slate-700">Branch:</span>
                <a href="tel:+919060819603" className="text-blue-700 font-bold hover:underline">+91-9060819603</a>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-2 pt-2 border-t border-blue-100/80">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon – Sat: 9:30 AM to 7:00 PM</span>
              </div>
            </div>

            {/* Callback Request Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Or request an instant call back:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-all shadow-md active:scale-[0.99]"
              >
                Request Immediate Call
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactModal;
