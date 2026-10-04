import React from 'react';
import { IndianRupee, Clock, Users, Car, UtensilsCrossed, Phone, CheckCircle2 } from 'lucide-react';
import { VENUE_CONFIG, VENUE_HIGHLIGHT_CARDS } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CapacitySection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;
  const whatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
    'Hello JN Function Hall, I would like to enquire about booking the hall for 24 hours at ₹30,000.'
  )}`;

  const getHighlightIcon = (id: string) => {
    switch (id) {
      case 'hall-price':
        return <IndianRupee className="w-6 h-6 text-[#9e6f2c]" />;
      case 'venue-timing':
        return <Clock className="w-6 h-6 text-[#9e6f2c]" />;
      case 'guest-capacity':
        return <Users className="w-6 h-6 text-[#9e6f2c]" />;
      case 'parking-facility':
        return <Car className="w-6 h-6 text-[#9e6f2c]" />;
      case 'kitchen-facility':
        return <UtensilsCrossed className="w-6 h-6 text-[#9e6f2c]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#9e6f2c]" />;
    }
  };

  return (
    <section id="capacity" className="py-20 bg-white border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <span>Verified Venue Specifications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Venue Details &amp; Capacity
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Essential verified venue facts, pricing, timing, and facilities for hosting your celebration at JN Function Hall.
          </p>
        </div>

        {/* 5 Core Verified Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {VENUE_HIGHLIGHT_CARDS.map((item) => (
            <div
              key={item.id}
              id={`venue-highlight-${item.id}`}
              className="rounded-2xl bg-[#faf8f5] border border-[#e8dfd1] p-6 flex flex-col justify-between hover:border-[#dec9ab] hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#dec9ab]/50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getHighlightIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e6f2c] bg-white px-2 py-0.5 rounded-md border border-[#dec9ab]/50">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#141b25] tracking-tight">
                    {item.value}
                  </p>
                  <h3 className="font-sans text-xs uppercase font-bold tracking-wider text-[#7e5522] mt-1">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs text-[#52525b] leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#ede4d7] flex items-center gap-1.5 text-[11px] text-[#16a34a] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified by Management</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip with Call & WhatsApp */}
        <div className="mt-10 p-5 rounded-2xl bg-[#faf7f2] border border-[#e8dfd1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#141b25]">
              Reserve Your Date at JN Function Hall
            </h4>
            <p className="text-xs text-[#6b7280]">
              Full 24-hour venue rental at ₹30,000 for 250–350 guests with parking and kitchen facility.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              id="capacity-book-call-btn"
              href={primaryPhoneTel}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
              <span>Call ({VENUE_CONFIG.phone1Display})</span>
            </a>
            <a
              id="capacity-book-whatsapp-btn"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

