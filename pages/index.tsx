'use client';

import { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import Head from 'next/head';
import AdComponent from '../components/AdComponent';

type QRDotType = 'rounded' | 'dots' | 'square';
type QRCornerSquareType = 'extra-rounded' | 'rounded' | 'square';
type QRCornerDotType = 'dot' | 'square';

declare module 'qr-code-styling' {
  interface QRCodeStylingOptions {
    width: number;
    height: number;
    data: string;
    margin?: number;
    dotsOptions?: {
      color: string;
      type: QRDotType;
    };
    cornersSquareOptions?: {
      color: string;
      type: QRCornerSquareType;
    };
    cornersDotOptions?: {
      color: string;
      type: QRCornerDotType;
    };
    backgroundOptions?: {
      color: string;
    };
    imageOptions?: {
      crossOrigin: string;
      margin: number;
      imageSize?: number;
    };
    image?: string;
  }
}

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [dotsStyle, setDotsStyle] = useState<QRDotType>('rounded');
  const [dotsColor, setDotsColor] = useState('#000000');
  const [cornerSquaresStyle, setCornerSquaresStyle] = useState<QRCornerSquareType>('extra-rounded');
  const [cornerSquaresColor, setCornerSquaresColor] = useState('#000000');
  const [cornerDotsStyle, setCornerDotsStyle] = useState<QRCornerDotType>('dot');
  const [cornerDotsColor, setCornerDotsColor] = useState('#000000');
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(0.3);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [inverted, setInverted] = useState(false);
  const [showText, setShowText] = useState(false);
  const [customText, setCustomText] = useState('Oceń nas');
  const [resolution, setResolution] = useState(1024);
  const [outputFormat, setOutputFormat] = useState<'png' | 'svg'>('png');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Sprawdź rozmiar pliku (max 1MB)
    if (file.size > 1024 * 1024) {
      setUploadError('Plik jest zbyt duży. Maksymalny rozmiar to 1MB.');
      return;
    }

    // Sprawdź typ pliku
    if (!file.type.startsWith('image/')) {
      setUploadError('Dozwolone są tylko pliki graficzne.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target?.result as string);
      setUploadError(null);
    };
    reader.onerror = () => {
      setUploadError('Wystąpił błąd podczas wczytywania pliku.');
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      qrCode.current = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        margin: 10,
        dotsOptions: {
          color: inverted ? '#ffffff' : dotsColor,
          type: dotsStyle
        },
        cornersSquareOptions: {
          color: inverted ? '#ffffff' : cornerSquaresColor,
          type: cornerSquaresStyle
        },
        cornersDotOptions: {
          color: inverted ? '#ffffff' : cornerDotsColor,
          type: cornerDotsStyle
        },
        backgroundOptions: {
          color: inverted ? '#000000' : '#ffffff',
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 2,
          imageSize: logoSize
        },
        image: logo || undefined
      });

      if (qrRef.current) {
        qrRef.current.innerHTML = '';
        qrCode.current.append(qrRef.current);
      }
    }
  }, [url, dotsStyle, dotsColor, cornerSquaresStyle, cornerSquaresColor, cornerDotsStyle, cornerDotsColor, logo, logoSize, inverted]);

  const handleDownload = async () => {
    if (!qrCode.current) return;
    
    // Tworzymy tymczasowy kod QR w wybranej rozdzielczości
    const highResQR = new QRCodeStyling({
      width: resolution,
      height: resolution,
      data: url,
      margin: 10,
      dotsOptions: {
        color: inverted ? '#ffffff' : dotsColor,
        type: dotsStyle
      },
      cornersSquareOptions: {
        color: inverted ? '#ffffff' : cornerSquaresColor,
        type: cornerSquaresStyle
      },
      cornersDotOptions: {
        color: inverted ? '#ffffff' : cornerDotsColor,
        type: cornerDotsStyle
      },
      backgroundOptions: {
        color: inverted ? '#000000' : '#ffffff',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 2,
        imageSize: logoSize
      },
      image: logo || undefined
    });

    const blob = await highResQR.getRawData(outputFormat);
    if (blob) {
      const link = document.createElement('a');
      link.download = `qr-code.${outputFormat}`;
      link.href = URL.createObjectURL(blob as Blob);
      link.click();
    }
  };

  return (
    <>
      <Head>
        <title>Generator Kodów QR - Darmowe narzędzie online | Stwórz profesjonalny kod QR | kodqr.eu</title>
        <meta name="description" content="Darmowy generator kodów QR online. Stwórz profesjonalny kod QR z logo, dostosuj kolory i style. Pobierz w wysokiej rozdzielczości PNG lub SVG. Idealne do marketingu i biznesu." />
        <meta name="keywords" content="generator kodów QR, kod QR online, QR code generator, darmowy generator QR, kody QR z logo, personalizacja kodów QR, wysokiej rozdzielczości QR, PNG QR, SVG QR, marketing QR" />
        <meta name="author" content="kodqr.eu" />
        <link rel="canonical" href="https://kodqr.eu" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Generator Kodów QR - Darmowe narzędzie online" />
        <meta property="og:description" content="Stwórz profesjonalny kod QR w kilka sekund. Dodaj logo, dostosuj kolory i style. Pobierz w wysokiej rozdzielczości PNG lub SVG." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodqr.eu" />
        <meta property="og:image" content="https://kodqr.eu/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generator Kodów QR - Darmowe narzędzie online" />
        <meta name="twitter:description" content="Stwórz profesjonalny kod QR w kilka sekund. Dodaj logo, dostosuj kolory i style." />
        <meta name="twitter:image" content="https://kodqr.eu/og-image.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Górna reklama - tylko na dużych ekranach */}
          <div className="hidden lg:block mb-6">
            <AdComponent position="TOP" />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Generator Kodów QR</h1>
              <p className="text-gray-600">Stwórz profesjonalny kod QR w kilka sekund</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lewa strona - Podgląd QR */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
                    {showText && (
                      <div className="mb-4 text-2xl font-bold text-gray-900">{customText}</div>
                    )}
                    <div ref={qrRef} className="qr-container"></div>
                  </div>
                </div>
                
                {/* Reklama pod kodem QR - tylko na dużych ekranach */}
                <div className="hidden lg:block mt-6">
                  <AdComponent position="QR_BELOW_DESKTOP" />
                </div>
                
                {/* Reklama pod kodem QR - tylko na urządzeniach mobilnych */}
                <div className="lg:hidden mt-6">
                  <AdComponent position="QR_BELOW_MOBILE" />
                </div>
              </div>

              {/* Środkowa kolumna - Opcje */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Podstawowe ustawienia</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                      Wprowadź URL
                    </label>
                    <input
                      type="text"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={inverted}
                        onChange={(e) => setInverted(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Odwróć kolory (biały kod na czarnym tle)
                      </span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={showText}
                        onChange={(e) => setShowText(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Dodaj tekst nad kodem QR
                      </span>
                    </label>
                    {showText && (
                      <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Wprowadź tekst"
                      />
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Logo</h2>
                  
                  <div className="mb-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Wybierz logo
                    </button>
                  </div>

                  {logo && (
                    <div className="mt-4">
                      <label htmlFor="logo-size" className="block text-sm font-medium text-gray-700 mb-2">
                        Rozmiar logo ({Math.round(logoSize * 100)}%)
                      </label>
                      <input
                        type="range"
                        id="logo-size"
                        min="0.1"
                        max="0.8"
                        step="0.05"
                        value={logoSize}
                        onChange={(e) => setLogoSize(parseFloat(e.target.value))}
                        className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10%</span>
                        <span>80%</span>
                      </div>
                    </div>
                  )}
                  {uploadError && (
                    <p className="mt-2 text-sm text-red-600">{uploadError}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Zalecany format logo: PNG lub JPG, max 1MB
                  </p>
                </div>

                {/* Reklama między sekcjami - tylko na urządzeniach mobilnych */}
                <div className="lg:hidden">
                  <AdComponent position="MOBILE_MIDDLE" />
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Styl kodu QR</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Styl punktów
                      </label>
                      <select
                        value={dotsStyle}
                        onChange={(e) => setDotsStyle(e.target.value as QRDotType)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="rounded">Zaokrąglone</option>
                        <option value="dots">Kropki</option>
                        <option value="square">Kwadratowe</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kolor punktów
                      </label>
                      <input
                        type="color"
                        value={dotsColor}
                        onChange={(e) => setDotsColor(e.target.value)}
                        className="w-full h-10 p-1 border border-gray-300 rounded-md"
                        disabled={inverted}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Styl narożników
                      </label>
                      <select
                        value={cornerSquaresStyle}
                        onChange={(e) => setCornerSquaresStyle(e.target.value as QRCornerSquareType)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="extra-rounded">Bardzo zaokrąglone</option>
                        <option value="rounded">Zaokrąglone</option>
                        <option value="square">Kwadratowe</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kolor narożników
                      </label>
                      <input
                        type="color"
                        value={cornerSquaresColor}
                        onChange={(e) => setCornerSquaresColor(e.target.value)}
                        className="w-full h-10 p-1 border border-gray-300 rounded-md"
                        disabled={inverted}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Styl punktów narożnych
                      </label>
                      <select
                        value={cornerDotsStyle}
                        onChange={(e) => setCornerDotsStyle(e.target.value as QRCornerDotType)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="dot">Kropka</option>
                        <option value="square">Kwadrat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kolor punktów narożnych
                      </label>
                      <input
                        type="color"
                        value={cornerDotsColor}
                        onChange={(e) => setCornerDotsColor(e.target.value)}
                        className="w-full h-10 p-1 border border-gray-300 rounded-md"
                        disabled={inverted}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Rozdzielczość i format</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="resolution" className="block text-sm font-medium text-gray-700 mb-2">
                      Rozdzielczość kodu QR ({resolution}x{resolution}px)
                    </label>
                    <select
                      id="resolution"
                      value={resolution}
                      onChange={(e) => setResolution(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="512">512x512px</option>
                      <option value="1024">1024x1024px</option>
                      <option value="2048">2048x2048px</option>
                      <option value="4096">4096x4096px</option>
                      <option value="6144">6144x6144px</option>
                      <option value="8192">8192x8192px</option>
                    </select>
                    <p className="mt-2 text-sm text-gray-500">
                      Wyższa rozdzielczość zapewnia lepszą jakość, ale zwiększa rozmiar pliku. Rozdzielczości powyżej 4096px mogą wymagać więcej czasu na wygenerowanie.
                    </p>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="outputFormat" className="block text-sm font-medium text-gray-700 mb-2">
                      Format wyjściowy
                    </label>
                    <select
                      id="outputFormat"
                      value={outputFormat}
                      onChange={(e) => setOutputFormat(e.target.value as 'png' | 'svg')}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="png">PNG</option>
                      <option value="svg">SVG</option>
                    </select>
                    <p className="mt-2 text-sm text-gray-500">
                      Format SVG jest wektorowy i idealny do druku, podczas gdy PNG jest rastrowy i lepiej sprawdza się w przypadku małych rozmiarów.
                    </p>
                  </div>
                </div>

                {/* Reklama przed przyciskiem pobierania - tylko na urządzeniach mobilnych */}
                <div className="lg:hidden">
                  <AdComponent position="MOBILE_BEFORE_DOWNLOAD" />
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleDownload}
                    disabled={!url}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Pobierz kod QR
                    </div>
                  </button>
                </div>
              </div>

              {/* Prawa kolumna - Reklamy na dużych ekranach */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <AdComponent position="SIDEBAR_1" />
                  <AdComponent position="SIDEBAR_2" />
                  <AdComponent position="SIDEBAR_3" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Dolna reklama - na wszystkich ekranach */}
          <div className="mt-8">
            <AdComponent position="BOTTOM" />
          </div>
        </div>
      </div>
    </>
  );
} 