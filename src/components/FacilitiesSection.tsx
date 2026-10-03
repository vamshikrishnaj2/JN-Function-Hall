import React from 'react';
import { Landmark, Car, UtensilsCrossed, PlusCircle, CheckCircle, Phone } from 'lucide-react';
import { VERIFIED_FACILITIES, VENUE_CONFIG } from '../data/venueData';

export const FacilitiesSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'function-hall':
        return <Landmark className="w-6 h-6 text-[#9e6f2c]" />;
      case 'parking':
        return <Car className="w-6 h-6 text-[#9e6f2c]" />;
      case 'dining-area':
        return <UtensilsCrossed className="w-6 h-6 text-[#9e6f2c]" />;
      default:
        return <PlusCircle className="w-6 h-6 text-[#71717a]" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <span>Verified Venue Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Key Premises Facilities
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Essential physical facilities available on-site at JN Function Hall for your event operations.
          </p>
        </div>

        {/* 3 Verified Pillars + Explicit Expansion Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_FACILITIES.map((facility) => {
            const isVerified = facility.isConfirmed;

            return (
              <div
                key={facility.id}
                id={`facility-card-${facility.id}`}
                className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  isVerified
                    ? 'bg-white border border-[#e8dfd1] shadow-xs hover:border-[#d8c7b0] hover:shadow-md'
                    : 'bg-[#f4efe8]/50 border border-dashed border-[#dec9ab] opacity-75'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#f0e8dc]">
                      {getFacilityIcon(facility.id)}
                    </div>
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0d5c2e] bg-[#eef7f0] px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-[#8c7b69] bg-[#f0e8dc] px-2 py-0.5 rounded-full">
                        Optional Slot
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#141b25]">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-[#9e6f2c] font-semibold uppercase tracking-wider mt-0.5">
                      {facility.category}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#f0e8dc] mt-6">
                  {isVerified ? (
                    <div className="text-xs text-[#71717a] flex items-center justify-between">
                      <span className="font-medium text-[#141b25]">On-site infrastructure</span>
                      <span>Verified</span>
                    </div>
                  ) : (
                    <div className="text-xs text-[#8c857b] italic">
                      Slot reserved for additional verified facilities.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Venue Inspection */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-white border border-[#e8dfd1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525b]">
          <p>
            <strong>Note on Facilities:</strong> Need specific information on power generator backup, bridal dressing rooms, or sound systems? Call our desk directly.
          </p>
          <a
            id="facilities-call-btn"
            href={primaryPhoneTel}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#141b25] text-white font-semibold hover:bg-[#273549] transition-colors inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
            <span>Call Desk ({VENUE_CONFIG.phone1Display})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
