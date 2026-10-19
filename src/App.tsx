import { useState } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CakeCategories } from './components/CakeCategories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductModal } from './components/ProductModal';
import { SpecialPromoBanner } from './components/SpecialPromoBanner';
import { CustomCakeOrders } from './components/CustomCakeOrders';
import { AboutSection } from './components/AboutSection';
import { BakeryGallery } from './components/BakeryGallery';
import { WhyOrderEasily } from './components/WhyOrderEasily';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { BUSINESS_CONFIG } from './data/bakeryData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('cakes');
  };

  const handleAddToCart = (
    product: Product,
    selectedSize: string,
    customPiping?: string,
    quantity = 1
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.customPiping === customPiping
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, selectedSize, customPiping, quantity }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const openWhatsAppGeneral = () => {
    const message =
      'Hello Usha Bakery! I would like to enquire about your cakes and celebration treats.';
    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#50343D] flex flex-col font-sans selection:bg-[#D96B91]/30 selection:text-[#50343D]">
      {/* 1. Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
        onNavigateToCustom={() => scrollToSection('custom-orders')}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreCakes={() => scrollToSection('cakes')}
          onOrderWhatsApp={openWhatsAppGeneral}
        />

        {/* 3. Cake Categories */}
        <CakeCategories onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Products (Popular Picks) */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onViewProduct={(product) => setActiveModalProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Special Offers & Seasonal Collection */}
        <SpecialPromoBanner
          onExploreCollection={() => scrollToSection('custom-orders')}
        />

        {/* 6. Custom Cake Orders */}
        <CustomCakeOrders />

        {/* 7. About Usha Bakery */}
        <AboutSection onExploreProducts={() => scrollToSection('cakes')} />

        {/* 8. Bakery Gallery */}
        <BakeryGallery />

        {/* 9. Why Customers Can Order Easily */}
        <WhyOrderEasily
          onBrowseCakes={() => scrollToSection('cakes')}
          onExploreDesigns={() => scrollToSection('gallery')}
          onWhatsApp={openWhatsAppGeneral}
        />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Product Details Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Celebration Enquiry Drawer / Cart */}
      <EnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearCart}
      />
    </div>
  );
}
