import React from 'react';
import { CartItem } from '../types';
import { BUSINESS_CONFIG } from '../data/bakeryData';
import { X, Trash2, MessageCircle, Cake, ShoppingBag } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearAll: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const totalGuidePrice = items.reduce(
    (sum, item) => sum + item.product.samplePrice * item.quantity,
    0
  );

  const handleSendWhatsAppEnquiry = () => {
    if (items.length === 0) return;

    let message = `Hello Usha Bakery! I have prepared a celebration order enquiry:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} (${item.selectedSize}) x ${item.quantity} — Est. ₹${item.product.samplePrice * item.quantity}*\n`;
      if (item.customPiping) {
        message += `   • Custom Message: "${item.customPiping}"\n`;
      }
    });
    message += `\nEstimated Guide Subtotal: ₹${totalGuidePrice}*\n`;
    message += `\nPlease let me know your availability and final confirmed quotation. Thank you!`;

    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#FFF8F3] h-full shadow-2xl flex flex-col justify-between border-l-2 border-[#F6D4DF] text-[#50343D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#F6D4DF] flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6D4DF] flex items-center justify-center text-[#C6537D]">
              <ShoppingBag className="w-4 h-4 stroke-[2]" />
            </div>
            <h2 className="font-serif text-lg font-bold text-[#50343D]">
              Celebration Enquiry Tray
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close enquiry tray"
            className="p-2 rounded-full hover:bg-[#F6D4DF] text-[#50343D] hover:text-[#C6537D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List or Empty State */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#50343D]/70">
              <div className="w-16 h-16 rounded-full bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] mb-4">
                <Cake className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#50343D] mb-1">
                Your Tray is Empty
              </h3>
              <p className="text-xs max-w-xs leading-relaxed mb-6 font-medium">
                Add celebration cakes or cupcakes from our Popular Picks to compile a custom enquiry.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs"
              >
                Browse Cakes
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#50343D]/70 pb-2 border-b border-[#F6D4DF]">
                <span className="font-bold text-[#C6537D]">Selected Items ({items.length})</span>
                <button
                  onClick={onClearAll}
                  className="text-red-500 hover:text-red-700 underline text-[11px] font-bold"
                >
                  Clear all
                </button>
              </div>

              {items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${index}`}
                  className="p-3.5 bg-white rounded-2xl border border-[#F6D4DF] flex gap-3.5 items-center shadow-xs"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F6D4DF]/30 shrink-0 border border-[#F6D4DF]">
                    <ResilientImage
                      src={item.product.image}
                      alt={item.product.name}
                      fallbackTitle={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs font-bold text-[#50343D] truncate">
                      {item.product.name}
                    </h4>
                    <span className="block text-[11px] text-[#50343D]/75 font-medium">
                      Size: {item.selectedSize}
                    </span>
                    {item.customPiping && (
                      <span className="block text-[10px] text-[#C6537D] italic truncate font-medium">
                        Piping: "{item.customPiping}"
                      </span>
                    )}
                    <span className="font-serif text-xs font-bold text-[#C6537D] tabular-nums">
                      ₹{item.product.samplePrice * item.quantity}*
                    </span>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(index)}
                      aria-label="Remove item"
                      className="text-[#50343D]/60 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center border border-[#F6D4DF] rounded-lg bg-[#FFF8F3] text-xs">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="px-2 py-0.5 hover:bg-[#F6D4DF] text-[#50343D] transition-colors font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 font-bold tabular-nums text-[#50343D]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="px-2 py-0.5 hover:bg-[#F6D4DF] text-[#50343D] transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#F6D4DF] space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#50343D]">
                  Sample Guide Subtotal:
                </span>
                <span className="font-serif text-lg font-bold text-[#C6537D] tabular-nums">
                  ₹{totalGuidePrice}*
                </span>
              </div>
              <p className="text-[10px] text-[#50343D]/70 leading-snug">
                *Guide pricing only. Exact price confirmed by Usha Bakery based on custom flavours, finish, and collection.
              </p>
            </div>

            <button
              onClick={handleSendWhatsAppEnquiry}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order Enquiry on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
