import { Settings, Ticket, GitBranch, Eye } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WhatWeDoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const items = [
    {
      icon: Settings,
      title: "Digitize Operations",
      description: "Transform maintenance and facility operations from paper-based to fully digital systems",
    },
    {
      icon: Ticket,
      title: "Centralize Reporting",
      description: "Bring all issue reporting into one place through structured ticketing workflows",
    },
    {
      icon: GitBranch,
      title: "Enable Workflows",
      description: "Create structured approval processes and operational workflows that scale",
    },
    {
      icon: Eye,
      title: "Provide Visibility",
      description: "Deliver real-time visibility and accountability across all operations",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            We help organizations bring structure and clarity to their operational workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group text-center p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50 ${
                isVisible ? `scroll-fade-up stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
