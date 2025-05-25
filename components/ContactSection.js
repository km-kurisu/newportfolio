import ContactForm from './ContactForm';
import JokeSection from './JokeSection'; // Assuming JokeSection is a separate component

const ContactSection = () => {
  const socialLinks = [
    { href: "https://github.com/nagesh2006/", icon: "fab fa-github", title: "GitHub", label: "nagesh2006" },
    { href: "https://www.linkedin.com/in/nagesh-tiwari-244b74299", icon: "fab fa-linkedin-in", title: "LinkedIn", label: "Nagesh Tiwari" },
    { href: "https://www.instagram.com/echo_nightshade/", icon: "fab fa-instagram", title: "Instagram", label: "@echo_nightshade" },
    { href: "mailto:nageshti2808@gmail.com", icon: "far fa-envelope", title: "Email", label: "nageshti2808@gmail.com" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">Connect With Me</h2>
        
        {/* Improved Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-16 max-w-3xl mx-auto">
          {socialLinks.map(social => (
            <a
              key={social.title}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              aria-label={social.title}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 group"
              data-aos="zoom-in" // Add AOS animation
              data-aos-delay="100" // Stagger animation
            >
              <i className={`${social.icon} text-5xl md:text-6xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300`}></i> {/* Larger icons */}
              <span className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{social.label}</span>
            </a>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
                <ContactForm />
            </div>
            <div data-aos="fade-left">
                <JokeSection />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;