import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, ShieldCheck, Sparkles, Mail } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const defaultWhatsAppText = encodeURIComponent(
    'Hello JN Function Hall, I would like to enquire about venue availability and pricing.'
  );

  const primaryCallTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;
  const secondaryCallTel = `tel:${VENUE_CONFIG.phone2.replace(/\s+/g, '')}`;

  const primaryWhatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${defaultWhatsAppText}`;
  const secondaryWhatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp2}?text=${defaultWhatsAppText}`;

  return (
    <section id="contact" className="py-20 bg-[#faf9f6] border-t border-[#e8dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#9e6f2c]" />
            <span>Direct Management Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Contact JN Function Hall
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Speak directly with venue owners for date availability, inspection visits, and personalized event arrangements. No waiting, no forms.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Phone Calls (Primary) */}
          <div
            id="contact-phone-card"
            className="rounded-2xl bg-white border-2 border-[#9e6f2c]/50 p-7 sm:p-8 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4efe8] text-[#9e6f2c] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e6f2c]">
                  Direct Voice Call
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#141b25] mt-0.5">
                  Call Management
                </h3>
                <p className="text-xs sm:text-sm text-[#71717a] mt-1.5 leading-relaxed">
                  Call our team directly for instant date confirmation, hall walkthroughs, and package discussions.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Desk 1 */}
                <div className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee5d8] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8c7b69] block">
                      Primary Contact Desk
                    </span>
                    <span className="font-mono text-base font-bold text-[#141b25]">
                      {VENUE_CONFIG.phone1Display}
                    </span>
                  </div>
                  <a
                    id="contact-call-btn-1"
                    href={primaryCallTel}
                    className="px-4 py-2 rounded-lg bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* Desk 2 */}
                <div className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee5d8] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8c7b69] block">
                      Secondary Contact Desk
                    </span>
                    <span className="font-mono text-base font-bold text-[#141b25]">
                      {VENUE_CONFIG.phone2Display}
                    </span>
                  </div>
                  <a
                    id="contact-call-btn-2"
                    href={secondaryCallTel}
                    className="px-4 py-2 rounded-lg bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#f0e9df] mt-6 flex items-center gap-2 text-xs text-[#71717a]">
              <Clock className="w-4 h-4 text-[#9e6f2c] shrink-0" />
              <span>Available for direct calls throughout the day</span>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat (Secondary) */}
          <div
            id="contact-whatsapp-card"
            className="rounded-2xl bg-white border border-[#cbe6d2] p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#16a34a] flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16a34a]">
                  Instant WhatsApp Chat
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#141b25] mt-0.5">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#71717a] mt-1.5 leading-relaxed">
                  Start a direct chat with our desk on WhatsApp to ask questions or receive photo updates and details.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Desk 1 */}
                <div className="p-3.5 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#166534] block">
                      WhatsApp Desk 1
                    </span>
                    <span className="font-mono text-base font-bold text-[#141b25]">
                      {VENUE_CONFIG.whatsapp1Display}
                    </span>
                  </div>
                  <a
                    id="contact-whatsapp-btn-1"
                    href={primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>

                {/* Desk 2 */}
                <div className="p-3.5 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#166534] block">
                      WhatsApp Desk 2
                    </span>
                    <span className="font-mono text-base font-bold text-[#141b25]">
                      {VENUE_CONFIG.whatsapp2Display}
                    </span>
                  </div>
                  <a
                    id="contact-whatsapp-btn-2"
                    href={secondaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e2f5e8] mt-6 flex items-center gap-2 text-xs text-[#71717a]">
              <ShieldCheck className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>Manual chat initiated directly from your WhatsApp</span>
            </div>
          </div>

          {/* Card 3: Venue Location & Inspection Visit */}
          <div
            id="contact-visit-card"
            className="rounded-2xl bg-white border border-[#e8dfd1] p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4efe8] text-[#9e6f2c] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7e5522]">
                  On-Site Inspection
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#141b25] mt-0.5">
                  Visit JN Function Hall
                </h3>
                <p className="text-xs sm:text-sm text-[#71717a] mt-1.5 leading-relaxed">
                  Inspect the auditorium, stage, dining hall, and parking in person before reserving your date.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#eee5d8] space-y-2">
                <div className="text-xs font-semibold text-[#141b25]">
                  {VENUE_CONFIG.name} — {VENUE_CONFIG.entity}
                </div>
                <div className="text-xs text-[#52525b] leading-relaxed">
                  {VENUE_CONFIG.address}, {VENUE_CONFIG.city}
                </div>
                <div className="text-[11px] text-[#8c7b69] pt-1">
                  {VENUE_CONFIG.visitingHours}
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="contact-maps-btn"
                  href={VENUE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#f4efe8] hover:bg-[#ebdcc8] text-[#141b25] border border-[#d8c7b0] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9e6f2c]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#f0e9df] mt-6 text-xs text-[#71717a]">
              Please call prior to your arrival to ensure our representative is available on premises.
            </div>
          </div>

        </div>

        {/* Comprehensive Contact Information Card (Matching image.png layout) */}
        <div className="mt-12 rounded-3xl bg-[#141518] text-white border border-[#2a2c33] p-7 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#9e6f2c]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left Column: Contact Information Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#dec9ab] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Official Communication
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#d1d5db]">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Venue Location:</span>
                    <span className="text-[#9ca3af]">
                      {VENUE_CONFIG.address}, {VENUE_CONFIG.city}
                    </span>
                  </div>
                </div>

                {/* Direct Booking Hotlines */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Booking Hotlines:</span>
                    <div className="font-mono text-white flex flex-wrap items-center gap-2 mt-0.5">
                      <a href={primaryCallTel} className="hover:text-[#dec9ab] font-bold">
                        {VENUE_CONFIG.phone1Display}
                      </a>
                      <span className="text-zinc-500">|</span>
                      <a href={secondaryCallTel} className="hover:text-[#dec9ab] font-bold">
                        {VENUE_CONFIG.phone2Display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Business Chat */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp Business Chat:</span>
                    <div className="font-mono text-white flex flex-wrap items-center gap-2 mt-0.5">
                      <a href={primaryWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] font-bold">
                        {VENUE_CONFIG.whatsapp1Display}
                      </a>
                      <span className="text-zinc-500">|</span>
                      <a href={secondaryWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] font-bold">
                        {VENUE_CONFIG.whatsapp2Display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Inquiries & Proposals - Exactly matching image.png */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Inquiries &amp; Proposals:</span>
                    <div className="font-mono text-[#e4e4e7] flex flex-col gap-1 mt-1">
                      <a
                        id="contact-info-email-balaji"
                        href="mailto:sriyasribalaji@gmail.com"
                        className="hover:text-[#f59e0b] transition-colors flex items-center gap-1.5"
                      >
                        <span>sriyasribalaji@gmail.com</span>
                      </a>
                      <a
                        id="contact-info-email-ayyangar"
                        href="mailto:ayyangarbalaji0@gmail.com"
                        className="hover:text-[#f59e0b] transition-colors flex items-center gap-1.5"
                      >
                        <span>ayyangarbalaji0@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Direct Quick Connect Box */}
            <div className="lg:col-span-5 bg-[#1b1d22] border border-[#2e313a] rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Direct Owner Discussion</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-white">
                Connect Directly with Venue Management
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Speak directly with the venue owners to confirm date availability, discuss customized mandap and seating configurations, and arrange your hall inspection.
              </p>

              {/* Big Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="direct-owner-call-btn"
                  href={primaryCallTel}
                  className="p-4 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:brightness-110 active:scale-[0.99] text-[#141518] text-xs font-extrabold uppercase tracking-wider flex flex-col justify-between shadow-lg transition-all"
                >
                  <span className="text-[10px] text-[#141518]/70 block">PRIMARY CONTACT</span>
                  <span className="text-sm font-black flex items-center gap-1.5 mt-1">
                    <Phone className="w-4 h-4" /> Call Now
                  </span>
                  <span className="text-[11px] font-mono mt-1">{VENUE_CONFIG.phone1Display}</span>
                </a>

                <a
                  id="direct-owner-wa-btn"
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.99] text-white text-xs font-extrabold uppercase tracking-wider flex flex-col justify-between shadow-lg transition-all"
                >
                  <span className="text-[10px] text-white/80 block">INSTANT CHAT</span>
                  <span className="text-sm font-black flex items-center gap-1.5 mt-1">
                    <WhatsAppIcon size={16} /> WhatsApp Now
                  </span>
                  <span className="text-[11px] font-mono mt-1">{VENUE_CONFIG.whatsapp1Display}</span>
                </a>
              </div>

              {/* Alternate Contact Row */}
              <div className="pt-3 border-t border-[#2a2c35] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#9ca3af]">
                  Alternate Direct: <strong className="font-mono text-white">{VENUE_CONFIG.phone2Display}</strong>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={secondaryCallTel}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase transition-colors"
                  >
                    Call
                  </a>
                  <a
                    href={secondaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#22c55e]/20 hover:bg-[#22c55e]/30 text-[#4ade80] border border-[#22c55e]/40 text-[11px] font-bold uppercase transition-colors"
                  >
                    WhatsApp
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
