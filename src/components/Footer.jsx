import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Heart, Calendar } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08212D] text-[#FAF7F1] pt-16 pb-8 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#175C76]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-[#0E384A] via-[#D4AF37] to-[#175C76] shadow-sm shrink-0">
                <img
                  src="/logo.png"
                  alt="Glam Bridal Studio Logo"
                  className="w-full h-full object-cover rounded-full bg-[#F7F4EC]"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  Glam Bridal <span className="text-[#D4AF37]">Studio</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9BB3BD] font-medium block mt-1">
                  Bridal Services & Artistry
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#C5D7DF] leading-relaxed">
              {studioInfo.subTagline} Unveiling your timeless elegance with bespoke high-definition makeup, 4K airbrush artistry, and master hair styling for your grand wedding celebrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#175C76] flex items-center justify-center text-white transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#175C76] flex items-center justify-center text-white transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${studioInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links & Services Offered (2 columns side-by-side on mobile & desktop) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#C5D7DF]">
                <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home Page</Link></li>
                <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Studio</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Bridal Services</Link></li>
                <li><Link to="/packages" className="hover:text-[#D4AF37] transition-colors">Bridal Packages</Link></li>
                <li><Link to="/accessories" className="hover:text-[#D4AF37] transition-colors">Accessories Shop</Link></li>
                <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Portfolio Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact & Map</Link></li>
              </ul>
            </div>

            {/* Services Offered */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
                Services Offered
              </h4>
              <ul className="space-y-1.5 text-xs text-[#C5D7DF]">
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• HD Bridal Look</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• Reception Look</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• Mehendi & Nails</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• Party Glam Look</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• Saree Pleating</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">• Glow Facial</Link></li>
                <li><Link to="/accessories" className="hover:text-[#D4AF37] transition-colors">• Bridal Sets & Rental</Link></li>
              </ul>
            </div>
          </div>

          {/* Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F3E5AB] uppercase tracking-wider">
              Studio Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#C5D7DF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{studioInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {studioInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${studioInfo.email}`} className="hover:text-white">
                  {studioInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/appointment"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright, Privacy Policy and Terms and Conditions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BB3BD] text-center sm:text-left">
          <div>
            <p>© {currentYear} <strong className="text-white">{studioInfo.name}</strong>. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#C5D7DF]">
            <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
