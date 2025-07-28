import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9292289650801511"
            crossOrigin="anonymous"
          />
        <meta charSet="utf-8" />
        
        {/* Podstawowe metadane */}
        <meta name="description" content="Darmowy generator kodów QR online. Stwórz profesjonalny kod QR z logo, dostosuj kolory i style. Pobierz w wysokiej rozdzielczości PNG lub SVG. Idealne do marketingu i biznesu." />
        <meta name="keywords" content="generator kodów QR, kod QR online, QR code generator, darmowy generator QR, kody QR z logo, personalizacja kodów QR, wysokiej rozdzielczości QR, PNG QR, SVG QR, marketing QR" />
        <meta name="author" content="kodqr.eu" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kodqr.eu" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodqr.eu" />
        <meta property="og:title" content="Generator Kodów QR - Darmowe narzędzie online | kodqr.eu" />
        <meta property="og:description" content="Stwórz profesjonalny kod QR w kilka sekund. Dodaj logo, dostosuj kolory i style. Pobierz w wysokiej rozdzielczości PNG lub SVG. Darmowe narzędzie do marketingu." />
        <meta property="og:image" content="https://kodqr.eu/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Generator kodów QR - Darmowe narzędzie online" />
        <meta property="og:site_name" content="kodqr.eu" />
        <meta property="og:locale" content="pl_PL" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kodqr.eu" />
        <meta property="twitter:title" content="Generator Kodów QR - Darmowe narzędzie online" />
        <meta property="twitter:description" content="Stwórz profesjonalny kod QR w kilka sekund. Dodaj logo, dostosuj kolory i style. Pobierz w wysokiej rozdzielczości PNG lub SVG." />
        <meta property="twitter:image" content="https://kodqr.eu/og-image.jpg" />
        
        {/* Dodatkowe metadane */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="application-name" content="Generator Kodów QR" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Generator Kodów QR",
              "description": "Darmowe narzędzie online do generowania kodów QR z możliwością personalizacji i dodania logo",
              "url": "https://kodqr.eu",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PLN"
              },
              "author": {
                "@type": "Organization",
                "name": "kodqr.eu"
              },
              "featureList": [
                "Generowanie kodów QR",
                "Personalizacja kolorów i stylów",
                "Dodawanie logo",
                "Wysokie rozdzielczości",
                "Formaty PNG i SVG",
                "Darmowe narzędzie"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 