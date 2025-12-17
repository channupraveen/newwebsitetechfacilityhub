import useScrollAnimation from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const team = [
    {
      name: "Godugu Venkatesh",
      role: "Founder & CEO",
      title: "Director & CEO",
      description: "As the CEO and Director of TechFacilityHub, I lead the company's strategic direction and advisory initiatives. My focus is on driving digital innovation, shaping long-term vision, and transforming facility management into a smart, efficient, and automated ecosystem that delivers real value to clients.",
      specialization: "Advisory & Strategic Direction",
      additionalInfo: "Our advisory and strategic team guides TechFacilityHub with industry insights, technology expertise, and scalable growth strategies to ensure long-term value for our customers and partners.",
      image: "/venkatesh.jpeg",
      linkedin: "https://www.linkedin.com/in/godugu-venkatesh-b06a16362/",
    },
    {
      name: "Praveen Kumar",
      role: "Co-Founder & Chief Technology Officer (CTO)",
      title: "Co-Founder & CTO",
      description: "A technology-driven co-founder responsible for building and scaling TechFacilityHub's core platform. With strong expertise in modern web technologies and system design, he translates real-world hospital and facility maintenance challenges into secure, scalable, and intelligent digital solutions.",
      specialization: "Product Architecture, Engineering & Platform Scalability",
      additionalInfo: "He leads product architecture, backend and frontend engineering, and ensures the platform remains reliable, flexible, and ready for future AI-driven automation.",
      image: "/praveen.jpeg",
      linkedin: "https://www.linkedin.com/in/praveen-kumar2001/",
    },
  ];

  // Modern LinkedIn Icon Component
  const LinkedInIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The people behind TechFacilityHub — building systems that work
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {team.map((member, index) => (
            <div
              key={index}
              className={`${isVisible ? `scroll-fade-up stagger-${index + 1}` : 'scroll-hidden'}`}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200/60 hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-5 gap-8 p-8 lg:p-12">
                  {/* Member Image */}
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Social Link */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077B5] hover:bg-[#006399] text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-accent font-medium uppercase tracking-wider">
                        {member.specialization}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.additionalInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
