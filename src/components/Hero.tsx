import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8f3f1] to-[#f5e9e6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-left max-w-3xl">
          <div className="mb-12">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Marketing Partners" 
              className="w-[280px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Skapa.
            <br />
            Engagera.
            <br />
            <span className="text-[#FF4D4D]">Väx.</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-secondary-dark/70 max-w-2xl mb-14 font-light leading-relaxed">
            Vi är din tiktok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center gap-2 bg-[#1A1F2C] text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group">
              Se vårt arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-[#1A1F2C] px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm">
              Kontakta oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;