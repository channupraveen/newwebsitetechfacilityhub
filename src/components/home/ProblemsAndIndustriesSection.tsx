import { 
  Hospital,
  Hotel,
  Building2,
  ShoppingBag,
  GraduationCap,
  AlertTriangle,
  FileSpreadsheet,
  Eye,
  Users,
  ClipboardCheck,
  Wrench,
  DollarSign
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Problems We Solve Data
const problems = [
  {
    icon: FileSpreadsheet,
    problem: "Manual tracking using Excel & WhatsApp",
  },
  {
    icon: Eye,
    problem: "No visibility on asset breakdown history",
  },
  {
    icon: ClipboardCheck,
    problem: "Missed housekeeping & maintenance schedules",
  },
  {
    icon: Users,
    problem: "Poor coordination between staff & management",
  },
  {
    icon: AlertTriangle,
    problem: "Audit, compliance & reporting stress",
  },
  {
    icon: DollarSign,
    problem: "High maintenance cost due to reactive repairs",
  },
];

// Industries Data
const industries = [
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description: "Equipment uptime, NABH readiness, biomedical asset tracking",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description: "Room maintenance, housekeeping scheduling, guest complaint resolution",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Malls",
    description: "Escalator, lift, HVAC maintenance, vendor coordination, safety compliance",
  },
  {
    icon: Building2,
    title: "Corporate Campuses",
    description: "Workspace facility management, preventive maintenance, vendor management",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Campus maintenance, safety compliance, asset lifecycle management",
  },
];

const ProblemsAndIndustriesSection = () => {
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      {/* Who Is This For Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50" ref={industriesRef} id="industries">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center mb-12 ${industriesVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Built For Your Industry
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for Large Facilities That Can't<br />Afford Operational Chaos
            </h2>
            <p className="text-lg text-muted-foreground">
              TechFacilityHub adapts to your unique facility management needs across industries.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`group relative p-6 rounded-2xl bg-white border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${
                  industriesVisible ? `scroll-blur-in stagger-${Math.min(index + 1, 5)}` : 'scroll-hidden'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                    <industry.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 lg:py-20 bg-gray-50/50" ref={problemsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center mb-12 ${problemsVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
              Problems We Solve
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Managing Facilities Is Hard —<br />We Make It Simple
            </h2>
            <p className="text-lg text-muted-foreground">
              If any of these challenges sound familiar, TechFacilityHub is built for you.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((item, index) => (
              <div
                key={index}
                className={`group flex items-center gap-4 p-5 rounded-xl bg-white border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-500 ${
                  problemsVisible ? `scroll-fade-up stagger-${Math.min(index + 1, 6)}` : 'scroll-hidden'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-foreground font-medium text-sm">
                  {item.problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
              The Solution
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              One Platform. Complete Facility Control.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              TechFacilityHub centralizes <strong className="text-foreground">asset management</strong>, <strong className="text-foreground">housekeeping</strong>, <strong className="text-foreground">maintenance</strong>, and <strong className="text-foreground">compliance</strong> into a single cloud-based platform designed for hospitals, hotels, resorts, malls, and large facilities.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { value: "50%", label: "Faster Resolution" },
                { value: "100%", label: "Digital Records" },
                { value: "30%", label: "Cost Reduction" },
                { value: "24/7", label: "Visibility" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemsAndIndustriesSection;
