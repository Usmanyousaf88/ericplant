import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContentTypes from "../components/ContentTypes";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ContentTypes />
    </div>
  );
};

export default Index;