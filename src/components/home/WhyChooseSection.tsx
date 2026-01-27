import {
  Building2,
  Layers,
  Settings,
  Shield,
  MapPin,
  HeadphonesIcon
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: Building2,
    title: "Built for Large & Complex Facilities",
    description: "Designed specifically for hospitals, hotels, resorts, malls, and commercial buildings with complex operations.",
  },
  {
    icon: Layers,
    title: "Industry-Agnostic Architecture",
    description: "One powerful platform that adapts to any industry's unique facility management workflows.",
  },
  {
    icon: Settings,
    title: "Customizable Workflows",
    description: "Configure approval processes, escalations, and automations to match your organization's needs.",
  },
  {
    icon: Shield,
    title: "Secure Cloud-Based Platform",
    description: "Enterprise-grade security with role-based access control and data encryption.",
  },
  {
    icon: MapPin,
    title: "Multi-Location Support",
    description: "Scales from a single site to multiple locations with centralized management and reporting.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support & Onboarding",
    description: "Expert onboarding assistance and ongoing support to ensure your success.",
  },
];

const WhyChooseSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef} id="why-us">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why TechFacilityHub?
          </h2>
          <p className="text-lg text-muted-foreground">
            Replace outdated manual processes with a unified digital system that brings visibility, accuracy, and operational control to your facility.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? `scroll-blur-in stagger-${Math.min(index + 1, 6)}` : 'scroll-hidden'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
