import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../data/bridalData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#08212D]">
            Frequently Asked <span className="italic font-cormorant font-normal text-[#175C76]">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5E67] mt-2">
            Everything you need to know about bridal trials, packages, scheduling, and hygiene.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 text-left">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E4DAC6] bg-white overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#08212D] hover:text-[#175C76] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#0E384A] text-[#F3E5AB]' : 'bg-[#EFE9DC] text-[#0E384A]'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-[#3D4D55] leading-relaxed border-t border-[#F7F4EC] pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
