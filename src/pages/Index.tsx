import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServiceRating from "@/components/ServiceRating";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TeamSection from "@/components/TeamSection";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ServiceRating />
      <TargetAudienceSection />
      <TeamSection />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
};

export default Index;
