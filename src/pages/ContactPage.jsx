import React, { useState } from 'react';
import AutoSlidingRow from '../components/AutoSlidingRow';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      // keep success state or clear
    }, 4000);
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
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Call Us</div>
                    <a
                      href="tel:+919876543210"
                      className="text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                    >
                      +91 98765 43210
                    </a>
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
                      href="mailto:info@rsenterprises.in"
                      className="text-base font-bold text-slate-900 group-hover:text-[#0052cc] transition-colors"
                    >
                      info@rsenterprises.in
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

      {/* 2. MIDDLE SECTION: VISIT US AT OUR OFFICE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0052cc] uppercase tracking-wider">
              OUR OFFICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a38] tracking-tight mt-1.5">
              Visit Us At Our Office
            </h2>
          </div>

          {/* Unified Office & Map Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Blue Details Panel */}
            <div className="lg:col-span-4 bg-[#082a63] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              {/* Head Office */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Head Office</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-6">
                  123, Business Park, Andheri East, <br />
                  Mumbai - 400069, Maharashtra, India
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Phone</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-200 pl-6 space-y-0.5">
                  <div>+91 98765 43210</div>
                  <div>+91 22 1234 5678</div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Email</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-200 pl-6 space-y-0.5">
                  <div>info@rsenterprises.in</div>
                  <div>support@rsenterprises.in</div>
                </div>
              </div>

              {/* Website */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Website</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-200 pl-6">
                  www.rsenterprises.in
                </div>
              </div>

            </div>

            {/* Right Map & Directions Panel */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-slate-50">
              
              {/* Map Graphic / View */}
              <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[300px] overflow-hidden bg-slate-100 group">
                <img
                  src="/assets/images/contact-map-hd.jpg"
                  alt="R.S Enterprises Location Map - Andheri East Mumbai"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
                />

                {/* Subtle Interactive Map Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/80 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  R.S Enterprises • Andheri East
                </div>
              </div>

              {/* Bottom Directions Bar */}
              <div className="p-4 sm:p-6 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0052cc] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0a1a38]">
                      Easy to Reach
                    </div>
                    <div className="text-xs text-slate-500 leading-snug">
                      We are located in the heart of Andheri East with convenient access and parking.
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Andheri+East,+Mumbai,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-[#0052cc] text-[#0052cc] hover:bg-blue-50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

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

          {/* Single Row Auto-Sliding Connect Cards */}
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
                  href="https://wa.me/919876543210?text=Hello%20R.S%20Enterprises,%20I%20would%20like%20to%20know%20more%20about%20your%20Tally%20solutions."
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
      </section>
    </div>
  );
};

export default ContactPage;
