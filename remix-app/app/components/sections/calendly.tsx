import { useState } from "react";
import { CalendlyModal } from "~/components/ui/calendly-modal";
import { Button } from "~/components/ui/button";
import { CalendarIcon } from "~/components/ui/icons";

export const CalendlySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="book-call" className="py-20 bg-base-200">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-base-content/80 mb-8 leading-relaxed">
            Let's discuss your project, ideas, or potential opportunities. 
            Schedule a free 30-minute consultation at your convenience.
          </p>
          
          <div className="card bg-base-100 shadow-xl p-8 border border-base-content/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-primary" />
                  30 Minute Meeting
                </h3>
                <p className="text-base-content/70 mt-2">
                  One-on-one video call via Google Meet or Zoom
                </p>
              </div>
              <Button
                onClick={() => setIsOpen(true)}
                variant="primary"
                size="lg"
                className="w-full md:w-auto min-w-[200px] shadow-lg hover:shadow-primary/20"
                ariaLabel="Schedule Meeting"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};
