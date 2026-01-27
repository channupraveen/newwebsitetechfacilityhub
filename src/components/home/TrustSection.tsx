import { 
  Shield,
  Users,
  Rocket,
  CheckCircle2
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const trustSignals = [
  {
    icon: Rocket,
    title: "Early Customers Onboarding",
    description: "Join the growing list of facilities already transforming their operations.",
  },
  {
    icon: Users,
    title: "Designed with Real Facility Managers",
    description: "Built based on actual workflows and pain points from industry professionals.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable Architecture",
    description: "Enterprise-grade infrastructure ready for facilities of any size.",
  },
];

const TrustSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
              Trust & Reliability
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Trust, Designed for Scale
            </h2>
          </div>

          {/* Trust Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className={`group text-center p-6 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? `scroll-blur-in stagger-${index + 1}` : 'scroll-hidden'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                  <signal.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>

          {/* Future Trust Elements Placeholder */}
          <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Coming Soon:</strong> Client logos, testimonials & case studies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Client Logos", "Video Testimonials", "Case Studies", "ROI Calculator"].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3 h-3 text-gray-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
