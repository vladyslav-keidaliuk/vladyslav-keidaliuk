import { Link } from "react-router";
import { PROJECTS } from "~/constants";

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'badge-success';
    case 'In Progress': return 'badge-warning';
    case 'Planned': return 'badge-info';
    default: return 'badge-neutral';
  }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-base-content/70 mt-4 max-w-2xl mx-auto">
            A showcase of quality assurance projects demonstrating expertise in test automation, 
            performance testing, and continuous integration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`badge ${getStatusColor(project.status)} badge-sm`}>
                    {project.status}
                  </div>
                  <div className="badge badge-outline badge-sm">
                    {project.duration}
                  </div>
                </div>
                
                <h3 className="card-title text-xl mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <div className="badge badge-primary badge-sm mb-3">
                  {project.category}
                </div>
                
                <p className="text-base-content/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                  <ul className="text-xs text-base-content/70 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge badge-ghost badge-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="badge badge-ghost badge-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="card-actions justify-end mt-auto">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="btn btn-primary btn-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
