import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/bakeryData';
import { Phone, MapPin, Clock, Instagram, MessageCircle, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [quickMessage, setQuickMessage] = useState('');

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim()) return;

    const message = `Hello Usha Bakery, I have an enquiry: "${quickMessage.trim()}"`;
    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setQuickMessage('');
  };

  const handleOpenWhatsApp = () => {
    const message = 'Hello Usha Bakery, I would like to enquire about your celebration cakes.';
    window.open(BUSINESS_CONFIG.generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FFF8F3] border-t-2 border-[#F6D4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Details & Verified Placeholders */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#50343D]">
                Contact Usha Bakery
              </h2>
              <p className="mt-3 text-sm text-[#50343D]/80 leading-relaxed">
                Connect directly for custom cake requests, bulk celebration enquiries, or flavour questions.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Ordering */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#F6D4DF] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#50343D]">
                    WhatsApp Ordering & Enquiries
                  </h3>
                  <p className="text-xs text-[#C6537D] font-bold mt-0.5 font-mono">
                    {BUSINESS_CONFIG.whatsappPlaceholder}
                  </p>
                  <button
                    onClick={handleOpenWhatsApp}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-[#C6537D] hover:text-[#D96B91] underline underline-offset-4"
                  >
                    Open WhatsApp Chat
                  </button>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#F6D4DF] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#50343D]">
                    Phone Number
                  </h3>
                  <p className="text-xs text-[#50343D]/80 mt-0.5 font-mono font-medium">
                    {BUSINESS_CONFIG.phonePlaceholder}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#F6D4DF] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#50343D]">
                    Bakery Address
                  </h3>
                  <p className="text-xs text-[#50343D]/80 mt-0.5 font-mono font-medium">
                    {BUSINESS_CONFIG.addressPlaceholder}
                  </p>
                  <p className="text-[11px] text-[#50343D]/65 mt-1 italic">
                    Map preview will appear once verified bakery address is provided.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#F6D4DF] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#50343D]">
                    Opening Hours
                  </h3>
                  <p className="text-xs text-[#50343D]/80 mt-0.5 font-mono font-medium">
                    {BUSINESS_CONFIG.hoursPlaceholder}
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#F6D4DF] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6D4DF] flex items-center justify-center text-[#C6537D] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#50343D]">
                    Instagram
                  </h3>
                  <p className="text-xs text-[#50343D]/80 mt-0.5 font-mono font-medium">
                    {BUSINESS_CONFIG.instagramPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Enquiry Message Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#F6D4DF] shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C6537D] font-bold mb-2">
                Quick Message
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#50343D] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#50343D]/80 leading-relaxed mb-6">
                Have a quick question about order lead times, cake sizing, or dietary specifications? Type your question below to send it to Usha Bakery via WhatsApp.
              </p>

              <form onSubmit={handleSendQuickMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#50343D] mb-1.5">
                    Your Message / Question
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="e.g. Do you offer 1kg eggless strawberry pink cakes for Saturday celebration?"
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8F3]/60 border border-[#F6D4DF] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D96B91] text-[#50343D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D96B91] hover:bg-[#C6537D] rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F6D4DF] text-xs text-[#50343D]/75">
              <span className="font-bold text-[#C6537D]">Order Notice:</span> For custom multi-tier wedding or event cakes, we recommend reaching out in advance to ensure schedule availability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
