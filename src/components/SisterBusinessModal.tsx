import React from 'react';
import { X, Utensils, Check } from 'lucide-react';
import { BalajiCaterersCard } from './BalajiCaterersCard';

interface SisterBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SisterBusinessModal: React.FC<SisterBusinessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="sister-business-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="sister-business-modal-content"
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e8dfd1] space-y-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="sister-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-xl text-[#6b7280] hover:text-[#141b25] hover:bg-[#f3ece0] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf3e8] text-[#9e6f2c] text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>Sister Business Relationship</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141b25]">
            Sree Balaji Caterers &bull; Balaji Catering
          </h3>
          <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
            JN Function Hall and Sree Balaji Caterers belong to the same family enterprise, providing an end-to-end event experience with flawless venue management and authentic celebratory dining feasts.
          </p>
        </div>

        {/* Breakdown Card */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#faf7f2] border border-[#f0e7db] text-xs">
          <div>
            <p className="font-bold text-[#9e6f2c] uppercase text-[10px] tracking-wider">JN FUNCTION HALL</p>
            <p className="font-bold text-[#141b25] mt-0.5">The Venue</p>
            <p className="text-[#6b7280] mt-1 text-[11px]">Auditorium, Stage, Seating &amp; Space</p>
          </div>
          <div className="border-l border-[#dec9ab] pl-3">
            <p className="font-bold text-[#7e5522] uppercase text-[10px] tracking-wider">SREE BALAJI CATERERS</p>
            <p className="font-bold text-[#141b25] mt-0.5">The Food &amp; Feast</p>
            <p className="text-[#6b7280] mt-1 text-[11px]">Vegetarian Specialties &amp; Full Service</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-[#374151]">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
            <span>Dedicated catering coordination with JN Function Hall</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
            <span>Authentic traditional South Indian &amp; North Indian wedding menus</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
            <span>Independent catering services for all other venues &amp; outdoor events</span>
          </li>
        </ul>

        {/* Embedded Dark Contact & Social Channels Card */}
        <div className="pt-2">
          <BalajiCaterersCard
            showTitle={false}
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            id="sister-modal-return-btn"
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-6 rounded-xl border border-[#d8c7b0] text-[#4b5563] hover:bg-[#faf9f6] text-xs font-semibold transition-colors cursor-pointer"
          >
            Close &amp; Return to JN Function Hall
          </button>
        </div>

      </div>
    </div>
  );
};
