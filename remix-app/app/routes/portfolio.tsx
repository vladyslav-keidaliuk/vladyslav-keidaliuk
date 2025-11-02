import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vladyslav Keidaliuk - Portfolio" },
    { name: "description", content: "Full-stack developer portfolio showcasing projects and skills" },
  ];
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Vladyslav Keidaliuk</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about" className="btn btn-ghost">About</a></li>
            <li><a href="#skills" className="btn btn-ghost">Skills</a></li>
            <li><a href="#projects" className="btn btn-ghost">Projects</a></li>
            <li><a href="#contact" className="btn btn-ghost">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar mb-8">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=VK" alt="Vladyslav Keidaliuk" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vladyslav Keidaliuk
            </h1>
            <p className="py-6 text-xl">
              QA Engineer specializing in software testing, web and API testing with automation expertise
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">Hello! I'm Vladyslav</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    I'm a dedicated QA Engineer with experience in software testing, specializing in web and API testing. 
                    I'm proficient in test automation frameworks and developing automated UI tests, with a solid understanding of SDLC and QA processes.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Highly responsible, goal-oriented, and communicative, with a strong focus on delivering high-quality results. 
                    I'm dedicated to continuous professional growth and enhancing technical expertise to drive efficiency and innovation in quality assurance.
                  </p>
                  <div className="card-actions">
                    <a href="#contact" className="btn btn-primary">Let's Connect</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="stat bg-primary text-primary-content rounded-lg">
                <div className="stat-title text-primary-content/70">Projects</div>
                <div className="stat-value">15+</div>
                <div className="stat-desc text-primary-content/70">Completed</div>
              </div>
              <div className="stat bg-secondary text-secondary-content rounded-lg">
                <div className="stat-title text-secondary-content/70">Experience</div>
                <div className="stat-value">3+</div>
                <div className="stat-desc text-secondary-content/70">Years</div>
              </div>
              <div className="stat bg-accent text-accent-content rounded-lg">
                <div className="stat-title text-accent-content/70">Technologies</div>
                <div className="stat-value">20+</div>
                <div className="stat-desc text-accent-content/70">Mastered</div>
              </div>
              <div className="stat bg-success text-success-content rounded-lg">
                <div className="stat-title text-success-content/70">Clients</div>
                <div className="stat-value">10+</div>
                <div className="stat-desc text-success-content/70">Satisfied</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testing & QA Skills */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Testing & QA</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Test Automation</span>
                    <div className="badge badge-primary">Expert</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Web Testing</span>
                    <div className="badge badge-primary">Expert</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>API Testing</span>
                    <div className="badge badge-primary">Expert</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>UI Automation</span>
                    <div className="badge badge-secondary">Advanced</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary">Programming</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>C#</span>
                    <div className="badge badge-primary">Expert</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Python</span>
                    <div className="badge badge-secondary">Advanced</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>JavaScript</span>
                    <div className="badge badge-secondary">Advanced</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SQL</span>
                    <div className="badge badge-accent">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-accent">Tools & Frameworks</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Selenium</span>
                    <div className="badge badge-primary">Expert</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Postman</span>
                    <div className="badge badge-secondary">Advanced</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>JIRA</span>
                    <div className="badge badge-secondary">Advanced</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Git/GitHub</span>
                    <div className="badge badge-accent">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <img src="https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Test+Automation+Framework" alt="Test Automation Framework" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Test Automation Framework</h3>
                <p>Comprehensive UI automation framework with Selenium and C# for web application testing</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <div className="badge badge-primary">C#</div>
                  <div className="badge badge-secondary">Selenium</div>
                  <div className="badge badge-accent">NUnit</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">View Project</button>
                  <button className="btn btn-outline btn-sm">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <img src="https://via.placeholder.com/400x200/10B981/FFFFFF?text=API+Testing+Suite" alt="API Testing Suite" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">API Testing Suite</h3>
                <p>Automated API testing solution with Python and comprehensive test coverage</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <div className="badge badge-primary">Python</div>
                  <div className="badge badge-secondary">Requests</div>
                  <div className="badge badge-accent">Pytest</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">View Project</button>
                  <button className="btn btn-outline btn-sm">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <img src="https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=QA+Dashboard" alt="QA Dashboard" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">QA Metrics Dashboard</h3>
                <p>Real-time dashboard for tracking test execution results and quality metrics</p>
                <div className="flex flex-wrap gap-2 my-2">
                  <div className="badge badge-primary">JavaScript</div>
                  <div className="badge badge-secondary">Chart.js</div>
                  <div className="badge badge-accent">REST API</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">View Project</button>
                  <button className="btn btn-outline btn-sm">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-6">Let's Work Together</h3>
                  <p className="text-lg mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-content" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-base-content/70">vladyslav.keidaliuk@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-secondary-content" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-base-content/70">Available for Remote Work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-6">Send Message</h3>
                  <form className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="your.email@example.com" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea className="textarea textarea-bordered h-24" placeholder="Your message..."></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2024 - Vladyslav Keidaliuk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
