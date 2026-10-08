import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioInfo } from '../data/studioInfo';

export default function TermsPage() {
  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pb-20">
      {/* Header Banner - Unified Standard Height */}
      <section className="relative h-[360px] sm:h-[380px] md:h-[400px] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#08212D] via-[#0E384A]/60 to-[#08212D]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <FileText className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Studio Guidelines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Terms & <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Conditions</span>
          </h1>
          <p className="text-[#FAF7F1] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal sm:font-medium">
            Booking terms, cancellation guidelines, and accessory rental policies for Glam Bridal Studio.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="bg-white rounded-3xl p-8 border border-[#E4DAC6] shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">1. Bridal Appointments & Slot Reservations</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                To guarantee artist availability on auspicious wedding dates, bookings are confirmed upon receipt of the advance reservation token. Dates cannot be held tentatively without confirmation.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">2. Punctuality & On-Venue Service</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                For early morning muhurthams, our senior styling team arrives on venue well ahead of schedule. We request the bridal party to ensure the readying area has adequate natural lighting or power outlets.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">3. Jewellery & Accessory Rentals</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                Rented temple jewellery suites, waist belts, and hair accessories are provided in sanitized, boxed packaging. Items must be returned in their original condition within the agreed rental window.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">4. Contact & Support</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                For any questions regarding scheduling, packages, or rental terms, please reach out to us at <strong>{studioInfo.phone}</strong> or <strong>{studioInfo.email}</strong>.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#175C76] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home Page</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
