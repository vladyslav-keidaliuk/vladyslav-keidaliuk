import { useState } from "react";
import { WORK_EXPERIENCE } from "~/constants";
import { ChevronDownIcon } from "~/components/ui/icons";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {WORK_EXPERIENCE.map((job) => {
            const isExpanded = expandedId === job.id;
            
            return (
              <div 
                key={job.id}
                className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isExpanded ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
                onClick={() => toggleExpand(job.id)}
              >
                <div className="card-body p-6">
                  {/* Header - Always Visible */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="card-title text-xl md:text-2xl text-primary mb-1">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-base md:text-lg">
                            <span className="font-semibold">{job.company}</span>
                            {job.location && (
                              <>
                                <span className="text-base-content/50 hidden sm:inline">•</span>
                                <span className="text-base-content/70 text-sm md:text-base">{job.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={`transform transition-transform duration-300 md:hidden ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <div className="badge bg-blue-600 text-white border-blue-600 badge-lg whitespace-nowrap">
                        {job.startDate} - {job.endDate}
                      </div>
                      <div className={`hidden md:block transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="min-h-0">
                      {/* Description */}
                      <p className="text-base-content/80 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary/90">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="pl-2">{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {job.achievements && job.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 text-secondary/90">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-2 text-base-content/80">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="pl-2 text-success">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {job.technologies && job.technologies.length > 0 && (
                        <div className="pt-4 border-t border-base-content/10">
                          <h4 className="font-semibold text-lg mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                              <div key={idx} className="badge badge-primary badge-outline">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
