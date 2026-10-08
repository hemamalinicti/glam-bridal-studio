import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calendar, ZoomIn, X, ShieldCheck } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';
import { teamData } from '../data/bridalData';

export default function AboutPage() {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  // Rotate dark-to-light highlight across stats one after another (faster cycle)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 3);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const statsList = [
    { value: "1,400+", label: "Real Brides Styled", span: "" },
    { value: "10+", label: "Years Experience", span: "" },
    { value: "4.95 ★", label: "850+ Google Reviews", span: "col-span-2 sm:col-span-1" }
  ];

  const values = [
    {
      id: "01",
      title: "Enhance, Never Mask",
      tagline: "Real You, Only Better",
      desc: "Our signature philosophy is skin-like perfection that accentuates your natural bone structure, radiant undertones, and unique smile.",
      image: "/standards/standard-01-enhance-never-mask.jpg",
      highlights: ["Accentuates Your Natural Bone Structure", "Brings Out Your Radiant Undertones", "Celebrates Your Unique Smile"]
    },
    {
      id: "02",
      title: "Medical-Grade Hygiene",
      tagline: "Clean Tools, Healthy Beauty",
      desc: "Every single makeup brush, beauty sponge, and styling tool is UV-sterilized and sanitized according to international salon standards.",
      image: "/standards/standard-02-medical-grade-hygiene.jpg",
      highlights: ["UV Sterilized", "Sanitized", "International Salon Standards", "Safe & Hygienic for You"]
    },
    {
      id: "03",
      title: "Punctual & Stress-Free",
      tagline: "Your Special Day. Our Priority.",
      desc: "We adhere strictly to muhurtham timelines, arriving well before dawn with backup artists to guarantee on-time readiness.",
      image: "/standards/standard-03-punctual-stress-free.jpg",
      highlights: ["Arrive Before Dawn", "Follow Muhurtham Timelines", "Backup Artists for On-Time Readiness"]
    },
    {
      id: "04",
      title: "Bespoke Customization",
      tagline: "Your Vision. Our Personal Touch.",
      desc: "Every face is unique. We test multiple shades, saree pleats, and hair structures during trial consultations for complete alignment.",
      image: "/standards/standard-04-bespoke-customization.jpg",
      highlights: ["Multiple Shades Match", "Precision Saree Pleats", "Tailored Hair Structures"]
    }
  ];

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-28 md:pt-32">
      
      {/* Page Header Banner with Studio Logo and Background Image */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with luxury gradient overlay so image & letters are clearly visible */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/about-hero-bg.jpg"
            alt="Glam Bridal Studio Salon Interior"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Luminous balanced overlay: image details clearly visible with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/55 via-[#08212D]/25 to-[#08212D]/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#0E384A] via-[#D4AF37] to-[#175C76] shadow-2xl">
            <img
              src="/logo.png"
              alt="Glam Bridal Studio Emblem"
              className="w-full h-full object-cover rounded-full bg-[#FAF7F0]"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Our Heritage & Artistry</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            About Glam Bridal <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Studio</span>
          </h1>
          <p className="text-[#FAF7F1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Coimbatore’s premier luxury bridal beauty destination, dedicated to timeless aesthetics, certified expertise, and bridal perfection.
          </p>
        </div>
      </section>

      {/* Founder Profile In-Depth */}
      <section className="py-20 bg-[#F9F7F1]">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E4DAC6]">
                <img
                  src="/team/founder-creative-director.png"
                  alt="Founder & Creative Director"
                  className="w-full h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08212D]/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="px-3 py-1 rounded-full bg-[#0E384A] text-[11px] font-semibold tracking-wide uppercase text-[#F3E5AB] inline-block mb-2 border border-[#D4AF37]/30">
                    Founder & Creative Director
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">Lead Master Stylist</h2>
                  <p className="text-xs text-[#EAE2D8] mt-1 font-light">
                    12+ Years Experience • {studioInfo.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
                  A Passion for Unveiling Every Bride’s Inner Radiance
                </h3>
                <p className="text-[#3D4D55] text-base leading-relaxed">
                  Glam Bridal Studio was born out of a desire to redefine bridal artistry in South India. Having styled over 1,400 brides across grand banquets, intimate temple weddings, and destination celebrations, our team combines international cosmetic formulas with deep respect for sacred cultural nuances.
                </p>
                <p className="text-[#3D4D55] text-base leading-relaxed">
                  From selecting high-definition waterproof pigment formulations that withstand intense ritual sacred fires to precision silk saree box-pleating that stays crisp for hours, every detail is engineered for effortless perfection.
                </p>
              </div>

              {/* Accolades & Trust Grid with Sequential Dark-to-Light Pulsing Transition */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {statsList.map((stat, idx) => {
                  const isActive = activeStatIndex === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveStatIndex(idx)}
                      className={`p-4 rounded-2xl text-center transition-all duration-300 cursor-pointer relative overflow-hidden border ${stat.span} ${
                        isActive
                          ? 'bg-gradient-to-br from-[#08212D] via-[#0E384A] to-[#08212D] text-white border-[#D4AF37] shadow-xl shadow-[#08212D]/25 -translate-y-1 scale-[1.03] ring-1 ring-[#D4AF37]/50'
                          : 'bg-white text-[#08212D] border-[#E4DAC6] shadow-sm hover:border-[#D4AF37]/50'
                      }`}
                    >
                      {/* Gentle top gold shimmer highlight when active */}
                      {isActive && (
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3E5AB] to-transparent animate-pulse" />
                      )}
                      <span
                        className={`font-serif text-2xl font-bold block transition-colors duration-300 ${
                          isActive ? 'text-[#F3E5AB] drop-shadow-sm' : 'text-[#0E384A]'
                        }`}
                      >
                        {stat.value}
                      </span>
                      <span
                        className={`text-xs transition-colors duration-300 font-medium ${
                          isActive ? 'text-[#D5E2E8]' : 'text-[#596E78]'
                        }`}
                      >
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-medium text-xs sm:text-sm transition-colors shadow-md border border-[#D4AF37]/30"
                >
                  <Calendar className="w-4 h-4 text-[#F3E5AB]" />
                  <span>Schedule Consultation with Master Stylist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-20 bg-[#F7F4EC] border-y border-[#E4DAC6]">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59F54]" />
              <span>4 Standards of Perfection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
              Our Core Bridal <span className="italic font-cormorant font-normal text-[#175C76]">Philosophy</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5E67] mt-2">
              The foundational quality standards that make Glam Bridal Studio the highest-rated bridal destination in Coimbatore.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {values.map((v) => (
              <div
                key={v.id}
                onClick={() => setSelectedStandard(v)}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E4DAC6] hover:border-[#D4AF37] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer text-left"
              >
                {/* Poster Graphic Card Display Only */}
                <div className="relative aspect-square overflow-hidden bg-[#FAF7F0]">
                  <img
                    src={v.image}
                    alt={`${v.title} - Standard ${v.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08212D]/90 text-[#F3E5AB] text-[10px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-[#D4AF37]/50 flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Infographic Lightbox Modal */}
      {selectedStandard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedStandard(null)}
        >
          <div
            className="relative max-w-3xl w-full overflow-hidden shadow-2xl rounded-3xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl bg-[#08212D]">
              <img
                src={selectedStandard.image}
                alt={selectedStandard.title}
                className="w-full max-h-[85vh] object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedStandard(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Senior Styling Team */}
      <section className="py-20 bg-[#F9F7F1]">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
              Meet Our Senior <span className="italic font-cormorant font-normal text-[#175C76]">Artistry Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5E67] mt-2">
              Every artist at Glam Bridal Studio brings years of specialized training and international academy accreditation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8">
            {teamData.filter(member => !member.name.toLowerCase().includes('founder')).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="relative h-44 sm:h-64 md:h-72 overflow-hidden bg-[#08212D]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-[#08212D]/85 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/30">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-5 text-left">
                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#08212D] leading-tight line-clamp-1">{member.name}</h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#175C76] mt-0.5 line-clamp-1">{member.role}</p>
                    <p className="text-[10px] sm:text-[11px] text-[#7A8D96] mt-1 italic line-clamp-1">{member.credentials}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
