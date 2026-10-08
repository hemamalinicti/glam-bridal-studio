import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {tooltipOpen && (
        <div className="bg-white text-[#08212D] text-xs p-3 rounded-2xl shadow-xl border border-[#E4DAC6] max-w-[210px] text-left relative animate-bounce-subtle">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 cursor-pointer"
            title="Close tooltip"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <p className="font-bold text-[#0E384A] flex items-center gap-1">
            <span>✨ Need Bridal Help?</span>
          </p>
          <p className="text-[11px] text-[#4B5E67] mt-0.5">
            Chat with our Bridal Artist directly for date availability!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20check%20bridal%20makeup%20availability%20and%20packages`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-[#25D366]/30"
        aria-label="Chat with Glam Bridal Studio on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
