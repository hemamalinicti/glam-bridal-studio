import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import { Calendar } from 'lucide-react';

export default function AppointmentPage() {
  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-28 md:pt-32">
      
      {/* Header Banner */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with luxury gradient overlay so image & letters are clearly visible */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/appointment-hero-bg.png"
            alt="Glam Bridal Studio Bridal Appointment Booking"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Luminous balanced overlay: image details clearly visible with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/55 via-[#08212D]/25 to-[#08212D]/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <Calendar className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Appointment & Enquiry</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Book Your Bridal <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Appointment</span>
          </h1>
          <p className="text-[#FAF7F1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Secure your auspicious wedding dates with Glam Bridal Studio. Fill in your ceremony details to receive an instant customized quote & schedule your trial.
          </p>
        </div>
      </section>

      {/* Embedded Form Component */}
      <AppointmentSection />

    </div>
  );
}
