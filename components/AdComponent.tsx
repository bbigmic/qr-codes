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
      console.log(`Reklama ${position || 'custom'}: szerokość=${rect.width}px, wysokość=${rect.height}px`);
      
      if (rect.width === 0) {
        console.warn(`UWAGA: Reklama ${position || 'custom'} ma zerową szerokość!`);
        console.warn(`Klasa CSS: ${finalClassName}`);
      }
    }

    // Dodaj małe opóźnienie, aby DOM się zaktualizował
    const timer = setTimeout(() => {
      try {
        console.log(`Ładowanie reklamy: ${position || 'custom'}, slot: ${slot}, format: ${format}`);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adLoaded.current = true;
        console.log(`Reklama ${position || 'custom'} załadowana pomyślnie`);
      } catch (err) {
        console.error(`Błąd podczas ładowania reklamy ${position || 'custom'}:`, err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [position, slot, format, finalClassName]);

  return (
    <div ref={adRef} className={finalClassName}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
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