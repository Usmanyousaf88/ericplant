import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContentTypes from "../components/ContentTypes";
import ProcessSection from "../components/ProcessSection";
import UGCBenefits from "../components/UGCBenefits";
import SelectedCases from "../components/SelectedCases";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ContentTypes />
      <UGCBenefits />
      <SelectedCases />
      <ProcessSection />
      <FAQ />
    </div>
  );
};

export default Index;