import React from 'react';
import { CATEGORIES } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { ArrowRight } from 'lucide-react';

interface CakeCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CakeCategories: React.FC<CakeCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
            Curated Selections
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
            Find Something Sweet
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#50343D]/80">
            Browse our signature collections crafted for birthdays, weddings, anniversaries, and casual sweet cravings.
          </p>
        </div>

        {/* 6 Image-Led Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group text-left flex flex-col h-full bg-white hover:bg-[#F6D4DF]/30 rounded-2xl overflow-hidden border border-[#F6D4DF] hover:border-[#D96B91] transition-all duration-200 hover:-translate-y-1 shadow-xs"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#F6D4DF]/25">
                <ResilientImage
                  src={cat.image}
                  alt={cat.name}
                  fallbackTitle={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#50343D] group-hover:text-[#C6537D] leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#50343D]/75 mt-1 line-clamp-2 leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#F6D4DF] flex items-center justify-between text-[11px] font-bold text-[#C6537D] group-hover:text-[#D96B91]">
                  <span>View Cakes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
