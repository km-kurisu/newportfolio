const InterestCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
    {/* You can add an icon here if you wish */}
    {/* <div className="text-blue-500 dark:text-blue-400 text-3xl mb-3">{icon}</div> */}
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const BehindTheCodeSection = () => {
  const interests = [
    { title: "📚 Light Novels", description: "I'm a passionate reader of the ErGenverse — stories full of cultivation, cosmos, and profound growth. My shelves are portals to endless realms!" },
    { title: "🎮 Gaming", description: "Action-packed sessions on Call of Duty Mobile, and immersive open-world adventures fuel my adrenaline and curiosity." },
    { title: "🎵 Music", description: "I unwind with soulful tunes from Arijit Singh and indie vibes from Mitraz. Music keeps my creative rhythm flowing." },
    { title: "✨ Quirks & Passions", description: "A mix of introverted energy and curious sparks. I love storytelling, discovering hidden gems online, and pushing boundaries in creative coding." },
  ];

  return (
    <section id="behind-the-code" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">🧠 Behind the Code</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Here's what makes me — beyond the screen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {interests.map(interest => (
            <InterestCard key={interest.title} title={interest.title} description={interest.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheCodeSection;