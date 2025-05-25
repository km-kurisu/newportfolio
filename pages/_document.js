import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* Font Awesome CDN - IMPORTANT: UPDATE THIS INTEGRITY HASH! */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-...your-integrity-hash..." // **GET LATEST HASH FROM FA CDN**
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
         <link rel="icon" href="/assets/apple-touch-icon.png" type="image/png"/>
      </Head>
      {/* The `className` on body will be managed by ThemeContext to toggle 'dark-theme' */}
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}