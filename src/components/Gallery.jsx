import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, MapPin, Eye } from 'lucide-react';
import { galleryData, transformationsData } from '../data/bridalData';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Muhurtham', 'Reception', 'Real Brides', 'Hairstyles', 'Pre-Bridal'];

  const filteredImages = activeTab === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeTab);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F9F7F1] relative overflow-hidden">
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59F54]" />
            <span>Our Bridal Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#08212D] tracking-tight">
            Real Brides & <span className="italic font-cormorant font-normal text-[#175C76]">Magical Moments</span>
          </h2>
          <p className="text-[#4B5E67] text-base sm:text-lg mt-4 leading-relaxed">
            Explore our curated gallery of radiant South Indian Muhurthams, evening reception spectacles, intricate hair braids, and glowing transformations.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
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

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#08212D] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-80 sm:h-96"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08212D]/90 via-[#08212D]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              {/* Category chip */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#08212D]/85 backdrop-blur-md text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/30">
                  {item.category}
                </span>
              </div>

              {/* Zoom icon hint */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Card Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-lg sm:text-xl font-bold text-[#F3E5AB]">
                  {item.title}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#EAE2D8] mt-1">
                  <span className="font-medium">{item.bride}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-white/90">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {item.location}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/15 text-white backdrop-blur-sm border border-white/10">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Bridal Transformation Showcase */}
        <div id="transformations" className="pt-12 border-t border-[#E4DAC6]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#0E384A] mb-3">
              <Eye className="w-3.5 h-3.5 text-[#175C76]" />
              <span>Real Transformations</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#08212D]">
              The Power of Skilled Bridal Artistry
            </h3>
            <p className="text-xs sm:text-sm text-[#596E78] mt-2">
              Hover and view our flawless coverage that highlights natural charm without looking cakey or artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-[#E4DAC6] shadow-md hover:shadow-xl transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#08212D]">{item.brideName}</h4>
                    <span className="text-xs text-[#175C76] font-semibold">{item.occasion}</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#EFE9DC] text-[#0E384A] font-medium border border-[#E4DAC6]">
                    Skin: {item.skinType}
                  </span>
                </div>

                {/* Split Before / After Images */}
                <div className="grid grid-cols-2 gap-3 mb-4 rounded-2xl overflow-hidden">
                  <div className="relative h-56 sm:h-64 bg-gray-100">
                    <img
                      src={item.beforeImg}
                      alt={`${item.brideName} Before`}
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-semibold">
                      Before / Raw Skin
                    </span>
                  </div>

                  <div className="relative h-56 sm:h-64 bg-gray-100">
                    <img
                      src={item.afterImg}
                      alt={`${item.brideName} After`}
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute top-2 right-2 bg-[#0E384A] text-[#F3E5AB] text-[10px] px-2 py-0.5 rounded font-semibold shadow-sm border border-[#D4AF37]/30">
                      After / Glam Look
                    </span>
                  </div>
                </div>

                {/* Solution & Bride Review */}
                <div className="space-y-2 bg-[#F7F4EC] p-4 rounded-2xl border border-[#E4DAC6]">
                  <p className="text-xs text-[#3D4D55]">
                    <strong className="text-[#08212D]">Custom Technique:</strong> {item.solution}
                  </p>
                  <p className="text-xs italic text-[#596E78] border-t border-[#E4DAC6] pt-2">
                    "{item.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#08212D] text-white rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
            <button
              onClick={closeLightbox}
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
                    <p className="text-xs text-[#9BB3BD] mb-2 font-medium uppercase tracking-wider">Artistry Highlights</p>
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
                  <a
                    href="#appointment"
                    onClick={() => {
                      closeLightbox();
                    }}
                    className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-xs tracking-wider uppercase transition-opacity hover:opacity-95"
                  >
                    Enquire For Similar Look
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
