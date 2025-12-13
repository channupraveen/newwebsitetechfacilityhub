import {
  LayoutDashboard,
  Ticket,
  Package,
  Users,
  Workflow,
  CreditCard,
  SprayCan,
  WashingMachine,
  Gauge,
  FileText,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Live insights, KPIs, real-time monitoring",
  },
  {
    icon: Ticket,
    title: "Ticketing",
    description: "Track issues, assign technicians, auto-escalations",
  },
  {
    icon: Package,
    title: "Asset Management",
    description: "QR tagging, AMC, warranty, lifecycle management",
  },
  {
    icon: Users,
    title: "User Control",
    description: "Permissions, roles, secure access",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "SOPs, checklists, approvals",
  },
  {
    icon: CreditCard,
    title: "Finance",
    description: "Billing, expenses, budget tracking",
  },
  {
    icon: SprayCan,
    title: "Housekeeping",
    description: "Digital schedules, cleaning checklists, tracker",
  },
  {
    icon: WashingMachine,
    title: "Laundry",
    description: "Load management, wash cycles, delivery tracking",
  },
  {
    icon: Gauge,
    title: "Utilities & Meters",
    description: "Digital readings, consumption analytics",
  },
  {
    icon: FileText,
    title: "Contract & Vendor",
    description: "SLA monitoring, vendor scorecards",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Audit",
    description: "Digital inspections, forms, assessments",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description: "Automated MIS, trends, analytics",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Core Platform
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Complete Digital Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            Centralize everything in your facility management operations with our
            comprehensive suite of features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
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
