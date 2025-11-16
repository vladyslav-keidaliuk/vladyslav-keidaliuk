import { EDUCATION, CERTIFICATIONS } from "~/constants";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div 
                  key={edu.id}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="card-body">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                      <div>
                        <h4 className="card-title text-xl text-primary mb-2">
                          {edu.degree} in {edu.field}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-lg">{edu.institution}</span>
                          {edu.location && (
                            <>
                              <span className="text-base-content/50">•</span>
                              <span className="text-base-content/70">{edu.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <div className="badge badge-secondary badge-lg whitespace-nowrap">
                          {edu.startDate} - {edu.endDate}
                        </div>
                        {edu.gpa && (
                          <div className="badge badge-accent">GPA: {edu.gpa}</div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="text-base-content/80 mb-4">
                        {edu.description}
                      </p>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-base-content/80">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="ml-2">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Relevant Coursework */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div>
                        <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <div key={idx} className="badge badge-outline">
                              {course}
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

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="card-body">
                    <h4 className="card-title text-lg">{cert.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-base-content/70">{cert.issuer}</span>
                      <div className="badge badge-primary">{cert.date}</div>
                    </div>
                    {cert.credentialId && (
                      <div className="text-sm text-base-content/60">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

