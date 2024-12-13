import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContentTypes from "../components/ContentTypes";
import ProcessSection from "../components/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ContentTypes />
      <ProcessSection />
    </div>
  );
};

export default Index;