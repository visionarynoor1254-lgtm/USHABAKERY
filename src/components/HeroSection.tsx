import React from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { Sparkles, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onExploreCakes: () => void;
  onOrderWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCakes,
  onOrderWhatsApp,
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FFF8F3]">
      {/* Rich soft blush ambient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F6D4DF]/70 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-[#D96B91]/15 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Brand Identity & Headlines */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6537D] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D96B91]" />
              <span>HANDCRAFTED PATISSERIE</span>
              <span className="font-bold text-[#D96B91]" aria-hidden="true">•</span>
              <span>FRESHLY BAKED</span>
            </div>

            {/* Brand Title + Supporting Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#C6537D] leading-none drop-shadow-xs">
                Usha Bakery
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#50343D] leading-tight">
                Sweet Moments, Beautifully Baked.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#50343D]/85 leading-relaxed max-w-xl font-normal">
              Discover cakes and sweet treats for birthdays, celebrations, and everyday cravings.
              Prepared fresh with premium ingredients, rich strawberry frosting, and artisan care.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreCakes}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all text-center shadow-xs hover:shadow-md"
              >
                Explore Our Cakes
              </button>

              <button
                onClick={onOrderWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#50343D] hover:text-[#C6537D] bg-[#F6D4DF] hover:bg-[#F6D4DF]/80 border border-[#D96B91]/50 rounded-xl transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#C6537D]" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Editorial Trust Markers */}
            <div className="pt-4 border-t border-[#F6D4DF] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#50343D]/75 font-semibold">
              <span>Strawberry & Vanilla Frosting</span>
              <span aria-hidden="true">·</span>
              <span>Celebration Cakes</span>
              <span aria-hidden="true">·</span>
              <span>Fresh Daily Batches</span>
            </div>
          </div>

          {/* Right Column: Pink Strawberry Cake Photograph on Stand */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft pink highlight frame backdrop */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#F6D4DF] to-[#D96B91]/25 rounded-3xl blur-xl -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden border-2 border-[#F6D4DF] bg-white shadow-md">
                <ResilientImage
                  src={BAKERY_IMAGES.hero}
                  alt="Usha Bakery strawberry celebration cake with velvety pink buttercream and fresh strawberries"
                  fallbackTitle="Usha Bakery Pink Celebration Cake"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover"
                />

                {/* Caption Bar */}
                <div className="p-4 bg-[#FFF8F3]/95 border-t border-[#F6D4DF] flex items-center justify-between text-xs text-[#50343D]">
                  <span className="font-serif italic font-bold text-[#C6537D]">
                    Signature Pink Strawberry Cake
                  </span>
                  <span className="font-semibold text-[#50343D]/80">Vanilla Buttercream & Glazed Berries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
