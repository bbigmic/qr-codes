import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdComponent() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Błąd podczas ładowania reklamy:', err);
    }
  }, []);

  return (
    <div className="w-full my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9292289650801511"
        data-ad-slot="YOUR_AD_SLOT_ID" // Tutaj należy wstawić ID slotu reklamowego
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
} 