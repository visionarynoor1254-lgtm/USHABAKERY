import React, { useState } from 'react';
import { BUSINESS_CONFIG, CATEGORIES } from '../data/bakeryData';
import { MessageCircle, X, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [modalPolicy, setModalPolicy] = useState<{ title: string; content: string } | null>(null);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Usha Bakery, I would like to enquire about your cakes.');
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#F6D4DF]/80 text-[#50343D] pt-16 pb-12 border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-2 border-[#D96B91]/25">
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#D96B91] flex items-center justify-center text-[#C6537D] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#C6537D]" />
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#C6537D] group-hover:text-[#D96B91] transition-colors">
                Usha Bakery
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#50343D]/85 leading-relaxed max-w-sm">
              Artisanal bakery crafting celebration cakes, pastries, and custom desserts for birthdays, weddings, and special moments worth celebrating.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wide text-[#C6537D] uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-[#50343D]/85">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#cakes"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#cakes');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Popular Cakes
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#story');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#gallery');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Bakery Gallery
                </a>
              </li>
              <li>
                <a
                  href="#custom-orders"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#custom-orders');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Custom Orders
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="hover:text-[#C6537D] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Cake Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wide text-[#C6537D] uppercase mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-[#50343D]/85">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      handleNavClick('#cakes');
                    }}
                    className="hover:text-[#C6537D] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Placeholders */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wide text-[#C6537D] uppercase mb-4">
              Bakery Info
            </h4>
            <div className="space-y-2.5 text-xs text-[#50343D]">
              <div>
                <span className="block text-[11px] font-bold text-[#C6537D]">WhatsApp:</span>
                <span className="font-mono text-[11px] text-[#50343D] font-semibold">{BUSINESS_CONFIG.whatsappPlaceholder}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#C6537D]">Phone:</span>
                <span className="font-mono text-[11px] text-[#50343D] font-semibold">{BUSINESS_CONFIG.phonePlaceholder}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#C6537D]">Hours:</span>
                <span className="font-mono text-[11px] text-[#50343D] font-semibold">{BUSINESS_CONFIG.hoursPlaceholder}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#C6537D]">Address:</span>
                <span className="font-mono text-[11px] text-[#50343D] font-semibold">{BUSINESS_CONFIG.addressPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#50343D]/75">
          <p>© {new Date().getFullYear()} Usha Bakery. All rights reserved.</p>

          <div className="flex items-center gap-6 font-bold">
            <button
              onClick={() =>
                setModalPolicy({
                  title: 'Order Policy & Enquiry Terms',
                  content:
                    'All celebration cakes and bespoke orders at Usha Bakery require prior confirmation. Prices displayed on this website are sample guide figures. Your final price quotation will be confirmed on WhatsApp based on design specifics, weight, and delivery or collection logistics.',
                })
              }
              className="hover:text-[#C6537D] transition-colors"
            >
              Order Policy
            </button>
            <button
              onClick={() =>
                setModalPolicy({
                  title: 'Privacy & Data Terms',
                  content:
                    'Usha Bakery respects your privacy. Information submitted through our enquiry form is strictly utilized to communicate with you regarding your cake order and is not sold or shared with external parties.',
                })
              }
              className="hover:text-[#C6537D] transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalPolicy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setModalPolicy(null)}
        >
          <div
            className="w-full max-w-md bg-[#FFF8F3] text-[#50343D] rounded-3xl p-6 sm:p-8 border-2 border-[#F6D4DF] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalPolicy(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-[#50343D] hover:bg-[#F6D4DF] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl font-bold mb-3 text-[#C6537D]">{modalPolicy.title}</h3>
            <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed mb-6">
              {modalPolicy.content}
            </p>
            <button
              onClick={() => setModalPolicy(null)}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
