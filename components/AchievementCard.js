const AchievementCard = ({ title, event, description, gradientFrom, gradientVia, gradientTo }) => {
  return (
    <div className="group relative bg-gray-800 dark:bg-gray-700 rounded-xl p-6 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-neon-green dark:hover:shadow-neon-green">
      <div
         className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientVia ? gradientVia : ''} ${gradientTo} opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 blur-md group-hover:blur-lg transition-all duration-500`}
      ></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className={`text-sm font-medium mb-3 ${
          gradientFrom === 'from-teal-400' ? 'text-cyan-300' :
          gradientFrom === 'from-lime-400' ? 'text-emerald-300' : 'text-gray-300'
        }`}>
          {event}
        </p>
        <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;