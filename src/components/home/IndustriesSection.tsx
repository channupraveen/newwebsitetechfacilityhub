import {
  Hospital,
  Factory,
  Building2,
  ShoppingBag,
  Hotel,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    description: "Streamline medical facility operations and compliance",
  },
  {
    icon: Factory,
    title: "Pharma & Manufacturing",
    description: "Maintain production efficiency and equipment uptime",
  },
  {
    icon: Building2,
    title: "IT Parks & Corporate Offices",
    description: "Manage workspace facilities seamlessly",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Commercial Buildings",
    description: "Ensure smooth retail environment operations",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Deliver exceptional guest experiences",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Maintain safe and efficient campus facilities",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground">
            From healthcare to hospitality, our platform adapts to your unique
            facility management needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
