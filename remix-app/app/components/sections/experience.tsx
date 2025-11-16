import { WORK_EXPERIENCE } from "~/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {WORK_EXPERIENCE.map((job, index) => (
            <div 
              key={job.id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                  <div>
                    <h3 className="card-title text-2xl text-primary mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-lg">
                      <span className="font-semibold">{job.company}</span>
                      {job.location && (
                        <>
                          <span className="text-base-content/50">•</span>
                          <span className="text-base-content/70">{job.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="badge badge-secondary badge-lg whitespace-nowrap">
                    {job.startDate} - {job.endDate}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base-content/80 mb-4">
                  {job.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-base-content/80">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="ml-2">{responsibility}</li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {job.achievements && job.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-base-content/80">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="ml-2 text-success">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {job.technologies && job.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technologies Used:</h4>
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
          ))}
        </div>
      </div>
    </section>
  );
}

