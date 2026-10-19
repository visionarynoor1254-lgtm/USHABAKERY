import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateToCustom: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent(
      'Hello Usha Bakery! I would like to enquire about your freshly baked cakes and celebration desserts.'
    );
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F3]/95 backdrop-blur-md border-b-2 border-[#F6D4DF] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 sm:h-24 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Prominent Brand Mark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3 py-1 shrink-0"
        >
          {/* Distinctive Bakery Icon Emblem */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#F6D4DF] to-[#FFF8F3] border border-[#D96B91]/50 flex items-center justify-center text-[#C6537D] group-hover:scale-105 transition-transform shadow-xs">
            <Sparkles className="w-5 h-5 text-[#C6537D]" />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-[2.15rem] font-serif font-black tracking-tight text-[#C6537D] group-hover:text-[#D96B91] transition-colors leading-none drop-shadow-xs">
              Usha Bakery
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] text-[#50343D]/75 font-bold mt-1">
              Patisserie & Cakes
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-bold text-[#50343D]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Home
          </a>
          <a
            href="#cakes"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#cakes');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Cakes
          </a>
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#story');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Our Story
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#gallery');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Gallery
          </a>
          <a
            href="#custom-orders"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#custom-orders');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Custom Orders
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hover:text-[#C6537D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D96B91] hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions (Enquiry Bag + WhatsApp Order CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Cart / Enquiry Tray Icon */}
          <button
            onClick={onOpenCart}
            aria-label="View celebration enquiry items"
            className="relative p-2.5 rounded-full hover:bg-[#F6D4DF] text-[#50343D] hover:text-[#C6537D] transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C6537D] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button: WhatsApp Order */}
          <button
            onClick={openWhatsAppGeneral}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
          >
            WhatsApp Order
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#50343D] hover:bg-[#F6D4DF] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F3] border-b-2 border-[#F6D4DF] px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-bold text-[#50343D]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="py-1 hover:text-[#C6537D] border-b border-[#F6D4DF]"
            >
              Home
            </a>
            <a
              href="#cakes"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#cakes');
              }}
              className="py-1 hover:text-[#C6537D] border-b border-[#F6D4DF]"
            >
              Cakes
            </a>
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#story');
              }}
              className="py-1 hover:text-[#C6537D] border-b border-[#F6D4DF]"
            >
              Our Story
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#gallery');
              }}
              className="py-1 hover:text-[#C6537D] border-b border-[#F6D4DF]"
            >
              Gallery
            </a>
            <a
              href="#custom-orders"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#custom-orders');
              }}
              className="py-1 hover:text-[#C6537D] border-b border-[#F6D4DF]"
            >
              Custom Orders
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="py-1 hover:text-[#C6537D]"
            >
              Contact
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppGeneral();
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-colors text-center shadow-xs"
              >
                Order on WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
