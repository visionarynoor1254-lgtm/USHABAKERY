import React from 'react';
import { Search, Palette, MessageSquareText } from 'lucide-react';

interface WhyOrderEasilyProps {
  onBrowseCakes: () => void;
  onExploreDesigns: () => void;
  onWhatsApp: () => void;
}

export const WhyOrderEasily: React.FC<WhyOrderEasilyProps> = ({
  onBrowseCakes,
  onExploreDesigns,
  onWhatsApp,
}) => {
  return (
    <section className="py-16 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
            Order Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
            Simple Celebration Ordering
          </h2>
          <p className="mt-3 text-sm text-[#50343D]/80">
            Connecting with Usha Bakery for your cake enquiries is straightforward and direct.
          </p>
        </div>

        {/* Exactly 3 Useful Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Point 1: Browse Available Cakes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F6D4DF] flex flex-col justify-between shadow-xs hover:border-[#D96B91] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6D4DF] border border-[#D96B91]/40 flex items-center justify-center text-[#C6537D] mb-5">
                <Search className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#50343D] mb-2">
                Browse Available Cakes
              </h3>
              <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed">
                Review flavours, popular picks, standard weights, and sample starting prices directly on our menu catalog.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onBrowseCakes}
                className="text-xs font-bold text-[#C6537D] hover:text-[#D96B91] underline underline-offset-4"
              >
                Explore menu
              </button>
            </div>
          </div>

          {/* Point 2: Explore Designs for Different Occasions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F6D4DF] flex flex-col justify-between shadow-xs hover:border-[#D96B91] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6D4DF] border border-[#D96B91]/40 flex items-center justify-center text-[#C6537D] mb-5">
                <Palette className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#50343D] mb-2">
                Explore Designs for Different Occasions
              </h3>
              <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed">
                Find design inspiration across birthday, anniversary, wedding, and celebration categories in our visual gallery.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onExploreDesigns}
                className="text-xs font-bold text-[#C6537D] hover:text-[#D96B91] underline underline-offset-4"
              >
                View gallery
              </button>
            </div>
          </div>

          {/* Point 3: Enquire Directly on WhatsApp */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F6D4DF] flex flex-col justify-between shadow-xs hover:border-[#D96B91] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6D4DF] border border-[#D96B91]/40 flex items-center justify-center text-[#C6537D] mb-5">
                <MessageSquareText className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#50343D] mb-2">
                Enquire Directly on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed">
                Send your selected flavours, date, and bespoke design ideas in a pre-formatted message for quick confirmation.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onWhatsApp}
                className="text-xs font-bold text-[#C6537D] hover:text-[#D96B91] underline underline-offset-4"
              >
                Start chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
