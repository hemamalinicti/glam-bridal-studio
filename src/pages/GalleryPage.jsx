import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ZoomIn, X, MapPin } from 'lucide-react';
import { galleryData } from '../data/bridalData';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Muhurtham', 'Reception', 'Real Brides', 'Hairstyles', 'Pre-Bridal'];

  const filteredImages = activeTab === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeTab);

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830]">
      
      {/* Header Banner with Background Image - Unified Standard Height */}
      <section className="relative h-[360px] sm:h-[380px] md:h-[400px] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with luxury gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/gallery-hero-bg.png"
            alt="Our Bridal Gallery"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/60 via-[#08212D]/35 to-[#08212D]/75" />
        </div>

        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>Bridal Portfolio & Gallery</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Our Bridal <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Gallery</span>
          </h1>
          <p className="text-[#FAF7F1] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal sm:font-medium">
            Witness the timeless charm of our brides. Each look is custom-designed to match individual personality, skin tone, and wedding attire.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#0E384A] text-[#F3E5AB] shadow-md shadow-[#0E384A]/25 scale-105 border border-[#D4AF37]/40'
                    : 'bg-white hover:bg-[#F7F4EC] text-[#3D4D55] border border-[#E4DAC6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid: 4 columns on Desktop, 2 columns on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-20">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#08212D] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-64 sm:h-80 lg:h-96"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08212D]/95 via-[#08212D]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#08212D]/85 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/30">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 lg:p-6 text-left transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-xs sm:text-base lg:text-lg font-bold text-[#F3E5AB] leading-snug line-clamp-2">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#EAE2D8] mt-1">
                    <span className="font-medium truncate max-w-[90px] sm:max-w-none">{item.bride}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 sm:gap-1 text-white/90 truncate">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{item.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <div className="hidden sm:flex flex-wrap gap-1.5 mt-2.5">
                    {item.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-white/15 text-white backdrop-blur-sm border border-white/10">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#08212D] text-white rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#175C76] transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#0E384A] text-[11px] font-semibold uppercase tracking-wider text-[#F3E5AB] inline-block mb-3 border border-[#D4AF37]/30">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F3E5AB]">
                    {selectedImage.title}
                  </h3>
                  <div className="space-y-2 mt-4 text-xs text-[#D4E1E6]">
                    <p><strong className="text-white">Client:</strong> {selectedImage.bride}</p>
                    <p><strong className="text-white">Venue:</strong> {selectedImage.location}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-xs text-[#9BB3BD] mb-2 font-medium uppercase tracking-wider">Artistry Tags</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedImage.tags.map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-white">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/appointment"
                    onClick={() => setSelectedImage(null)}
                    className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-xs tracking-wider uppercase transition-opacity hover:opacity-95"
                  >
                    Book This Style Look
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
