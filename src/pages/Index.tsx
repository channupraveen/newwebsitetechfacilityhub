import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemsAndIndustriesSection from "@/components/home/ProblemsAndIndustriesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustryUseCasesSection from "@/components/home/IndustryUseCasesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TrustSection from "@/components/home/TrustSection";
import TeamSection from "@/components/home/TeamSection";
import FAQSection from "@/components/home/FAQSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero Section - Clear headline, subheadline, CTA */}
      <HeroSection />
      
      {/* 2. Who Is This For + Problems We Solve + Solution Overview */}
      <ProblemsAndIndustriesSection />
      
      {/* 3. Features/Modules Section */}
      <FeaturesSection />
      
      {/* 4. Industry Use Cases */}
      <IndustryUseCasesSection />
      
      {/* 5. Why Choose Us */}
      <WhyChooseSection />
      
      {/* 6. Trust Signals */}
      <TrustSection />
      
      {/* 7. Meet The Founders */}
      <TeamSection />
      
      {/* 8. Testimonials */}
      <TestimonialsSection />
      
      {/* 9. FAQ */}
      <FAQSection />
      
      {/* 10. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
