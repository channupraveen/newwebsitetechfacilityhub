import {
  LayoutDashboard,
  TicketCheck,
  Box,
  UserCog,
  GitBranch,
  Wallet,
  Sparkles,
  Shirt,
  Activity,
  FileSignature,
  ShieldCheck,
  PieChart,
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Live insights, KPIs, real-time monitoring",
  },
  {
    icon: TicketCheck,
    title: "Ticketing",
    description: "Track issues, assign technicians, auto-escalations",
  },
  {
    icon: Box,
    title: "Asset Management",
    description: "QR tagging, AMC, warranty, lifecycle management",
  },
  {
    icon: UserCog,
    title: "User Control",
    description: "Permissions, roles, secure access",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description: "SOPs, checklists, approvals",
  },
  {
    icon: Wallet,
    title: "Finance",
    description: "Billing, expenses, budget tracking",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Digital schedules, cleaning checklists, tracker",
  },
  {
    icon: Shirt,
    title: "Laundry",
    description: "Load management, wash cycles, delivery tracking",
  },
  {
    icon: Activity,
    title: "Utilities & Meters",
    description: "Digital readings, consumption analytics",
  },
  {
    icon: FileSignature,
    title: "Contract & Vendor",
    description: "SLA monitoring, vendor scorecards",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audit",
    description: "Digital inspections, forms, assessments",
  },
  {
    icon: PieChart,
    title: "Reports",
    description: "Automated MIS, trends, analytics",
  },
];

const FeaturesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Modules
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage facility operations in one platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300 card-hover-lift ${
                isVisible ? `scroll-blur-in stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary hover-pop" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
