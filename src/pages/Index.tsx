import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <IndustriesSection />
      <ImpactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
