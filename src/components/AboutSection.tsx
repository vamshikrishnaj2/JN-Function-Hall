import React from 'react';
import { Building2, CalendarCheck, Phone } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { JNLogo } from './JNLogo';

export const AboutSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;

  return (
    <section id="about" className="py-20 bg-white border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Monogram & Identity Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#e8dfd1] bg-[#faf8f5] p-8 sm:p-10 shadow-xs relative overflow-hidden text-center space-y-6">
              
              {/* Architectural background seal */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-white border border-[#dec9ab]/60 p-3 shadow-xs flex items-center justify-center">
                <JNLogo variant="mark" size="lg" theme="dark" />
              </div>

              <div className="space-y-1">
                <h3 className="font-sans font-extrabold text-xl tracking-[0.12em] uppercase text-[#141b25]">
                  JN FUNCTION HALL
                </h3>
                <p className="font-serif italic text-base text-[#9e6f2c]">
                  Jaya Narayana
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a] pt-1">
                  Standalone Event Venue
                </p>
              </div>

              <div className="border-t border-[#eee7dc] pt-5 text-xs text-[#52525b] leading-relaxed text-left space-y-2">
                <p>
                  <strong>Core Purpose:</strong> Serving families and communities as a dedicated venue for auspicious cultural celebrations, marriages, and formal gatherings.
                </p>
                <p>
                  <strong>Venue Specifications:</strong> 250–350 guest capacity, 24-hour venue timing, dedicated kitchen facility for cooking, elevated stage, dining hall, and on-site parking at ₹30,000 hall rental.
                </p>
              </div>

              <div className="pt-2">
                <a
                  id="about-card-call-btn"
                  href={primaryPhoneTel}
                  className="w-full py-3 px-4 rounded-xl bg-[#141b25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#273549] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
                  <span>Call Now ({VENUE_CONFIG.phone1Display})</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Professional Copy & Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#9e6f2c] uppercase bg-[#f4ebe0] px-3 py-1 rounded-full border border-[#dec9ab]/60">
                About The Venue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141b25] tracking-tight">
                A Dedicated Setting for Celebrations &amp; Gatherings
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#52525b] leading-relaxed">
              <p>
                <strong>JN Function Hall (Jaya Narayana)</strong> is established as a dedicated event venue
                built specifically to accommodate life’s meaningful milestones. Whether hosting traditional
                wedding muhurthams, festive evening receptions, ring ceremonies, or milestone birthdays,
                the venue offers a dignified and comfortable environment for hosts and their guests.
              </p>
              <p>
                The premises feature an open-span main function hall accommodating 250–350 guests, an elevated ceremonial stage,
                a dedicated on-site kitchen facility available for cooking if required, an independent dining hall for meal service,
                and convenient on-site vehicle parking for 24-hour event bookings.
                Our administration works directly with event organizers and families to assist with date reservations,
                hall inspection visits, and logistical venue coordination.
              </p>
            </div>

            {/* Structured Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl border border-[#e8dfd1] bg-[#faf9f6]">
                <div className="w-8 h-8 rounded-lg bg-[#f0e8dc] text-[#9e6f2c] flex items-center justify-center mb-2.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-[#141b25]">Independent Venue Brand</h4>
                <p className="text-xs text-[#6b7280] mt-1 leading-normal">
                  Operated exclusively as an event and celebration space, focusing on venue comfort, accessibility, and space utility.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#e8dfd1] bg-[#faf9f6]">
                <div className="w-8 h-8 rounded-lg bg-[#f0e8dc] text-[#9e6f2c] flex items-center justify-center mb-2.5">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-[#141b25]">Direct Date Reservations</h4>
                <p className="text-xs text-[#6b7280] mt-1 leading-normal">
                  Transparent booking process with in-person venue visits to inspect the hall, stage, dining area, and parking layout.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
