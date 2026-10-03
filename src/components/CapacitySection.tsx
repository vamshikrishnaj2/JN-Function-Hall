import React from 'react';
import { Users, Utensils, Car, Info, Phone } from 'lucide-react';
import { CAPACITY_DATA, VENUE_CONFIG } from '../data/venueData';

export const CapacitySection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;

  const getCapacityIcon = (id: string) => {
    switch (id) {
      case 'hall-capacity':
        return <Users className="w-6 h-6 text-[#9e6f2c]" />;
      case 'dining-capacity':
        return <Utensils className="w-6 h-6 text-[#9e6f2c]" />;
      case 'parking-capacity':
        return <Car className="w-6 h-6 text-[#9e6f2c]" />;
      default:
        return <Users className="w-6 h-6 text-[#9e6f2c]" />;
    }
  };

  return (
    <section id="capacity" className="py-20 bg-white border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <span>Space &amp; Guest Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Hall &amp; Dining Capacity
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Layout guidelines for main auditorium seating, floating capacity, dining arrangements, and parking.
          </p>
        </div>

        {/* 3 Capacity Cards with Honest Placeholder State */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPACITY_DATA.map((item) => (
            <div
              key={item.id}
              id={`capacity-card-${item.id}`}
              className="rounded-2xl bg-[#faf8f5] border border-[#e8dfd1] p-7 flex flex-col justify-between hover:border-[#dec9ab] transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#dec9ab]/50 flex items-center justify-center shadow-xs">
                  {getCapacityIcon(item.id)}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#141b25]">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg font-mono font-bold text-[#9e6f2c] mt-0.5">
                    {item.value}
                  </p>
                </div>

                <p className="text-xs text-[#52525b] leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              {/* Direct Action */}
              <div className="pt-6 mt-6 border-t border-[#ede4d7]">
                <a
                  id={`capacity-call-btn-${item.id}`}
                  href={primaryPhoneTel}
                  className="w-full py-2.5 px-3 rounded-lg bg-white border border-[#dec9ab] hover:bg-[#f5eee3] text-[#141b25] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9e6f2c]" />
                  <span>Call to Confirm Capacity</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Explicit Data Integrity Box */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#fdfcf9] border border-[#e8dfd1] text-xs text-[#6b7280] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Management Notice:</strong> As instructed by management, no speculative guest numbers are published. Exact seating, floating, dining, and parking capacities will be confirmed directly during your phone consultation or venue walkthrough.
          </p>
        </div>

      </div>
    </section>
  );
};
