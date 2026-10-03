import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Info, X, ZoomIn, Check, Video } from 'lucide-react';
import { GALLERY_ITEMS, GalleryPlaceholderItem } from '../data/venueData';
import { VenueVideoTour } from './VenueVideoTour';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryPlaceholderItem | null>(null);

  const categories = ['All', 'Exterior', 'Main Hall', 'Stage', 'Dining Area', 'Parking', 'Event setup'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-[#eee7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-widest text-[#9e6f2c] uppercase bg-[#f4ebe0] px-3 py-1 rounded-full border border-[#dec9ab]/60">
            Venue Visuals &amp; Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141b25] tracking-tight">
            Video Tour &amp; Photo Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Explore the spatial layout of JN Function Hall across key zones: the exterior facade, main auditorium, celebration stage, dining hall, and parking area.
          </p>
        </div>

        {/* 1. Official Video Tour Feature Container */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#9e6f2c]" />
              <h3 className="font-serif text-lg font-bold text-[#141b25]">
                Official Venue Video Walkthrough
              </h3>
            </div>
            <span className="text-xs text-[#71717a] font-medium hidden sm:inline-block">
              Vertical Reel &bull; Sound / Mute Toggle
            </span>
          </div>
          <VenueVideoTour />
        </div>

        {/* Section Sub-heading for Photography */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 pt-4 border-t border-[#eee7dc]">
          <h3 className="font-serif text-2xl font-bold text-[#141b25]">
            Venue Photography &amp; Spaces
          </h3>
          <p className="text-xs sm:text-sm text-[#71717a]">
            Filter by key zones to examine the spatial layout of each area.
          </p>
        </div>

        {/* Notice on Real Photographs / Placeholders */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-[#faf8f5] border border-[#e8dfd1] flex items-start gap-3 text-xs text-[#6b7280]">
          <Info className="w-4 h-4 text-[#9e6f2c] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparency Notice:</strong> In accordance with our authenticity policy, no artificial or unverified photographs are presented as the real JN Function Hall. Clearly marked placeholder slots are prepared below awaiting final uploaded venue photography.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#141b25] text-white shadow-xs'
                  : 'bg-[#faf8f5] text-[#52525b] hover:bg-[#f0e8dc] border border-[#e8dfd1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-[#e8dfd1] bg-[#faf8f5] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Visual Media Frame (Real capture or placeholder) */}
              <div className="aspect-[16/10] bg-gradient-to-br from-[#f5ede2] via-[#faf7f2] to-[#ede4d7] relative flex flex-col items-center justify-center overflow-hidden border-b border-[#e8dfd1]">
                {item.imageSrc ? (
                  <>
                    <img
                      src={item.imageSrc}
                      alt={`JN Function Hall — ${item.title}`}
                      loading="lazy"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#141b25]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                        <Check className="w-3 h-3 text-[#dec9ab]" />
                        <span>Venue Capture</span>
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Architectural Blueprint Background Accent */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#141b25_1px,transparent_1px),linear-gradient(to_bottom,#141b25_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* Camera / Wireframe Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/90 border border-[#dec9ab] shadow-xs flex items-center justify-center text-[#9e6f2c] group-hover:scale-105 transition-transform mb-3">
                      <Camera className="w-7 h-7" />
                    </div>

                    {/* Placeholder Marker Tag */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#9e6f2c] bg-white px-2.5 py-1 rounded-full border border-[#dec9ab]/70 shadow-2xs">
                      <span>[Image Placeholder]</span>
                    </span>

                    <span className="text-xs text-[#71717a] mt-2 font-medium">
                      Zone: {item.category}
                    </span>
                  </>
                )}

                {/* Hover Reveal Badge */}
                <div className="absolute inset-0 bg-[#141b25]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/95 text-[#141b25] text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#9e6f2c]" />
                    <span>{item.imageSrc ? 'View High-Res Photo' : 'View Slot Details'}</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e6f2c]">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-[#8c857b]">
                    {item.recommendedResolution}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#141b25] group-hover:text-[#9e6f2c] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#52525b] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {selectedItem && (
        <div
          id="gallery-details-modal"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e8dfd1] space-y-5 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="gallery-modal-close-btn"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-[#71717a] hover:text-[#141b25] hover:bg-[#f3ece0]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e6f2c]">
                {selectedItem.imageSrc ? 'Authentic Venue Photo' : 'Gallery Placeholder'} &bull; {selectedItem.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#141b25]">
                {selectedItem.title}
              </h3>
            </div>

            {/* Frame Representation / Real Photo */}
            {selectedItem.imageSrc ? (
              <div className="rounded-xl overflow-hidden border border-[#dec9ab] shadow-sm bg-black">
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#dec9ab] bg-[#faf8f5] p-8 text-center space-y-2">
                <Camera className="w-10 h-10 text-[#9e6f2c] mx-auto opacity-80" />
                <p className="font-mono text-xs font-bold text-[#141b25]">
                  [Awaiting Verified Photograph: {selectedItem.category}]
                </p>
                <p className="text-xs text-[#71717a]">
                  Recommended Resolution: {selectedItem.recommendedResolution}
                </p>
              </div>
            )}

            <div className="space-y-2 text-xs text-[#52525b] leading-relaxed">
              <p>
                <strong>Zone Details:</strong> {selectedItem.description}
              </p>
              {selectedItem.imageSrc ? (
                <p className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Captured directly from the official JN Function Hall walkthrough video.</span>
                </p>
              ) : (
                <p className="text-[#8c857b] italic">
                  Awaiting verified photography for this section.
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                id="gallery-modal-done-btn"
                onClick={() => setSelectedItem(null)}
                className="w-full py-2.5 rounded-lg bg-[#141b25] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
