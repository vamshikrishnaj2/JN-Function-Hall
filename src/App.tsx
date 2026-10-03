/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CapacitySection } from './components/CapacitySection';
import { EventsSection } from './components/EventsSection';
import { PricingSection } from './components/PricingSection';
import { SisterBusinessSection } from './components/SisterBusinessSection';
import { SisterBusinessModal } from './components/SisterBusinessModal';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isSisterModalOpen, setIsSisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#141b25] flex flex-col font-sans selection:bg-[#9e6f2c]/20 selection:text-[#7e5522]">
      {/* 1. HEADER with official logo, nav, subtle Balaji Caterers link, and CALL NOW */}
      <Navbar
        onOpenSisterModal={() => setIsSisterModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <HeroSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection />

        {/* 4. FACILITIES (Verified Facilities Grid) */}
        <FacilitiesSection />

        {/* 5. CAPACITY (Dedicated Capacity with verified information guidelines) */}
        <CapacitySection />

        {/* 6. EVENTS (Suitable event categories with direct WhatsApp & Call) */}
        <EventsSection />

        {/* 7. PRICING & PACKAGES (Transparent Base Pricing ₹425, ₹550, ₹650 with direct Call & WhatsApp) */}
        <PricingSection />

        {/* 8. SISTER BUSINESS ECOSYSTEM & CATERING HUB (Balaji Caterers) */}
        <SisterBusinessSection
          onOpenSisterModal={() => setIsSisterModalOpen(true)}
        />

        {/* 9. GALLERY (Responsive gallery with verified venue pictures) */}
        <GallerySection />

        {/* 10. LOCATION (Verified address & Google Maps navigation) */}
        <LocationSection />

        {/* 11. DIRECT CONTACT SECTION (Direct Call & Direct WhatsApp - No Forms) */}
        <ContactSection />
      </main>

      {/* 12. FOOTER with quick links, maps, and Balaji Caterers contact channels */}
      <Footer />

      {/* Sister Business Interactive Modal */}
      <SisterBusinessModal
        isOpen={isSisterModalOpen}
        onClose={() => setIsSisterModalOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar (Direct Call & WhatsApp) */}
      <MobileStickyBar />
    </div>
  );
}
