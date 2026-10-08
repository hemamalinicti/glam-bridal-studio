import React from 'react';
import { Crown, Check, Star, ArrowRight, MessageCircle, HeartHandshake } from 'lucide-react';
import { packagesData } from '../data/bridalData';
import { studioInfo } from '../data/studioInfo';

export default function Packages({ onSelectPackageForBooking }) {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Curated Bridal Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Luxury Packages Crafted for <span className="italic font-cormorant font-normal text-[#175C76]">Your Grand Day</span>
          </h2>
          <p className="text-[#4B5E67] text-base sm:text-lg mt-4 leading-relaxed">
            All-inclusive, transparently priced bridal suites designed to provide seamless elegance, zero wedding-day anxiety, and stunning 4K photography results.
          </p>
        </div>

        {/* Packages Grid - 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-[#08212D] text-[#FAF7F1] shadow-xl scale-100 lg:-translate-y-2 border-2 border-[#D4AF37]'
                  : 'bg-white text-[#08212D] border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Popular / Best Seller Banner */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap border border-[#B8860B]/30">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-[#08212D]" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Package Title & Subtitle */}
                <div className="text-left mb-3 sm:mb-4">
                  <div className={`inline-block text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md mb-1.5 sm:mb-2 ${pkg.isPopular ? 'bg-[#11465D] text-[#F3E5AB] border border-[#D4AF37]/30' : 'bg-[#EFE9DC] text-[#0E384A] border border-[#E4DAC6]'}`}>
                    {pkg.idealFor}
                  </div>
                  <h3 className={`font-serif text-sm sm:text-2xl font-bold leading-snug ${pkg.isPopular ? 'text-[#F3E5AB]' : 'text-[#08212D]'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-[10px] sm:text-xs mt-1 leading-relaxed ${pkg.isPopular ? 'text-[#B8CAD1]' : 'text-[#596E78]'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-left my-3 sm:my-5 pb-3 sm:pb-5 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                    <span className={`font-serif text-lg sm:text-3xl md:text-4xl font-bold tracking-tight ${pkg.isPopular ? 'text-white' : 'text-[#0E384A]'}`}>
                      {pkg.price}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <span className="inline-block text-[9px] sm:text-[11px] font-semibold text-[#25D366] mt-0.5">
                    {pkg.discount}
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-1.5 sm:space-y-2.5 text-left text-[10px] sm:text-xs mb-4 sm:mb-8">
                  <p className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 ${pkg.isPopular ? 'text-[#D4AF37]' : 'text-[#0E384A]'}`}>
                    What's Included:
                  </p>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                      <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.isPopular ? 'bg-[#175C76] text-[#F3E5AB]' : 'bg-[#EFE9DC] text-[#175C76]'}`}>
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                      </div>
                      <span className={`line-clamp-2 ${pkg.isPopular ? 'text-[#D4E1E6]' : 'text-[#3D4D55]'}`}>
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package CTAs */}
              <div className="space-y-1.5 sm:space-y-2 pt-2">
                <button
                  onClick={() => onSelectPackageForBooking(pkg.name)}
                  className={`w-full py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold shadow-md hover:opacity-95'
                      : 'bg-[#08212D] hover:bg-[#0E384A] text-[#F3E5AB] border border-[#D4AF37]/30'
                  }`}
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20know%20more%20and%20book%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-1.5 sm:py-2 px-2 sm:px-4 rounded-xl font-medium text-[10px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 transition-colors text-center ${
                    pkg.isPopular
                      ? 'bg-white/10 hover:bg-white/20 text-[#25D366]'
                      : 'bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1E7E34]'
                  }`}
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Package Advisory Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#08212D] via-[#0E384A] to-[#08212D] text-white border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F3E5AB]">Need a Custom Multi-Event or Destination Wedding Package?</h3>
              <p className="text-xs sm:text-sm text-[#D4E1E6] mt-1">
                We cater to destination weddings in Goa, Udaipur, Kerala, Coorg, and international venues with customized travel & entourage options.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20need%20a%20custom%20destination%20wedding%20package`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat for Custom Quotation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
