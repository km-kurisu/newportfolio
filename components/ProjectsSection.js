import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    { title: "Fair Share Application", tech: "Python, GUI Development, Database", description: "Simplified expense tracking and splitting among groups, ensuring fairness and transparency in shared finances. Built with Tkinter for the UI and SQLite for data storage.", from: "from-blue-500", via: "via-purple-500", to: "to-pink-500" },
    { title: "StyleForge AI", tech: "C#.NET, SQL Server, AWS", description: "Contributed to the backend development of StyleForge AI, focusing on API creation, database management with SQL Server, and deployment on AWS services.", from: "from-green-400", via: "via-blue-400", to: "to-purple-500" },
    { title: "Task Management App", tech: "TypeScript, React, Firebase", description: "A Kanban-style task manager to organize and track tasks visually. Features include drag-and-drop functionality, user authentication, and real-time updates with Firebase.", from: "from-yellow-400", via: "via-pink-400", to: "to-red-500" },
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">🚀 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tech={project.tech}
              description={project.description}
              gradientFrom={project.from}
              gradientVia={project.via}
              gradientTo={project.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;