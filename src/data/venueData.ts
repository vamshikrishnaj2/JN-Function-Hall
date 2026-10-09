/**
 * Venue Configuration & Data for:
 * JN FUNCTION HALL
 * Jaya Narayana
 *
 * NOTE ON DATA INTEGRITY:
 * In accordance with strict guidelines, no unverified claims, fake capacities,
 * or simulated awards are invented. Values without confirmed data use clearly
 * identifiable placeholders and environment variables so they can be easily
 * populated or updated.
 */

export interface CapacityItem {
  id: string;
  title: string;
  value: string;
  subtext: string;
  isPlaceholder: boolean;
}

export interface FacilityItem {
  id: string;
  name: string;
  category: string;
  description: string;
  isConfirmed: boolean;
  statusBadge: string;
}

export interface EventCategoryItem {
  id: string;
  name: string;
  description: string;
  suitableFor: string[];
}

export interface GalleryPlaceholderItem {
  id: string;
  category: 'Exterior' | 'Main Hall' | 'Stage' | 'Dining Area' | 'Parking' | 'Event setup';
  title: string;
  description: string;
  recommendedResolution: string;
  imageSrc?: string; // Optional: When real photography is provided
  isPlaceholder: boolean;
}

// Configurable business information with environment variable overrides
export const VENUE_CONFIG = {
  name: 'JN FUNCTION HALL',
  entity: 'Jaya Narayana',
  headline: "Celebrate Life's Special Moments",
  subheadline: 'JN Function Hall â€” Jaya Narayana',
  
  // Verified Venue Core Details
  hallPrice: 'â‚¹30,000',
  hallPriceNumeric: 30000,
  timing: '24 Hours',
  capacity: '250â€“350 guests',
  guestCapacityDisplay: '250â€“350',
  parking: 'Available',
  kitchen: 'Available for cooking if required',

  // Contact details - Verified Phone Numbers & WhatsApp
  phone1: '+918125988666',
  phone1Display: '+91 81259 88666',
  phone2: '+919247420653',
  phone2Display: '+91 92474 20653',
  phones: [
    { number: '+918125988666', display: '+91 81259 88666', label: 'Primary Contact' },
    { number: '+919247420653', display: '+91 92474 20653', label: 'Secondary Contact' },
  ],
  phone: '+918125988666',
  phoneDisplay: '+91 81259 88666 / +91 92474 20653',
  isPhoneConfigured: true,
  
  whatsapp1: '918125988666',
  whatsapp1Display: '+91 81259 88666',
  whatsapp2: '919247420653',
  whatsapp2Display: '+91 92474 20653',
  whatsapps: [
    { number: '918125988666', display: '+91 81259 88666', label: 'WhatsApp Desk 1' },
    { number: '919247420653', display: '+91 92474 20653', label: 'WhatsApp Desk 2' },
  ],
  whatsapp: '918125988666',
  whatsappDisplay: '+91 81259 88666 / +91 92474 20653',
  isWhatsappConfigured: true,

  email: 'sriyasribalaji@gmail.com',
  email1: 'sriyasribalaji@gmail.com',
  email2: 'ayyangarbalaji0@gmail.com',
  emails: ['sriyasribalaji@gmail.com', 'ayyangarbalaji0@gmail.com'],
  isEmailConfigured: true,

  // ==========================================
  // Venue Video Walkthrough Configuration
  // ------------------------------------------
  // The authentic JN Function Hall walkthrough video is configured here.
  // ==========================================
  videoUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_VENUE_VIDEO_URL) || '/jn-function-hall-tour.mp4',
  videoPoster: '/jn-video-poster.jpg',

  // Location details - Verified Google Maps Link & Coordinates
  address: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_VENUE_ADDRESS) || 'JN Function Hall, Kuntloor',
  fullAddress: 'JN Function Hall, Kuntloor, Abdullapurmet Mandal, Ranga Reddy District, Telangana 501505',
  locality: 'Kuntloor, Abdullapurmet / Hayathnagar',
  district: 'Ranga Reddy District',
  city: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_VENUE_CITY) || 'Hyderabad, Telangana',
  state: 'Telangana',
  postalCode: '501505',
  country: 'India',
  geo: {
    latitude: 17.3456898,
    longitude: 78.6353014,
  },
  isAddressConfigured: true,
  mapsUrl: 'https://maps.app.goo.gl/uDvEuqTci5SxL4wR9',
  mapsEmbedUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_VENUE_MAPS_EMBED_URL) || '',

  // Cross-link to separate catering business (strictly secondary cross-link)
  balajiCateringUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BALAJI_CATERING_URL) || 'https://sri-balaji-caterers.vercel.app',
  
  // Sree Balaji Caterers - Verified Social & Contact Config
  balajiCatering: {
    name: 'Sree Balaji Caterers',
    brandName: 'Balaji Catering',
    email: 'sriyasribalaji@gmail.com',
    email1: 'sriyasribalaji@gmail.com',
    email2: 'ayyangarbalaji0@gmail.com',
    emails: ['sriyasribalaji@gmail.com', 'ayyangarbalaji0@gmail.com'],
    phone1: '+918125988666',
    phone1Display: '+91 81259 88666',
    phone2: '+919247420653',
    phone2Display: '+91 92474 20653',
    whatsapp1: '918125988666',
    whatsapp1Display: '+91 81259 88666',
    whatsapp2: '919247420653',
    whatsapp2Display: '+91 92474 20653',
    instagramUrl: 'https://www.instagram.com/sreebalajicaterers.62?stkn=c2drdGpoeXFyY2Zq',
    instagramHandle: '@sreebalajicaterers.62',
    facebookUrl: 'https://www.facebook.com/share/1JuwDrBEhM/',
    facebookName: 'Sree Balaji Caterers',
    youtubeUrl: 'https://youtube.com/@sreebalajicaterers?si=E_rdU48VbOlrHF0h',
    youtubeHandle: '@sreebalajicaterers',
  },
  
  visitingHours: 'Visiting & Inspection: Standard morning to evening hours (Confirm by phone prior to visit)',
};

