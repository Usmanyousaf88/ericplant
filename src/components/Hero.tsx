import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F0EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-left max-w-3xl">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/5ca72c9f-b0e9-4646-a79d-6f5a9705dd64.png" 
              alt="TikTok Marketing Partners" 
              className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
            />
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Skapa.
            <br />
            Engagera.
            <br />
            <span className="text-[#FF4D4D]">Väx.</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-[#1A1F2C]/70 max-w-2xl mb-14 font-light leading-relaxed">
            Vi är din tiktok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center gap-2 bg-[#1A1F2C] text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group">
              Se vårt arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-[#1A1F2C] px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300">
              Kontakta oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;