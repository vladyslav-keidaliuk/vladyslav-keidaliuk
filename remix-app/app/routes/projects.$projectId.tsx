import type { Route } from "./+types/projects.$projectId";
import { Header, Footer } from "~/components/layout";
import { Button, TechIcon } from "~/components/ui";
import { PROJECTS } from "~/constants";
import { Link } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  const project = PROJECTS.find(p => p.id === params.projectId);
  
  if (!project) {
    return [
      { title: "Project Not Found" },
      { name: "description", content: "The requested project could not be found." },
    ];
  }

  return [
    { title: `${project.title} - Vladyslav Keidaliuk` },
    { name: "description", content: project.description },
  ];
}

export default function ProjectDetail({ params }: Route.ComponentProps) {
  const project = PROJECTS.find(p => p.id === params.projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-base-100">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg text-base-content/70 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/portfolio" className="btn btn-primary">
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'badge-success';
      case 'In Progress': return 'badge-warning';
      case 'Planned': return 'badge-info';
      default: return 'badge-neutral';
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/portfolio#projects" className="btn btn-ghost btn-sm">
                ← Back to Portfolio
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className={`badge ${getStatusColor(project.status)} badge-lg`}>
                {project.status}
              </div>
              <div className="badge badge-primary badge-lg">
                {project.category}
              </div>
              <div className="badge badge-outline badge-lg">
                {project.duration}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed mb-8">
              {project.fullDescription || project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-ghost">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Key Highlights */}
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-4 text-primary">Key Highlights</h2>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-base-content/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-4 text-secondary">Technologies Used</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center p-3 bg-base-100 rounded-lg hover:bg-base-200/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <TechIcon technology={tech} className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-base-content">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges, Solutions, Results */}
            {(project.challenges || project.solutions || project.results) && (
              <div className="mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Challenges */}
                  {project.challenges && (
                    <div className="card bg-gradient-to-br from-error/10 to-error/5 border border-error/20">
                      <div className="card-body">
                        <h3 className="card-title text-xl mb-4 text-error">Challenges</h3>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-error rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-base-content/80">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Solutions */}
                  {project.solutions && (
                    <div className="card bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
                      <div className="card-body">
                        <h3 className="card-title text-xl mb-4 text-warning">Solutions</h3>
                        <ul className="space-y-3">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-warning rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-base-content/80">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Results */}
                  {project.results && (
                    <div className="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                      <div className="card-body">
                        <h3 className="card-title text-xl mb-4 text-success">Results</h3>
                        <ul className="space-y-3">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-base-content/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
              <Link to="/portfolio#projects" className="btn btn-outline">
                ← Back to All Projects
              </Link>
              <a href="/portfolio#contact" className="btn btn-primary">
                Discuss This Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