/**
 * Verified Facilities
 * Strictly includes confirmed facilities as instructed:
 * - Function Hall
 * - Parking
 * - Dining Area
 * Plus a clearly marked placeholder slot for additional verified facilities.
 */
export const VERIFIED_FACILITIES: FacilityItem[] = [
  {
    id: 'function-hall',
    name: 'Function Hall',
    category: 'Core Venue',
    description: 'A spacious indoor event space designed for stage events, ceremonies, guest gatherings, and family celebrations with clear sightlines.',
    isConfirmed: true,
    statusBadge: 'Confirmed Facility',
  },
  {
    id: 'parking',
    name: 'Parking',
    category: 'Guest Convenience',
    description: 'Designated vehicle parking area providing convenient vehicular access and drop-off space for guests and host families.',
    isConfirmed: true,
    statusBadge: 'Confirmed Facility',
  },
  {
    id: 'kitchen-facility',
    name: 'Kitchen Facility',
    category: 'Catering Infrastructure',
    description: 'Dedicated on-site kitchen facility available for cooking and food preparations if required.',
    isConfirmed: true,
    statusBadge: 'Confirmed Facility',
  },
  {
    id: 'dining-area',
    name: 'Dining Area & Catering Support',
    category: 'Banquet Space',
    description: 'Separate, dedicated dining hall allowing simultaneous meal service and food arrangements with catering services support.',
    isConfirmed: true,
    statusBadge: 'Confirmed Facility',
  },
  {
    id: 'lift-facility',
    name: 'Lift Facility',
    category: 'Accessibility & Guest Comfort',
    description: 'Elevator/lift access providing effortless transit across venue levels for elderly guests and families.',
    isConfirmed: true,
    statusBadge: 'Confirmed in Tour',
  },
  {
    id: 'dressing-rooms',
    name: 'Bride & Groom Dressing Rooms',
    category: 'Ceremonial Convenience',
    description: 'Dedicated private rooms for the bride, groom, and family preparations during the event.',
    isConfirmed: true,
    statusBadge: 'Confirmed in Tour',
  },
];

/**
 * Verified Venue Highlight Cards
 * The 5 core verified venue facts requested by management
 */
export interface VenueDetailHighlight {
  id: string;
  label: string;
  value: string;
  subtext: string;
  tag: string;
}

