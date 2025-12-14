import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Rocket,
  Zap,
  Shield,
  Smartphone,
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Building,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const industries = [
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    description: "Hospitals, clinics, and medical centers",
  },
  {
    icon: GraduationCap,
    title: "Educational Campuses",
    description: "Universities, schools, and institutions",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Office complexes and retail spaces",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Production facilities and warehouses",
  },
  {
    icon: Building2,
    title: "Facility Management",
    description: "Service providers and FM teams",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Purpose-Driven Solutions",
    description: "We don't build generic tools — we build purpose-driven solutions for complex workplace operations grounded in real operational workflows.",
  },
  {
    icon: Zap,
    title: "Simplicity & Usability",
    description: "Our focus is on creating systems that are simple to use, practical to implement, and powerful in execution.",
  },
  {
    icon: Shield,
    title: "Accountability & Transparency",
    description: "Built-in accountability mechanisms ensure every task is tracked, every action is visible, and every workflow is transparent.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Full functionality across web and mobile platforms, ensuring your team can work from anywhere.",
  },
];

const About = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: problemRef, isVisible: problemVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: focusRef, isVisible: focusVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
            alt="Team collaboration and innovation"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/80"></div>
          {/* Animated gradient circles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-gentle" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-gentle-delayed" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Learn about our mission to transform facility management through intelligent technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section ref={introRef} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-6xl mx-auto ${introVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Building the Future of Facility Management
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`${introVisible ? 'scroll-fade-right' : 'scroll-hidden'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Team collaboration in modern office"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className={`${introVisible ? 'scroll-fade-left' : 'scroll-hidden'}`}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">TechFacility Hub</strong> is a technology company focused on helping organizations digitize maintenance and facility operations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build software platforms that bring structure, accountability, and visibility to maintenance workflows across industries.
                </p>
                
                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Digital Transformation</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">System Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Why We Exist */}
      <section ref={problemRef} className="py-20 lg:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-5xl mx-auto ${problemVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  The Problem We Solve
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why We Exist
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Facility and maintenance work is often unstructured, lost in spreadsheets, WhatsApp, or manual processes. This leads to delays, inefficiency, accountability gaps, and operational confusion.
                </p>
                <p className="text-lg text-foreground font-semibold">
                  TechFacility Hub was created to fix this gap with a digital, structured, and accountable system.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-foreground mb-2">Manual Processes</h3>
                  <p className="text-sm text-muted-foreground">Paper-based workflows create delays and errors</p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-foreground mb-2">Lost Information</h3>
                  <p className="text-sm text-muted-foreground">Critical data scattered across platforms</p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-foreground mb-2">No Accountability</h3>
                  <p className="text-sm text-muted-foreground">Unclear ownership and responsibility</p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-foreground mb-2">Operational Confusion</h3>
                  <p className="text-sm text-muted-foreground">Lack of visibility into operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build - Our Focus */}
      <section ref={focusRef} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center ${focusVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What We Build
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Our Focus
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We build <strong className="text-foreground">workflow and ticketing platforms</strong> that help teams manage issues, track work, automate approvals, and gain operational insight — whether in hospitals, campuses, industrial facilities, or commercial buildings.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <CheckCircle2 className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-foreground mb-2">Issue Management</h3>
                <p className="text-sm text-muted-foreground">Track and resolve problems efficiently</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <CheckCircle2 className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-foreground mb-2">Work Tracking</h3>
                <p className="text-sm text-muted-foreground">Monitor progress in real-time</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <CheckCircle2 className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-foreground mb-2">Automated Approvals</h3>
                <p className="text-sm text-muted-foreground">Streamline decision workflows</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <CheckCircle2 className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-foreground mb-2">Operational Insights</h3>
                <p className="text-sm text-muted-foreground">Data-driven decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section ref={visionRef} className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className={`max-w-4xl mx-auto text-center ${visionVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Building the Future
            </h2>
            <p className="text-2xl leading-relaxed text-primary-foreground font-medium">
              Our vision is to become the <span className="font-bold">trusted technology partner</span> for maintenance and facility operations globally — bringing digital structure to every work environment where clarity and accountability matter.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve - Target Industries */}
      <section ref={industriesRef} className="py-20 lg:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-5xl mx-auto ${industriesVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Who We Serve
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Industries We Empower
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We serve organizations where structured maintenance workflows are essential
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className={`p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                    industriesVisible ? `scroll-scale-up stagger-${index + 1}` : 'scroll-hidden'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {industry.description}
                  </p>
                </div>
              ))}
              <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  And Many More
                </h3>
                <p className="text-muted-foreground text-sm">
                  Any organization requiring structured operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Why We're Different */}
      <section ref={approachRef} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`max-w-5xl mx-auto ${approachVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why We're Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We design systems grounded in real operational workflows, focusing on simplicity, usability, and practicality. We do not build generic tools — we build purpose-driven solutions for complex workplace operations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 ${
                    approachVisible ? `scroll-fade-up stagger-${index + 1}` : 'scroll-hidden'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">
                    Eliminate manual & paper-based processes across all facility operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">
                    Increase asset life and reduce operational downtime through proactive maintenance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">
                    Deliver real-time visibility and actionable insights for informed decision-making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">
                    Create a scalable platform that grows seamlessly with organizations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">
                    Transform every facility into a smart, connected digital ecosystem
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden border-t border-slate-200">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-very-gentle" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-very-gentle-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-gentle" />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Want to see how our solutions can help your team? Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="bg-white hover:bg-white/90 border-slate-300 hover:border-primary transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
