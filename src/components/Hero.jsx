import React from 'react';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Hero({ onOpenBooking, onExplorePackages }) {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-24 overflow-hidden bg-[#08212D]">
      {/* Background Video Layer: Spans the entire hero section background, zoomed-out balanced framing */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videoframe_6224.png"
          className="w-full h-full object-cover object-[center_25%] sm:object-center opacity-95 scale-100"
        >
          <source src="/gemini_generated_video_63ca73c6.mp4" type="video/mp4" />
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
        {/* Transparent luminous gradient overlay for high contrast text readability while whole video is visible */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#08212D]/45 via-black/20 to-[#08212D]/55" />
        <div className="absolute inset-0 z-10 bg-radial from-transparent via-[#08212D]/10 to-[#08212D]/35" />
      </div>

      {/* Decorative Golden & Peacock Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#175C76]/25 via-[#D4AF37]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4 sm:pt-6 md:pt-8">
        {/* Royal Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E384A]/80 backdrop-blur-md border border-[#D4AF37]/60 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#F3E5AB] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#F3E5AB] drop-shadow-sm">
            Coimbatore's Premier Luxury Bridal Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-lg">
          Unveiling Your <span className="italic font-cormorant font-normal text-[#F3E5AB] text-5xl sm:text-6xl lg:text-7xl block sm:inline drop-shadow">Timeless Bridal</span> Elegance
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-[#EDE6D6] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
          Experience bespoke bridal transformations tailored to your unique skin and wedding traditions. From 4K Ultra Airbrush to sacred Muhurtham & Reception looks, we turn your wedding dream into a breathtaking reality.
        </p>

        {/* Key Value Points */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm text-[#F5EFE6]">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>100% Luxury Brands (MAC, Dior)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Custom Trial Sessions</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08212D]/70 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>On-Venue Travel Support</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBooking()}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-black/40 hover:shadow-2xl hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-[#FFF8E7]"
          >
            <Calendar className="w-4 h-4 text-[#08212D]" />
            <span>Book Bridal Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#08212D] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplorePackages}
            className="flex items-center gap-2 px-7 py-4 rounded-full bg-[#0E384A]/70 hover:bg-[#0E384A] text-white backdrop-blur-md font-semibold text-sm sm:text-base border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>View Packages & Pricing</span>
          </button>
        </div>

        {/* Trust and Social Proof Badges */}
        <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-[#EDE6D6]">
          <div className="flex items-center gap-2.5 bg-[#08212D]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <div className="flex -space-x-2.5">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4AF37] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Bride avatar" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4AF37] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Bride avatar" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4AF37] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" alt="Bride avatar" />
            </div>
            <div className="text-xs text-left">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="ml-1 font-bold text-white text-xs">{studioInfo.rating}</span>
              </div>
              <span className="text-[#C5D7DF] font-medium">{studioInfo.bridesServed} Happy Brides</span>
            </div>
          </div>

          <div className="hidden sm:block h-6 w-px bg-white/20" />

          <div className="flex items-center gap-2 text-xs text-[#EDE6D6] bg-[#08212D]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
            <span className="font-medium">100% Sanitized Tools & Cryo-Clean Brushes</span>
          </div>
        </div>

      </div>
    </section>
  );
}
