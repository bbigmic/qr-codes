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
        <meta name="description" content="Generator kodów QR - Stwórz profesjonalny kod QR w kilka sekund. Darmowe narzędzie do generowania kodów QR z możliwością dostosowania wyglądu i dodania logo." />
        <meta name="keywords" content="kod QR, generator kodów QR, QR code generator, darmowy generator QR, kody QR z logo" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kodqr.eu" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodqr.eu" />
        <meta property="og:title" content="Generator Kodów QR - Stwórz profesjonalny kod QR" />
        <meta property="og:description" content="Darmowe narzędzie do generowania kodów QR z możliwością dostosowania wyglądu i dodania logo." />
        <meta property="og:image" content="https://kodqr.eu/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kodqr.eu" />
        <meta property="twitter:title" content="Generator Kodów QR - Stwórz profesjonalny kod QR" />
        <meta property="twitter:description" content="Darmowe narzędzie do generowania kodów QR z możliwością dostosowania wyglądu i dodania logo." />
        <meta property="twitter:image" content="https://kodqr.eu/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 