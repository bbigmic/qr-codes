# Konfiguracja Reklam CPM

## Przegląd

Strona została zoptymalizowana pod kątem monetyzacji poprzez reklamy CPM. Reklamy są strategicznie umieszczone w pustej przestrzeni pod kodem QR na większych ekranach oraz w innych odpowiednich lokalizacjach.

## Lokalizacje Reklam

### Duże ekrany (Desktop - lg:block)

1. **Górna reklama** - `TOP_BANNER`
   - Pozycja: Na górze strony
   - Format: Poziomy banner
   - Slot: `1234567890`

2. **Reklama pod kodem QR** - `QR_BELOW_DESKTOP`
   - Pozycja: Pod kodem QR w lewej kolumnie
   - Format: Prostokąt
   - Slot: `1234567891`

3. **Reklamy w sidebarze** - `SIDEBAR_1`, `SIDEBAR_2`, `SIDEBAR_3`
   - Pozycja: Prawa kolumna (sticky)
   - Format: Pionowe reklamy
   - Sloty: `1234567892`, `1234567893`, `1234567894`

4. **Dolna reklama** - `BOTTOM`
   - Pozycja: Na dole strony
   - Format: Poziomy banner
   - Slot: `1234567895`

### Urządzenia mobilne (Mobile - lg:hidden)

1. **Reklama pod kodem QR** - `QR_BELOW_MOBILE`
   - Pozycja: Pod kodem QR
   - Format: Banner
   - Slot: `1234567896`

2. **Reklama między sekcjami** - `MOBILE_MIDDLE`
   - Pozycja: Między sekcjami opcji
   - Format: Banner
   - Slot: `1234567897`

3. **Reklama przed pobieraniem** - `MOBILE_BEFORE_DOWNLOAD`
   - Pozycja: Przed przyciskiem pobierania
   - Format: Banner
   - Slot: `1234567898`

## Konfiguracja

### Pliki konfiguracyjne

- `components/AdSlots.ts` - Konfiguracja slotów i formatów reklam
- `components/AdComponent.tsx` - Komponent reklamowy
- `pages/index.tsx` - Implementacja reklam na stronie głównej

### Google AdSense

Skrypt Google AdSense jest już dodany w `pages/_document.tsx`:

```html
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9292289650801511"
  crossOrigin="anonymous"
/>
```

## Użycie

### Podstawowe użycie z pozycją

```tsx
<AdComponent position="TOP" />
```

### Użycie z niestandardowymi parametrami

```tsx
<AdComponent 
  adSlot="custom-slot-id" 
  adFormat="horizontal" 
  className="custom-class" 
/>
```

## Responsywność

- Reklamy na dużych ekranach: `hidden lg:block`
- Reklamy na urządzeniach mobilnych: `lg:hidden`
- Layout 3-kolumnowy na desktop, 1-kolumnowy na mobile

## Optymalizacja

1. **Sticky sidebar** - Reklamy w prawej kolumnie pozostają widoczne podczas scrollowania
2. **Responsive design** - Różne reklamy dla różnych rozmiarów ekranu
3. **Strategic placement** - Reklamy umieszczone w naturalnych przerwach w treści
4. **Performance** - Lazy loading reklam przez Google AdSense

## Następne kroki

1. Zastąp placeholder sloty (`1234567890`, etc.) rzeczywistymi ID slotów z Google AdSense
2. Dostosuj formaty reklam według potrzeb
3. Monitoruj wydajność reklam w Google AdSense Console
4. Testuj na różnych urządzeniach i rozmiarach ekranu

## Uwagi

- Wszystkie reklamy używają `data-full-width-responsive="true"` dla lepszej responsywności
- Reklamy są ładowane asynchronicznie przez Google AdSense
- Obsługa błędów jest zaimplementowana w komponencie AdComponent 