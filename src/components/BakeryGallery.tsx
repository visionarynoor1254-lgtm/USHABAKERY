import React, { useState } from 'react';
import { GALLERY_ITEMS, BUSINESS_CONFIG } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { Maximize2, X, MessageCircle } from 'lucide-react';

export const BakeryGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filterTabs = ['All', 'Celebration', 'Chocolate', 'Pastries', 'Custom'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleEnquireDesign = (item: (typeof GALLERY_ITEMS)[0]) => {
    const message = `Hello Usha Bakery, I saw this design in your gallery: "${item.title}" (${item.category}). I would like to enquire about getting a similar cake made for my celebration!`;
    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-[#F6D4DF]">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
              Visual Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
              Bakery Gallery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#50343D]/80">
              Explore designs crafted for birthdays, weddings, anniversaries, and patisserie lovers.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F6D4DF]/70 rounded-xl border border-[#F6D4DF]">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-[#D96B91] text-white shadow-xs'
                    : 'text-[#50343D] hover:text-[#C6537D] hover:bg-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#F6D4DF] hover:border-[#D96B91] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#F6D4DF]/25">
                <ResilientImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white text-[#C6537D] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C6537D] tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#50343D] leading-tight group-hover:text-[#C6537D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#50343D]/75 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FFF8F3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F6D4DF] text-[#50343D]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#50343D] hover:text-[#C6537D] shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <ResilientImage
                src={activeImage.image}
                alt={activeImage.title}
                fallbackTitle={activeImage.title}
                className="max-h-[60vh] w-auto mx-auto object-contain"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFF8F3]">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#C6537D]">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#50343D]">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-[#50343D]/80 mt-1">
                  {activeImage.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleEnquireDesign(activeImage)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shrink-0 shadow-xs hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire This Design</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
