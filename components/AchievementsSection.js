import AchievementCard from './AchievementCard';

const AchievementsSection = () => {
  const achievements = [
    { title: "Technical Paper Presentation", event: "Anveshanam 2023", description: "Participated in Anveshanam 2023 Technical Paper Presentation, presenting research on emerging technologies in computer science.", from: "from-teal-400", via: "via-cyan-500", to: "to-sky-600" },
    { title: "GameJam Participant", event: "itch.io GameJam 2024", description: "Successfully participated in the itch.io GameJam 2024, developing a game prototype within a 48-hour timeframe and showcasing game development skills.", from: "from-lime-400", via: "via-emerald-500", to: "to-green-600" },
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">🏆 Achievements & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {achievements.map(ach => (
            <AchievementCard
              key={ach.title}
              title={ach.title}
              event={ach.event}
              description={ach.description}
              gradientFrom={ach.from}
              gradientVia={ach.via}
              gradientTo={ach.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;