import React from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SpecialPromoBannerProps {
  onExploreCollection: () => void;
}

export const SpecialPromoBanner: React.FC<SpecialPromoBannerProps> = ({
  onExploreCollection,
}) => {
  return (
    <section className="py-12 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F6D4DF] via-[#FFF8F3] to-[#F6D4DF]/60 border-2 border-[#F6D4DF] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6537D]">
                <Sparkles className="w-3.5 h-3.5 text-[#D96B91]" />
                <span>Seasonal Celebration Feature</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#50343D] leading-tight text-balance">
                Make the Occasion a Little Sweeter.
              </h2>

              <p className="text-sm sm:text-base text-[#50343D]/85 max-w-xl leading-relaxed">
                Explore cakes for birthdays, anniversaries, and special celebrations.
                From delicate strawberry floral piping to handcrafted chocolate truffles, each creation
                is baked with care for your memorable gatherings.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onExploreCollection}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <span>Explore the Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Media */}
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden">
              <ResilientImage
                src={BAKERY_IMAGES.weddingAnniversary}
                alt="Artisanal celebration cakes and pastries"
                fallbackTitle="Seasonal Celebration Cake"
                className="w-full h-full object-cover min-h-[260px] md:min-h-[340px]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFF8F3]/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
