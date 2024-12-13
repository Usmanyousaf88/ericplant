import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl relative">
          <div className="mb-6 inline-flex items-center space-x-2 bg-black/5 px-3 py-1 rounded-full">
            <img src="/lovable-uploads/bcbbdd9d-d2d8-4bfc-a201-0c574268ba7b.png" alt="TikTok Partner" className="h-5 w-auto" />
            <span className="text-sm text-secondary-dark">Marketing partners</span>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-dark tracking-tight leading-tight mb-4 animate-fade-in">
              Skapa.
              <br />
              Engagera.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Väx.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary-dark/80 max-w-2xl mb-12 animate-fade-in [animation-delay:200ms]">
              Vi är din TikTok-partner för att skapa autentiskt innehåll som når 
              din målgrupp och driver verklig tillväxt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-300 group shadow-lg shadow-primary/20">
                Se vårt arbete
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-secondary-dark px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-md">
                Kontakta oss
              </button>
            </div>
          </div>

          <div className="absolute right-[-40%] top-0 w-[80%] h-full z-0 opacity-90 animate-fade-in [animation-delay:600ms]">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Content Creation" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;