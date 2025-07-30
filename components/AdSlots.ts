// Konfiguracja slotów reklamowych
// WAŻNE: Zastąp placeholder sloty rzeczywistymi ID z Google AdSense Console
// 1. Przejdź do Google AdSense Console
// 2. Wybierz "Reklamy" → "Według jednostek"
// 3. Utwórz nowe jednostki reklamowe dla każdej pozycji
// 4. Skopiuj ID jednostek i zastąp poniższe wartości

export const AD_SLOTS = {
  // Reklamy na dużych ekranach (desktop)
  // TODO: Zastąp rzeczywistymi ID z Google AdSense
  TOP_BANNER: "5074075073",        // Format: Poziomy banner - ZAKTUALIZOWANE
  QR_BELOW: "3123247896",          // Format: Prostokąt - ZAKTUALIZOWANE
  SIDEBAR_1: "8076191678",         // Format: Pionowa reklama - ZAKTUALIZOWANE
  SIDEBAR_2: "4958525007",         // Format: Pionowa reklama - ZAKTUALIZOWANE
  SIDEBAR_3: "3645443335",         // Format: Pionowa reklama - ZAKTUALIZOWANE
  BOTTOM_BANNER: "6763110008",     // Format: Poziomy banner - ZAKTUALIZOWANE
  
  // Reklamy na urządzeniach mobilnych
  // TODO: Zastąp rzeczywistymi ID z Google AdSense
  MOBILE_QR_BELOW: "8821748391",   // Format: Banner - ZAKTUALIZOWANE
  MOBILE_MIDDLE: "1019279994",     // Format: Banner - ZAKTUALIZOWANE
  MOBILE_BEFORE_DOWNLOAD: "2935212490" // Format: Banner - ZAKTUALIZOWANE
};

// Formaty reklam
export const AD_FORMATS = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical", 
  RECTANGLE: "rectangle",
  BANNER: "banner",
  AUTO: "auto"
} as const;

// Typy reklam dla różnych pozycji
export const AD_POSITIONS = {
  TOP: {
    slot: AD_SLOTS.TOP_BANNER,
    format: AD_FORMATS.HORIZONTAL,
    className: "w-full my-4"
  },
  QR_BELOW_DESKTOP: {
    slot: AD_SLOTS.QR_BELOW,
    format: AD_FORMATS.RECTANGLE,
    className: "w-full my-4"
  },
  QR_BELOW_MOBILE: {
    slot: AD_SLOTS.MOBILE_QR_BELOW,
    format: AD_FORMATS.BANNER,
    className: "w-full my-4"
  },
  SIDEBAR_1: {
    slot: AD_SLOTS.SIDEBAR_1,
    format: AD_FORMATS.VERTICAL,
    className: "w-full h-[600px] flex items-center justify-center"
  },
  SIDEBAR_2: {
    slot: AD_SLOTS.SIDEBAR_2,
    format: AD_FORMATS.VERTICAL,
    className: "w-full h-[600px] flex items-center justify-center"
  },
  SIDEBAR_3: {
    slot: AD_SLOTS.SIDEBAR_3,
    format: AD_FORMATS.VERTICAL,
    className: "w-full h-[600px] flex items-center justify-center"
  },
  BOTTOM: {
    slot: AD_SLOTS.BOTTOM_BANNER,
    format: AD_FORMATS.HORIZONTAL,
    className: "w-full my-4"
  },
  MOBILE_MIDDLE: {
    slot: AD_SLOTS.MOBILE_MIDDLE,
    format: AD_FORMATS.BANNER,
    className: "w-full my-4"
  },
  MOBILE_BEFORE_DOWNLOAD: {
    slot: AD_SLOTS.MOBILE_BEFORE_DOWNLOAD,
    format: AD_FORMATS.BANNER,
    className: "w-full my-4"
  }
}; 