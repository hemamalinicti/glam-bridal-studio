import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Eye, 
  Check, 
  Search, 
  Filter, 
  ArrowRight, 
  MessageCircle, 
  X, 
  Star, 
  Tag, 
  Crown, 
  Heart,
  Phone,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';
import { accessoriesData, accessoryCategories } from '../data/accessoriesData';
import { studioInfo } from '../data/studioInfo';

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTarget, setSelectedTarget] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter products based on category, target audience, and search query
  const filteredProducts = useMemo(() => {
    return accessoriesData.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchTarget = selectedTarget === 'All' || item.target === selectedTarget;
      const matchSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchTarget && matchSearch;
    });
  }, [selectedCategory, selectedTarget, searchQuery]);

  const targetTabs = [
    { id: 'All', label: 'All Collections' },
    { id: 'Bride', label: 'Bride Essentials', icon: Crown },
    { id: 'Bridesmaid', label: 'Bridesmaid Specials', icon: Heart }
  ];

  const createWhatsAppUrl = (product) => {
    const text = `Hi Glam Bridal Studio, I would like to order/enquire about the *${product.name}* (Price: ${product.price}${product.rentalPrice ? `, Rental: ${product.rentalPrice}` : ''}). Please share availability and booking details.`;
    return `https://wa.me/${studioInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#F9F7F1] text-[#1A2830] min-h-screen pt-28 md:pt-32 pb-20">
      {/* 1. Header Hero Banner with Background Image */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#08212D] text-center border-b border-[#D4AF37]/30">
        {/* Background Image Layer with balanced gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-banners/accessories-hero-bg.png"
            alt="Curated Accessories & Jewellery Collection"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Luminous balanced overlay: image details clearly visible with crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08212D]/55 via-[#08212D]/25 to-[#08212D]/65" />
        </div>

        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08212D]/85 backdrop-blur-md border border-[#D4AF37]/60 shadow-lg text-xs md:text-sm font-semibold text-[#F3E5AB] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#F3E5AB]" />
            <span>Bridal & Bridesmaid Boutique</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Curated <span className="italic font-cormorant font-normal text-[#F3E5AB] drop-shadow">Accessories & Jewellery</span> Collection
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#FAF7F1] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Complete your wedding aesthetic with handcrafted temple jewellery sets, poola jada billalu, waist belts, festive bridesmaid sets, and silk potlis. Available for <strong className="text-white">purchase & premium rental</strong> in Coimbatore.
          </p>

          {/* Guarantee Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 pt-6 border-t border-white/20 text-xs sm:text-sm text-[#EDE6D6]">
            <div className="flex items-center justify-center gap-2 bg-[#08212D]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
              <Crown className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Authentic Temple Polish</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#08212D]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
              <RotateCcw className="w-4 h-4 text-[#F3E5AB] shrink-0" />
              <span>Affordable Day Rentals</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#08212D]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
              <Truck className="w-4 h-4 text-[#4ADE80] shrink-0" />
              <span>Fast Coimbatore Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#08212D]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Sanitized & Box Packed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filters & Search Section */}
      <section className="py-6 sm:py-8 border-b border-[#E4DAC6] bg-white">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Target Audience Tabs (Bride vs Bridesmaid) */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F7F4EC] rounded-2xl border border-[#E4DAC6] overflow-x-auto">
              {targetTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = selectedTarget === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTarget(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#08212D] text-[#F3E5AB] shadow-sm'
                        : 'text-[#3D4D55] hover:text-[#08212D] hover:bg-[#EFE9DC]/60'
                    }`}
                  >
                    {IconComponent && <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-gray-400'}`} />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search jewellery, potlis, poola jada..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F9F7F1] border border-[#E4DAC6] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-[#08212D] placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Category Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
            <span className="text-xs font-semibold text-[#637984] flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Category:</span>
            </span>
            {accessoryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === category
                    ? 'bg-[#0E384A] text-white border-[#0E384A] shadow-xs'
                    : 'bg-[#FAF7F0] text-[#4B5E67] border-[#E4DAC6] hover:border-[#D4AF37] hover:bg-[#F7F4EC]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="py-12">
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#08212D]">
                {selectedCategory === 'All' ? 'Complete Boutique Catalog' : selectedCategory}
              </h2>
              <p className="text-xs sm:text-sm text-[#596E78] mt-1">
                Showing {filteredProducts.length} curated {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            {(selectedCategory !== 'All' || selectedTarget !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTarget('All');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-[#175C76] hover:underline cursor-pointer flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E4DAC6] max-w-lg mx-auto my-12">
              <ShoppingBag className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
              <h3 className="font-serif text-xl font-bold text-[#08212D]">No Accessories Found</h3>
              <p className="text-xs sm:text-sm text-[#596E78] mt-2">
                We couldn't find items matching your search. Try changing your filters or contact us for custom accessories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTarget('All');
                  setSearchQuery('');
                }}
                className="mt-5 px-5 py-2.5 rounded-full bg-[#08212D] text-[#F3E5AB] text-xs font-semibold hover:bg-[#0E384A] transition-colors cursor-pointer"
              >
                View All Accessories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setQuickViewProduct(product)}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DAC6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  {/* Product Card Image */}
                  <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden bg-[#08212D]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 flex flex-wrap gap-1.5">
                      <span className="bg-[#08212D]/85 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/30 shadow-xs">
                        {product.category}
                      </span>
                      <span className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold tracking-wide uppercase shadow-xs border ${
                        product.target === 'Bride'
                          ? 'bg-[#175C76] text-[#F3E5AB] border-[#D4AF37]/30'
                          : 'bg-[#9C27B0] text-white border-white/20'
                      }`}>
                        {product.target}
                      </span>
                      {product.badge && (
                        <span className="bg-[#D4AF37] text-[#08212D] px-2 sm:px-2.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold tracking-wide uppercase shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {product.discount && (
                      <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 bg-[#E53935] text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold shadow-xs">
                        {product.discount}
                      </span>
                    )}

                    {/* View Details Badge */}
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 bg-white/90 group-hover:bg-white text-[#08212D] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1 transition-all">
                      <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#175C76]" />
                      <span>View Details</span>
                    </div>
                  </div>

                  {/* Product Name & Price Only */}
                  <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                    <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#08212D] group-hover:text-[#175C76] transition-colors line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-xl font-bold text-[#175C76] font-serif">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.rentalPrice && (
                        <span className="text-[10px] sm:text-xs text-[#596E78] font-semibold bg-[#FAF7F0] px-2 py-0.5 rounded-md border border-[#E4DAC6]">
                          Rent: <strong className="text-[#08212D]">{product.rentalPrice}</strong>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Custom Styling Consultation Assistance Banner */}
      <section className="py-16 bg-[#08212D] text-white relative overflow-hidden mt-8 border-t border-[#D4AF37]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#175C76]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Custom Saree-Matching & Entourage Packages</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F3E5AB]">
                Need Custom Matching Jewellery or Bulk Bridesmaid Sets?
              </h2>
              <p className="text-xs sm:text-sm text-[#C5D7DF] leading-relaxed max-w-2xl">
                Bring your wedding saree or lehenga swatch to our Sungam studio, or share photos on WhatsApp. Our master bridal stylists will curate matching antique kemp jewellery, custom poola jada venis, and coordinated floral sets for all your bridesmaids.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%20Glam%20Bridal%20Studio,%20I%20would%20like%20to%20consult%20about%20custom%20matching%20bridal%20accessories%20and%20bridesmaid%20sets`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F54] text-[#08212D] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Styling Request</span>
              </a>

              <a
                href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center border border-white/20 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Studio: {studioInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quick View Product Modal - Perfectly Aligned & Spacious */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setQuickViewProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 relative text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F0] hover:bg-[#EFE9DC] text-[#08212D] border border-[#E4DAC6] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto md:overflow-hidden">
              {/* Product Modal Image Area */}
              <div className="md:col-span-6 bg-[#08212D] relative flex items-center justify-center p-6 sm:p-8 min-h-[300px] md:min-h-[480px]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="max-h-[320px] md:max-h-[440px] w-full object-contain rounded-2xl shadow-lg"
                />
                
                {/* Badges placed cleanly at top-left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#08212D]/90 text-[#F3E5AB] text-xs font-bold border border-[#D4AF37]/50 backdrop-blur-sm shadow-sm">
                    {quickViewProduct.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                    quickViewProduct.target === 'Bride'
                      ? 'bg-[#0E384A]/90 text-white border-white/20'
                      : 'bg-[#9C27B0]/90 text-white border-white/20'
                  }`}>
                    {quickViewProduct.target === 'Bride' ? 'For Bride' : 'For Bridesmaid'}
                  </span>
                </div>
              </div>

              {/* Product Modal Info Area */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[480px]">
                <div className="pr-6">
                  {/* Category & Rating */}
                  <div className="flex items-center gap-2 text-xs text-[#596E78] mb-2">
                    <div className="flex items-center text-[#D4AF37] gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-[#08212D] text-xs">{quickViewProduct.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{quickViewProduct.reviewsCount} verified reviews</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#08212D] leading-snug mb-3">
                    {quickViewProduct.name}
                  </h3>

                  {/* Pricing Box */}
                  <div className="p-3.5 bg-[#FAF7F0] rounded-2xl border border-[#E4DAC6] mb-3.5">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#596E78] font-medium">Purchase Price:</span>
                        <span className="font-serif text-2xl font-bold text-[#08212D]">{quickViewProduct.price}</span>
                        {quickViewProduct.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">{quickViewProduct.originalPrice}</span>
                        )}
                      </div>
                      {quickViewProduct.rentalPrice && (
                        <div className="text-xs text-[#175C76] font-semibold flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Rent: <strong>{quickViewProduct.rentalPrice}</strong></span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#596E78] leading-relaxed mb-3.5">
                    {quickViewProduct.description}
                  </p>

                  {/* Features List */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#08212D] uppercase tracking-wider mb-2">
                      Key Specifications:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#3D4D55]">
                      {quickViewProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="pt-4 mt-4 border-t border-[#E4DAC6] space-y-2">
                  <a
                    href={createWhatsAppUrl(quickViewProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order / Rent on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="w-full py-1 text-center text-xs font-semibold text-[#596E78] hover:text-[#08212D] cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
