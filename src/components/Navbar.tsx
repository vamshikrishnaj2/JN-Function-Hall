import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { JNLogo } from './JNLogo';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenSisterModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSisterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryPhoneTel = `tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`;
  const whatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
    'Hello JN Function Hall, I would like to enquire about venue availability and pricing.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Capacity', href: '#capacity' },
    { label: 'Events', href: '#events' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Catering', href: '#catering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-xs border-b border-[#e8dfd1] py-3'
          : 'bg-[#faf9f6]/90 backdrop-blur-sm border-b border-[#e8dfd1]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Official JN Function Hall Logo */}
          <a
            id="nav-brand-logo-link"
            href="#home"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9e6f2c] rounded-md transition-opacity hover:opacity-90"
            aria-label="JN Function Hall - Jaya Narayana Home"
          >
            <JNLogo variant="horizontal" size="md" theme="dark" />
          </a>

          {/* Center / Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#4b5563] hover:text-[#141b25] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#9e6f2c] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Subtle Cross-Link & Direct CALL NOW CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Subtle Cross-link to separate Balaji Caterers business */}
            <button
              id="nav-subtle-balaji-link"
              onClick={() => {
                if (onOpenSisterModal) {
                  onOpenSisterModal();
                } else if (VENUE_CONFIG.balajiCateringUrl) {
                  window.open(VENUE_CONFIG.balajiCateringUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              className="text-xs text-[#6b7280] hover:text-[#9e6f2c] transition-colors flex items-center gap-1 font-medium px-2.5 py-1.5 rounded-md hover:bg-[#f3ede3] cursor-pointer"
              title="Separate catering business: Sree Balaji Caterers"
            >
              <span>Balaji Caterers</span>
              <ArrowRight className="w-3 h-3 text-[#9e6f2c]" />
            </button>

            {/* Primary Action: CALL NOW */}
            <a
              id="nav-call-now-btn"
              href={primaryPhoneTel}
              className="px-4 py-2.5 rounded-lg bg-[#141b25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#273549] transition-colors shadow-xs active:translate-y-px inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec9ab]" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Actions: Call Button & Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              id="nav-mobile-call-btn"
              href={primaryPhoneTel}
              className="sm:hidden px-3.5 py-2 rounded-lg bg-[#141b25] text-white text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#dec9ab]" />
              <span>CALL</span>
            </a>
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#141b25] hover:bg-[#f2ece2] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-dropdown" className="xl:hidden bg-[#faf9f6] border-b border-[#e8dfd1] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#4b5563] hover:text-[#141b25] px-3 py-2 rounded-md hover:bg-[#f3ede3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 px-3 border-t border-[#ebdcc4] flex flex-col gap-2">
            <a
              id="mobile-menu-call-btn"
              href={primaryPhoneTel}
              className="w-full py-3 rounded-lg bg-[#141b25] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#dec9ab]" />
              <span>CALL NOW ({VENUE_CONFIG.phone1Display})</span>
            </a>

            <a
              id="mobile-menu-whatsapp-btn"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-[#22c55e] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WHATSAPP NOW</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
