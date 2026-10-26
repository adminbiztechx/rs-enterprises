import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
import { submitInquiry } from '../services/api';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Globe,
  Car,
  ArrowUpRight,
  ShieldCheck,
  Send,
  MessageCircle,
  PhoneCall,
  Headphones,
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const ContactPage = ({ onNavigate, onOpenDemoModal, onOpenContactModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    agreeTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    await submitInquiry({
      type: 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      product_interest: formData.subject,
      message: formData.message
    });
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white">
      {/* 1. TOP SECTION: HERO & CONTACT FORM SPLIT */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-16 bg-gradient-to-b from-slate-50/70 via-white to-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading, intro & Direct Contact Details */}
            <div className="lg:col-span-5 relative space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 text-[#0052cc] text-xs font-bold tracking-wider uppercase">
                WE'RE HERE TO HELP
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0a1a38] leading-[1.15]">
                Let's Connect & . <br />
                <span className="text-[#0052cc]">Grow Together</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                Have questions about Tally solutions, services or support? <br className="hidden sm:inline" />
                Our experts are ready to assist you.
              </p>

              {/* 3 Contact Info Blocks */}
              <div className="space-y-5 pt-2">
                
                {/* 1. Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Call Us (Patna Head Office)</div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href="tel:+919386896383"
                        className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                      >
                        +91-9386896383
                      </a>
                      <span className="text-slate-300 hidden sm:inline">|</span>
                      <a
                        href="tel:+917004128603"
                        className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                      >
                        +91-7004128603
                      </a>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Branch (Sasaram): <a href="tel:+919060819603" className="font-semibold text-blue-700 hover:underline">+91-9060819603</a>
                    </div>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Email Us</div>
                    <a
                      href="mailto:info@sysnsol.in"
                      className="text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                    >
                      info@sysnsol.in
                    </a>
                  </div>
                </div>

                {/* 3. Working Hours */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Working Hours</div>
                    <div className="text-base font-bold text-slate-900">
                      Mon - Sat : 9:30 AM - 7:00 PM
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Dot Grid Pattern */}
              <div className="pt-4 opacity-40 select-none pointer-events-none">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#0052cc" />
                  </pattern>
                  <rect width="120" height="60" fill="url(#dotPattern)" />
                </svg>
              </div>

            </div>

            {/* Right Column: "Send Us a Message" Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1a38] tracking-tight">
                    Send Us a Message
                  </h2>
                  <div className="w-10 h-1 bg-[#0052cc] rounded-full mt-2"></div>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Your message has been sent successfully. One of our Tally certified consultants will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-[#0052cc] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone*"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all"
                        />
                      </div>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="TallyPrime License">TallyPrime License / Purchase</option>
                          <option value="Implementation & Customization">Implementation & Customization</option>
                          <option value="AMC & Dedicated Support">AMC & Support Plan</option>
                          <option value="Cloud Accounting">Tally on Cloud</option>
                          <option value="Other">Other Query</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message*"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Row 4: Agreement Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#0052cc] border-slate-300 rounded focus:ring-[#0052cc] cursor-pointer"
                      />
                      <label htmlFor="agreeTerms" className="text-xs text-slate-600 select-none cursor-pointer">
                        I agree to the{' '}
                        <a href="#privacy" className="text-[#0052cc] font-medium hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="#terms" className="text-[#0052cc] font-medium hover:underline">
                          Terms & Conditions
                        </a>
                        .
                      </label>
                    </div>

                    {/* Row 5: Submit button & Security Badge */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0042a4] text-white text-sm font-semibold px-7 py-3 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Send Message</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-[#0052cc]" />
                        <span>Your information is safe with us.</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MIDDLE SECTION: VISIT OUR OFFICES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0052cc] uppercase tracking-wider">
              OUR LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight mt-1.5">
              Visit Our Offices
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Walk in or connect directly with our Tally certified teams at our Patna Head Office or Sasaram Branch.
            </p>
          </div>

          {/* Dual Offices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            
            {/* Card 1: Head Office (Patna, Bihar) */}
            <div className="bg-[#082a63] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-blue-900/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold tracking-wide uppercase border border-blue-400/30">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Head Office
                  </span>
                  <span className="text-xs text-blue-300 font-medium">Patna, Bihar</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
                  Syn N Sol — Patna
                </h3>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Office Address</div>
                      <p className="text-slate-100 leading-relaxed font-medium">
                        1st Floor, Madhuri Bhawan, Jamal Road,<br />
                        Patna, Bihar – 800001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Contact Numbers</div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-100 font-bold">
                        <a href="tel:+919386896383" className="hover:text-blue-300 transition-colors">+91-9386896383</a>
                        <span className="text-blue-400/60">/</span>
                        <a href="tel:+917004128603" className="hover:text-blue-300 transition-colors">+91-7004128603</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Email Support</div>
                      <a href="mailto:info@sysnsol.in" className="text-slate-100 font-bold hover:text-blue-300 transition-colors">
                        info@sysnsol.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Office Hours</div>
                      <div className="text-slate-200">Mon – Sat: 9:30 AM to 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-blue-800/60 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Madhuri+Bhawan,+Jamal+Road,+Patna,+Bihar+800001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol%20Patna%20Office,%20I%20need%20assistance%20with%20Tally."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Branch Office (Sasaram, Rohtas) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md border border-slate-200/90 relative overflow-hidden group transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Branch Office
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Sasaram, Rohtas</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0a1a38] tracking-tight mb-4">
                  Syn N Sol — Sasaram
                </h3>

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Office Address</div>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        Kumar Apartment, Kailash Nagar,<br />
                        Old GT Road, Sasaram, Rohtas – 821115
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Contact Number</div>
                      <div className="text-slate-900 font-bold">
                        <a href="tel:+919060819603" className="hover:text-[#0052cc] transition-colors">+91-9060819603</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Email Support</div>
                      <a href="mailto:info@sysnsol.in" className="text-slate-900 font-bold hover:text-[#0052cc] transition-colors">
                        info@sysnsol.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0052cc] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Office Hours</div>
                      <div className="text-slate-600">Mon – Sat: 9:30 AM to 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Kumar+Apartment,+Kailash+Nagar,+Old+GT+Road,+Sasaram,+Rohtas+821115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/919060819603?text=Hello%20Syn%20N%20Sol%20Sasaram%20Office,%20I%20need%20assistance%20with%20Tally."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Unified Location Map Banner */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0052cc] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0a1a38]">
                  Serving Businesses Across Bihar, Jharkhand & Pan-India
                </div>
                <div className="text-xs text-slate-500 leading-snug">
                  On-site visits available in Patna & Sasaram regions • 100% remote instant support pan-India.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                Patna Pin: 800001
              </span>
              <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                Sasaram Pin: 821115
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BOTTOM SECTION: OTHER WAYS TO CONNECT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] text-center tracking-tight mb-10">
            Other Ways to Connect
          </h2>

          {/* Desktop View: Exact Original 4 Cards Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            
            {/* Card 1: WhatsApp Us */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#0a1a38]">
                  WhatsApp Us
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                  Chat with our experts on WhatsApp for quick support.
                </p>
              </div>
              <div className="w-full mt-auto">
                <a
                  href="https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol,%20I%20would%20like%20to%20know%20more%20about%20your%20Tally%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Request a Callback */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-amber-300 transition-all group justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                  <PhoneCall className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#0a1a38]">
                  Request a Callback
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                  Share your details and we'll call you back shortly.
                </p>
              </div>
              <div className="w-full mt-auto">
                <button
                  onClick={() => onOpenContactModal && onOpenContactModal()}
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-amber-500 text-amber-600 hover:bg-amber-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>

            {/* Card 3: Support Desk */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                  <Headphones className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#0a1a38]">
                  Support Desk
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                  For existing customers, get dedicated support.
                </p>
              </div>
              <div className="w-full mt-auto">
                <button
                  onClick={() => onOpenContactModal && onOpenContactModal()}
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Raise a Ticket →</span>
                </button>
              </div>
            </div>

            {/* Card 4: Book a Demo */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all group justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0052cc] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#0a1a38]">
                  Book a Demo
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                  Schedule a free demo with our Tally solution experts.
                </p>
              </div>
              <div className="w-full mt-auto">
                <button
                  onClick={() => onOpenDemoModal && onOpenDemoModal('Free Consultation')}
                  className="w-full inline-flex items-center justify-center gap-1.5 border border-[#0052cc] text-[#0052cc] hover:bg-blue-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo</span>
                </button>
              </div>
            </div>

          </div>

          {/* Mobile View: Single Row Auto-Sliding Connect Cards */}
          <div className="block lg:hidden">
            <AutoSlidingRow speed={0.8} gap="gap-6">
              
              {/* Card 1: WhatsApp Us */}
              <div className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1a38]">
                    WhatsApp Us
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                    Chat with our experts on WhatsApp for quick support.
                  </p>
                </div>
                <div className="w-full mt-auto">
                  <a
                    href="https://wa.me/919386896383?text=Hello%20Syn%20N%20Sol,%20I%20would%20like%20to%20know%20more%20about%20your%20Tally%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Request a Callback */}
              <div className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-amber-300 transition-all group justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1a38]">
                    Request a Callback
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                    Share your details and we'll call you back shortly.
                  </p>
                </div>
                <div className="w-full mt-auto">
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal()}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-amber-500 text-amber-600 hover:bg-amber-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Request Callback</span>
                  </button>
                </div>
              </div>

              {/* Card 3: Support Desk */}
              <div className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                    <Headphones className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1a38]">
                    Support Desk
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                    For existing customers, get dedicated support.
                  </p>
                </div>
                <div className="w-full mt-auto">
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal()}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <Headphones className="w-4 h-4" />
                    <span>Raise a Ticket →</span>
                  </button>
                </div>
              </div>

              {/* Card 4: Book a Demo */}
              <div className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all group justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0052cc] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1a38]">
                    Book a Demo
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 mb-6 leading-relaxed max-w-[200px]">
                    Schedule a free demo with our Tally solution experts.
                  </p>
                </div>
                <div className="w-full mt-auto">
                  <button
                    onClick={() => onOpenDemoModal && onOpenDemoModal('Free Consultation')}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-[#0052cc] text-[#0052cc] hover:bg-blue-50 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Demo</span>
                  </button>
                </div>
              </div>

            </AutoSlidingRow>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
