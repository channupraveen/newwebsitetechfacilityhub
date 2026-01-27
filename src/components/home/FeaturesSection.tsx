import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Asset Management",
    description: "Track asset lifecycle, maintenance history, warranty, and downtime to reduce breakdowns and extend asset life.",
    highlight: "Never lose track of critical equipment",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Maintenance & Ticket Management",
    description: "Log issues instantly, assign tasks, track SLA, and ensure faster resolution with full transparency.",
    highlight: "Reduce downtime and improve response time",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Housekeeping Management",
    description: "Schedule cleaning tasks, track staff performance, and maintain hygiene standards across rooms, wards, and common areas.",
    highlight: "Ensure hygiene compliance across all areas",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Laundry Management",
    description: "Linen tracking by department & location. Issue, return, loss tracking with usage reports & cost control.",
    highlight: "Control losses & improve linen lifecycle",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Vendor & AMC Management",
    description: "Manage vendors, AMCs & CMCs. Track contract validity, renewal dates, vendor performance & SLA compliance.",
    highlight: "Stay compliant, avoid missed renewals",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Audit & Compliance",
    description: "Digitize inspections, maintain records, and stay compliant with industry and safety standards like NABH.",
    highlight: "Simplify audits & regulatory compliance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Workflow Automation",
    description: "Rule-based workflows with department-specific approvals. Automated escalations to reduce manual coordination.",
    highlight: "Replace WhatsApp & Excel with automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "User Management",
    description: "Super Admin, Hospital Admin, Department Heads, Technicians & Staff. Controlled permissions & visibility for every role.",
    highlight: "Every role sees only what they need",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Dashboards & Reports",
    description: "SLA performance reports, ticket & asset analytics, department-wise insights with management dashboards.",
    highlight: "Make data-driven decisions effortlessly",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
];

const FeaturesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef} id="features">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Modules
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Modules For Complete<br />Facility Management
          </h2>
          <p className="text-lg text-muted-foreground">
            From maintenance tickets to compliance checklists, TechFacilityHub brings everything into one powerful dashboard — designed for hospitals, hotels, resorts, malls, and large facilities.
          </p>
        </div>

        {/* Features Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                isVisible ? `scroll-blur-in stagger-${Math.min(index + 1, 9)}` : 'scroll-hidden'
              }`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {feature.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
