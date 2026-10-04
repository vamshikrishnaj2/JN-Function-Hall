import React from 'react';
import { Phone, Image as ImageIcon, MapPin, CheckCircle2, Video } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { JNLogo } from './JNLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HeroSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;
  const whatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
    'Hello JN Function Hall, I would like to enquire about venue availability and pricing.'
  )}`;
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f7f2ea] via-[#faf9f6] to-[#faf9f6]"
    >
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#9e6f2c_1.2px,transparent_1.2px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & Strict Headings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Brand Emblem & Entity Identification */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f1e6d5] border border-[#dec9ab] text-[#7e5522] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9e6f2c]" />
              <span>Dedicated Event &amp; Celebration Venue</span>
            </div>

            {/* Strict Headings as specified by User */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141b25] leading-[1.15]">
                Celebrate Life’s Special Moments
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-[#9e6f2c] font-medium tracking-wide">
                JN Function Hall — Jaya Narayana
              </p>
            </div>

            {/* Honest, Professional Description with verified venue specifications */}
            <p className="text-base sm:text-lg text-[#52525b] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A dedicated venue designed for life’s most cherished celebrations and gatherings.
              Available at <strong>₹30,000</strong> for complete <strong>24-hour venue hire</strong>, accommodating
              {' '}<strong>250–350 guests</strong> with dedicated cooking kitchen and on-premises parking.
            </p>

            {/* Core Verified Venue Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs text-[#374151] max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/80 border border-[#e8dfd1] rounded-lg px-2.5 py-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9e6f2c] shrink-0" />
                <span className="font-semibold text-[#141b25]">₹30,000 / 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-[#e8dfd1] rounded-lg px-2.5 py-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9e6f2c] shrink-0" />
                <span className="font-semibold text-[#141b25]">250–350 Guests</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-[#e8dfd1] rounded-lg px-2.5 py-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9e6f2c] shrink-0" />
                <span className="font-semibold text-[#141b25]">Cooking Kitchen</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-[#e8dfd1] rounded-lg px-2.5 py-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9e6f2c] shrink-0" />
                <span className="font-semibold text-[#141b25]">Parking Available</span>
              </div>
            </div>

            {/* Action Buttons: Primary CALL NOW + Secondary WHATSAPP NOW + VIEW PACKAGES */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 flex-wrap">
              <a
                id="hero-call-now-cta"
                href={primaryPhoneTel}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#141b25] hover:bg-[#222d3d] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md active:translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#dec9ab]" />
                <span>Call Now ({VENUE_CONFIG.phone1Display})</span>
              </a>

              <a
                id="hero-whatsapp-now-cta"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md active:translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>

              <a
                id="hero-video-tour-cta"
                href="#gallery"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#9e6f2c] hover:bg-[#855d24] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md active:translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-[#dec9ab]" />
                <span>Watch Video Tour</span>
              </a>

              <a
                id="hero-view-packages-cta"
                href="#pricing"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-[#f5efe6] border border-[#d8c7b0] text-[#141b25] text-sm font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>View Packages</span>
              </a>
            </div>

            {/* Subtle verification notice */}
            <p className="text-xs text-[#71717a] italic pt-1">
              Direct booking desk: Reach out to reserve your auspicious date and discuss custom arrangements.
            </p>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Official Venue Identity Showcase Card (No stock photos) */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#dec9ab] shadow-2xl bg-[#141b25] text-white p-6 sm:p-8">
                {/* Background decorative accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9e6f2c]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#dec9ab]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                {/* Header with Emblem */}
                <div className="relative flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/5 border-2 border-[#dec9ab] p-2 flex items-center justify-center shrink-0 shadow-lg">
                    <img
                      src="/image.png"
                      width={96}
                      height={96}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (!img.dataset.failedOnce) {
                          img.dataset.failedOnce = 'true';
                          img.src = '/jn-logo.jpg';
                        } else {
                          img.src = '/jn-logo.svg';
                        }
                      }}
                      alt="JN Function Hall — Jaya Narayana Official Emblem"
                      className="w-full h-full object-contain drop-shadow"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#dec9ab] bg-[#9e6f2c]/30 px-2.5 py-0.5 rounded-full border border-[#dec9ab]/40 inline-block mb-1">
                      Official Venue
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      JN FUNCTION HALL
                    </h3>
                    <p className="text-sm font-medium text-[#dec9ab] italic">
                      Jaya Narayana
                    </p>
                  </div>
                </div>

                {/* Key Venue Highlights */}
                <div className="relative py-6 space-y-3">
                  <p className="text-xs uppercase font-bold tracking-widest text-[#9ca3af]">
                    Venue Infrastructure &amp; Amenities
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#dec9ab] shrink-0" />
                      <span className="text-[#f4ebe0] font-medium">Spacious Main Hall</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#dec9ab] shrink-0" />
                      <span className="text-[#f4ebe0] font-medium">Grand Celebration Stage</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#dec9ab] shrink-0" />
                      <span className="text-[#f4ebe0] font-medium">Dedicated Dining Hall</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#dec9ab] shrink-0" />
                      <span className="text-[#f4ebe0] font-medium">Ample Guest Parking</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Bar */}
                <div className="relative pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#9ca3af] block">Direct Reservations:</span>
                    <span className="font-mono text-sm font-bold text-white">
                      {VENUE_CONFIG.phone1Display}
                    </span>
                  </div>
                  <a
                    href={VENUE_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#9e6f2c] hover:bg-[#855d24] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Location</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
