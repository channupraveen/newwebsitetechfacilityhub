import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Maintenance & Ticket Management",
    description:
      "Comprehensive work order management with real-time technician tracking and automatic escalations.",
    features: [
      "Work orders, breakdowns & preventive maintenance",
      "Technician tracking with time stamps",
      "Automatic escalations & service history",
      "SLA tracking & performance reports",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Asset Management",
    description:
      "Complete lifecycle tracking with QR code tagging and performance analytics.",
    features: [
      "Complete lifecycle tracking",
      "Warranty/AMC alerts",
      "QR code tagging",
      "Asset performance analytics",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Housekeeping Management",
    description:
      "Digital task scheduling and cleaning checklist automation with area-wise tracking.",
    features: [
      "Task scheduling & attendance monitoring",
      "Cleaning checklist automation",
      "Area-wise performance tracking",
      "Staff performance reports",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Laundry Management",
    description:
      "End-to-end linen tracking with wash cycle management and delivery scheduling.",
    features: [
      "Linen tracking across hospital/hotel units",
      "Wash cycles, load tracking & billing",
      "Inventory & delivery management",
      "Loss tracking & cost control",
    ],
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "NABH Compliance & Checklists",
    description:
      "Complete NABH accreditation support with digital checklists, audits, and compliance tracking for hospitals.",
    features: [
      "NABH standard checklists & documentation",
      "Pre-assessment & mock audit support",
      "Facility Management Entry Level (FMEL) compliance",
      "Biomedical equipment safety checklists",
      "Infection control & safety audits",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Workflow & SOP Automation",
    description:
      "Create custom digital workflows with automated reminders and approval processes.",
    features: [
      "Create custom digital workflows",
      "Auto-reminders, approvals, notifications",
      "Zero manual dependency",
      "Department-specific approvals",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Vendor & AMC Management",
    description:
      "Vendor onboarding with SLA tracking and performance rating systems.",
    features: [
      "Vendor onboarding & SLA tracking",
      "Contract renewals & alerts",
      "Performance rating system",
      "AMC & CMC management",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Compliance & Audit Management",
    description:
      "Safety audits, inspections, and compliance forms with automated reporting.",
    features: [
      "Safety audits & inspections",
      "Fire safety compliance checklists",
      "Automated reports & corrective actions",
      "Regulatory standards tracking",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "User & Role Management",
    description:
      "Complete role-based access control with permissions for every user type.",
    features: [
      "Super Admin, Hospital Admin roles",
      "Department Heads & Technicians",
      "Controlled permissions & visibility",
      "Activity logs & audit trails",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dashboards & Reports",
    description:
      "Comprehensive analytics with SLA performance reports and department-wise insights.",
    features: [
      "SLA performance reports",
      "Ticket & asset analytics",
      "Department-wise insights",
      "Management dashboards",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Modern facility and technology"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/80"></div>
          {/* Animated gradient circles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-gentle" />
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse-gentle-delayed" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Digital Facility Management Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Comprehensive suite of digital tools designed to streamline every
              aspect of your facility operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } ${servicesVisible ? `scroll-fade-up stagger-${(index % 6) + 1}` : 'scroll-hidden'}`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let us show you how TechFacilityHub can transform your facility
              management.
            </p>
            <Link to="/contact">
              <Button
                variant="accent"
                size="xl"
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
