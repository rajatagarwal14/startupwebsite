import Hero from '@/components/Hero';
import EducationIntro from '@/components/EducationIntro';
import DecisionQuiz from '@/components/DecisionQuiz';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustStats from "@/components/TrustStats";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <EducationIntro />
      <DecisionQuiz />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <TrustStats />
      <FAQ />
      <FinalCTA />
    </>
  );
}
