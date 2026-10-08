import React from 'react';
import { Users, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Highlights() {
  const stats = [
    {
      icon: Users,
      value: studioInfo.bridesServed,
      label: "Brides Transformed",
      desc: "Across South India & Destination Weddings",
      badgeAnim: "animate-icon-float-1",
      iconAnim: "transition-transform group-hover:scale-110"
    },
    {
      icon: Award,
      value: studioInfo.experienceYears,
      label: "Years Experience",
      desc: "Mastery in HD, 4K Airbrush & Styling",
      badgeAnim: "animate-icon-float-2",
      iconAnim: "animate-sway origin-bottom"
    },
    {
      icon: HeartHandshake,
      value: "99.8%",
      label: "Bride Delight Rate",
      desc: "Verified 5-Star reviews & referrals",
      badgeAnim: "animate-icon-float-3",
      iconAnim: "animate-heartbeat-slow"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Luxury International Kit",
      desc: "Dior, MAC, Charlotte Tilbury, NARS",
      badgeAnim: "animate-icon-float-4",
      iconAnim: "animate-shield-shimmer"
    }
  ];

  return (
    <section className="py-12 bg-[#08212D] text-[#EDE6D6] relative overflow-hidden">
      {/* Subtle gold grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="group text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#D4AF37]/50 hover:bg-white/[0.06] transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E384A] via-[#165672] to-[#D4AF37] flex items-center justify-center text-white shrink-0 shadow-md ${stat.badgeAnim}`}>
                  <Icon className={`w-6 h-6 text-[#F3E5AB] ${stat.iconAnim}`} />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB] tracking-tight group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#A6C0CC] mt-0.5 leading-snug">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
