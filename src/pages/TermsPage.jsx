import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioInfo } from '../data/studioInfo';

export default function TermsPage() {
  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-24 md:pt-28 pb-20">
      <section className="py-14 md:py-16 bg-gradient-to-b from-[#FAF7F0] to-[#F9F7F1] border-b border-[#E4DAC6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A]">
            <FileText className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Studio Guidelines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Terms & <span className="italic font-cormorant font-normal text-[#175C76]">Conditions</span>
          </h1>
          <p className="text-[#4B5E67] text-sm sm:text-base max-w-xl mx-auto">
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
