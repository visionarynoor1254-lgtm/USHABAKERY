import React from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { ArrowRight, Heart } from 'lucide-react';

interface AboutSectionProps {
  onExploreProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProducts }) => {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Asymmetrical Bakery Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F6D4DF] shadow-xs bg-white">
              <ResilientImage
                src={BAKERY_IMAGES.bakeryKitchen}
                alt="Artisanal bakery prep table and baking craft at Usha Bakery"
                fallbackTitle="Bakery Workspace"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="p-4 bg-white/95 border-t border-[#F6D4DF] text-xs text-[#50343D] flex items-center justify-between">
                <span className="font-serif italic font-bold text-[#C6537D]">Artisanal Bakery Kitchen</span>
                <span className="font-semibold text-[#50343D]/80">Fresh Preparation Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C6537D] font-bold">
              <Heart className="w-3.5 h-3.5 fill-[#D96B91] text-[#D96B91]" />
              <span>Our Craft & Dedication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#50343D] leading-[1.2] text-balance">
              Made for Moments Worth Celebrating.
            </h2>

            <p className="text-base sm:text-lg text-[#50343D]/85 leading-relaxed">
              From everyday sweet cravings to special celebrations, explore the cakes and
              treats available at Usha Bakery.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
