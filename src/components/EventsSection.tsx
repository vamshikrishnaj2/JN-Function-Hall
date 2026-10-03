import React from 'react';
import { Sparkles, Check, Phone } from 'lucide-react';
import { EVENT_CATEGORIES, VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const EventsSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;

  return (
    <section id="events" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#9e6f2c] uppercase bg-[#f4ebe0] px-3 py-1 rounded-full border border-[#dec9ab]/60">
            Suitable Occasions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Event Categories
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            JN Function Hall is designed to host a broad range of cultural, familial, and social gatherings.
            Below are the primary event categories accommodated at our venue.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_CATEGORIES.map((cat) => {
            const whatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
              `Hello JN Function Hall, I would like to enquire about venue availability for ${cat.name}.`
            )}`;

            return (
              <div
                key={cat.id}
                id={`event-cat-card-${cat.id}`}
                className="bg-white rounded-2xl p-7 border border-[#e8dfd1] shadow-xs hover:shadow-md hover:border-[#dec9ab] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#f7f2ea] flex items-center justify-center text-[#9e6f2c]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e6f2c] bg-[#faf3e8] px-2.5 py-1 rounded-md">
                      Venue Category
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#141b25]">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525b] mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Sub-types or features */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-[#71717a] uppercase tracking-wider block mb-2">
                      Suitable For
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#374151]">
                      {cat.suitableFor.map((sub, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#9e6f2c] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[#f4eee6] space-y-2">
                  <a
                    id={`event-cat-whatsapp-btn-${cat.id}`}
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#faf8f5] hover:bg-[#22c55e] text-[#141b25] hover:text-white border border-[#dec9ab] hover:border-[#22c55e] text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp for {cat.name}</span>
                  </a>

                  <a
                    id={`event-cat-call-btn-${cat.id}`}
                    href={primaryPhoneTel}
                    className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#f4efe8] text-[#141b25] border border-[#e8dfd1] text-[11px] font-semibold transition-all flex items-center justify-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#9e6f2c]" />
                    <span>Call Desk ({VENUE_CONFIG.phone1Display})</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Categories Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#71717a] italic">
          * Note: The items listed above represent suitable venue usage categories, not historical claims regarding past events.
        </div>

      </div>
    </section>
  );
};
