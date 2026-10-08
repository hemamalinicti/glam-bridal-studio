import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Check, Star, MessageCircle, HeartHandshake, Calendar } from 'lucide-react';
import { packagesData } from '../data/bridalData';
import { studioInfo } from '../data/studioInfo';

export default function PackagesPage() {
  const addOns = [
    { title: "Mother of Bride / Groom Makeover", price: "₹4,500 / person", desc: "Semi-HD subtle elegance, blow-dry / bun & saree draping" },
    { title: "Additional Silk Saree Box Pleating", price: "₹800 / saree", desc: "Pre-pleated, ironed & pinned ready to wear in 3 minutes" },
    { title: "Real Flower Poola Jada Set", price: "₹2,500", desc: "Fresh jasmine, roses & temple gold jada billalu arrangement" },
    { title: "Extended Hourly Photo-shoot Retouch", price: "₹1,500 / hour", desc: "Dedicated assistant keeping makeup & hair camera-ready during rituals" }
  ];

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-28 md:pt-32">
      
      {/* Header Banner with Background Image */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with balanced gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/packages-hero-bg.png"
            alt="Curated Bridal Packages"
            className="w-full h-full object-cover object-top scale-105"
          />
          {/* Luminous balanced overlay: image details clearly visible with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/55 via-[#08212D]/25 to-[#08212D]/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <Crown className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Complete Bridal Suites</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Curated Bridal <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Packages</span>
          </h1>
          <p className="text-[#FAF7F1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Transparently priced all-inclusive suites designed for ultimate peace of mind on your grand day.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch mb-16">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 text-left ${
                  pkg.isPopular
                    ? 'bg-[#08212D] text-[#FAF7F1] shadow-2xl scale-100 lg:-translate-y-2 border-2 border-[#D4AF37]'
                    : 'bg-white text-[#08212D] border border-[#E4DAC6] shadow-md hover:shadow-xl'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap border border-[#B8860B]/30">
                    <Star className="w-3 h-3 fill-current text-[#08212D]" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-md mb-2 ${pkg.isPopular ? 'bg-[#11465D] text-[#F3E5AB] border border-[#D4AF37]/30' : 'bg-[#EFE9DC] text-[#0E384A] border border-[#E4DAC6]'}`}>
                    {pkg.idealFor}
                  </div>
                  <h3 className={`font-serif text-xl sm:text-2xl font-bold ${pkg.isPopular ? 'text-[#F3E5AB]' : 'text-[#08212D]'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed ${pkg.isPopular ? 'text-[#B8CAD1]' : 'text-[#596E78]'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="my-5 pb-5 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-serif text-3xl sm:text-4xl font-bold ${pkg.isPopular ? 'text-white' : 'text-[#0E384A]'}`}>
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-[#25D366] mt-0.5">{pkg.discount}</span>
                  </div>

                  <div className="space-y-2.5 text-xs mb-8">
                    <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${pkg.isPopular ? 'text-[#D4AF37]' : 'text-[#0E384A]'}`}>
                      Package Inclusions:
                    </p>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.isPopular ? 'bg-[#175C76] text-[#F3E5AB]' : 'bg-[#EFE9DC] text-[#175C76]'}`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={pkg.isPopular ? 'text-[#D4E1E6]' : 'text-[#3D4D55]'}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Link
                    to="/appointment"
                    className={`w-full py-3 px-4 rounded-xl font-medium text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold shadow-lg'
                        : 'bg-[#08212D] hover:bg-[#0E384A] text-[#F3E5AB] border border-[#D4AF37]/30'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Package</span>
                  </Link>

                  <a
                    href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20know%20more%20and%20book%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-colors ${
                      pkg.isPopular ? 'bg-white/10 text-[#25D366]' : 'bg-[#25D366]/10 text-[#1E7E34]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Add-on Services Box */}
          <div className="bg-white rounded-3xl p-8 border border-[#E4DAC6] shadow-sm text-left mb-16">
            <h3 className="font-serif text-2xl font-bold text-[#08212D] mb-2">
              Optional Bridal Add-on Enhancements
            </h3>
            <p className="text-xs text-[#596E78] mb-6">
              Customize any bridal package with these popular ala-carte services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#E4DAC6] flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-[#08212D]">{item.title}</h4>
                    <p className="text-xs text-[#596E78] mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-serif text-sm font-bold text-[#175C76] whitespace-nowrap">{item.price}</span>
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

    </div>
  );
}