export const VENUE_HIGHLIGHT_CARDS: VenueDetailHighlight[] = [
  {
    id: 'hall-price',
    value: 'â‚¹30,000',
    label: 'Hall Price',
    subtext: 'Transparent hall rental rate for full 24-hour venue hire.',
    tag: 'Venue Rental',
  },
  {
    id: 'venue-timing',
    value: '24 Hours',
    label: 'Venue Timing',
    subtext: 'Complete 24-hour day & night booking availability for events.',
    tag: 'Availability',
  },
  {
    id: 'guest-capacity',
    value: '250â€“350',
    label: 'Guest Capacity',
    subtext: 'Comfortable seating & floating guest accommodations in main hall.',
    tag: 'Accommodations',
  },
  {
    id: 'parking-facility',
    value: 'Available',
    label: 'Parking',
    subtext: 'Dedicated on-premises vehicle parking for 4-wheelers & 2-wheelers.',
    tag: 'Convenience',
  },
  {
    id: 'kitchen-facility',
    value: 'Available',
    label: 'Kitchen',
    subtext: 'Dedicated on-site kitchen facility available for cooking if required.',
    tag: 'Food Preparation',
  },
];

/**
 * Capacity Section Data - Verified Venue Details
 */
export const CAPACITY_DATA: CapacityItem[] = [
  {
    id: 'hall-capacity',
    title: 'Guest Capacity',
    value: '250â€“350 Guests',
    subtext: 'Main function hall seating and floating guest capacity for weddings, receptions, and gatherings.',
    isPlaceholder: false,
  },
  {
    id: 'timing-capacity',
    title: 'Venue Timing',
    value: '24 Hours',
    subtext: '24-hour venue booking duration allowing comprehensive event setup, ceremonies, and celebrations.',
    isPlaceholder: false,
  },
  {
    id: 'parking-capacity',
    title: 'Parking Facility',
    value: 'Available on Premises',
    subtext: 'Designated vehicle parking area providing convenient access for cars and two-wheelers.',
    isPlaceholder: false,
  },
  {
    id: 'kitchen-capacity',
    title: 'Kitchen Facility',
    value: 'Available for Cooking',
    subtext: 'Kitchen facility is available on-site for food preparation and cooking if required.',
    isPlaceholder: false,
  },
];

/**
 * Verified Venue Restrictions / Conditions
 * Strictly based on the verified venue guidelines:
 * - Alcohol: NOT allowed
 * - Non-Vegetarian Food: NOT allowed
 * - DJ: NOT allowed
 * - Playing Cards / Gambling: NOT allowed
 * - Band / Live Band: NOT allowed
 * - Crackers / Fireworks: NOT allowed
 */
export interface VenueRestrictionItem {
  id: string;
  title: string;
  status: 'Not Allowed';
  description: string;
}

export const VENUE_RESTRICTIONS: VenueRestrictionItem[] = [
  {
    id: 'alcohol',
    title: 'Alcohol',
    status: 'Not Allowed',
    description: 'Alcohol is strictly not allowed on the venue premises.',
  },
  {
    id: 'non-veg',
    title: 'Non-Vegetarian Food',
    status: 'Not Allowed',
    description: 'Non-vegetarian food is strictly not allowed. Pure vegetarian venue only.',
  },
  {
    id: 'dj',
    title: 'DJ',
    status: 'Not Allowed',
    description: 'DJ sound systems and loud DJ setups are strictly not allowed.',
  },
  {
    id: 'playing-cards',
    title: 'Playing Cards',
    status: 'Not Allowed',
    description: 'Playing cards and gambling activities are strictly not allowed.',
  },
  {
    id: 'band',
    title: 'Band',
    status: 'Not Allowed',
    description: 'Live loud musical bands or brass bands are strictly not allowed.',
  },
  {
    id: 'crackers',
    title: 'Crackers',
    status: 'Not Allowed',
    description: 'Crackers and fireworks are strictly not allowed on the premises.',
  },
];

/**
 * Event Categories
 * These represent suitable categories of celebrations, not retrospective claims of past events.
 */
