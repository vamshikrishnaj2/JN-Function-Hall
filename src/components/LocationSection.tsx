import React from 'react';
import { MapPin, Navigation, Car, Clock, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#9e6f2c] uppercase bg-[#f4ebe0] px-3 py-1 rounded-full border border-[#dec9ab]/60">
            Venue Address &amp; Directions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Location &amp; Accessibility
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Conveniently accessible venue for visiting families, wedding attendees, and event coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Guidelines */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8dfd1] shadow-xs">
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f7f2ea] text-[#9e6f2c] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#141b25]">
                    Hall Address
                  </h3>
                  <p className="text-sm font-semibold text-[#9e6f2c] mt-0.5">
                    {VENUE_CONFIG.name} — {VENUE_CONFIG.entity}
                  </p>
                  
                  {/* Verified Location Details */}
                  <div className="mt-2.5 text-xs text-[#4b5563] space-y-2">
                    <p className="text-xs text-[#374151] leading-relaxed">
                      {VENUE_CONFIG.fullAddress}
                    </p>
                    <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#eee7dc] space-y-1">
                      <p className="font-semibold text-[#141b25]">Verified Google Maps Pin:</p>
                      <a
                        href={VENUE_CONFIG.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9e6f2c] font-medium hover:underline inline-flex items-center gap-1 break-all"
                      >
                        <span>{VENUE_CONFIG.mapsUrl}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f4eee6] pt-4 space-y-3.5 text-xs text-[#52525b]">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141b25]">Guest Parking on Premises</p>
                    <p>Driveway and designated parking area for attendee vehicles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141b25]">Hall Inspection Visits</p>
                    <p>{VENUE_CONFIG.visitingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141b25]">Reception &amp; Enquiries</p>
                    <p className="font-mono text-[#141b25] mt-0.5">
                      <a href={`tel:${VENUE_CONFIG.phone1}`} className="hover:text-[#9e6f2c]">{VENUE_CONFIG.phone1Display}</a>
                      <span className="mx-1.5 text-zinc-300">|</span>
                      <a href={`tel:${VENUE_CONFIG.phone2}`} className="hover:text-[#9e6f2c]">{VENUE_CONFIG.phone2Display}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141b25]">Email Inquiries &amp; Proposals</p>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      <a href="mailto:sriyasribalaji@gmail.com" className="font-mono text-[#141b25] hover:text-[#9e6f2c] block">
                        sriyasribalaji@gmail.com
                      </a>
                      <a href="mailto:ayyangarbalaji0@gmail.com" className="font-mono text-[#141b25] hover:text-[#9e6f2c] block">
                        ayyangarbalaji0@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action Button */}
            <div className="pt-4 border-t border-[#f4eee6] space-y-2.5">
              <a
                id="location-get-directions-btn"
                href={VENUE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#141b25] hover:bg-[#273549] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#dec9ab]" />
                <span>Open in Google Maps / Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent('Hello JN Function Hall, please share venue location details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#128c7e] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#25d366]/30 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Line 1</span>
                </a>
                <a
                  href={`https://wa.me/${VENUE_CONFIG.whatsapp2}?text=${encodeURIComponent('Hello JN Function Hall, please share venue location details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#128c7e] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#25d366]/30 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Line 2</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Location Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#e8dfd1] shadow-xs relative min-h-[380px] bg-gradient-to-br from-[#f8f4ed] via-[#f2ece1] to-[#e8dfd1] flex flex-col justify-between">
            
            {/* Architectural Grid & Map Graphic Motif */}
            <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#141b25_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center justify-center text-center my-auto space-y-4">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white border border-[#dec9ab] shadow-md flex items-center justify-center text-[#9e6f2c] group-hover:scale-105 transition-transform">
                  <MapPin className="w-10 h-10 text-[#c53030] animate-bounce" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/15 rounded-full blur-[2px]" />
              </div>

              <div className="space-y-2 max-w-md">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9e6f2c] bg-white px-3.5 py-1 rounded-full border border-[#dec9ab] shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
                  Verified Venue Location
                </span>

                <h4 className="font-serif text-2xl font-bold text-[#141b25]">
                  JN Function Hall — Jaya Narayana
                </h4>

                <p className="text-xs text-[#52525b] leading-relaxed">
                  Click the button below to launch navigation on Google Maps, view live traffic, estimate driving time, and pinpoint the exact entrance.
                </p>
              </div>

              <div className="pt-2">
                <a
                  id="maps-direct-open-btn"
                  href={VENUE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141b25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#273549] shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#dec9ab]" />
                  <span>Navigate via Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Bottom Overlay Info Strip */}
            <div className="relative z-10 p-3.5 bg-white/90 backdrop-blur-sm border-t border-[#e8dfd1] text-[11px] text-[#6b7280] flex flex-col sm:flex-row items-center justify-between px-6 gap-2">
              <span className="font-semibold text-[#141b25]">Map Link: https://maps.app.goo.gl/uDvEuqTci5SxL4wR9</span>
              <span className="text-[#9e6f2c] font-medium">GPS Directions Enabled</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
