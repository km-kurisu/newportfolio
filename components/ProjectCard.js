const ProjectCard = ({ title, tech, description, gradientFrom, gradientVia, gradientTo }) => {
  return (
    <div className="group relative bg-gray-800 dark:bg-gray-700 rounded-xl p-6 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-neon-blue dark:hover:shadow-neon-blue">
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientVia ? gradientVia : ''} ${gradientTo} opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 blur-md group-hover:blur-lg transition-all duration-500`}
      ></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className={`text-sm font-medium mb-3 ${
          gradientFrom === 'from-blue-500' ? 'text-blue-300' :
          gradientFrom === 'from-green-400' ? 'text-green-300' :
          gradientFrom === 'from-yellow-400' ? 'text-pink-300' : 'text-gray-300'
        }`}>
          {tech}
        </p>
        <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      {/* Optional: Add a link to the project if available
      <a href="#" className="absolute inset-0 z-20" aria-label={`View project ${title}`}></a>
      */}
    </div>
  );
};

export default ProjectCard;