import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState({ sent: false, loading: false });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError('Please provide your name and phone number');
      return;
    }
    setError('');
    setStatus({ loading: true, sent: false });
    setTimeout(() => {
      setStatus({ loading: false, sent: true });
    }, 500);
  };

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-28 md:pt-32">
      
      {/* Header Banner */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with luxury gradient overlay so image & letters are clearly visible */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/contact-hero-bg.jpg"
            alt="Glam Bridal Studio Consultation & Artistry"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Luminous balanced overlay: image details clearly visible with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/55 via-[#08212D]/25 to-[#08212D]/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Contact & Studio <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Location</span>
          </h1>
          <p className="text-[#FAF7F1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Visit our luxury bridal lounge in Sungam, Coimbatore, or reach out directly for instant date availability.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Phone & Booking */}
              <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0E384A]/10 text-[#0E384A] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#175C76]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#08212D]">Direct Phone & Bookings</h3>
                  <p className="text-xs text-[#596E78] mt-0.5">Speak directly with our bridal coordinator</p>
                  <div className="mt-2 space-y-1">
                    <a href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`} className="block font-semibold text-sm text-[#0E384A] hover:underline">
                      {studioInfo.phone}
                    </a>
                    <a href={`tel:${studioInfo.altPhone.replace(/\s+/g, '')}`} className="block text-xs text-[#4B5E67] hover:underline">
                      Alternate: {studioInfo.altPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Instant Chat */}
              <div className="p-6 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/30 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#08212D]">WhatsApp Instant Chat</h3>
                  <p className="text-xs text-[#596E78] mt-0.5">Fastest way to send reference looks and lock dates</p>
                  <a
                    href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-semibold text-xs text-[#1E7E34] hover:underline"
                  >
                    <span>Chat on WhatsApp ({studioInfo.whatsappDisplay})</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 text-[#C59F54] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#08212D]">Email Inquiries</h3>
                  <p className="text-xs text-[#596E78] mt-0.5">For corporate, brand & bridal queries</p>
                  <a href={`mailto:${studioInfo.email}`} className="block font-semibold text-xs sm:text-sm text-[#08212D] hover:text-[#175C76] mt-1.5">
                    {studioInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#08212D]/10 text-[#08212D] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#0E384A]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#08212D]">Studio Address</h3>
                  <p className="text-xs text-[#3D4D55] mt-1 leading-relaxed">
                    {studioInfo.address}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#EFE9DC] flex items-center gap-2 text-xs text-[#596E78]">
                    <Clock className="w-3.5 h-3.5 text-[#175C76]" />
                    <span>{studioInfo.hours}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Send a Message Form */}
            <div className="lg:col-span-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E4DAC6] shadow-md text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[11px] font-semibold text-[#0E384A] uppercase tracking-wider mb-3">
                  <Send className="w-3 h-3 text-[#175C76]" />
                  <span>Direct Message</span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#08212D] mb-1">Send Us a Message</h4>
                <p className="text-xs text-[#596E78] mb-6 leading-relaxed">
                  Have questions regarding availability, packages, or trials? Drop us a note below and our senior coordinator will connect with you.
                </p>

                {status.sent ? (
                  <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-center text-xs sm:text-sm">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-bold text-base">Message Sent Successfully!</p>
                    <p className="text-xs mt-1 text-green-700">Thank you for reaching out. We will get in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#08212D] mb-1">Your Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Sneha Reddy"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#08212D] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#08212D] mb-1">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. sneha@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#08212D] mb-1">Your Message / Query Details</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your wedding date, venue, or preferred service..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full py-3.5 rounded-xl bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer border border-[#D4AF37]/40"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status.loading ? 'Sending...' : 'Send Message Now'}</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
