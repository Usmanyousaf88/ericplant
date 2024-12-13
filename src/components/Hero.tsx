import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <div className="mb-16">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Content" 
              className="w-[30%] rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary">Skapa.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-dark">Engagera.</span>
            <br />
            <span className="text-[#FF4D4D]">Väx.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-secondary-dark/70 max-w-2xl mb-16 leading-relaxed animate-fade-in [animation-delay:200ms]">
            Vi är din TikTok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in [animation-delay:400ms]">
            <button className="group bg-gradient-to-r from-secondary-dark to-primary hover:opacity-90 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center gap-3 text-lg font-medium">
                Se Vårt Arbete
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group bg-white text-secondary-dark px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100">
              <span className="flex items-center justify-center gap-3 text-lg font-medium">
                Kontakta Oss
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;