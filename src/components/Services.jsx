import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle, X, ShieldCheck, Eye, Calendar } from 'lucide-react';
import { servicesData } from '../data/bridalData';
import { studioInfo } from '../data/studioInfo';

export default function Services({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'Bridal Looks', 'Mehendi & Nails', 'Party Glam & Guests', 'Saree Pre-Pleating', 'Skincare & Facials'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F9F7F1] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Our Signature Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Comprehensive Bridal & <span className="italic font-cormorant font-normal text-[#175C76]">Beauty Rituals</span>
          </h2>
          <p className="text-[#4B5E67] text-base sm:text-lg mt-4 leading-relaxed">
            Tailored beauty solutions designed to ensure you radiate confidence from pre-wedding rituals through to your final reception farewell.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0E384A] text-[#F3E5AB] shadow-md shadow-[#0E384A]/25 scale-105 border border-[#D4AF37]/40'
                  : 'bg-white hover:bg-[#F7F4EC] text-[#3D4D55] border border-[#E4DAC6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid - 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
            >
              {/* Service Card Image */}
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden bg-[#08212D]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* View Details Badge */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 bg-white/90 group-hover:bg-white text-[#08212D] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1 transition-all">
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#175C76]" />
                  <span>View Details</span>
                </div>
              </div>

              {/* Service Name & Price Only */}
              <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#08212D] group-hover:text-[#175C76] transition-colors line-clamp-1 mb-1">
                  {service.title}
                </h3>
                <div className="text-base sm:text-xl font-bold text-[#175C76] font-serif">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 relative text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F0] hover:bg-[#EFE9DC] text-[#08212D] border border-[#E4DAC6] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto md:overflow-hidden">
              {/* Service Modal Image Area */}
              <div className="md:col-span-5 bg-[#08212D] relative flex items-center justify-center p-6 sm:p-8 min-h-[260px] md:min-h-[500px]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="max-h-[280px] md:max-h-[440px] w-full object-cover rounded-2xl shadow-lg"
                />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#08212D]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#F3E5AB]" />
                  <span>Duration: {selectedService.duration}</span>
                </div>
              </div>

              {/* Service Modal Info Area */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[500px]">
                <div className="pr-6">
                  {/* Category Chip */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#175C76] font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{selectedService.category} Ritual</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D] mb-2 leading-tight">
                    {selectedService.title}
                  </h2>

                  {/* Price Banner */}
                  <div className="p-3.5 bg-[#F7F4EC] rounded-2xl border border-[#E4DAC6] flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-[#596E78] block">Starting Price:</span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D]">{selectedService.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#596E78] block">Service Duration:</span>
                      <span className="text-xs font-bold text-[#175C76]">{selectedService.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4B5E67] leading-relaxed mb-4">
                    {selectedService.subtitle}
                  </p>

                  {/* Full Inclusions List */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#08212D] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#175C76]" />
                      <span>Complete Inclusions & Rituals:</span>
                    </h4>
                    <ul className="space-y-2 bg-[#FAF7F0] p-4 rounded-2xl border border-[#EFE9DC]">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D3E46]">
                          <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Luxury Brands Used */}
                  <div className="p-3 rounded-xl bg-[#08212D]/5 border border-[#D4AF37]/30 mb-6">
                    <p className="text-[11px] font-bold text-[#08212D] uppercase tracking-wider mb-1">
                      Cosmetic Standards:
                    </p>
                    <p className="text-xs text-[#596E78]">
                      Crafted exclusively with international luxury brands: <strong>MAC, Dior Backstage, Charlotte Tilbury, Huda Beauty, NARS, and Kryolan HD</strong>.
                    </p>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="pt-4 border-t border-[#E4DAC6] flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onSelectServiceForBooking(selectedService.title);
                    }}
                    className="flex-1 py-3 px-5 rounded-xl bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-[#D4AF37]/30 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Book This Service Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20book%20or%20enquire%20about%20the%20${encodeURIComponent(selectedService.title)}%20(${selectedService.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
  );
}
