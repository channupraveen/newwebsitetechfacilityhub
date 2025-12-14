import { Building2, Hospital, GraduationCap, Wrench } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WhereUsedSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const sectors = [
    {
      icon: Hospital,
      title: "Hospitals & Healthcare",
      description: "Medical facilities requiring strict maintenance protocols",
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office complexes and commercial properties",
    },
    {
      icon: GraduationCap,
      title: "Campuses & Institutions",
      description: "Educational and institutional facilities",
    },
    {
      icon: Wrench,
      title: "Maintenance Teams",
      description: "Any facility with dedicated maintenance operations",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Structured Maintenance Is Required
          </h2>
          <p className="text-lg text-muted-foreground">
            Our solutions work wherever operations need structure, visibility, and accountability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`group bg-white p-6 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${
                isVisible ? `scroll-scale-up stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300">
                  <sector.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {sector.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereUsedSection;
