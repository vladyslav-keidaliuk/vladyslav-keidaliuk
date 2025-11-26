import { Link } from "react-router";
import { PROJECTS } from "~/constants";
import { useTranslation } from "react-i18next";

const getStatusColor = (status: string) => {
  // Status should be passed in English or matching the key in translation
  if (status === 'Completed' || status === 'Abgeschlossen' || status === 'Завершено') return 'badge-success';
  if (status === 'In Progress' || status === 'In Bearbeitung' || status === 'В процесі') return 'badge-warning';
  if (status === 'Planned' || status === 'Geplant' || status === 'Заплановано') return 'badge-info';
  return 'badge-neutral';
};

export const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-base-content/70 mt-4 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const highlights = t(`projects.items.${project.id}.highlights`, { returnObjects: true }) as string[];
            // Normalize status key by removing spaces if needed, but here we use the value directly from constants which is "Completed" etc.
            // The constant has "Completed", so we use that as key
            const statusKey = project.status.replace(/\s+/g, ''); 
            const status = t(`projects.status.${statusKey}`, { defaultValue: project.status });
            const duration = t(`projects.items.${project.id}.duration`, { defaultValue: project.duration });
            const category = t(`projects.items.${project.id}.category`, { defaultValue: project.category });
            
            return (
              <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
                <div className="card-body p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`badge ${getStatusColor(status)} badge-sm`}>
                      {status}
                    </div>
                    <div className="badge badge-outline badge-sm">
                      {duration}
                    </div>
                  </div>
                  
                  <h3 className="card-title text-xl mb-3 leading-tight">
                    {t(`projects.items.${project.id}.title`)}
                  </h3>
                  
                  <div className="badge badge-primary badge-sm mb-3">
                    {category}
                  </div>
                  
                  <p className="text-base-content/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">{t('projects.keyHighlights')}</h4>
                    <ul className="text-xs text-base-content/70 space-y-1">
                      {Array.isArray(highlights) && highlights.slice(0, 2).map((highlight, index) => (
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
                        {t('projects.more', { count: project.technologies.length - 3 })}
                      </span>
                    )}
                    </div>
                  </div>
                  
                  <div className="card-actions justify-end mt-auto">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="btn btn-primary btn-sm shadow-lg hover:shadow-xl transition-all"
                    >
                      {t('projects.viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};