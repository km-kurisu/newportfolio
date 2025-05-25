import Image from 'next/image';
import AboutSection from '../components/AboutSection';
import BehindTheCodeSection from '../components/BehindTheCodeSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
// import FlipCard from '../components/FlipCard'; // Removed as Thoughts section is gone

export default function HomePage() {
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
  };

  // Removed reflectionCardsData as the section is no longer present

  return (
    <>
      {/* Hero Section */}
      <section id="about" className="text-center py-20 md:py-32 bg-white dark:bg-gray-900 min-h-[calc(100vh-70px)] flex flex-col justify-center items-center transition-colors duration-300 relative overflow-hidden">
        {/* Optional: Add subtle background animation/elements here */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 animate-pulse-slow">
            {/* Example: A subtle blurred shape or pattern */}
            <div className="w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 absolute top-1/4 left-1/4 animate-blob"></div>
            <div className="w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 absolute bottom-1/3 right-1/4 animate-blob animation-delay-2000"></div>
            <div className="w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative"> {/* Ensure content is above background elements */}
          <div className="avatar mx-auto mb-6 flex justify-center transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/assets/photo.png"
              alt="Nagesh Tiwari"
              width={200}
              height={200}
              className="rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover shadow-lg"
              priority
              onError={(e) => { e.target.src = 'https://placehold.co/200x200/cccccc/333333?text=NT'; }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-3 text-gray-900 dark:text-white animate-fade-in-up">
            Nagesh Tiwari
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 animate-fade-in-up animation-delay-200">
            Computer Engineering Student & Full-Stack Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            I build responsive and scalable applications with Python, C#.NET, and modern web technologies that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-transparent border-2 border-green-500 text-green-500 dark:text-green-400 hover:bg-green-500 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      {/* Removed: New Section for Reflections/Inspiration using FlipCards */}

      <BehindTheCodeSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}