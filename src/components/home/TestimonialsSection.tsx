import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "TechFacilityHub transformed our hospital's maintenance operations. We reduced ticket resolution time by 40% in the first month.",
    name: "Dr. Rajesh Kumar",
    role: "Hospital Administrator",
    hospital: "City Care Hospital, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The housekeeping module alone saved us hours of manual coordination. Our staff accountability has improved significantly.",
    name: "Priya Sharma",
    role: "Facility Manager",
    hospital: "Apollo Spectra, Mumbai",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Finally, a system built for Indian hospitals. The NABH compliance checklists made our accreditation process much smoother.",
    name: "Dr. Venkat Rao",
    role: "Medical Director",
    hospital: "Care Hospitals, Vizag",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Asset tracking was our biggest pain point. TechFacilityHub helped us manage 500+ biomedical assets effortlessly.",
    name: "Amit Patel",
    role: "Biomedical Engineer",
    hospital: "Fortis Hospital, Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The vendor and AMC management feature ensures we never miss a renewal. It's saved us from compliance issues multiple times.",
    name: "Lakshmi Menon",
    role: "Operations Head",
    hospital: "KIMS Hospital, Kerala",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Switching from Excel and WhatsApp to TechFacilityHub was the best decision. Our team coordination has improved 10x.",
    name: "Suresh Reddy",
    role: "Chief Engineer",
    hospital: "Yashoda Hospitals, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Healthcare<br />Facilities Across India
          </h2>
          <p className="text-lg text-muted-foreground">
            See how TechFacilityHub is helping hospitals improve their facility operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                isVisible ? `scroll-blur-in stagger-${Math.min(index + 1, 6)}` : 'scroll-hidden'
              }`}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
