import { useEffect } from 'react';
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
  // Użyj konfiguracji pozycji lub bezpośrednich wartości
  const config = position ? AD_POSITIONS[position] : null;
  const slot = adSlot || config?.slot || "YOUR_AD_SLOT_ID";
  const format = adFormat || config?.format || "auto";
  const finalClassName = className || config?.className || "w-full my-4";

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Błąd podczas ładowania reklamy:', err);
    }
  }, []);

  return (
    <div className={finalClassName}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9292289650801511"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
} 