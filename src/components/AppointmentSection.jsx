import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, MessageCircle, Send, AlertCircle, ShieldCheck, Heart, User, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { studioInfo } from '../data/studioInfo';
import { servicesData, packagesData } from '../data/bridalData';

export default function AppointmentSection({ preselectedItem }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    eventType: 'Muhurtham (Wedding)',
    serviceInterest: preselectedItem || 'Royal HD Bridal Package',
    address: '',
    guestCount: 'Bride Only',
    notes: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedItem) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedItem }));
    }
  }, [preselectedItem]);

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
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.eventDate) {
      errs.eventDate = 'Please choose your wedding or event date';
    }

    if (!formData.address.trim()) {
      errs.address = 'Please enter your venue / event address';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

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
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const msg = `*New Bridal Appointment Enquiry - Glam Bridal Studio*
----------------------------------
*Bride Name:* ${formData.fullName || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Event Date:* ${formData.eventDate || 'TBD'}
*Event Type:* ${formData.eventType}
*Selected Package / Service:* ${formData.serviceInterest}
*Venue / Event Address:* ${formData.address || 'Not specified'}
*Number of People:* ${formData.guestCount}
*Special Notes:* ${formData.notes || 'None'}
----------------------------------
_Enquiry sent from Glam Bridal Studio Website_`;

    return encodeURIComponent(msg);
  };

  return (
    <section id="appointment" className="py-16 md:py-20 bg-[#08212D] text-[#FAF7F1] relative overflow-hidden">
      {/* Decorative luxury peacock teal & gold gradient overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#175C76]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Appointment & Enquiry Form</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Reserve Your Exclusive <span className="italic font-cormorant font-normal text-[#F3E5AB]">Bridal Slot</span>
          </h2>
          <p className="text-[#D4E1E6] text-xs sm:text-sm md:text-base mt-2.5 leading-relaxed">
            Fill in your ceremony details to receive an instant customized quote and lock your wedding date.
          </p>
        </div>

        {/* Clean Centered Booking Form Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0E384A]/60 border border-[#D4AF37]/40 backdrop-blur-xl shadow-2xl text-left">
          
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto ring-4 ring-[#25D366]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#D4E1E6] max-w-md mx-auto leading-relaxed">
                Your bridal appointment enquiry for <strong>{formData.eventDate}</strong> ({formData.serviceInterest}) has been received. Our team will contact you within 2 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${studioInfo.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Forward Details to WhatsApp Now</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      eventDate: '',
                      eventType: 'Muhurtham (Wedding)',
                      serviceInterest: 'Royal HD Bridal Package',
                      address: '',
                      guestCount: 'Bride Only',
                      notes: '',
                      honeypot: ''
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Bride's Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9BB3BD] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sneha Reddy"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border ${errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'} text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-300 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9BB3BD] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'} text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-300 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Wedding / Event Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Wedding / Event Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.eventDate ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'} text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p className="text-[11px] text-red-300 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.eventDate}
                    </p>
                  )}
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Ceremony / Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {eventTypes.map((et, idx) => (
                      <option key={idx} value={et} className="bg-[#08212D] text-white">
                        {et}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Package / Service Preference */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Package / Service Preference
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {allServiceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#08212D] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                    Total People Requiring Makeup
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Bride Only" className="bg-[#08212D] text-white">Bride Only</option>
                    <option value="Bride + 2-3 Family Members" className="bg-[#08212D] text-white">Bride + 2 to 3 Family / Bridesmaids</option>
                    <option value="Bride + 4-7 Members" className="bg-[#08212D] text-white">Bride + 4 to 7 Members</option>
                    <option value="8+ Members (Large Bridal Entourage)" className="bg-[#08212D] text-white">8+ Members (Large Entourage)</option>
                  </select>
                </div>
              </div>

              {/* Manual Venue / Event Address */}
              <div>
                <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                  Venue / Wedding Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#9BB3BD] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Sri Krishna Mandapam / Home Address, Sungam, Coimbatore"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border ${errors.address ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'} text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]`}
                  />
                </div>
                {errors.address && (
                  <p className="text-[11px] text-red-300 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.address}
                  </p>
                )}
              </div>

              {/* Notes / Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider mb-1.5">
                  Special Notes / Muhurtham Timings / Attire Details
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your wedding hall, preferred entry timings, or specific skin sensitivities..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
                >
                  {isSubmitting ? (
                    <span>Processing Booking...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${studioInfo.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Directly via WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-[#9BB3BD] text-center pt-1">
                🔒 Your personal details are 100% confidential and only used for your bridal schedule.
              </p>
            </form>
          )}

        </div>

        {/* Streamlined Quick Studio Timings & Location Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#C5D7DF] text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Studio Timings: <strong className="text-white">{studioInfo.hours}</strong> (Early 4:00 AM Muhurtham slots available)</span>
          </div>
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Sungam, Coimbatore</span>
          </div>
        </div>

      </div>
    </section>
  );
}
