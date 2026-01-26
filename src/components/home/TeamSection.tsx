import useScrollAnimation from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const team = [
    {
      name: "Godugu Venkatesh",
      role: "Founder & CEO",
      title: "Director & CEO",
      description: "Leading the company's strategic direction and advisory initiatives, driving digital innovation for smart, efficient facility management.",
      image: "/venkatesh.jpeg",
      linkedin: "https://www.linkedin.com/in/godugu-venkatesh-b06a16362/",
    },
    {
      name: "Praveen Kumar",
      role: "Co-Founder & CTO",
      title: "Co-Founder & CTO",
      description: "Building and scaling TechFacilityHub's core platform with expertise in modern web technologies and scalable system design.",
      image: "/praveen.jpeg",
      linkedin: "https://www.linkedin.com/in/praveen-kumar2001/",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet The Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The people behind TechFacilityHub — building systems that work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-gray-50/50 rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 ${
                isVisible ? `scroll-blur-in stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077B5] hover:bg-[#006399] text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
