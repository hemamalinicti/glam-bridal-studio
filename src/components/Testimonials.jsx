import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/bridalData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically advance reviews on mobile screens
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Bride Reviews & Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Cherished Words from <span className="italic font-cormorant font-normal text-[#175C76]">Our Glam Brides</span>
          </h2>
          <p className="text-[#556973] text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            Nothing brings us more joy than seeing our brides walk down the aisle feeling radiant and confident.
          </p>
        </div>

        {/* 1. Desktop Layout: 4 Reviews in a row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <div className="absolute top-5 right-5 text-[#EFE9DC] group-hover:text-[#D4AF37]/40 transition-colors pointer-events-none">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-[#08212D]">5.0</span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#3E515A] leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE6D6]">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#08212D]">{item.name}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" title="Verified Bride" />
                </div>
                <p className="text-xs text-[#175C76] font-semibold mt-0.5">{item.service}</p>
                <p className="text-[11px] text-[#7A8D96] mt-0.5">{item.venue} • {item.weddingDate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Mobile Layout: 1 Review at a time with smooth automatic transition */}
        <div
          className="block lg:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-2">
                  <div className="bg-white rounded-3xl p-7 border border-[#E4DAC6] shadow-md flex flex-col justify-between text-left relative">
                    <div className="absolute top-5 right-5 text-[#EFE9DC]">
                      <Quote className="w-8 h-8" />
                    </div>

                    <div>
                      <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="ml-1.5 text-xs font-bold text-[#08212D]">5.0</span>
                      </div>

                      <p className="text-sm text-[#3E515A] leading-relaxed italic mb-6">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#EDE6D6]">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif text-base font-bold text-[#08212D]">{item.name}</h4>
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" title="Verified Bride" />
                      </div>
                      <p className="text-xs text-[#175C76] font-semibold mt-0.5">{item.service}</p>
                      <p className="text-[11px] text-[#7A8D96] mt-0.5">{item.venue} • {item.weddingDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="flex items-center justify-between mt-6 px-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-[#E4DAC6] shadow-xs flex items-center justify-center text-[#08212D] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 bg-[#0E384A]'
                      : 'w-2 bg-[#D4AF37]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-[#E4DAC6] shadow-xs flex items-center justify-center text-[#08212D] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
