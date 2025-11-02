import { Button } from "~/components/ui/button";
import { EmailIcon } from "~/components/ui/icons";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="card bg-base-100 shadow-2xl border border-base-300">
              <div className="card-body p-8">
                <h3 className="card-title text-3xl mb-6 text-base-content">Hello! I'm Vladyslav</h3>
                <p className="text-lg leading-relaxed mb-4 text-base-content/80">
                  I'm a dedicated QA Engineer with experience in software testing, specializing in web and API testing. 
                  I'm proficient in test automation frameworks and developing automated UI tests, with a solid understanding of SDLC and QA processes.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-base-content/80">
                  Highly responsible, goal-oriented, and communicative, with a strong focus on delivering high-quality results. 
                  I'm dedicated to continuous professional growth and enhancing technical expertise to drive efficiency and innovation in quality assurance.
                </p>
                <div className="card-actions">
                  <Button 
                    href="#contact" 
                    variant="primary" 
                    size="lg"
                    ariaLabel="Let's connect"
                  >
                    <EmailIcon className="w-5 h-5 mr-2" />
                    Let's Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="stat bg-primary/10 border border-primary/20 rounded-xl shadow-lg p-6 text-center">
              <div className="stat-value text-3xl font-bold mb-2 text-primary">15+</div>
              <div className="stat-title text-base-content font-semibold">Projects</div>
              <div className="stat-desc text-base-content/70">Tested & Delivered</div>
            </div>
            <div className="stat bg-secondary/10 border border-secondary/20 rounded-xl shadow-lg p-6 text-center">
              <div className="stat-value text-3xl font-bold mb-2 text-secondary">3+</div>
              <div className="stat-title text-base-content font-semibold">Experience</div>
              <div className="stat-desc text-base-content/70">Years in QA</div>
            </div>
            <div className="stat bg-accent/10 border border-accent/20 rounded-xl shadow-lg p-6 text-center">
              <div className="stat-value text-3xl font-bold mb-2 text-accent">50+</div>
              <div className="stat-title text-base-content font-semibold">Tests</div>
              <div className="stat-desc text-base-content/70">Automated</div>
            </div>
            <div className="stat bg-success/10 border border-success/20 rounded-xl shadow-lg p-6 text-center">
              <div className="stat-value text-3xl font-bold mb-2 text-success">99%</div>
              <div className="stat-title text-base-content font-semibold">Quality</div>
              <div className="stat-desc text-base-content/70">Assurance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
