import { 
  Hospital,
  Hotel,
  ShoppingBag,
  Building,
  CheckCircle2
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";

const useCases = [
  {
    icon: Hospital,
    industry: "Hospitals & Healthcare",
    title: "Hospital Facility Management",
    benefits: [
      "Equipment uptime tracking & biomedical asset management",
      "NABH compliance readiness with digital checklists",
      "Preventive maintenance scheduling for critical equipment",
      "Housekeeping management for wards & common areas",
      "Vendor & AMC management for medical equipment",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Hotel,
    industry: "Hotels & Resorts",
    title: "Hotel Facility Management",
    benefits: [
      "Room maintenance & turnover tracking",
      "Housekeeping scheduling & staff performance",
      "Guest complaint resolution with SLA tracking",
      "HVAC, electrical & plumbing maintenance",
      "Vendor coordination for services & supplies",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: ShoppingBag,
    industry: "Shopping Malls",
    title: "Mall Facility Management",
    benefits: [
      "Escalator, lift & HVAC maintenance tracking",
      "Vendor coordination for multiple service providers",
      "Safety compliance & fire safety checklists",
      "Common area housekeeping management",
      "Asset tracking for mall equipment & fixtures",
    ],
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Building,
    industry: "High-Rise Buildings",
    title: "Building Facility Management",
    benefits: [
      "Elevator, DG & transformer maintenance tracking",
      "Common area & amenities housekeeping",
      "Resident complaint management with SLA",
      "Security & fire safety compliance checklists",
      "Vendor & AMC management for building services",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
  },
];

const IndustryUseCasesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50" ref={sectionRef} id="use-cases">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industry Use Cases
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Different Industries Use<br />TechFacilityHub
          </h2>
          <p className="text-lg text-muted-foreground">
            Same powerful platform — customized workflows for your specific industry needs.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white border border-border hover:border-primary/30 text-foreground hover:shadow-md'
              }`}
            >
              <useCase.icon className={`w-4 h-4 ${activeIndex === index ? 'text-white' : 'text-primary'}`} />
              {useCase.industry}
            </button>
          ))}
        </div>

        {/* Use Case Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {(() => {
                          const Icon = useCases[activeIndex].icon;
                          return <Icon className="w-5 h-5 text-white" />;
                        })()}
                      </div>
                      <h3 className="font-display font-bold text-xl">{useCases[activeIndex].title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Key Benefits for {useCases[activeIndex].industry}
              </h3>
              {useCases[activeIndex].benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCasesSection;
