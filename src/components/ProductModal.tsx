import React, { useState } from 'react';
import { Product } from '../types';
import { BUSINESS_CONFIG } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { X, MessageCircle, Plus, Check } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, customPiping?: string, quantity?: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[0] || 'Standard'
  );
  const [customPiping, setCustomPiping] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleOrderWhatsApp = () => {
    let message = `Hello Usha Bakery, I would like to order:
• Cake: ${product.name}
• Size: ${selectedSize}
• Quantity: ${quantity}`;
    if (customPiping.trim()) {
      message += `\n• Piping / Message on cake: "${customPiping.trim()}"`;
    }
    message += `\nPlease let me know availability, customization details, and the confirmed price quotation. Thank you!`;

    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize, customPiping.trim() || undefined, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFF8F3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F6D4DF] text-[#50343D] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#50343D] hover:text-[#C6537D] transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#F6D4DF]/35">
            <ResilientImage
              src={product.image}
              alt={product.name}
              fallbackTitle={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#C6537D] font-bold mb-1">
                Freshly Baked
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#50343D] mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-2xl font-bold text-[#C6537D] tabular-nums">
                  ₹{product.samplePrice}*
                </span>
                <span className="text-xs text-[#50343D]/70 font-medium">Sample starting price</span>
              </div>

              <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Flavour Profile */}
              {product.flavourNotes && (
                <div className="mb-4 p-3 bg-white rounded-xl border border-[#F6D4DF] text-xs">
                  <span className="font-bold block text-[#C6537D] mb-0.5">Flavour Notes:</span>
                  <p className="text-[#50343D]/80">{product.flavourNotes}</p>
                </div>
              )}

              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#50343D] mb-2">
                  Select Size / Quantity:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-[#D96B91] text-white border-[#D96B91] shadow-xs'
                          : 'bg-white text-[#50343D] border-[#F6D4DF] hover:border-[#D96B91] hover:bg-[#F6D4DF]/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Piping Message */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#50343D] mb-1">
                  Custom Cake Message / Piping (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy Birthday Aanya!"
                  value={customPiping}
                  onChange={(e) => setCustomPiping(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                  maxLength={60}
                />
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-[#50343D]">Quantity:</span>
                <div className="flex items-center border border-[#F6D4DF] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-xs hover:bg-[#F6D4DF] text-[#50343D] transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold tabular-nums text-[#50343D]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-xs hover:bg-[#F6D4DF] text-[#50343D] transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2 border-t border-[#F6D4DF]">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire & Order on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#C6537D] hover:bg-[#AE4269] rounded-xl transition-colors shadow-xs"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#F6D4DF]" />
                    <span>Added to Celebration Tray</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Enquiry Tray</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
