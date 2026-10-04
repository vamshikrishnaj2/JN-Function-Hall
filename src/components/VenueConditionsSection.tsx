import React from 'react';
import { Ban, ShieldAlert, Phone, Info } from 'lucide-react';
import { VENUE_RESTRICTIONS, VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const VenueConditionsSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;
  const whatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
    'Hello JN Function Hall, I have a question regarding venue conditions and booking policies.'
  )}`;

  return (
    <section id="conditions" className="py-20 bg-[#faf9f6] border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f2] text-[#991b1b] text-xs font-bold tracking-wider uppercase border border-[#fecaca]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Important Venue Guidelines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Venue Conditions &amp; Restrictions
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            To preserve an auspicious, family-friendly, and serene environment for all celebrations, JN Function Hall strictly enforces the following policies.
          </p>
        </div>

        {/* Restrictions Grid - 6 Clear Prohibition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VENUE_RESTRICTIONS.map((item) => (
            <div
              key={item.id}
              id={`restriction-card-${item.id}`}
              className="bg-white rounded-2xl border-2 border-[#fee2e2] hover:border-[#fca5a5] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Red Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#ef4444]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#fef2f2] text-[#dc2626] border border-[#fecaca] flex items-center justify-center shrink-0">
                    <Ban className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#fef2f2] text-[#b91c1c] border border-[#fca5a5]">
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#141b25]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4b5563] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f3f4f6] text-[11px] font-semibold text-[#dc2626] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                <span>Strictly Enforced Policy</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#e8dfd1] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <Info className="w-5 h-5 text-[#9e6f2c] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              <strong>Notice to Event Hosts &amp; Caterers:</strong> Please inform your guests, decorators, and team of these verified conditions prior to the event date to ensure smooth coordination.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              id="conditions-call-desk-btn"
              href={primaryPhoneTel}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
              <span>Call Desk</span>
            </a>
            <a
              id="conditions-whatsapp-btn"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
