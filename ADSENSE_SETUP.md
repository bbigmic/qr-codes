# 🚀 Konfiguracja Google AdSense - Krok po Kroku

## ✅ **Krok 1: Weryfikacja kodu AdSense**

Twój kod AdSense jest już poprawnie umieszczony w `pages/_document.tsx`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9292289650801511" crossOrigin="anonymous" />
```

## 🔄 **Krok 2: Wdróż stronę**

Upewnij się, że wszystkie zmiany są wdrożone na żywej stronie `kodqr.eu`.

## 🎯 **Krok 3: Weryfikacja w Google AdSense**

1. Przejdź do [Google AdSense Console](https://www.google.com/adsense)
2. Znajdź stronę weryfikacji dla `kodqr.eu`
3. Kliknij **"Zweryfikuj"** - Google sprawdzi czy kod jest poprawnie umieszczony

## 📊 **Krok 4: Utwórz jednostki reklamowe**

### **Dla reklam na dużych ekranach:**

1. **TOP_BANNER** (Poziomy banner)
   - Format: `Banner`
   - Rozmiar: `728x90` lub `Responsive`
   - Pozycja: Górna część strony

2. **QR_BELOW** (Prostokąt)
   - Format: `Rectangle`
   - Rozmiar: `300x250`
   - Pozycja: Pod kodem QR

3. **SIDEBAR_1, SIDEBAR_2, SIDEBAR_3** (Pionowe reklamy)
   - Format: `Skyscraper`
   - Rozmiar: `160x600`
   - Pozycja: Prawa kolumna (sticky)

4. **BOTTOM_BANNER** (Poziomy banner)
   - Format: `Banner`
   - Rozmiar: `728x90` lub `Responsive`
   - Pozycja: Dolna część strony

### **Dla reklam mobilnych:**

1. **MOBILE_QR_BELOW** (Banner)
   - Format: `Banner`
   - Rozmiar: `Responsive`
   - Pozycja: Pod kodem QR

2. **MOBILE_MIDDLE** (Banner)
   - Format: `Banner`
   - Rozmiar: `Responsive`
   - Pozycja: Między sekcjami

3. **MOBILE_BEFORE_DOWNLOAD** (Banner)
   - Format: `Banner`
   - Rozmiar: `Responsive`
   - Pozycja: Przed przyciskiem pobierania

## 🔧 **Krok 5: Zastąp placeholder sloty**

Po utworzeniu jednostek reklamowych, skopiuj ich ID i zastąp w pliku `components/AdSlots.ts`:

```typescript
export const AD_SLOTS = {
  // Przykład - zastąp rzeczywistymi ID
  TOP_BANNER: "ca-pub-9292289650801511:1234567890",
  QR_BELOW: "ca-pub-9292289650801511:1234567891",
  SIDEBAR_1: "ca-pub-9292289650801511:1234567892",
  // ... itd.
};
```

## 📈 **Krok 6: Testowanie reklam**

1. **Sprawdź w przeglądarce:**
   - Otwórz `kodqr.eu` w trybie incognito
   - Sprawdź czy reklamy się wyświetlają
   - Przetestuj na różnych urządzeniach

2. **Sprawdź w Google AdSense:**
   - Przejdź do sekcji "Reklamy"
   - Sprawdź statystyki wyświetleń
   - Monitoruj przychody

## ⚠️ **Ważne uwagi:**

### **Polityka AdSense:**
- Nie umieszczaj reklam zbyt blisko siebie
- Zachowaj odpowiednie proporcje treści do reklam
- Nie umieszczaj reklam w miejscach, które mogą być mylone z nawigacją

### **Optymalizacja:**
- Używaj `Responsive` formatów dla lepszej kompatybilności
- Testuj na różnych urządzeniach
- Monitoruj Core Web Vitals

### **Troubleshooting:**
- Jeśli reklamy się nie wyświetlają, sprawdź czy kod AdSense jest poprawnie umieszczony
- Upewnij się, że strona jest wdrożona i dostępna publicznie
- Sprawdź czy nie ma błędów w konsoli przeglądarki

## 🎉 **Gotowe!**

Po wykonaniu wszystkich kroków Twoja strona będzie w pełni zmonetyzowana reklamami CPM, wykorzystując każdy dostępny piksel na większych ekranach! 