import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhereUsedSection from "@/components/home/WhereUsedSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WhyTechFacilitySection from "@/components/home/WhyTechFacilitySection";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhereUsedSection />
      <FeaturesSection />
      <WhyTechFacilitySection />
      <TeamSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
