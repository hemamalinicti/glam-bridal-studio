import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Check, Star, MessageCircle, HeartHandshake, Calendar, Eye, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { packagesData } from '../data/bridalData';
import { studioInfo } from '../data/studioInfo';

export default function PackagesPage({ onOpenBooking }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const addOns = [
    { title: "Mother of Bride / Groom Makeover", price: "₹4,500 / person", desc: "Semi-HD subtle elegance, blow-dry / bun & saree draping" },
    { title: "Additional Silk Saree Box Pleating", price: "₹800 / saree", desc: "Pre-pleated, ironed & pinned ready to wear in 3 minutes" },
    { title: "Real Flower Poola Jada Set", price: "₹2,500", desc: "Fresh jasmine, roses & temple gold jada billalu arrangement" },
    { title: "Extended Hourly Photo-shoot Retouch", price: "₹1,500 / hour", desc: "Dedicated assistant keeping makeup & hair camera-ready during rituals" }
  ];

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830]">
      
      {/* Header Banner with Background Image - Unified Standard Height */}
      <section className="relative h-[360px] sm:h-[380px] md:h-[400px] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with luxury gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/packages-hero-bg.png"
            alt="Curated Bridal Packages"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/60 via-[#08212D]/35 to-[#08212D]/75" />
        </div>

        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <Crown className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Complete Bridal Suites</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Curated Bridal <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Packages</span>
          </h1>
          <p className="text-[#FAF7F1] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal sm:font-medium">
            Transparently priced all-inclusive suites designed for ultimate peace of mind on your grand day. Touch any package card to view complete inclusions and details.
          </p>
        </div>
      </section>

      {/* Packages Grid - 2 Columns on Mobile, 4 Columns on Desktop */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch mb-12 sm:mb-16">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
                  pkg.isPopular ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50' : 'border-[#E4DAC6]'
                }`}
              >
                {/* Package Card Image */}
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden bg-[#08212D]">
                  <img
                    src={pkg.image || '/services/hd-southindian-bridal.jpg'}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  {/* Badge top-left */}
                  {pkg.badge && (
                    <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md flex items-center gap-1 border border-[#B8860B]/30">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-[#08212D]" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  {/* View Details Badge bottom-right */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 bg-white/90 group-hover:bg-white text-[#08212D] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1 transition-all">
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#175C76]" />
                    <span>View Details</span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="inline-block text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md mb-1.5 bg-[#EFE9DC] text-[#0E384A] border border-[#E4DAC6] line-clamp-1">
                      {pkg.idealFor}
                    </div>

                    <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#08212D] group-hover:text-[#175C76] transition-colors line-clamp-1 mb-1">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#E4DAC6]/60">
                    <div className="flex items-baseline justify-between gap-1 flex-wrap">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-base sm:text-2xl font-bold text-[#175C76]">
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      {pkg.discount && (
                        <span className="text-[9px] sm:text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.5 rounded">
                          {pkg.discount}
                        </span>
                      )}
                    </div>

                    <div className="mt-2.5 flex items-center justify-center gap-1.5 w-full py-1.5 rounded-xl bg-[#FAF7F0] group-hover:bg-[#0E384A] group-hover:text-[#F3E5AB] text-[#08212D] text-[10px] sm:text-xs font-semibold border border-[#E4DAC6] transition-colors">
                      <span>Touch for Inclusions</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-on Services Box - 2 Columns on Mobile */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#E4DAC6] shadow-sm text-left mb-12 sm:mb-16">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-1 sm:mb-2">
              Optional Bridal Add-on Enhancements
            </h3>
            <p className="text-[11px] sm:text-xs text-[#596E78] mb-4 sm:mb-6">
              Customize any bridal package with these popular ala-carte services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4">
              {addOns.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F4EC] border border-[#E4DAC6] flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#08212D] leading-snug">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs text-[#596E78] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#E4DAC6]/60 flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs text-[#596E78] font-medium">Rate:</span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#175C76]">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destination Wedding Callout */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#08212D] via-[#0E384A] to-[#08212D] text-white border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F3E5AB]">Planning a Destination Wedding?</h3>
                <p className="text-xs text-[#D4E1E6] mt-1">
                  We travel across India (Goa, Kerala, Udaipur, Chennai, Hyderabad) & internationally with full entourage support.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20discuss%20a%20destination%20wedding%20package`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Request Destination Quote</span>
            </a>
          </div>

        </div>
      </section>

      {/* Package Details Modal - Opens when card is touched/clicked */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 relative text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F0] hover:bg-[#EFE9DC] text-[#08212D] border border-[#E4DAC6] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto md:overflow-hidden">
              {/* Package Modal Image Area */}
              <div className="md:col-span-5 bg-[#08212D] relative flex items-center justify-center p-6 sm:p-8 min-h-[260px] md:min-h-[500px]">
                <img
                  src={selectedPackage.image || '/services/hd-southindian-bridal.jpg'}
                  alt={selectedPackage.name}
                  className="max-h-[280px] md:max-h-[440px] w-full object-cover rounded-2xl shadow-lg"
                />

                {selectedPackage.badge && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-[#B8860B]/30">
                    <Star className="w-3.5 h-3.5 fill-current text-[#08212D]" />
                    <span>{selectedPackage.badge}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#08212D]/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-medium border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-[#F3E5AB]" />
                    <span>{selectedPackage.idealFor}</span>
                  </div>
                </div>
              </div>

              {/* Package Modal Info Area */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[500px]">
                <div className="pr-6">
                  {/* Category Chip */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#175C76] font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Bridal Suite Package</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D] mb-2 leading-tight">
                    {selectedPackage.name}
                  </h2>

                  {/* Price Banner */}
                  <div className="p-3.5 bg-[#F7F4EC] rounded-2xl border border-[#E4DAC6] flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-[#596E78] block">All-Inclusive Package Rate:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D]">{selectedPackage.price}</span>
                        {selectedPackage.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">{selectedPackage.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    {selectedPackage.discount && (
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#C8E6C9] inline-block">
                          {selectedPackage.discount}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs sm:text-sm text-[#4B5E67] leading-relaxed mb-4">
                    {selectedPackage.tagline}
                  </p>

                  {/* Full Inclusions List */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#08212D] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#175C76]" />
                      <span>Complete Package Inclusions:</span>
                    </h4>
                    <ul className="space-y-2 bg-[#FAF7F0] p-4 rounded-2xl border border-[#EFE9DC]">
                      {selectedPackage.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D3E46]">
                          <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cosmetic Standards */}
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
                      const packageName = selectedPackage.name;
                      setSelectedPackage(null);
                      if (onOpenBooking) {
                        onOpenBooking(packageName);
                      } else {
                        window.location.href = `/appointment`;
                      }
                    }}
                    className="flex-1 py-3 px-5 rounded-xl bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-[#D4AF37]/30 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Book This Package Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20know%20more%20and%20book%20the%20${encodeURIComponent(selectedPackage.name)}%20(${selectedPackage.price})`}
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
