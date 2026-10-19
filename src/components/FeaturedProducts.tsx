import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, BUSINESS_CONFIG } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { Plus, Eye, MessageCircle, Info } from 'lucide-react';

interface FeaturedProductsProps {
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onSelectCategory,
  onViewProduct,
  onAddToCart,
}) => {
  const [sizeSelections, setSizeSelections] = useState<Record<string, string>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Picks' },
    { id: 'chocolate', label: 'Chocolate' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'pastries', label: 'Pastries' },
  ];

  const filteredProducts = selectedCategory && selectedCategory !== 'all'
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  const getSelectedSize = (product: Product) => {
    return sizeSelections[product.id] || product.availableSizes[0] || 'Standard';
  };

  const handleSizeChange = (productId: string, size: string) => {
    setSizeSelections((prev) => ({ ...prev, [productId]: size }));
  };

  const handleOrderWhatsApp = (product: Product) => {
    const size = getSelectedSize(product);
    const message = `Hello Usha Bakery, I would like to order/enquire about the ${product.name} (Size: ${size}). Please let me know the availability and confirmed pricing.`;
    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleAddAndNotify = (product: Product) => {
    const size = getSelectedSize(product);
    onAddToCart(product, size);
    setAddedNotice(`${product.name} (${size}) added to your celebration tray.`);
    setTimeout(() => setAddedNotice(null), 3000);
  };

  return (
    <section id="cakes" className="py-16 lg:py-24 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-[#F6D4DF]">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
              Fresh From The Oven
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
              Popular Picks
            </h2>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-[#50343D]/75 font-medium">
              <Info className="w-3.5 h-3.5 text-[#D96B91]" />
              <span>Prices shown are sample starting guides. Actual price confirmed upon custom order.</span>
            </div>
          </div>

          {/* Filter Tabs (Interactive Segmented Control in Refined Strawberry Pink) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F6D4DF]/70 rounded-xl border border-[#F6D4DF]">
            {categories.map((c) => {
              const isActive = (selectedCategory === c.id) || (!selectedCategory && c.id === 'all');
              return (
                <button
                  key={c.id}
                  onClick={() => onSelectCategory(c.id === 'all' ? null : c.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D96B91] text-white shadow-xs'
                      : 'text-[#50343D] hover:text-[#C6537D] hover:bg-white/80'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Temporary Notification Toast */}
        {addedNotice && (
          <div className="mb-6 p-3 bg-white border border-[#D96B91] rounded-xl text-xs font-bold text-[#C6537D] shadow-xs flex items-center justify-between">
            <span>{addedNotice}</span>
            <span className="text-[11px] text-[#50343D]/70 font-normal">Click the tray bag icon above to review</span>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentSize = getSelectedSize(product);
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#F6D4DF] hover:border-[#D96B91] transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#F6D4DF]/25">
                  <ResilientImage
                    src={product.image}
                    alt={product.name}
                    fallbackTitle={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isPopular && (
                    <div className="absolute top-3 left-3 bg-[#FFF8F3]/95 text-[#C6537D] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#F6D4DF] backdrop-blur-xs shadow-xs">
                      Popular Pick
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-lg font-bold text-[#50343D] group-hover:text-[#C6537D] transition-colors">
                        {product.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-base font-bold text-[#C6537D] tabular-nums">
                          ₹{product.samplePrice}*
                        </span>
                        <span className="block text-[10px] text-[#50343D]/65 font-medium">sample guide</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#50343D]/75 leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    {/* Size Selector */}
                    {product.availableSizes && product.availableSizes.length > 0 && (
                      <div className="mb-4">
                        <span className="block text-[11px] font-bold text-[#50343D]/80 mb-1.5">
                          Available Sizes / Weights:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.availableSizes.map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleSizeChange(product.id, size)}
                              className={`px-2.5 py-1 text-xs rounded-lg border font-semibold transition-all ${
                                currentSize === size
                                  ? 'bg-[#D96B91] text-white border-[#D96B91] shadow-xs'
                                  : 'bg-white text-[#50343D] border-[#F6D4DF] hover:border-[#D96B91] hover:bg-[#F6D4DF]/30'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions: View Details + Add to Tray + WhatsApp Order */}
                  <div className="pt-4 border-t border-[#F6D4DF] space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onViewProduct(product)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#C6537D] bg-[#F6D4DF]/70 hover:bg-[#F6D4DF] rounded-xl transition-colors border border-[#F6D4DF]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAddAndNotify(product)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#C6537D] hover:bg-[#AE4269] rounded-xl transition-colors shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tray</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOrderWhatsApp(product)}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
