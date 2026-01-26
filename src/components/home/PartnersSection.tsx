import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Shield, Cloud, Server, Lock } from "lucide-react";

const PartnersSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const trustIndicators = [
    { icon: Shield, text: "Healthcare-focused Workflows" },
    { icon: Cloud, text: "Scalable SaaS Architecture" },
    { icon: Server, text: "Cloud-based & Secure" },
    { icon: Lock, text: "API-ready for Integrations" },
  ];

  return (
    <section className="py-12 bg-white border-t border-border/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-8 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <p className="text-sm text-muted-foreground font-medium">Why Choose TechFacilityHub?</p>
        </div>
        
        <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 ${isVisible ? 'scroll-fade-up stagger-2' : 'scroll-hidden'}`}>
          {trustIndicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
