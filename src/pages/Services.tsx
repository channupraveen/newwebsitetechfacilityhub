import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Package,
  SprayCan,
  WashingMachine,
  Workflow,
  Gauge,
  ClipboardCheck,
  FileText,
  CreditCard,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Maintenance & Technician Management",
    description:
      "Comprehensive work order management with real-time technician tracking and automatic escalations.",
    features: [
      "Work orders, breakdowns & preventive maintenance",
      "Technician tracking with time stamps",
      "Automatic escalations & service history",
    ],
  },
  {
    icon: Package,
    title: "Asset Management",
    description:
      "Complete lifecycle tracking with QR code tagging and performance analytics.",
    features: [
      "Complete lifecycle tracking",
      "Warranty/AMC alerts",
      "QR code tagging",
      "Asset performance analytics",
    ],
  },
  {
    icon: SprayCan,
    title: "Housekeeping Digitization",
    description:
      "Digital task scheduling and cleaning checklist automation with area-wise tracking.",
    features: [
      "Task scheduling & attendance monitoring",
      "Cleaning checklist automation",
      "Area-wise performance tracking",
    ],
  },
  {
    icon: WashingMachine,
    title: "Laundry Management",
    description:
      "End-to-end linen tracking with wash cycle management and delivery scheduling.",
    features: [
      "Linen tracking across hospital/hotel units",
      "Wash cycles, load tracking & billing",
      "Inventory & delivery management",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow & SOP Automation",
    description:
      "Create custom digital workflows with automated reminders and approval processes.",
    features: [
      "Create custom digital workflows",
      "Auto-reminders, approvals, notifications",
      "Zero manual dependency",
    ],
  },
  {
    icon: Gauge,
    title: "Utilities & Metering",
    description:
      "Digital meter readings with consumption analysis and energy efficiency insights.",
    features: [
      "Digital meter readings",
      "Consumption analysis",
      "Energy efficiency insights",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Audit Management",
    description:
      "Safety audits, inspections, and compliance forms with automated reporting.",
    features: [
      "Safety audits, inspections, and compliance forms",
      "Automated reports & corrective actions",
      "Easy tracking of regulatory standards",
    ],
  },
  {
    icon: FileText,
    title: "Vendor & Contract Management",
    description:
      "Vendor onboarding with SLA tracking and performance rating systems.",
    features: [
      "Vendor onboarding & SLA tracking",
      "Contract renewals, alerts & performance rating",
    ],
  },
  {
    icon: CreditCard,
    title: "Finance & Billing",
    description:
      "Comprehensive expense tracking with budget allocation and automated financial reports.",
    features: [
      "Expense tracking",
      "Budget allocation",
      "Auto-generated financial reports",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digital Facility Management Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive suite of digital tools designed to streamline every
              aspect of your facility operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Card */}
                <div className="lg:w-1/3">
                  <div className="p-10 rounded-3xl bg-gradient-primary shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-2xl" />
                    </div>
                    <service.icon className="w-20 h-20 text-primary-foreground relative" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
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
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
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
            <p className="text-lg text-primary-foreground/70 mb-8">
              Let us show you how TechFacilityHub can transform your facility
              management.
            </p>
            <Link to="/contact">
              <Button
                variant="accent"
                size="xl"
                className="group"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
