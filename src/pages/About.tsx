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
  QrCode,
  Lock,
  Headphones,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Eliminate Manual Processes",
    description: "Replace paper-based work with smart digital automation",
  },
  {
    icon: Zap,
    title: "Increase Asset Life",
    description: "Reduce operational downtime through proactive maintenance",
  },
  {
    icon: Eye,
    title: "Real-time Visibility",
    description: "Deliver actionable insights for informed decision-making",
  },
  {
    icon: Rocket,
    title: "Scalable Platform",
    description: "Grow seamlessly as your organization expands",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Powerful Automation Engine",
    description: "Advanced workflows that eliminate repetitive tasks",
  },
  {
    icon: Shield,
    title: "Custom Workflows",
    description: "Tailored solutions for every industry vertical",
  },
  {
    icon: Smartphone,
    title: "Mobile + Web Access",
    description: "Full functionality for all staff, anywhere",
  },
  {
    icon: QrCode,
    title: "QR-based Tracking",
    description: "Instant asset identification and reporting",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security for your sensitive data",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated onboarding and ongoing assistance",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              TechFacilityHub is a technology-driven Facility Management platform
              built to eliminate manual work and bring complete digital
              transformation to organizations of all sizes. We empower teams with
              automation, visibility, and intelligent insights to operate more
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Objective
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Simplifying & Modernizing Facility Operations
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To simplify and modernize facility operations through a scalable
                  digital platform that increases efficiency, transparency, and
                  operational excellence for organizations worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="p-5 rounded-2xl bg-card border border-border shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {value.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Vision */}
              <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To become the most trusted and innovative digital facility
                  management platform that empowers industries with smart,
                  automated, and data-driven operations.
                </p>
              </div>

              {/* Mission */}
              <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Eliminate manual & paper-based processes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Increase asset life and reduce operational downtime
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Deliver real-time visibility and actionable insights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Create a platform that scales with organizations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Transform every facility into a smart digital ecosystem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Difference
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Makes Us Different?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge technology with deep industry expertise to
              deliver unmatched facility management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Facility?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the digital revolution in facility management today.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
