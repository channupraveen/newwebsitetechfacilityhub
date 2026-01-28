import useScrollAnimation from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const team = [
    {
      name: "Godugu Venkatesh",
      role: "Founder & CEO",
      title: "Founder & CEO",
      description: "Visionary leader with deep expertise in facility operations and digital transformation. Drives the strategic vision of TechFacilityHub, focused on revolutionizing how hospitals, hotels, and enterprises manage their facilities through smart technology solutions.",
      image: "/venkatesh.jpeg",
      linkedin: "https://www.linkedin.com/in/godugu-venkatesh-b06a16362/",
      skills: ["Strategic Leadership", "Business Development", "Facility Operations"],
    },
    {
      name: "Channu Praveen Kumar",
      role: "Co-Founder & CTO",
      title: "Co-Founder & CTO",
      description: "Full-stack architect with hands-on experience building scalable enterprise platforms. Leads the technical vision and development of TechFacilityHub's core platform, ensuring robust, secure, and high-performance solutions for complex facility management needs.",
      image: "/praveen.jpeg",
      linkedin: "https://www.linkedin.com/in/praveen-kumar2001/",
      skills: ["System Architecture", "Full-Stack Development", "Cloud Infrastructure"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Leadership Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet The Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate technologists and industry experts committed to transforming facility management 
            through innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? `scroll-blur-in stagger-${index + 1}` : 'scroll-hidden'
              }`}
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl group-hover:border-primary/20 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-[#0077B5] hover:bg-[#006399] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 hover:bg-primary/10 hover:text-primary rounded-full text-xs font-medium text-muted-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className={`mt-16 max-w-4xl mx-auto ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 rounded-2xl p-8 lg:p-10 border border-primary/10">
            <div className="text-center mb-8">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                Our Mission
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                To empower organizations with intelligent facility management solutions that reduce operational 
                complexity, improve efficiency, and deliver exceptional experiences.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Facilities Managed</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">99%</p>
                <p className="text-sm text-muted-foreground">Uptime Guaranteed</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
