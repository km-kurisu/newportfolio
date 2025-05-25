import Image from 'next/image';
import LocationMap from './LocationMap';
import SkillsTools from './SkillsTools';

const AboutSection = ({ className }) => {
  return (
    <section id="about-me" className={`py-16 md:py-24 transition-colors duration-500 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12 text-theme-content" data-aos="fade-up">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-theme-content-alt text-lg leading-relaxed" data-aos="fade-right">
            <p>
              Hey there! I'm Nagesh Tiwari — a passionate Full-Stack Developer who finds joy in turning complex problems into clean, efficient code (and occasionally, caffeine into code too).
            </p>
            <p>
              I’m currently pursuing a Bachelor of Engineering in Computer Engineering at Aldel Education Trust’s St. John College of Engineering and Management. My journey has led me to build meaningful applications like Fair Share, a tool that helps track shared expenses without wrecking friendships. I’ve also gained hands-on experience as a Backend Developer at StyleForge AI, where I helped shape robust and scalable systems.
              My toolbox includes C/C++, Python, JavaScript, and frameworks for Web Development and Game Development (shoutout to Godot!). I enjoy blending creativity with code to build things that are both useful and fun.
            </p>
            <p>
              When I’m not writing code, you’ll probably find me participating in technical paper presentations, competing in game jams, or wondering if “debugging” should count as a hobby. I'm a firm believer in continuous learning and currently exploring new realms in both web and game development.
              Let’s build something awesome—one semicolon at a time.
            </p>
          </div>
          <div className="space-y-10">
            <SkillsTools />

            <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">
              <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-center lg:text-left text-theme-content">Education</h3>
                <div className="bg-theme-base-100 p-6 rounded-lg shadow-xl border border-theme-base-300 card-hover-effect">
                  <p className="text-lg font-semibold text-theme-primary">Bachelor of Engineering, Computer Engineering (Pursuing)</p>
                  <p className="text-theme-content-alt">Aldel Education Trust's St. John College of Engineering and Management</p>
                  <p className="text-sm text-theme-content-alt">August 2023 - Present</p>
                  <p className="text-sm text-theme-content-alt">Palghar, Maharashtra</p>
                  <ul className="list-disc list-inside mt-4 text-theme-content-alt">
                    <li className="flex items-center text-sm mb-1"><i className="fas fa-graduation-cap mr-2 text-theme-primary"></i>Completed HSC at Bhavans College, June 2023</li>
                    <li className="flex items-center text-sm"><i className="fas fa-graduation-cap mr-2 text-theme-primary"></i>Completed SSC at Annudata Vidyalaya, Kandivali, March 2021</li>
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end" data-aos="fade-left" data-aos-delay="400">
                <h3 className="text-xl font-bold mb-4 text-center lg:text-right text-theme-content">Where I'm Based</h3>
                <LocationMap />
                 <div className="bg-theme-base-100 p-6 rounded-lg shadow-xl border border-theme-base-300 card-hover-effect w-full mt-4">
                    <p className="flex items-center justify-center lg:justify-end text-lg text-theme-content-alt"><i className="fas fa-map-marker-alt mr-2 text-red-500"></i>Borivali, Mumbai, Maharashtra, India</p>
                    <p className="flex items-center justify-center lg:justify-end text-lg text-theme-content-alt"><i className="fas fa-phone-alt mr-2 text-green-500"></i>+91 77198 91777</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;