export const EVENT_CATEGORIES: EventCategoryItem[] = [
  {
    id: 'weddings',
    name: 'Weddings',
    description: 'Spacious hall setting suitable for stage mandaps, traditional rituals, and welcoming extended family members.',
    suitableFor: ['Muhurtham Ceremonies', 'Wedding Rituals', 'Stage Felicitations'],
  },
  {
    id: 'receptions',
    name: 'Receptions',
    description: 'Grand evening celebratory setting accommodating stage decor backdrops, photography sessions, and celebratory dining.',
    suitableFor: ['Evening Receptions', 'Sangeet & Musical Evenings', 'Formal Felicitations'],
  },
  {
    id: 'engagements',
    name: 'Engagements',
    description: 'Warm and dignified space for ring ceremonies and intimate gatherings uniting two families.',
    suitableFor: ['Ring Exchanges', 'Family Introductions', 'Pre-wedding Blessings'],
  },
  {
    id: 'birthday-celebrations',
    name: 'Birthday Celebrations',
    description: 'Versatile floor layout for milestone ages, first birthdays, custom themed backdrops, and family celebrations.',
    suitableFor: ['1st Birthdays', 'Milestone Jubilees', 'Theme Celebrations'],
  },
  {
    id: 'family-functions',
    name: 'Family Functions',
    description: 'Comfortable community setting for naming ceremonies, dhoti ceremonies, half-saree functions, and family reunions.',
    suitableFor: ['Cradle Ceremonies', 'Half-Saree / Dhoti Functions', 'Family Get-Togethers'],
  },
  {
    id: 'traditional-ceremonies',
    name: 'Traditional Ceremonies',
    description: 'A serene and respectful atmosphere for religious poojas, community gatherings, and spiritual observances.',
    suitableFor: ['Poojas & Homas', 'Spiritual Gatherings', 'Community Celebrations'],
  },
  {
    id: 'corporate-social',
    name: 'Corporate / Social Events',
    description: 'Organized hall environment for annual meetings, felicitation programs, seminars, and social assemblies.',
    suitableFor: ['Company Annual Meets', 'Award Functions', 'Community Assemblies'],
  },
];

/**
 * Gallery Items
 * As instructed:
 * "Until real photographs are provided, use clearly marked image placeholders.
 * Do not generate fake photographs and present them as photographs of the real JN Function Hall."
 * Categories included:
 * - Exterior
 * - Main Hall
 * - Stage
 * - Dining Area
 * - Parking
 * - Event setup
 */
