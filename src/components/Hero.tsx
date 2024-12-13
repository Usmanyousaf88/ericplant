import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <div className="mb-12">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Content" 
              className="w-full max-w-md rounded-lg shadow-xl animate-fade-in"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-dark tracking-tight leading-tight mb-4 animate-fade-in">
            Skapa.
            <br />
            Engagera.
            <br />
            <span className="text-[#FF4D4D]">Väx.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-secondary-dark/80 max-w-2xl mb-12 animate-fade-in [animation-delay:200ms]">
            Vi är din TikTok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full hover:bg-secondary-dark transition-all duration-300 group">
              Se Vårt Arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-secondary-dark px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200">
              Kontakta Oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;