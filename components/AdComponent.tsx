import { useEffect, useRef } from 'react';
import { AD_POSITIONS, type AD_POSITIONS as AD_POSITIONS_TYPE } from './AdSlots';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdComponentProps {
  position?: keyof typeof AD_POSITIONS;
  adSlot?: string;
  adFormat?: string;
  className?: string;
}

export default function AdComponent({ 
  position,
  adSlot, 
  adFormat,
  className
}: AdComponentProps) {
  const adLoaded = useRef(false);
  const adRef = useRef<HTMLDivElement>(null);
  
  // Użyj konfiguracji pozycji lub bezpośrednich wartości
  const config = position ? AD_POSITIONS[position] : null;
  const slot = adSlot || config?.slot || "YOUR_AD_SLOT_ID";
  const format = adFormat || config?.format || "auto";
  const finalClassName = className || config?.className || "w-full my-4";

  useEffect(() => {
    // Sprawdź czy reklama już została załadowana
    if (adLoaded.current) {
      return;
    }

    // Sprawdź wymiary kontenera reklamy
    if (adRef.current) {
      const rect = adRef.current.getBoundingClientRect();
      const insElement = adRef.current.querySelector('ins');
      const insRect = insElement?.getBoundingClientRect();
      
      console.log(`Reklama ${position || 'custom'}: kontener=${rect.width}x${rect.height}px, ins=${insRect?.width || 0}x${insRect?.height || 0}px`);
      
      if (rect.width === 0) {
        console.warn(`UWAGA: Reklama ${position || 'custom'} ma zerową szerokość!`);
        console.warn(`Klasa CSS: ${finalClassName}`);
      }
      
      if (insRect && insRect.width === 0) {
        console.warn(`UWAGA: Element <ins> ma zerową szerokość!`);
      }
    }

    // Dodaj małe opóźnienie, aby DOM się zaktualizował
    const timer = setTimeout(() => {
      try {
        console.log(`Ładowanie reklamy: ${position || 'custom'}, slot: ${slot}, format: ${format}`);
        
        // Sprawdź czy AdSense jest załadowany
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          window.adsbygoogle.push({});
          adLoaded.current = true;
          console.log(`Reklama ${position || 'custom'} załadowana pomyślnie`);
        } else {
          console.warn(`AdSense nie jest załadowany dla reklamy ${position || 'custom'}`);
        }
      } catch (err) {
        console.error(`Błąd podczas ładowania reklamy ${position || 'custom'}:`, err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [position, slot, format, finalClassName]);

  // Określ wymiary na podstawie pozycji
  const getAdDimensions = () => {
    switch (position) {
      case 'TOP':
      case 'BOTTOM':
        return { width: '100%', height: '90px' };
      case 'QR_BELOW_DESKTOP':
        return { width: '100%', height: '250px' };
      case 'QR_BELOW_MOBILE':
      case 'MOBILE_MIDDLE':
      case 'MOBILE_BEFORE_DOWNLOAD':
        return { width: '100%', height: '100px' };
      case 'SIDEBAR_1':
      case 'SIDEBAR_2':
      case 'SIDEBAR_3':
        return { width: '100%', height: '600px' };
      default:
        return { width: '100%', height: '100px' };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div ref={adRef} className={finalClassName}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: dimensions.width,
          height: dimensions.height,
          minWidth: dimensions.width,
          minHeight: dimensions.height
        }}
        data-ad-client="ca-pub-9292289650801511"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* Placeholder dla reklam w trybie debug */}
      <div className="text-center text-gray-500 text-sm py-2">
        Reklama {position || 'custom'} - {slot}
      </div>
    </div>
  );
} 