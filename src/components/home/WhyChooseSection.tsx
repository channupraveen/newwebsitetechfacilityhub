import {
  Activity,
  Workflow,
  TrendingDown,
  Eye,
  PiggyBank,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Real-time Tracking",
    description: "Live tracking of technicians & tasks across all locations",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamlined workflows and automated reporting systems",
  },
  {
    icon: TrendingDown,
    title: "Reduced Downtime",
    description: "Minimize equipment downtime & improve asset lifecycle",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description: "Complete visibility across all facility operations",
  },
  {
    icon: PiggyBank,
    title: "Cost Savings",
    description: "Data-driven insights for significant cost reductions",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">TechFacilityHub</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Replace outdated manual processes with a unified digital system that
            brings visibility, accuracy, and operational control to your facility.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
