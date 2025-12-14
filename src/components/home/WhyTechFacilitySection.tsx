import { Workflow, Focus, Target, TrendingUp } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WhyTechFacilitySection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const reasons = [
    {
      icon: Workflow,
      title: "Built Around Real Workflows",
      description: "Designed from actual operational processes, not theoretical models",
    },
    {
      icon: Focus,
      title: "Simplicity & Accountability",
      description: "Clear interfaces that promote ownership and reduce confusion",
    },
    {
      icon: Target,
      title: "Purpose-Built Systems",
      description: "Not generic tools adapted for maintenance — built specifically for it",
    },
    {
      icon: TrendingUp,
      title: "Designed to Scale",
      description: "Grows with your operations without adding complexity",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Heading */}
            <div className={isVisible ? 'scroll-fade-left' : 'scroll-hidden'}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why TechFacility Hub
              </h2>
              <p className="text-lg text-muted-foreground">
                We focus on what matters — building systems that work the way your operations actually run.
              </p>
            </div>

            {/* Right side - Points */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`group flex gap-4 p-4 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all duration-300 cursor-pointer ${
                    isVisible ? `scroll-fade-right stagger-${index + 1}` : 'scroll-hidden'
                  }`}
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-primary hover-float" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTechFacilitySection;
