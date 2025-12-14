import { Linkedin } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      linkedin: "#",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/placeholder.svg",
      linkedin: "#",
    },
    {
      name: "Mike Johnson",
      role: "Head of Operations",
      image: "/placeholder.svg",
      linkedin: "#",
    },
    {
      name: "Sarah Wilson",
      role: "Lead Developer",
      image: "/placeholder.svg",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The people behind TechFacility Hub — building systems that work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group text-center ${
                isVisible ? `scroll-scale-up stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
