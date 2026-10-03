/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VENUE_PHONE?: string;
  readonly VITE_VENUE_PHONE_DISPLAY?: string;
  readonly VITE_VENUE_WHATSAPP?: string;
  readonly VITE_VENUE_EMAIL?: string;
  readonly VITE_VENUE_ADDRESS?: string;
  readonly VITE_VENUE_CITY?: string;
  readonly VITE_VENUE_MAPS_URL?: string;
  readonly VITE_BALAJI_CATERING_URL?: string;
  readonly VITE_JN_FUNCTION_HALL_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
