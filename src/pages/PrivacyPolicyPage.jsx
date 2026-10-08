import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioInfo } from '../data/studioInfo';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] pt-24 md:pt-28 pb-20">
      <section className="py-14 md:py-16 bg-gradient-to-b from-[#FAF7F0] to-[#F9F7F1] border-b border-[#E4DAC6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A]">
            <Shield className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Legal & Data Protection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Privacy <span className="italic font-cormorant font-normal text-[#175C76]">Policy</span>
          </h1>
          <p className="text-[#4B5E67] text-sm sm:text-base max-w-xl mx-auto">
            Your privacy is of paramount importance to Glam Bridal Studio. Learn how we handle your booking details and personal information.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="bg-white rounded-3xl p-8 border border-[#E4DAC6] shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">1. Information We Collect</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                When you book an appointment, consult for bridal makeovers, or order accessories from Glam Bridal Studio, we collect necessary booking information including your name, contact phone number, email address, wedding dates, and event venue location in Coimbatore or surrounding regions.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">2. How We Use Your Information</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                The information you provide is strictly used to schedule and confirm your bridal makeup trials, muhurtham appointments, reception sessions, and coordinate accessory dispatches.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">3. Data Confidentiality & Security</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                We implement industry-standard security protocols to safeguard your personal details. We never sell, rent, or trade client information to any third-party marketing agencies.
              </p>
            </div>

            <div className="border-t border-[#EDE6D6] pt-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] mb-2">4. Contact & Inquiries</h2>
              <p className="text-sm text-[#4B5E67] leading-relaxed">
                If you have any questions regarding our Privacy Policy or your personal data, please contact our studio at <strong>{studioInfo.email}</strong> or call <strong>{studioInfo.phone}</strong>.
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
