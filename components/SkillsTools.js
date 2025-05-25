const SkillBar = ({ skill, percentage, colorClass }) => (
  <div>
    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{skill}</h4>
    <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
      <div
        className={`${colorClass} h-3 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }} // Animate width with CSS if possible, or use a library for scroll-triggered animation
      ></div>
    </div>
  </div>
);

const SkillsTools = () => {
  const skills = [
    { name: "Python", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-400" },
    { name: "C# / .NET", level: 70, color: "bg-purple-500" },
    { name: "Game Development (Godot)", level: 80, color: "bg-red-500" },
    // Add more skills as needed
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Skills & Tools</h3>
      <div className="space-y-5">
        {skills.map(skill => (
          <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} colorClass={skill.color} />
        ))}
      </div>
    </div>
  );
};

export default SkillsTools;