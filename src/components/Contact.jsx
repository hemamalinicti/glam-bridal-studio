import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Contact() {
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
    <section id="contact" className="py-20 md:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Visit Or Contact Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            We Would Love to Hear <span className="italic font-cormorant font-normal text-[#175C76]">From You</span>
          </h2>
          <p className="text-[#4B5E67] text-base sm:text-lg mt-4 leading-relaxed">
            Have questions about bridal packages, availability, or destination travels? Reach out or visit our flagship bridal studio in Sungam, Coimbatore.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0E384A]/10 text-[#0E384A] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#175C76]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-[#08212D]">Phone & Booking Enquiries</h3>
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

            {/* WhatsApp Chat Card */}
            <div className="p-6 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/30 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-[#08212D]">WhatsApp Instant Chat</h3>
                <p className="text-xs text-[#596E78] mt-0.5">Fastest way to check date availability & share reference photos</p>
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

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 text-[#C59F54] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-[#08212D]">Email Support</h3>
                <p className="text-xs text-[#596E78] mt-0.5">For vendor partnerships & detailed corporate queries</p>
                <a href={`mailto:${studioInfo.email}`} className="block font-semibold text-xs sm:text-sm text-[#08212D] hover:text-[#175C76] mt-1.5">
                  {studioInfo.email}
                </a>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E4DAC6] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
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

          {/* Right Column - Google Maps Interactive Embed & Quick Message Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Google Maps Container */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#E4DAC6] shadow-lg bg-white relative">
              <div className="p-4 bg-white border-b border-[#E4DAC6] flex flex-wrap items-center justify-between gap-3 text-left">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#08212D]">Glam Bridal Studio on Google Maps</h4>
                  <p className="text-xs text-[#596E78]">Sungam, Coimbatore, Tamil Nadu</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sungam+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] text-xs font-semibold transition-colors shadow-sm border border-[#D4AF37]/30"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F3E5AB]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="h-72 sm:h-80 w-full bg-gray-100">
                <iframe
                  title="Glam Bridal Studio Location Map"
                  src={studioInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DAC6] shadow-sm text-left">
              <h4 className="font-serif text-xl font-bold text-[#08212D] mb-1">Send a Quick Message</h4>
              <p className="text-xs text-[#596E78] mb-5">We usually respond to all messages in less than 2 hours.</p>

              {status.sent ? (
                <div className="p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-center text-xs sm:text-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="font-bold">Message Sent Successfully!</p>
                  <p className="text-xs mt-0.5">Thank you for reaching out. We will get in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                  />

                  <textarea
                    rows="3"
                    placeholder="Your Enquiry or Wedding Date details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EC] border border-[#E4DAC6] text-xs sm:text-sm focus:outline-none focus:border-[#0E384A]"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-3 rounded-xl bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-[#D4AF37]/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status.loading ? 'Sending Message...' : 'Send Enquiry Message'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
