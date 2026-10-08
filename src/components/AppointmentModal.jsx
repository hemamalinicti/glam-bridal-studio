import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle, Send, User, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { studioInfo } from '../data/studioInfo';
import { servicesData, packagesData } from '../data/bridalData';

export default function AppointmentModal({ isOpen, onClose, defaultItem }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    eventType: 'Muhurtham (Wedding)',
    serviceInterest: defaultItem || 'Royal HD Bridal Package',
    address: '',
    guestCount: 'Bride Only',
    notes: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (defaultItem) {
      setFormData(prev => ({ ...prev, serviceInterest: defaultItem }));
    }
  }, [defaultItem]);

  if (!isOpen) return null;

  const eventTypes = [
    'Muhurtham (Wedding)',
    'Evening Reception',
    'Engagement / Ring Ceremony',
    'Sangeet & Mehendi',
    'Pre-Bridal Skincare Ritual',
    'Christian / Western Wedding',
    'Photoshoot / Makeover'
  ];

  const allServiceOptions = [
    ...packagesData.map(p => `Package: ${p.name}`),
    ...servicesData.map(s => `Service: ${s.title}`)
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.phone.trim() || !/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Valid phone number is required';
    }
    if (!formData.eventDate) {
      errs.eventDate = 'Event date is required';
    }
    if (!formData.address.trim()) {
      errs.address = 'Venue / Event address is required';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  const getWhatsAppMessage = () => {
    const msg = `*Bridal Appointment Booking Request*
----------------------------------
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Date:* ${formData.eventDate}
*Event:* ${formData.eventType}
*Interest:* ${formData.serviceInterest}
*Venue / Address:* ${formData.address || 'Not specified'}
*Entourage:* ${formData.guestCount}
*Notes:* ${formData.notes || 'None'}
----------------------------------
_Sent from Glam Bridal Studio_`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#08212D] text-white rounded-3xl border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#175C76] text-white transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto ring-4 ring-[#25D366]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#F3E5AB]">
              Appointment Request Sent!
            </h3>
            <p className="text-sm text-[#D4E1E6] max-w-md mx-auto">
              Thank you {formData.fullName}. Our senior bridal coordinator & artistry team will contact you shortly on {formData.phone}.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${studioInfo.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/40 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>VIP Bridal Consultation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book Your Bridal Appointment
              </h3>
              <p className="text-xs text-[#C5D7DF] mt-1">
                Lock your date with Glam Bridal Studio. Fast response within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Priyanka Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-300 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-300 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Wedding / Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.eventDate && <p className="text-[11px] text-red-300 mt-1">{errors.eventDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Occasion / Event
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {eventTypes.map((t, idx) => (
                      <option key={idx} value={t} className="bg-[#08212D] text-white">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Service / Package
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {allServiceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#08212D] text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                    Venue / Event Address *
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-[#9BB3BD] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Mandapam / Home Address"
                      className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  {errors.address && <p className="text-[11px] text-red-300 mt-1">{errors.address}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1">
                  Notes / Time Details
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or hall timings..."
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming...' : 'Submit Booking Request'}</span>
                </button>

                <a
                  href={`https://wa.me/${studioInfo.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
