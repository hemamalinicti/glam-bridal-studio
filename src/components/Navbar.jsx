import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Calendar } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Studio', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Peacock Information Bar */}
      <div className={`bg-[#08212D] text-[#EDE6D6] text-xs py-2 px-4 transition-all duration-300 border-b border-[#D4AF37]/30 ${isScrolled ? 'hidden md:block py-1.5' : 'block'}`}>
        <div className="max-w-[1520px] w-full mx-auto px-2 sm:px-4 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-[13px]">
            <a href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{studioInfo.phone}</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-[#B8C9D0]">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{studioInfo.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            <span className="hidden lg:flex items-center gap-1.5 text-[#B8C9D0]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sungam, Coimbatore</span>
            </span>
            <a
              href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20packages`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 px-3 py-0.5 rounded-full font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar with Peacock Blue, Beige & Gold Styling */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-[#F7F4EC]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E4DAC6]' : 'bg-[#F9F7F1]/90 backdrop-blur-sm py-3 md:py-4'}`}>
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          
          {/* Studio Brand Logo Image */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 md:h-12 md:w-12 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-[#0E384A] via-[#D4AF37] to-[#0E384A] shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/logo.png"
                alt="Glam Bridal Studio Logo"
                className="w-full h-full object-cover rounded-full bg-[#F7F4EC]"
              />
            </div>
            <div className="text-left">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#0A2937] block leading-none">
                Glam Bridal <span className="text-[#D4AF37]">Studio</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#637984] font-medium block mt-1">
                Luxury Bridal Artistry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[14px] font-medium tracking-wide transition-all duration-200 relative py-1 hover:text-[#0E384A] ${
                    isActive ? 'text-[#0E384A] font-bold' : 'text-[#3B4E58]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0E384A] to-[#D4AF37] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/appointment"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0E384A] via-[#D4AF37] to-[#0E384A] rounded-full transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#08212D] text-[#F7F4EC] font-medium text-xs md:text-sm tracking-wide transition-all duration-300 group-hover:bg-[#0E384A]">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Book Appointment</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#08212D] hover:bg-[#EFE9DC] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F4EC] border-b border-[#E4DAC6] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-300 text-left">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      isActive ? 'bg-[#0E384A] text-white' : 'text-[#20313A] hover:bg-[#EFE9DC]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="pt-3 border-t border-[#E4DAC6] flex flex-col gap-2.5">
                <Link
                  to="/appointment"
                  className="w-full flex items-center justify-center gap-2 bg-[#0E384A] text-white py-3 rounded-xl font-medium shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Bridal Appointment</span>
                </Link>
                <a
                  href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20enquire%20about%20bridal%20packages`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-medium shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
