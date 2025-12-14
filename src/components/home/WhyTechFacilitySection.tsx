import { Workflow, Focus, Target, TrendingUp } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";

const WhyTechFacilitySection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      icon: Workflow,
      title: "Built Around Real Workflows",
      description: "Designed from actual operational processes, not theoretical models",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      icon: Focus,
      title: "Simplicity & Accountability",
      description: "Clear interfaces that promote ownership and reduce confusion",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      icon: Target,
      title: "Purpose-Built Systems",
      description: "Not generic tools adapted for maintenance — built specifically for it",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
    {
      icon: TrendingUp,
      title: "Designed to Scale",
      description: "Grows with your operations without adding complexity",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Heading & Image */}
            <div className={isVisible ? 'scroll-fade-left' : 'scroll-hidden'}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why TechFacility Hub
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We focus on what matters — building systems that work the way your operations actually run.
              </p>
              
              {/* Interactive Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gradient-to-br from-primary/5 to-accent/5">
                {reasons.map((reason, index) => (
                  <img
                    key={index}
                    src={reason.image}
                    alt={reason.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      activeIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Active title badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <p className="font-semibold text-primary text-sm">
                      {reasons[activeIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Points */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-primary/5 border-l-4 border-primary shadow-md' 
                      : 'hover:bg-slate-50 border-l-4 border-transparent'
                  } ${
                    isVisible ? `scroll-fade-right stagger-${index + 1}` : 'scroll-hidden'
                  }`}
                >
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary text-white'
                      : 'bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20'
                  }`}>
                    <reason.icon className={`w-6 h-6 ${activeIndex === index ? 'text-white' : 'text-primary'} hover-float`} />
                  </div>
                  <div>
                    <h3 className={`font-display text-lg font-semibold mb-1 transition-colors duration-300 ${
                      activeIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTechFacilitySection;
