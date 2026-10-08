import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, Star, Heart, Award, CheckCircle2, ShieldCheck, MapPin, Clock, ShoppingBag, Tag, Crown, MessageCircle, Eye, X, Check } from 'lucide-react';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import { studioInfo } from '../data/studioInfo';
import { servicesData } from '../data/bridalData';
import { accessoriesData } from '../data/accessoriesData';

export default function HomePage({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);
  const featuredServices = servicesData.slice(0, 4);
  const featuredAccessories = accessoriesData.slice(0, 4);

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830]">
      
      {/* 1. Hero Section in Peacock Blue, Beige, and Golden Theme with Fullscreen Desktop Height */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-24 overflow-hidden bg-[#08212D]">
        {/* Background Video Layer with crisp visibility and balanced luxury contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videoframe_6224.png"
            className="h-full w-full object-cover object-[center_20%] sm:object-center opacity-100"
          >
            <source src="/gemini_generated_video_63ca73c6.mp4" type="video/mp4" />
            <source src="/hero-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle cinematic gradient overlay to ensure video is vibrant while text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/35 via-[#08212D]/20 to-[#08212D]/45" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#08212D]/10 to-[#08212D]/25" />
        </div>

        {/* Decorative Golden & Peacock Glow Highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#175C76]/25 via-[#D4AF37]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4 sm:pt-6 md:pt-8 my-auto">
          {/* Top Royal Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E384A]/80 backdrop-blur-md border border-[#D4AF37]/60 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#F3E5AB] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#F3E5AB] drop-shadow-sm">
              Coimbatore's Premier Luxury Bridal Studio
            </span>
          </div>

          {/* Hero Main Headline with Ultra-Clear Contrast */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-lg">
            Unveiling Your <span className="italic font-cormorant font-normal text-[#F3E5AB] text-5xl sm:text-6xl lg:text-7xl block sm:inline drop-shadow">Timeless Bridal</span> Elegance
          </h1>

          {/* Subheading Text */}
          <p className="text-base sm:text-lg text-[#EDE6D6] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Experience bespoke bridal transformations tailored to your unique skin and wedding traditions. From HD South Indian Muhurtham makeovers to Glossy Reception styling, we turn your wedding dream into a breathtaking reality.
          </p>

          {/* Key Value Points Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-[#F5EFE6]">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>100% Luxury Cosmetics</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Custom Trial Sessions</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>On-Venue Artist Support</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/appointment"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-black/40 hover:shadow-2xl hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 border border-[#FFF8E7]"
            >
              <Calendar className="w-4 h-4 text-[#08212D]" />
              <span>Book Bridal Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#08212D] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/accessories"
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-[#0E384A]/70 hover:bg-[#0E384A] text-white backdrop-blur-md font-semibold text-sm sm:text-base border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-lg transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Accessories Shop</span>
            </Link>
          </div>

          {/* Trust and Social Proof Badges without Profile Images */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#EDE6D6]">
            <div className="flex items-center gap-2.5 bg-[#08212D]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs font-medium text-[#EDE6D6]">
                <span className="font-bold text-[#F3E5AB] mr-1">{studioInfo.rating} ★</span>
                <span>({studioInfo.bridesServed} Happy Brides)</span>
              </div>
            </div>

            <div className="hidden sm:block h-5 w-px bg-white/20" />

            <div className="flex items-center gap-2 text-xs text-[#EDE6D6] bg-[#08212D]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
              <span className="font-medium">100% Sanitized Tools & Brushes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Global Cosmetics & Highlights Bar */}
      <Highlights />

      {/* 3. Bridal Services Module */}
      <section className="py-16 sm:py-20 bg-[#F9F7F1] border-b border-[#E4DAC6]">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold text-[#0E384A] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C59F54]" />
                <span>Signature Services</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
                Bridal Makeup & <span className="italic font-cormorant font-normal text-[#175C76]">Hairstyling Rituals</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="text-xs sm:text-sm font-semibold text-[#175C76] hover:underline flex items-center gap-1.5"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>          {/* 2-Column Responsive Grid matching Services Page */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
              >
                {/* Service Card Image */}
                <div className="relative h-44 sm:h-64 md:h-72 overflow-hidden bg-[#08212D]">
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
                  <h3 className="font-serif text-sm sm:text-lg font-bold text-[#08212D] group-hover:text-[#175C76] transition-colors line-clamp-1 mb-1">
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
      </section>

      {/* 4. Bridal & Bridesmaid Accessories Boutique Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F1] via-[#FAF7F0] to-[#F7F4EC] border-b border-[#E4DAC6]">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE9DC] text-xs font-semibold text-[#0E384A] uppercase tracking-wider mb-2 border border-[#D4AF37]/40">
                <ShoppingBag className="w-3.5 h-3.5 text-[#C59F54]" />
                <span>Accessories Boutique</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
                Bridal & Bridesmaid <span className="italic font-cormorant font-normal text-[#175C76]">Accessories & Jewellery</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#596E78] mt-1.5 max-w-2xl">
                Handcrafted South Indian temple jewellery, poola jada billalu, vaddanams, haldi floral combos, and luxury potlis available for purchase & rental in Coimbatore.
              </p>
            </div>

            <Link
              to="/accessories"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-medium text-xs sm:text-sm shadow-md transition-all border border-[#D4AF37]/30 shrink-0"
            >
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore All Accessories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredAccessories.map((product) => (
              <Link
                key={product.id}
                to="/accessories"
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-44 sm:h-56 overflow-hidden bg-[#08212D]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* View Details Badge */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 bg-white/90 group-hover:bg-white text-[#08212D] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1 transition-all">
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#175C76]" />
                  </div>
                </div>

                {/* Product Name & Price Only */}
                <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#08212D] group-hover:text-[#175C76] transition-colors line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-baseline justify-between gap-1 flex-wrap">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#175C76]">{product.price}</span>
                    {product.rentalPrice && (
                      <span className="text-[10px] sm:text-xs text-[#596E78] font-medium">
                        Rent: <strong className="text-[#08212D]">{product.rentalPrice}</strong>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-3xl bg-[#08212D] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/30 shadow-lg text-left">
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F3E5AB]">
                Looking for Matching Jewellery or Return Gift Sets for Bridesmaids?
              </h3>
              <p className="text-xs text-[#C5D7DF]">
                We offer bespoke saree-matching styling consultations and group discounts on 5+ bridesmaid sets in Coimbatore.
              </p>
            </div>
            <Link
              to="/accessories"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md hover:opacity-95 transition-opacity"
            >
              Browse Boutique Shop
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Final CTA */}
      <section className="py-16 bg-gradient-to-b from-[#FAF7F0] to-[#F9F7F1] text-center border-t border-[#E4DAC6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#EFE9DC] text-[#0E384A] flex items-center justify-center mx-auto shadow-sm border border-[#D4AF37]/40">
            <Sparkles className="w-6 h-6 text-[#C59F54]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D]">
            Ready to Begin Your <span className="italic font-cormorant font-normal text-[#175C76]">Bridal Journey?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5E67] max-w-xl mx-auto">
            Book your appointment now to lock your auspicious wedding date and schedule your bridal makeup trial session.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0E384A] via-[#175C76] to-[#08212D] text-[#F3E5AB] font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all border border-[#D4AF37]/40"
            >
              Book Your Appointment Now
            </Link>
            <Link
              to="/contact"
              className="px-7 py-4 rounded-full bg-white text-[#08212D] border border-[#E4DAC6] hover:border-[#D4AF37] font-semibold text-sm transition-all shadow-sm"
            >
              Contact & Studio Location
            </Link>
          </div>
        </div>
      </section>

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
                      const serviceTitle = selectedService.title;
                      setSelectedService(null);
                      if (onOpenBooking) onOpenBooking(serviceTitle);
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

    </div>
  );
}
