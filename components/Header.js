import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/router';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = '';
      const headerOffset = document.querySelector('header')?.offsetHeight || 70; // Get header height once

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset; // Adjusted offset
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    const handleRouteChange = () => {
        // Give a small delay to ensure all content is rendered before calculating scroll positions
        setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', handleScroll);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange); // Listen for hash changes too
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const navLinks = [
    { href: "#about", label: "Home" },
    { href: "#about-me", label: "About" },
    // { href: "#reflections", label: "Thoughts" }, // Removed as per your request
    { href: "#behind-the-code", label: "Beyond Code" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const ThemeToggleButton = ({ forMobile = false }) => {
    if (!isMounted) return null; // Only render after component mounts on client side
    return (
      <button
        onClick={toggleTheme}
        title="Toggle theme"
        aria-label="Toggle theme"
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-theme-base-200 ${forMobile ? 'mr-2' : ''}`}
      >
        {theme === 'dark' ? <i className="fas fa-sun text-lg text-yellow-400"></i> : <i className="fas fa-moon text-lg text-indigo-700"></i>}
      </button>
    );
  };

  return (
    <header className="bg-theme-base-100 shadow-md py-4 sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold font-poppins tracking-wide group" legacyBehavior>
          <a className="text-theme-content hover:text-theme-primary transition-colors duration-300">
            {/* Added more styling for "My Portfolio" text */}
            <span className="text-3xl font-extrabold text-theme-primary drop-shadow-md">MY</span>
            <span className="text-3xl font-extrabold text-theme-content ml-1 drop-shadow-md">PORTFOLIO</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    // Compare activeSection directly with the href's id part
                    className={`nav-link text-sm font-medium ${activeSection === link.href.substring(1) ? 'active-link' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggleButton />
          <a
            href="/assets/Nagesh Tiwari - Resume.pdf"
            download
            className="bg-theme-primary hover:bg-theme-secondary text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <i className="fas fa-download mr-2"></i>Download Resume
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggleButton forMobile={true} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-theme-content ml-2 focus:outline-none focus:ring-2 focus:ring-theme-primary"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-theme-base-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-4 border-t border-theme-base-300' : 'max-h-0 py-0'}`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`block py-2 px-4 nav-link text-base ${activeSection === link.href.substring(1) ? 'active-link' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/assets/Nagesh Tiwari - Resume.pdf"
              download
              className="bg-theme-primary hover:bg-theme-secondary text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm mt-2"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;