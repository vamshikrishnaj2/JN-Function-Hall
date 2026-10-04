import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Youtube, ArrowUpRight, ArrowUp, Heart } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { JNLogo } from './JNLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Details & Capacity', href: '#capacity' },
    { label: 'Conditions', href: '#conditions' },
    { label: 'Events', href: '#events' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Catering (Balaji)', href: '#catering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="bg-[#141b25] text-white border-t border-[#263140]">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info with Official Emblem */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <JNLogo variant="horizontal" size="lg" theme="light" />
            </div>

            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-sm">
              A premier celebration venue for weddings, grand receptions, engagements, and auspicious family functions with spacious stage facilities, dining hall, and dedicated guest parking.
            </p>

            <div className="pt-2 text-xs text-[#a1a1aa] space-y-1.5">
              <p className="font-semibold text-white">JN Function Hall &bull; Jaya Narayana</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent('Hello JN Function Hall, I would like to enquire about venue availability and pricing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25d366]/20 text-[#25d366] hover:bg-[#25d366]/30 text-xs font-semibold transition-colors"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp Desk 1</span>
                </a>
                <a
                  href={`https://wa.me/${VENUE_CONFIG.whatsapp2}?text=${encodeURIComponent('Hello JN Function Hall, I would like to enquire about venue availability and pricing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25d366]/20 text-[#25d366] hover:bg-[#25d366]/30 text-xs font-semibold transition-colors"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp Desk 2</span>
                </a>
                <a
                  href={VENUE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#dec9ab]" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#9ca3af]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links & Contact */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Business Links */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Business Links
              </h4>
              <div className="p-4 rounded-xl bg-[#1b2432] border border-[#2d394b] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#d8c7b0] block">
                    Catering Services (Sister Brand)
                  </span>
                  <span className="text-[10px] text-[#f59e0b] font-medium">Sree Balaji Caterers</span>
                </div>

                <a
                  id="footer-balaji-caterers-link"
                  href={VENUE_CONFIG.balajiCateringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#dec9ab] transition-colors"
                >
                  <span>Sree Balaji Caterers &bull; Balaji Catering</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dec9ab]" />
                </a>

                {/* Social Channels: Instagram, Facebook, YouTube */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#2a374a]">
                  <a
                    id="footer-balaji-instagram"
                    href={VENUE_CONFIG.balajiCatering.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow Sree Balaji Caterers on Instagram"
                    className="p-1.5 rounded-lg bg-[#e1306c]/15 hover:bg-[#e1306c]/30 text-[#f472b6] transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    id="footer-balaji-facebook"
                    href={VENUE_CONFIG.balajiCatering.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow Sree Balaji Caterers on Facebook"
                    className="p-1.5 rounded-lg bg-[#1877f2]/15 hover:bg-[#1877f2]/30 text-[#60a5fa] transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>

                  <a
                    id="footer-balaji-youtube"
                    href={VENUE_CONFIG.balajiCatering.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Watch Sree Balaji Caterers on YouTube"
                    className="p-1.5 rounded-lg bg-[#ef4444]/15 hover:bg-[#ef4444]/30 text-[#f87171] transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                </div>

                <div className="text-[11px] text-[#9ca3af] space-y-1 pt-0.5">
                  <p>WhatsApp: {VENUE_CONFIG.balajiCatering.whatsapp1Display} / {VENUE_CONFIG.balajiCatering.whatsapp2Display}</p>
                  <p className="font-mono">
                    <a href="mailto:sriyasribalaji@gmail.com" className="hover:text-white block">sriyasribalaji@gmail.com</a>
                    <a href="mailto:ayyangarbalaji0@gmail.com" className="hover:text-white block">ayyangarbalaji0@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Location / Phone reference */}
            <div className="space-y-2 text-xs text-[#9ca3af]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dec9ab] shrink-0 mt-0.5" />
                <a
                  href={VENUE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-zinc-600 underline-offset-2"
                >
                  JN Function Hall (View on Google Maps)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dec9ab] shrink-0" />
                <div className="space-x-1.5">
                  <a href={`tel:${VENUE_CONFIG.phone1}`} className="hover:text-white font-mono">{VENUE_CONFIG.phone1Display}</a>
                  <span>/</span>
                  <a href={`tel:${VENUE_CONFIG.phone2}`} className="hover:text-white font-mono">{VENUE_CONFIG.phone2Display}</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon size={14} className="shrink-0" />
                <div className="flex flex-wrap items-center gap-1 font-mono">
                  <a
                    href={`https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent('Hello JN Function Hall, I would like to enquire about venue availability and pricing.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {VENUE_CONFIG.whatsapp1Display}
                  </a>
                  <span>/</span>
                  <a
                    href={`https://wa.me/${VENUE_CONFIG.whatsapp2}?text=${encodeURIComponent('Hello JN Function Hall, I would like to enquire about venue availability and pricing.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {VENUE_CONFIG.whatsapp2Display}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#dec9ab] shrink-0 mt-0.5" />
                <div className="flex flex-col font-mono">
                  <a href="mailto:sriyasribalaji@gmail.com" className="hover:text-white">
                    sriyasribalaji@gmail.com
                  </a>
                  <a href="mailto:ayyangarbalaji0@gmail.com" className="hover:text-white">
                    ayyangarbalaji0@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#dec9ab] shrink-0" />
                <span>{VENUE_CONFIG.visitingHours}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Credit Bar matching exact design */}
        <div className="relative mt-16 pt-8 border-t border-[#263140]">
          {/* Scroll to Top Orange Circle Button */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <button
              id="footer-scroll-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-[#ea580c] hover:bg-[#f97316] text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#9ca3af]">
            {/* Left: Copyright */}
            <p className="text-center lg:text-left">
              © {new Date().getFullYear()} JN Function Hall &bull; Jaya Narayana. All Rights Reserved.
            </p>

            {/* Center: Designed & Developed by Vamshi Krishna */}
            <div id="footer-developer-credit" className="flex items-center gap-1.5 text-xs text-[#d1d5db]">
              <span>Designed &amp; Developed by</span>
              <span className="font-bold text-[#f59e0b] tracking-wide">Vamshi Krishna</span>
            </div>

            {/* Right: Crafted for Memorable Celebrations */}
            <p className="flex items-center gap-1.5 text-center lg:text-right text-xs text-[#9ca3af]">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#ef4444] fill-current inline-block" />
              <span>for Memorable Celebrations</span>
            </p>
          </div>

          <div className="mt-3 text-center sm:text-left text-[11px] text-[#6b7280]">
            <span>JN Function Hall is the venue business. Sree Balaji Caterers is the catering business.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
