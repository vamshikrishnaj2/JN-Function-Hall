import React from 'react';
import { Phone, Mail, Sparkles, ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BalajiCaterersCardProps {
  onOpenQuote?: () => void;
  className?: string;
  showTitle?: boolean;
}

export const BalajiCaterersCard: React.FC<BalajiCaterersCardProps> = ({
  onOpenQuote,
  className = '',
  showTitle = true,
}) => {
  const balaji = VENUE_CONFIG.balajiCatering;

  const handleProposalClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const waMsg = encodeURIComponent(
        'Hello Sree Balaji Caterers, I would like to request a custom proposal and quote for my upcoming celebration.'
      );
      window.open(`https://wa.me/${balaji.whatsapp1}?text=${waMsg}`, '_blank', 'noopener,noreferrer');
    }
  };

  const getWaLink = (num: string) => {
    const waMsg = encodeURIComponent(
      'Hello Sree Balaji Caterers, I would like to enquire about your catering services and custom menu packages.'
    );
    return `https://wa.me/${num}?text=${waMsg}`;
  };

  return (
    <div
      id="sree-balaji-caterers-card"
      className={`relative rounded-3xl bg-[#141518] border border-[#2c2d33] p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden ${className}`}
    >
      {/* Subtle Warm Amber Glow Behind */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ea580c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />

      {showTitle && (
        <div className="relative mb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f59e0b] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Catering Division</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {balaji.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-1">
            Authentic traditional wedding feasts, vegetarian delicacies, and live counters
          </p>
        </div>
      )}

      {/* Primary Action Buttons (matching screenshot layout) */}
      <div className="relative space-y-3 sm:space-y-4">
        {/* Row 1: Proposal & Quote (Orange) + WhatsApp 1 (Green) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          <button
            id="balaji-request-proposal-btn"
            onClick={handleProposalClick}
            className="md:col-span-7 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] hover:brightness-110 active:scale-[0.99] text-[#141518] text-sm sm:text-base font-extrabold tracking-wide transition-all shadow-lg shadow-[#ea580c]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#141518] fill-current group-hover:rotate-12 transition-transform" />
            <span className="whitespace-nowrap">Request Custom Proposal &amp; Quote</span>
          </button>

          <a
            id="balaji-whatsapp-btn-1"
            href={getWaLink(balaji.whatsapp1)}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-5 w-full py-4 px-6 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-md shadow-[#22c55e]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap font-mono">WhatsApp: {balaji.whatsapp1Display}</span>
          </a>
        </div>

        {/* Row 2: WhatsApp 2 (Green) + Call 1 (Dark) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          <a
            id="balaji-whatsapp-btn-2"
            href={getWaLink(balaji.whatsapp2)}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-6 w-full py-4 px-6 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-md shadow-[#22c55e]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap font-mono">WhatsApp: {balaji.whatsapp2Display}</span>
          </a>

          <a
            id="balaji-call-btn-1"
            href={`tel:${balaji.phone1}`}
            className="md:col-span-6 w-full py-4 px-6 rounded-2xl bg-[#1c1d22] hover:bg-[#25272e] border border-[#2d2f38] hover:border-[#f59e0b]/40 text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap font-mono">Call: {balaji.phone1Display}</span>
          </a>
        </div>

        {/* Row 3: Call 2 (Dark) centered */}
        <div className="flex justify-center">
          <a
            id="balaji-call-btn-2"
            href={`tel:${balaji.phone2}`}
            className="w-full md:w-auto md:min-w-[340px] py-3.5 px-6 rounded-2xl bg-[#1c1d22] hover:bg-[#25272e] border border-[#2d2f38] hover:border-[#f59e0b]/40 text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap font-mono">Call: {balaji.phone2Display}</span>
          </a>
        </div>

        {/* Divider line */}
        <div className="pt-2">
          <div className="border-t border-[#272930]" />
        </div>

        {/* Row 4: Verified Social Profiles (Instagram, Facebook, YouTube) & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {/* Instagram Button */}
          <a
            id="balaji-instagram-link"
            href={balaji.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-[#1a1520] hover:bg-[#251b2e] border border-[#e1306c]/40 hover:border-[#e1306c] text-[#f472b6] hover:text-white text-xs sm:text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#e1306c] group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Instagram: {balaji.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
          </a>

          {/* Facebook Button */}
          <a
            id="balaji-facebook-link"
            href={balaji.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-[#131b2a] hover:bg-[#1a263d] border border-[#1877f2]/40 hover:border-[#1877f2] text-[#60a5fa] hover:text-white text-xs sm:text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Facebook className="w-4 h-4 text-[#1877f2] group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Facebook: {balaji.facebookName}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
          </a>

          {/* YouTube Button */}
          <a
            id="balaji-youtube-link"
            href={balaji.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-[#221417] hover:bg-[#301c20] border border-[#ef4444]/40 hover:border-[#ef4444] text-[#f87171] hover:text-white text-xs sm:text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Youtube className="w-4 h-4 text-[#ef4444] group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">YouTube: {balaji.youtubeHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
          </a>

          {/* Email Button */}
          <div
            id="balaji-email-container"
            className="py-2.5 px-4 rounded-2xl bg-[#1c1d22] border border-[#3f3f46] hover:border-[#f59e0b]/40 text-[#e4e4e7] text-xs font-medium transition-all shadow-xs flex flex-col justify-center gap-0.5 group"
          >
            <div className="flex items-center gap-1.5 text-[#f59e0b] font-bold text-[10px] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Email Correspondence</span>
            </div>
            <div className="flex flex-col font-mono text-[11px] truncate">
              <a href="mailto:sriyasribalaji@gmail.com" className="hover:text-white hover:underline truncate">
                sriyasribalaji@gmail.com
              </a>
              <a href="mailto:ayyangarbalaji0@gmail.com" className="hover:text-white hover:underline truncate">
                ayyangarbalaji0@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
