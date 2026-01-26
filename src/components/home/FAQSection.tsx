import { useState } from "react";
import { ChevronRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What is TechFacilityHub?",
    answer: "TechFacilityHub is a modern facility management SaaS platform designed to help hospitals and large facilities manage non-clinical operations efficiently. It includes modules for maintenance tickets, housekeeping, asset tracking, vendor management, compliance checklists, and more.",
  },
  {
    question: "Is TechFacilityHub suitable for hospitals in India?",
    answer: "Yes! TechFacilityHub is built specifically for Indian hospitals and enterprises. It includes NABH-ready compliance structures, supports Indian currency and tax requirements, and is priced affordably for the Indian healthcare market.",
  },
  {
    question: "Do I need coding skills to use TechFacilityHub?",
    answer: "Not at all. TechFacilityHub is designed for non-technical users. The platform features an intuitive interface that hospital staff, administrators, and technicians can use without any coding knowledge.",
  },
  {
    question: "How secure is the platform?",
    answer: "TechFacilityHub is a cloud-hosted SaaS platform with secure authentication, role-based access control, and data encryption. We follow industry best practices for healthcare data security and privacy.",
  },
  {
    question: "Can TechFacilityHub handle multiple hospital locations?",
    answer: "Yes! Our Enterprise plan supports multi-facility management. You can manage multiple hospitals or locations from a single dashboard with location-specific permissions, reports, and workflows.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for Starter plans, priority support for Professional plans, and 24/7 premium support with a dedicated account manager for Enterprise customers. We also provide onboarding assistance and training.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free Starter plan to help you explore the platform. You can also request a personalized demo to see how TechFacilityHub can work for your specific facility needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50" ref={sectionRef} id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'scroll-fade-up' : 'scroll-hidden'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about TechFacilityHub
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-border last:border-0 ${
                isVisible ? `scroll-fade-up stagger-${Math.min(index + 1, 7)}` : 'scroll-hidden'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? "bg-primary border-primary rotate-90" : "group-hover:border-primary"
                }`}>
                  <ChevronRight className={`w-5 h-5 transition-colors ${
                    openIndex === index ? "text-white" : "text-muted-foreground group-hover:text-primary"
                  }`} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
