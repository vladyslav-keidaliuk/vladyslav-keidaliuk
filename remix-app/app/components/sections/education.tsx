import { useState } from "react";
import { EDUCATION, CERTIFICATIONS } from "~/constants";
import { ChevronDownIcon } from "~/components/ui/icons";
import { useTranslation } from "react-i18next";

const getStatusColor = (status: string) => {
  if (status.includes('Completed') || status.includes('Finished') || status.includes('Abgeschlossen') || status.includes('Завершено')) return 'badge-success';
  if (status.includes('Progress')) return 'badge-warning';
  if (status.includes('Unfinished')) return 'badge-error';
  if (status.includes('Hold')) return 'badge-neutral';
  return 'badge-info';
};

export function EducationSection() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('education.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('education.educationTitle')}</h3>
            <div className="space-y-4">
              {EDUCATION.map((edu) => {
                const isExpanded = expandedId === edu.id;
                const achievements = t(`education.items.${edu.id}.achievements`, { returnObjects: true }) as string[];
                const coursework = t(`education.items.${edu.id}.coursework`, { returnObjects: true }) as string[];
                const status = t(`education.items.${edu.id}.status`);
                const startDate = t(`education.items.${edu.id}.startDate`);
                const endDate = t(`education.items.${edu.id}.endDate`);
                const degree = t(`education.items.${edu.id}.degree`);
                const field = t(`education.items.${edu.id}.field`);

                return (
                  <div 
                    key={edu.id}
                    className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isExpanded ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
                    onClick={() => toggleExpand(edu.id)}
                  >
                    <div className="card-body p-6">
                      {/* Header - Always Visible */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex flex-1 gap-4">
                          {edu.logo && (
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg border border-base-200 p-2 bg-white flex items-center justify-center overflow-hidden">
                                <img 
                                  src={edu.logo} 
                                  alt={`${edu.institution} logo`} 
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="card-title text-xl text-primary mb-2">
                                  {t('education.degreeFormat', { degree, field })}
                                </h4>
                                <div className="flex flex-wrap items-center gap-2">
                                  {edu.url ? (
                                    <a 
                                      href={edu.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="font-semibold text-lg hover:text-primary transition-colors hover:underline"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {t(`education.items.${edu.id}.institution`)}
                                    </a>
                                  ) : (
                                    <span className="font-semibold text-lg">{t(`education.items.${edu.id}.institution`)}</span>
                                  )}
                                  {t(`education.items.${edu.id}.location`) && (
                                    <>
                                      <span className="text-base-content/50 hidden sm:inline">•</span>
                                      <span className="text-base-content/70 text-sm sm:text-base">{t(`education.items.${edu.id}.location`)}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className={`transform transition-transform duration-300 lg:hidden ${isExpanded ? 'rotate-180' : ''}`}>
                                <ChevronDownIcon className="w-6 h-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 mt-2 lg:mt-0">
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end gap-2">
                              <div className="badge bg-blue-600 text-white border-blue-600 badge-lg whitespace-nowrap">
                                {startDate} - {endDate}
                              </div>
                              {status && (
                                <div className={`badge ${getStatusColor(status)}`}>
                                  {status}
                                </div>
                              )}
                              {edu.gpa && (
                                <div className="badge bg-gray-500 text-white border-gray-500">{t('education.gpaFormat', { gpa: edu.gpa })}</div>
                              )}
                            </div>
                            <div className={`hidden lg:block transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              <ChevronDownIcon className="w-6 h-6" />
                            </div>
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
                            {t(`education.items.${edu.id}.description`)}
                          </p>

                          {/* Achievements */}
                          {achievements && achievements.length > 0 && (
                            <div className="mb-6">
                              <h5 className="font-semibold mb-2 text-secondary/90">{t('education.achievementsTitle')}</h5>
                              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                {achievements.map((achievement, idx) => (
                                  <li key={idx} className="pl-2">{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Relevant Coursework */}
                          {coursework && coursework.length > 0 && (
                            <div className="pt-4 border-t border-base-content/10">
                              <h5 className="font-semibold mb-3">{t('education.courseworkTitle')}</h5>
                              <div className="flex flex-wrap gap-2">
                                {coursework.map((course, idx) => (
                                  <div key={idx} className="badge badge-outline">
                                    {course}
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

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('education.certificationsTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="card-body">
                    <h4 className="card-title text-lg">
                      {cert.url ? (
                        <a 
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors hover:underline"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-base-content/70">{cert.issuer}</span>
                      <div className="badge bg-blue-600 text-white border-blue-600">{cert.date}</div>
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
