import HeroSection from "@/components/HeroSection";
import ServiceRating from "@/components/ServiceRating";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceRating />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
};

export default Index;
