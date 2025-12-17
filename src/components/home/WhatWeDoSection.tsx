import { useState } from "react";
import { 
  FileText, 
  MapPin, 
  Wrench, 
  ShieldCheck, 
  Layers,
  Clock,
  Workflow,
  LayoutDashboard,
  Smartphone,
  Settings,
  ClipboardCheck,
  Bell,
  Cloud,
  Hospital,
  Hotel,
  Building2,
  Factory,
  Store,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WhatWeDoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: solveRef, isVisible: solveVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation({ threshold: 0.05 });

  const problemsWeSolve = [
    {
      icon: FileText,
      text: "Manual and paper-based facility operations",
    },
    {
      icon: MapPin,
      text: "Lack of real-time technician tracking and task visibility",
    },
    {
      icon: Wrench,
      text: "Unplanned equipment breakdowns and downtime",
    },
    {
      icon: ShieldCheck,
      text: "Compliance gaps and audit challenges",
    },
    {
      icon: Layers,
      text: "Fragmented systems across departments",
    },
    {
      icon: Clock,
      text: "Delayed response times and poor SLA management",
    },
  ];

  const digitalSolutions = [
    {
      icon: Workflow,
      title: "Smart Digital Workflows",
      description: "Replace manual registers with automated digital processes",
    },
    {
      icon: LayoutDashboard,
      title: "Real-Time Dashboard",
      description: "Complete visibility of tasks, assets, and performance",
    },
    {
      icon: Smartphone,
      title: "Technician Mobility",
      description: "Mobile-enabled task execution and tracking",
    },
    {
      icon: Settings,
      title: "Asset & Preventive Maintenance",
      description: "Reduce downtime and extend asset life",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Reporting",
      description: "Audit-ready records and automated reports",
    },
    {
      icon: Bell,
      title: "Alerts & Escalations",
      description: "Proactive issue resolution",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Platform",
      description: "Scalable, reliable, and secure architecture",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven decisions with powerful analytics",
    },
  ];

  const industries = [
    { 
      icon: Hospital, 
      name: "Hospitals & Healthcare Facilities",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      description: "Streamline healthcare facility operations with smart maintenance and compliance tracking"
    },
    { 
      icon: Hotel, 
      name: "Hotels & Hospitality",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      description: "Enhance guest experience with efficient housekeeping and maintenance management"
    },
    { 
      icon: Building2, 
      name: "Corporate & IT Campuses",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      description: "Optimize workspace efficiency with integrated facility management solutions"
    },
    { 
      icon: Factory, 
      name: "Industries & Manufacturing Units",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      description: "Minimize downtime with preventive maintenance and asset lifecycle management"
    },
    { 
      icon: Store, 
      name: "Malls & Commercial Complexes",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      description: "Ensure seamless operations across retail spaces and common areas"
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Facility Management for the Digital Age
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TechFacilityHub delivers a unified, cloud-based digital platform that transforms traditional facility operations into smart, automated, and data-driven systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            We help organizations eliminate manual paperwork, improve operational visibility, and achieve higher efficiency across all facility functions.
          </p>
        </div>

        {/* What We Solve */}
        <div ref={solveRef} className={`max-w-5xl mx-auto mb-20 ${solveVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What We Solve
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemsWeSolve.map((problem, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-5 rounded-xl bg-red-50/50 border border-red-100 hover:shadow-md transition-all duration-300 ${
                  solveVisible ? `scroll-fade-up stagger-${index + 1}` : 'scroll-hidden'
                }`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-foreground font-medium text-sm">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Digital Solution */}
        <div ref={solutionRef} className={`max-w-6xl mx-auto mb-20 ${solutionVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Digital Solution
            </h3>
            <p className="text-muted-foreground">
              TechFacilityHub provides an end-to-end facility management solution that includes:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {digitalSolutions.map((solution, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                  solutionVisible ? `scroll-fade-up stagger-${Math.min(index + 1, 5)}` : 'scroll-hidden'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {solution.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div ref={industriesRef} className={`max-w-6xl mx-auto ${industriesVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Industries We Serve
            </h3>
            <p className="text-muted-foreground hidden md:block">Click on an industry to learn more</p>
            <p className="text-muted-foreground md:hidden">Tap on an industry to learn more</p>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Industry Image Display */}
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ${industriesVisible ? 'scroll-fade-right' : 'scroll-hidden'}`}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeIndustry === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  {/* Industry Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-xl">{industry.name}</h4>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Image Navigation Dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndustry === index 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`View ${industries[index].name}`}
                  />
                ))}
              </div>
            </div>

            {/* Industry Selection Cards - Desktop */}
            <div className={`space-y-3 ${industriesVisible ? 'scroll-fade-left' : 'scroll-hidden'}`}>
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-white border-2 border-primary shadow-lg scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-primary/10'
                      : 'bg-gradient-to-br from-primary/10 to-accent/10'
                  }`}>
                    <industry.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeIndustry === index ? 'text-primary' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-display font-semibold transition-colors duration-300 ${
                      activeIndustry === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {industry.name}
                    </h4>
                    <p className={`text-sm truncate transition-colors duration-300 ${
                      activeIndustry === index ? 'text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {industry.description}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-primary/10'
                      : 'bg-transparent'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeIndustry === index 
                          ? 'text-primary translate-x-1' 
                          : 'text-muted-foreground'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden space-y-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  activeIndustry === index
                    ? 'border-primary shadow-lg'
                    : 'border-slate-200'
                }`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setActiveIndustry(activeIndustry === index ? -1 : index)}
                  className="w-full flex items-center gap-4 p-4 bg-white text-left"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-primary text-white'
                      : 'bg-gradient-to-br from-primary/10 to-accent/10'
                  }`}>
                    <industry.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeIndustry === index ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-display font-semibold transition-colors duration-300 ${
                      activeIndustry === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {industry.name}
                    </h4>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndustry === index ? 'bg-primary/10' : 'bg-slate-100'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-all duration-500 ${
                        activeIndustry === index 
                          ? 'text-primary rotate-90' 
                          : 'text-muted-foreground'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
                
                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndustry === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    {/* Description Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-white/95 text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndustry === index 
                    ? 'bg-primary w-6' 
                    : 'bg-slate-300 w-2 hover:bg-slate-400'
                }`}
                aria-label={`View ${industries[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Text */}
        <div className={`max-w-3xl mx-auto text-center mt-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span className="font-display font-semibold text-lg text-foreground">One Platform. Complete Control.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              TechFacilityHub empowers organizations to run their facilities <strong className="text-foreground">smarter, faster, and more efficiently</strong> — all from a single digital platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
