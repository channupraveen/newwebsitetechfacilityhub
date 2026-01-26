import { 
  Hospital,
  Hotel,
  Building2,
  Factory,
  Store,
  CheckCircle2,
  Zap,
  TrendingUp,
  Users,
  FileCheck,
  Clock
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";

const WhatWeDoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation({ threshold: 0.05 });

  const [activeIndustry, setActiveIndustry] = useState(0);

  const benefits = [
    { icon: Clock, title: "Reduce Downtime", description: "Minimize operational downtime with proactive maintenance" },
    { icon: TrendingUp, title: "Improve SLA Adherence", description: "Track and meet service level agreements consistently" },
    { icon: Users, title: "Staff Accountability", description: "Clear task ownership and performance tracking" },
    { icon: FileCheck, title: "Centralize Data", description: "All facility data in one secure platform" },
    { icon: Zap, title: "Eliminate Paperwork", description: "Go fully digital with automated workflows" },
    { icon: CheckCircle2, title: "Better Patient Experience", description: "Improved facility operations lead to better care" },
  ];

  const industries = [
    { 
      icon: Hospital, 
      name: "Hospitals & Healthcare",
      description: "Healthcare-focused workflows for complex medical facility operations",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    },
    { 
      icon: Hotel, 
      name: "Hotels & Resorts",
      description: "Streamline housekeeping, maintenance, and guest services",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    },
    { 
      icon: Building2, 
      name: "Corporate Campuses",
      description: "Manage large office spaces with ease and efficiency",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    { 
      icon: Factory, 
      name: "Industrial Facilities",
      description: "Asset tracking and maintenance for manufacturing units",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    { 
      icon: Store, 
      name: "Commercial Buildings",
      description: "Comprehensive facility management for malls and complexes",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50" ref={sectionRef} id="about">
      <div className="container mx-auto px-4 lg:px-8">
        {/* What is TechFacilityHub */}
        <div className={`max-w-4xl mx-auto text-center mb-20 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What is TechFacilityHub?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Facility Management,<br />Built for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">TechFacilityHub</strong> is a modern facility management SaaS platform designed to help hospitals and large facilities manage <strong className="text-foreground">non-clinical operations</strong> efficiently.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From maintenance tickets to housekeeping workflows, asset tracking, vendor contracts, and compliance checklists — TechFacilityHub brings everything into one powerful dashboard.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={benefitsRef} className={`max-w-6xl mx-auto mb-20 ${benefitsVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Benefits For Your Organization
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-5 rounded-xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  benefitsVisible ? `scroll-fade-up stagger-${Math.min(index + 1, 6)}` : 'scroll-hidden'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors">
                  <benefit.icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div ref={industriesRef} className={`max-w-5xl mx-auto ${industriesVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Who Should Use TechFacilityHub?
            </h3>
            <p className="text-muted-foreground">Designed for complex facilities that manage assets, staff, vendors, and service requests</p>
          </div>
          
          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white border border-border hover:border-primary/30 text-foreground hover:shadow-md'
                }`}
              >
                <industry.icon className={`w-4 h-4 ${activeIndustry === index ? 'text-white' : 'text-primary'}`} />
                {industry.name}
              </button>
            ))}
          </div>

          {/* Industry Display */}
          <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndustry === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-2xl">{industry.name}</h4>
                      <p className="text-white/80">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
