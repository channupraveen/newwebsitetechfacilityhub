import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "to get started",
    description: "Perfect for small facilities exploring digital management.",
    features: [
      "Up to 50 Assets",
      "Basic Ticket Management",
      "5 User Accounts",
      "Email Support",
      "Standard Reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹15,000",
    period: "/month",
    description: "Ideal for hospitals needing advanced tools and insights.",
    features: [
      "Unlimited Assets",
      "Full Ticket & SLA Management",
      "Housekeeping Module",
      "Asset Lifecycle Tracking",
      "Vendor & AMC Management",
      "Priority Support",
      "Advanced Analytics",
    ],
    cta: "Request Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For hospital chains needing full control and customization.",
    features: [
      "Multi-facility Support",
      "Dedicated Account Manager",
      "Custom Integrations",
      "NABH Compliance Ready",
      "On-premise Option",
      "24/7 Premium Support",
      "Custom Workflows",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef} id="pricing">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Flexible & Affordable<br />Pricing for Indian Hospitals
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay only for what you use. Monthly & annual plans available with custom pricing for enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-primary text-white shadow-2xl shadow-primary/25 scale-105 z-10"
                  : "bg-white border border-border hover:border-primary/20 hover:shadow-xl"
              } ${isVisible ? `scroll-blur-in stagger-${index + 1}` : 'scroll-hidden'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-white text-primary text-xs font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-lg font-semibold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-white/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block">
                <Button
                  variant={plan.popular ? "secondary" : "outline"}
                  className={`w-full rounded-full h-12 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                      : "border-2 hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Contact for Custom Quote */}
        <div className={`text-center ${isVisible ? 'scroll-fade-up stagger-4' : 'scroll-hidden'}`}>
          <p className="text-muted-foreground mb-4">Need a personalized quote for your hospital?</p>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full gap-2">
              <MessageCircle className="w-4 h-4" />
              Contact us for custom pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
