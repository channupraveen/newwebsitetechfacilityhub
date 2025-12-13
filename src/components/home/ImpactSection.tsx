import { TrendingDown, TrendingUp, Zap, Shield, Award } from "lucide-react";

const impacts = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Reduction in Manual Work",
    description: "Automate repetitive tasks and free up your team",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Improvement in Asset Uptime",
    description: "Proactive maintenance keeps equipment running",
  },
  {
    icon: Zap,
    value: "Faster",
    label: "Decision Making",
    description: "Real-time analytics for informed decisions",
  },
  {
    icon: Shield,
    value: "Zero",
    label: "Leakage in Operations",
    description: "Complete visibility prevents revenue loss",
  },
  {
    icon: Award,
    value: "Higher",
    label: "Technician Performance",
    description: "Track, measure, and improve productivity",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Customer Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-lg text-primary-foreground/70">
            See how TechFacilityHub transforms facility operations for
            organizations like yours.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impacts.map((impact) => (
            <div
              key={impact.label}
              className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <impact.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-display text-3xl font-bold text-accent mb-1">
                {impact.value}
              </div>
              <div className="font-semibold text-primary-foreground mb-2">
                {impact.label}
              </div>
              <p className="text-sm text-primary-foreground/60">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
