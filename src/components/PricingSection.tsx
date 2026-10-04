import React from 'react';
import { Phone, Check, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES, getCalculatedPricing, VENUE_CONFIG, PricingPackageConfig } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const PricingSection: React.FC = () => {
  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;

  return (
    <section id="pricing" className="py-20 bg-[#faf9f6] border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#9e6f2c]" />
            <span>Venue Pricing &amp; Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Transparent Venue Pricing
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Verified transparent hall rental rate and catering options for weddings, receptions, and family ceremonies at JN Function Hall.
          </p>
        </div>

        {/* Primary Verified Hall Rental Banner Card */}
        <div id="hall-rental-banner-card" className="mb-14 rounded-3xl bg-gradient-to-br from-[#141b25] via-[#1a2330] to-[#141b25] border-2 border-[#9e6f2c] text-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
          {/* Subtle warm glow accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#9e6f2c]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#dec9ab]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9e6f2c]/20 border border-[#dec9ab]/40 text-[#dec9ab] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#dec9ab]" />
                <span>Verified Official Hall Rental</span>
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                    {VENUE_CONFIG.hallPrice}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#dec9ab] uppercase tracking-wider">
                    / 24 Hours Full Duration
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#cbd5e1] mt-2 leading-relaxed">
                  Full 24-hour venue hire accommodating <strong>250–350 guests</strong>, with dedicated on-site <strong>kitchen facility available for cooking</strong> and on-premises parking.
                </p>
              </div>

              {/* Verified Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#e2e8f0] pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>24 Hours Venue Timing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>250–350 Guest Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>Kitchen Available for Cooking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>On-Premises Vehicle Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>Elevated Celebration Stage Dais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#dec9ab] shrink-0" />
                  <span>Separate Dining Hall &amp; Lift Facility</span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#dec9ab]">
                Direct Booking Desk
              </span>
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Confirm your auspicious date at the verified ₹30,000 rate with immediate assistance.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  id="hall-price-call-cta"
                  href={primaryPhoneTel}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#9e6f2c] hover:bg-[#855d24] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#dec9ab]" />
                  <span>Call to Book ({VENUE_CONFIG.phone1Display})</span>
                </a>

                <a
                  id="hall-price-whatsapp-cta"
                  href={`https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent('Hello JN Function Hall, I would like to book the hall for 24 hours at the verified rate of ₹30,000.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp for Date Availability</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Section Subtitle for Catering Packages */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#141b25]">
            Optional Catering Packages (Per Plate)
          </h3>
          <p className="text-xs sm:text-sm text-[#71717a]">
            Provided in partnership with sister brand <strong>Sree Balaji Caterers</strong> for pure vegetarian feasts.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg: PricingPackageConfig) => {
            const pricing = getCalculatedPricing(pkg);
            const isPopular = Boolean(pkg.popular);
            const packageWhatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
              `Hello JN Function Hall, I would like to enquire about venue availability and pricing for the ${pkg.name}.`
            )}`;

            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`relative rounded-2xl bg-white flex flex-col justify-between transition-all duration-200 border ${
                  isPopular
                    ? 'border-2 border-[#9e6f2c] shadow-lg md:-translate-y-1'
                    : 'border-[#e8dfd1] shadow-xs hover:border-[#d8c7b0] hover:shadow-md'
                }`}
              >
                {/* Popular / Feature Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#141b25] text-[#dec9ab] text-[11px] font-bold uppercase tracking-wider shadow-sm border border-[#9e6f2c]/50">
                    {pkg.badge}
                  </div>
                )}

                {/* Card Top / Header Content */}
                <div className="p-7 sm:p-8 space-y-6">
                  {/* Package Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#141b25]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#71717a] mt-1.5 leading-relaxed min-h-[38px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="py-4 px-5 rounded-xl bg-[#faf7f2] border border-[#eee5d8]">
                    {/* Optional Future Seasonal Offer Label (Only shown when discountEnabled is true) */}
                    {pricing.hasDiscount && pricing.offerLabel && (
                      <div className="mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#9e6f2c] text-white text-[11px] font-bold tracking-wide uppercase">
                          {pricing.offerLabel}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-2 flex-wrap">
                      {/* Strike-through original price (Only shown when discountEnabled is true) */}
                      {pricing.hasDiscount && (
                        <span className="line-through text-lg font-semibold text-[#a1a1aa]">
                          ₹{pricing.basePrice}
                        </span>
                      )}

                      {/* Prominent Selling / Base Price */}
                      <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#141b25] tracking-tight">
                        ₹{pricing.sellingPrice}
                      </span>

                      {/* Unit */}
                      <span className="text-sm font-semibold text-[#71717a]">
                        / {pkg.unit}
                      </span>

                      {/* Future Discount percentage badge (Only shown when discountEnabled is true) */}
                      {pricing.hasDiscount && pricing.discountBadgeText && (
                        <span className="ml-auto px-2 py-0.5 rounded-md bg-[#ecfdf5] text-[#059669] text-xs font-bold border border-[#a7f3d0]">
                          {pricing.discountBadgeText}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-[#8c7b69] font-medium mt-1.5">
                      {pricing.hasDiscount ? 'Seasonal discounted rate' : 'Current standard rate'}
                    </div>
                  </div>

                  {/* Package Inclusions / Features */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#71717a]">
                      Package Inclusions:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3f3f46]">
                          <div className="w-4 h-4 rounded-full bg-[#f4ebe0] text-[#9e6f2c] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / CTAs */}
                <div className="p-7 sm:p-8 pt-0 mt-auto space-y-2.5">
                  {/* Primary CTA: Call Now */}
                  <a
                    id={`pricing-call-btn-${pkg.id}`}
                    href={primaryPhoneTel}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                      isPopular
                        ? 'bg-[#141b25] hover:bg-[#273549] text-white'
                        : 'bg-[#141b25] hover:bg-[#273549] text-white'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#dec9ab]" />
                    <span>Call Now ({VENUE_CONFIG.phone1Display})</span>
                  </a>

                  {/* Secondary CTA: WhatsApp Now */}
                  <a
                    id={`pricing-whatsapp-btn-${pkg.id}`}
                    href={packageWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note & Direct Contact Support */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-white border border-[#e8dfd1] p-6 text-center space-y-2.5 shadow-xs">
          <h4 className="font-serif font-bold text-[#141b25] text-base">
            Custom Requirements or Specific Guest Counts?
          </h4>
          <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
            Pricing varies by custom menu selections, stage specifications, and event schedules.
            Contact management directly at{' '}
            <a href={`tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`} className="font-bold text-[#141b25] hover:underline">
              {VENUE_CONFIG.phone1Display}
            </a>{' '}
            or{' '}
            <a href={`tel:${VENUE_CONFIG.phone2.replace(/\s+/g, '')}`} className="font-bold text-[#141b25] hover:underline">
              {VENUE_CONFIG.phone2Display}
            </a>{' '}
            for personalized assistance.
          </p>
        </div>

      </div>
    </section>
  );
};
