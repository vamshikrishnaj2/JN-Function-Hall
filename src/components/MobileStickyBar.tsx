import React, { useState } from 'react';
import { Phone, X, MapPin } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const MobileStickyBar: React.FC = () => {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [showWaMenu, setShowWaMenu] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hello JN Function Hall, I would like to enquire about venue availability and pricing.'
  );

  return (
    <>
      {/* Quick Action Modal for Call */}
      {showCallMenu && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl p-5 border border-[#dec9ab] shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-[#141b25] text-base flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9e6f2c]" />
                Direct Voice Call
              </h4>
              <button
                onClick={() => setShowCallMenu(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700"
                aria-label="Close call dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2.5">
              <a
                href={`tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`}
                onClick={() => setShowCallMenu(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#141b25] text-white text-xs font-bold tracking-wider flex items-center justify-between shadow-xs active:bg-[#273549]"
              >
                <span>Call Primary: {VENUE_CONFIG.phone1Display}</span>
                <Phone className="w-4 h-4 text-[#dec9ab]" />
              </a>
              <a
                href={`tel:${VENUE_CONFIG.phone2.replace(/\s+/g, '')}`}
                onClick={() => setShowCallMenu(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#faf8f5] hover:bg-[#f3ede3] text-[#141b25] border border-[#dec9ab] text-xs font-bold tracking-wider flex items-center justify-between"
              >
                <span>Call Secondary: {VENUE_CONFIG.phone2Display}</span>
                <Phone className="w-4 h-4 text-[#9e6f2c]" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quick Action Modal for WhatsApp */}
      {showWaMenu && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl p-5 border border-[#dec9ab] shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-[#141b25] text-base flex items-center gap-2">
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
              </h4>
              <button
                onClick={() => setShowWaMenu(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700"
                aria-label="Close WhatsApp dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWaMenu(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold tracking-wider flex items-center justify-between shadow-xs"
              >
                <span>Chat Desk 1: {VENUE_CONFIG.whatsapp1Display}</span>
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${VENUE_CONFIG.whatsapp2}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWaMenu(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold tracking-wider flex items-center justify-between shadow-xs"
              >
                <span>Chat Desk 2: {VENUE_CONFIG.whatsapp2Display}</span>
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Fixed Bar */}
      <div
        id="mobile-sticky-cta-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-t border-[#e8dfd1] px-3 py-2.5 shadow-xl flex items-center gap-2"
      >
        {/* Call Now Button (Primary) */}
        <button
          id="sticky-mobile-call-btn"
          onClick={() => setShowCallMenu(true)}
          className="flex-1 py-3 px-3 rounded-xl bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.99] transition-all cursor-pointer"
          aria-label="Call Venue Now"
        >
          <Phone className="w-4 h-4 text-[#dec9ab]" />
          <span>Call Now</span>
        </button>

        {/* WhatsApp Now Button (Secondary) */}
        <button
          id="sticky-mobile-whatsapp-btn"
          onClick={() => setShowWaMenu(true)}
          className="flex-1 py-3 px-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.99] transition-all cursor-pointer"
          aria-label="WhatsApp Venue Now"
        >
          <WhatsAppIcon size={16} />
          <span>WhatsApp Now</span>
        </button>

        {/* Contact Us link */}
        <a
          id="sticky-mobile-contact-btn"
          href="#contact"
          className="py-3 px-3 rounded-xl bg-white border border-[#d8c7b0] text-[#141b25] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-xs active:bg-[#f6efe4]"
          aria-label="Contact Details"
        >
          <MapPin className="w-3.5 h-3.5 text-[#9e6f2c]" />
          <span>Info</span>
        </a>
      </div>
    </>
  );
};
