import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import CustomAlertModal from './CustomAlertModal'; // Assuming you'll use a global alert

export default function Layout({ children, fontVariables, pageTitle = "Nagesh Tiwari - Portfolio" }) {
  return (
    <div className={`${fontVariables} font-inter flex flex-col min-h-screen`}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Nagesh Tiwari's Portfolio - Full-Stack Developer, Computer Engineering Student, and Tech Enthusiast." />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-..." // Replace with actual integrity hash
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      {/* <CustomAlertModal /> You might integrate this differently, e.g., via context */}
    </div>
  );
}