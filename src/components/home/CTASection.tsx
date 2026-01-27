import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-white to-purple-50" ref={sectionRef} id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'scroll-blur-in' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Started Today
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Simplify<br />Facility Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            See how TechFacilityHub fits your hospital, hotel, resort, or mall. Join growing facilities across India who trust TechFacilityHub to streamline their operations, improve compliance, and deliver better experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-[#1e1b4b] hover:bg-[#312e81]"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base font-semibold border-2 hover:bg-muted/50 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Our Team
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+918142821645" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 81428 21645
            </a>
            <a href="mailto:techfacilityhub@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              techfacilityhub@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
