import { 
  TicketCheck, 
  Box, 
  Sparkles, 
  Shirt, 
  FileSignature, 
  ClipboardCheck,
  Workflow,
  Users,
  BarChart3
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Box,
    title: "Asset Management",
    description: "Track asset lifecycle, maintenance history, warranty, and downtime to reduce breakdowns and extend asset life.",
    highlight: "Never lose track of critical equipment",
  },
  {
    icon: TicketCheck,
    title: "Maintenance & Ticket Management",
    description: "Log issues instantly, assign tasks, track SLA, and ensure faster resolution with full transparency.",
    highlight: "Reduce downtime and improve response time",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Management",
    description: "Schedule cleaning tasks, track staff performance, and maintain hygiene standards across rooms, wards, and common areas.",
    highlight: "Ensure hygiene compliance across all areas",
  },
  {
    icon: Shirt,
    title: "Laundry Management",
    description: "Linen tracking by department & location. Issue, return, loss tracking with usage reports & cost control.",
    highlight: "Control losses & improve linen lifecycle",
  },
  {
    icon: FileSignature,
    title: "Vendor, AMC & Contract Management",
    description: "Manage vendors, AMCs & CMCs. Track contract validity, renewal dates, vendor performance & SLA compliance.",
    highlight: "Stay compliant, avoid missed renewals",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance Checklists",
    description: "Digitize inspections, maintain records, and stay compliant with industry and safety standards like NABH.",
    highlight: "Simplify audits & regulatory compliance",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Rule-based workflows with department-specific approvals. Automated escalations to reduce manual coordination.",
    highlight: "Replace WhatsApp & Excel with automation",
  },
  {
    icon: Users,
    title: "Role-Based User Management",
    description: "Super Admin, Hospital Admin, Department Heads, Technicians & Staff. Controlled permissions & visibility for every role.",
    highlight: "Every role sees only what they need",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reports",
    description: "SLA performance reports, ticket & asset analytics, department-wise insights with management dashboards.",
    highlight: "Make data-driven decisions effortlessly",
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? `scroll-blur-in stagger-${Math.min(index + 1, 9)}` : 'scroll-hidden'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
