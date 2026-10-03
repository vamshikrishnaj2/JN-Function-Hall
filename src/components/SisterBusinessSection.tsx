import React from 'react';
import { ArrowRight, Utensils, Building2, ExternalLink, Sparkles, Check } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { BalajiCaterersCard } from './BalajiCaterersCard';

interface SisterBusinessSectionProps {
  onOpenSisterModal: () => void;
}

export const SisterBusinessSection: React.FC<SisterBusinessSectionProps> = ({
  onOpenSisterModal,
}) => {
  const handleBalajiClick = (e: React.MouseEvent) => {
    if (!VENUE_CONFIG.balajiCateringUrl || VENUE_CONFIG.balajiCateringUrl === '#') {
      e.preventDefault();
      onOpenSisterModal();
    }
  };

  return (
    <section id="catering" className="py-16 bg-[#f7f2ea] border-y border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Sister Banner Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#9e6f2c]" />
            <span>Sister Business Ecosystem</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141b25]">
            Looking for Catering for Your Event?
          </h2>
          <p className="text-sm text-[#52525b] leading-relaxed">
            While JN Function Hall hosts your cherished occasion, our sister brand{' '}
            <strong className="text-[#141b25]">Balaji Catering</strong> specializes in authentic food,
            traditional wedding feasts, and premium event catering.
          </p>
        </div>

        {/* Dual Brand Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: JN Function Hall */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#9e6f2c]/40 shadow-xs relative">
            <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-md bg-[#9e6f2c] text-white text-[10px] font-bold uppercase tracking-wider">
              You Are Here
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#f6efe4] text-[#9e6f2c] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#141b25]">
                  JN FUNCTION HALL
                </h3>
                <p className="text-xs text-[#7e5522] font-semibold">
                  Venue • Stage • Spaces • Celebrations
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed mb-4">
              Provides the physical hall, elevated mandap stage, seating layout, independent dining space,
              private dressing suites, and event power infrastructure.
            </p>

            <ul className="space-y-1.5 text-xs text-[#374151] pt-2 border-t border-[#f4eee6]">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e6f2c]" />
                <span>Wedding &amp; Reception Stage</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e6f2c]" />
                <span>Spacious Seating Layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e6f2c]" />
                <span>Dedicated Dining Area</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Balaji Catering */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#dec9ab] shadow-xs hover:border-[#b8863b] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#fbf3e8] text-[#b8863b] flex items-center justify-center font-bold">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#141b25]">
                      BALAJI CATERING
                    </h3>
                    <p className="text-xs text-[#b8863b] font-semibold">
                      Sister Brand • Food &amp; Catering Services
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed mb-4">
                Authentic, high-quality catering specializing in traditional wedding feasts,
                delicious vegetarian delicacies, live food counters, and royal dining service.
              </p>

              <ul className="space-y-1.5 text-xs text-[#374151] pt-2 border-t border-[#f4eee6]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a]" />
                  <span>Custom Event Menus &amp; Sweets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a]" />
                  <span>Traditional &amp; Buffet Serving</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a]" />
                  <span>Catering for JN Hall &amp; Outdoor Events</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f4eee6]">
              <a
                id="sister-section-visit-balaji-btn"
                href={VENUE_CONFIG.balajiCateringUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBalajiClick}
                className="w-full py-2.5 px-4 rounded-lg bg-[#7e5522] hover:bg-[#684417] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Visit Balaji Catering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Dedicated Balaji Caterers Quick Action & Social Hub (from official asset) */}
        <div className="mt-10 max-w-4xl mx-auto">
          <BalajiCaterersCard
            showTitle={true}
          />
        </div>

      </div>
    </section>
  );
};
