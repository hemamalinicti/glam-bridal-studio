import React from 'react';
import { Sparkles, Check, Award } from 'lucide-react';
import { teamData } from '../data/bridalData';
import { studioInfo } from '../data/studioInfo';

export default function About({ onOpenBooking }) {
  const philosophies = [
    {
      title: "Enhance, Never Mask",
      desc: "Our signature philosophy is skin-like perfection that accentuates your genuine facial harmony, radiant undertones, and natural glow."
    },
    {
      title: "Medical-Grade Hygiene",
      desc: "Every brush, sponge, and tool undergoes UV sanitization and hospital-grade sterilization before touching your skin."
    },
    {
      title: "Punctual & Stress-Free",
      desc: "We operate on tight wedding schedules with backup artists, ensuring you are 100% ready well before your muhurtham or entry time."
    },
    {
      title: "Bespoke Customization",
      desc: "No cookie-cutter looks. Your skin type, wedding attire colors, jewellery weight, and lighting are analyzed during consultation."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>About Glam Bridal Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Where Bridal Dreams Meet <span className="italic font-cormorant font-normal text-[#175C76]">Artistic Perfection</span>
          </h2>
          <p className="text-[#4B5E67] text-base sm:text-lg mt-4 leading-relaxed">
            Founded with a passion for celebrating every bride's innate grace, Glam Bridal Studio is Coimbatore’s luxury bridal beauty destination led by our certified celebrity makeup artists.
          </p>
        </div>

        {/* Lead Artist & Studio Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Lead Artist Image & Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E4DAC6]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                  alt="Lead Bridal Artist"
                  className="w-full h-[450px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08212D]/90 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-[#0E384A] text-[11px] font-semibold tracking-wide uppercase text-[#F3E5AB] inline-block mb-1.5 border border-[#D4AF37]/30">
                    Founder & Master Artist
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F3E5AB]">Lead Master Artist</h3>
                  <p className="text-xs text-[#EAE2D8] mt-0.5">Certified International Bridal Stylist • {studioInfo.organization}</p>
                </div>
              </div>

              {/* Floating Award Chip */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E4DAC6] flex items-center gap-3.5 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-[#EFE9DC] text-[#0E384A] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#C59F54]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#08212D]">Certified Master Artist</div>
                  <div className="text-[11px] text-[#596E78]">10+ Years & 1,400+ Brides</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Artist Bio & Studio Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D]">
                Crafting Timeless Elegance for Over a Decade
              </h3>
              <p className="text-[#3D4D55] text-base leading-relaxed">
                At Glam Bridal Studio, we understand that your wedding day is one of the most significant milestones of your life. Every brush stroke is calculated to complement the fabric of your bridal attire, the brilliance of your jewelry, and the ambiance of your wedding hall.
              </p>
              <p className="text-[#3D4D55] text-base leading-relaxed">
                Whether you envision a serene South Indian Muhurtham look with pure gold tones and fresh poola jada, or a high-glamour evening reception with 4K Airbrush sculpting, our dedicated team brings your dream bridal silhouette into focus.
              </p>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
              {philosophies.map((item, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E4DAC6] shadow-sm hover:border-[#D4AF37] transition-colors">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#175C76]/10 text-[#175C76] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#08212D] line-clamp-1">{item.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#596E78] leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-full bg-[#0E384A] hover:bg-[#175C76] text-[#F3E5AB] font-medium text-sm transition-all duration-300 shadow-md cursor-pointer border border-[#D4AF37]/40"
              >
                Schedule a Personal Studio Consultation
              </button>
            </div>

          </div>

        </div>

        {/* Master Team Members */}
        <div className="pt-12 border-t border-[#E4DAC6]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D]">
              Meet Our Senior Styling Team
            </h3>
            <p className="text-xs sm:text-sm text-[#596E78] mt-2">
              Trained internationally and dedicated exclusively to bridal artistry, hair sculpting, and precision saree draping.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8">
            {teamData.filter(member => !member.name.toLowerCase().includes('founder')).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
              >
                <div className="relative h-44 sm:h-64 overflow-hidden bg-[#08212D]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#08212D]/85 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/30">
                    {member.experience}
                  </div>
                </div>

                <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-serif text-sm sm:text-xl font-bold text-[#08212D] line-clamp-1">{member.name}</h4>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#175C76] mt-0.5 line-clamp-1">{member.role}</p>
                    <p className="text-[10px] sm:text-[11px] text-[#7A8D96] mt-0.5 italic line-clamp-1">{member.credentials}</p>
                    <p className="text-[11px] sm:text-xs text-[#4B5E67] mt-2 leading-relaxed line-clamp-2 hidden sm:block">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
