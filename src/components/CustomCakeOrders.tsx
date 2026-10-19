import React, { useState } from 'react';
import { BAKERY_IMAGES, BUSINESS_CONFIG } from '../data/bakeryData';
import { ResilientImage } from './ResilientImage';
import { MessageCircle, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export const CustomCakeOrders: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    occasion: 'Birthday',
    flavour: 'Chocolate Truffle',
    size: '1 kg',
    requiredDate: '',
    designDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedModal, setSubmittedModal] = useState(false);

  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Baby Shower',
    'Farewell / Reunion',
    'Corporate Event',
    'Other Celebration',
  ];

  const flavours = [
    'Strawberry Vanilla Swirl',
    'Chocolate Truffle',
    'Black Forest',
    'Red Velvet Cream Cheese',
    'Butterscotch Crunch',
    'Fresh Cream Fruit',
    'Custom Flavour Request',
  ];

  const sizes = [
    '500g (4–6 servings)',
    '1 kg (8–10 servings)',
    '1.5 kg (12–15 servings)',
    '2 kg (16–20 servings)',
    '3 kg+ (Multi-tier design)',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.contactNumber.trim() || formData.contactNumber.trim().length < 8) {
      errs.contactNumber = 'Please provide a valid contact number.';
    }
    if (!formData.requiredDate) {
      errs.requiredDate = 'Please select your celebration date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello Usha Bakery! I would like to enquire about a custom cake order:
• Name: ${formData.name.trim()}
• Contact: ${formData.contactNumber.trim()}
• Occasion: ${formData.occasion}
• Preferred Flavour: ${formData.flavour}
• Cake Size: ${formData.size}
• Required Date: ${formData.requiredDate}
• Design Details: ${formData.designDetails.trim() || 'Standard bakery custom decoration'}

Kindly let me know the availability, design possibilities, and confirmed price quotation. Thank you!`;

    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setSubmittedModal(true);
  };

  return (
    <section id="custom-orders" className="py-16 lg:py-24 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Photo of Custom Cake */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F6D4DF] shadow-sm bg-white">
              <ResilientImage
                src={BAKERY_IMAGES.customBirthday}
                alt="Custom celebratory cake with artisanal piping"
                fallbackTitle="Custom Celebration Cake"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="p-4 bg-[#FFF8F3]/95 border-t border-[#F6D4DF] text-xs text-[#50343D]">
                <div className="flex items-center gap-1.5 font-bold text-[#C6537D] mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D96B91]" />
                  <span>Personalised Cake Design</span>
                </div>
                <span className="text-[#50343D]/80">Every celebration cake is customized to your preferred theme, flavour, and message.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#F6D4DF] text-xs text-[#50343D]/80 space-y-1">
              <span className="font-bold text-[#C6537D] block">Please note:</span>
              <p>
                Submitting this enquiry initiates your WhatsApp request. Orders are confirmed only after Usha Bakery verifies slot availability and pricing with you.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#F6D4DF] shadow-xs">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
                Bespoke Creations
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
                A Cake Made for Your Celebration.
              </h2>
              <p className="mt-2 text-sm text-[#50343D]/80 leading-relaxed">
                Have a particular design or occasion in mind? Share your preferences and enquire about a custom cake.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                  />
                  {errors.contactNumber && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.contactNumber}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Occasion */}
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D] font-medium"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Flavour */}
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1">
                    Preferred Flavour
                  </label>
                  <select
                    value={formData.flavour}
                    onChange={(e) => setFormData({ ...formData, flavour: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D] font-medium"
                  >
                    {flavours.map((fl) => (
                      <option key={fl} value={fl}>
                        {fl}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cake Size */}
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1">
                    Cake Size / Weight
                  </label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D] font-medium"
                  >
                    {sizes.map((sz) => (
                      <option key={sz} value={sz}>
                        {sz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Required Date */}
              <div>
                <label className="block text-xs font-bold text-[#50343D] mb-1">
                  Required Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.requiredDate}
                    onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                  />
                  <Calendar className="w-4 h-4 text-[#C6537D] absolute right-3 top-3 pointer-events-none" />
                </div>
                {errors.requiredDate && (
                  <span className="text-[11px] text-red-500 mt-1 block">{errors.requiredDate}</span>
                )}
              </div>

              {/* Design Details */}
              <div>
                <label className="block text-xs font-bold text-[#50343D] mb-1">
                  Design Details & Theme Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your desired theme, colour palette, piping message, or reference ideas..."
                  value={formData.designDetails}
                  onChange={(e) => setFormData({ ...formData, designDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                />
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-[#50343D]/70 mt-2">
                  Recipient:{' '}
                  <span className="font-mono text-[#C6537D] font-bold">{BUSINESS_CONFIG.whatsappPlaceholder}</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submittedModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs"
          onClick={() => setSubmittedModal(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-center border-2 border-[#F6D4DF] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#F6D4DF] text-[#C6537D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-xl font-bold text-[#50343D] mb-2">
              WhatsApp Message Prepared
            </h3>

            <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed mb-6">
              Your custom cake enquiry details for <strong>{formData.occasion}</strong> have been
              formatted and opened in WhatsApp. Please send the message to initiate your
              consultation.
            </p>

            <div className="p-3.5 bg-[#FFF8F3] rounded-xl text-left text-xs text-[#50343D] mb-6 space-y-1 border border-[#F6D4DF]">
              <div><strong>Name:</strong> {formData.name}</div>
              <div><strong>Occasion:</strong> {formData.occasion} ({formData.size})</div>
              <div><strong>Flavour:</strong> {formData.flavour}</div>
              <div><strong>Date:</strong> {formData.requiredDate}</div>
            </div>

            <button
              onClick={() => setSubmittedModal(false)}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