export const GALLERY_ITEMS: GalleryPlaceholderItem[] = [
  {
    id: 'gal-main-hall',
    category: 'Main Hall',
    title: 'Main Celebration Hall & Stage View',
    description: 'Spacious high-ceiling auditorium interior showcasing the grand central stage and celebration seating.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
  {
    id: 'gal-stage',
    category: 'Stage',
    title: 'Elevated Celebration Stage & Decor Area',
    description: 'Grand celebration dais equipped for wedding mandaps, reception backdrops, and floral decorations.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
  {
    id: 'gal-seating',
    category: 'Main Hall',
    title: 'Hall Seating & Guest Perspective',
    description: 'Neatly organized banquet chair rows with spacious central aisle leading directly to the dais.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
  {
    id: 'gal-event-setup',
    category: 'Event setup',
    title: 'Warm Ambient Lighting & Stage Perspective',
    description: 'Overhead illumination and festive spotlights creating an elegant celebratory ambiance.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
  {
    id: 'gal-entrance',
    category: 'Exterior',
    title: 'Foyer & Hall Entrance Pathway',
    description: 'Welcoming entrance foyer leading guests seamlessly into the main auditorium.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
  {
    id: 'gal-dining',
    category: 'Dining Area',
    title: 'Spacious Dining Hall & Catering Section',
    description: 'Independent dining hall with hygienic flooring, ceiling fans, and dedicated catering services for wedding feasts and receptions.',
    recommendedResolution: '1080 Ã— 1920 px (Vertical)',
    isPlaceholder: true,
  },
  {
    id: 'gal-hall-lift',
    category: 'Main Hall',
    title: 'Celebration Hall & Lift Facility',
    description: 'Main function hall featuring ornamental chandeliers, cushioned steel benches, and direct lift facility access.',
    recommendedResolution: '1080 Ã— 1920 px (Vertical)',
    isPlaceholder: true,
  },
  {
    id: 'gal-bride-room',
    category: 'Event setup',
    title: 'Dedicated Bride & Groom Dressing Rooms',
    description: 'Private changing and preparation rooms equipped with seating, windows, and dedicated amenities for the wedding party.',
    recommendedResolution: '1080 Ã— 1920 px (Vertical)',
    isPlaceholder: true,
  },
  {
    id: 'gal-parking',
    category: 'Parking',
    title: 'Guest Parking Area',
    description: 'Designated parking bays and vehicle movement driveway on premises.',
    recommendedResolution: '1920 Ã— 1080 px (16:9 Landscape)',
    isPlaceholder: true,
  },
];

/**
 * ============================================================================
 * PRICING & PACKAGES CONFIGURATION
 * ============================================================================
 * Centralized, easy-to-customize pricing configuration for JN Function Hall.
 * Current state: Normal / base pricing (discountEnabled: false).
 * When seasonal discounts are needed in the future, set discountEnabled: true,
 * configure discountType ('percentage' | 'fixed'), discountValue, and optional offerLabel.
 */

export interface PricingPackageConfig {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  basePrice: number;
  discountEnabled: boolean;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  offerLabel: string;
  unit: string;
  popular?: boolean;
  features: string[];
}

export interface CalculatedPackagePricing {
  basePrice: number;
  sellingPrice: number;
  hasDiscount: boolean;
  discountBadgeText: string;
  offerLabel: string;
}

/**
 * Normal base package pricing: â‚¹425, â‚¹550, â‚¹650.
 * discountEnabled is currently false across all packages.
 */
export const PRICING_PACKAGES: PricingPackageConfig[] = [
  {
    id: 'silver-package',
    name: 'Silver Package',
    subtitle: 'Ideal for intimate ceremonies, naming events & family gatherings',
    basePrice: 425,
    discountEnabled: false,
    discountType: 'percentage',
    discountValue: 0,
    offerLabel: '',
    unit: 'per plate',
    popular: false,
    features: [
      'Main Function Hall access with guest seating arrangement',
      'Separate, dedicated dining hall for meal service',
      'Designated vehicle parking area on premises',
      'Standard ceremonial stage setup & hall illumination',
      'Dedicated venue cleaning & housekeeping staff'
    ]
  },
  {
    id: 'gold-package',
    name: 'Gold Package',
    subtitle: 'Most preferred for engagement ceremonies, receptions & weddings',
    badge: 'Most Popular',
    basePrice: 550,
    discountEnabled: false,
    discountType: 'percentage',
    discountValue: 0,
    offerLabel: '',
    unit: 'per plate',
    popular: true,
    features: [
      'Main Function Hall & elevated ceremonial stage access',
      'Separate, dedicated dining hall with buffet service setup',
      'Designated vehicle parking with entry assistance',
      'Enhanced stage illumination & warm ambient hall lighting',
      'Private air-conditioned dressing room for host family',
      'Dedicated on-site housekeeping team throughout the event'
    ]
  },
  {
    id: 'platinum-package',
    name: 'Platinum Package',
    subtitle: 'Comprehensive package for grand weddings & large celebrations',
    basePrice: 650,
    discountEnabled: false,
    discountType: 'percentage',
    discountValue: 0,
    offerLabel: '',
    unit: 'per plate',
    popular: false,
    features: [
      'Complete venue access (Auditorium, Grand Stage & Dining Area)',
      'Independent dining section with space for live counters & buffet',
      'Designated vehicle parking with prioritized guest coordination',
      'Full stage & auditorium lighting with ambient spotlights',
      'Two private dressing / green rooms for bride & groom',
      'Priority event coordination & full-day support team'
    ]
  }
];

/**
 * Computes the active selling price, base price, and discount metadata.
 * When discountEnabled is false: returns normal base price only.
 * When discountEnabled is true: automatically calculates strike-through and discounted price.
 */
export function getCalculatedPricing(pkg: PricingPackageConfig): CalculatedPackagePricing {
  const basePrice = pkg.basePrice;

  if (!pkg.discountEnabled || pkg.discountValue <= 0) {
    return {
      basePrice,
      sellingPrice: basePrice,
      hasDiscount: false,
      discountBadgeText: '',
      offerLabel: ''
    };
  }

  let sellingPrice = basePrice;
  let discountBadgeText = '';

  if (pkg.discountType === 'percentage') {
    const discountAmount = Math.round((basePrice * pkg.discountValue) / 100);
    sellingPrice = Math.max(0, basePrice - discountAmount);
    discountBadgeText = `${pkg.discountValue}% OFF`;
  } else if (pkg.discountType === 'fixed') {
    sellingPrice = Math.max(0, basePrice - pkg.discountValue);
    discountBadgeText = `â‚¹${pkg.discountValue} OFF`;
  }

  return {
    basePrice,
    sellingPrice,
    hasDiscount: true,
    discountBadgeText,
    offerLabel: pkg.offerLabel || 'Special Offer'
  };
}

