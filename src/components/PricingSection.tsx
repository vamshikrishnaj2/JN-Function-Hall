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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe0] text-[#7e5522] text-xs font-semibold tracking-wider uppercase border border-[#dec9ab]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#9e6f2c]" />
            <span>Venue &amp; Event Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Transparent Package Pricing
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Standard package options tailored for weddings, receptions, and family ceremonies at JN Function Hall.
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
