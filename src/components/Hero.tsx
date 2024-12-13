import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <div className="mb-12">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Content" 
              className="w-[30%] rounded-xl shadow-2xl animate-fade-in hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6 animate-fade-in bg-gradient-to-r from-secondary-dark to-primary bg-clip-text text-transparent">
            Skapa.
            <br />
            Engagera.
            <br />
            <span className="text-[#FF4D4D] opacity-90">Väx.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-secondary-dark/80 max-w-2xl mb-14 animate-fade-in [animation-delay:200ms] font-light leading-relaxed">
            vi är din tiktok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:400ms]">
            <button className="flex items-center justify-center gap-2 bg-secondary-dark text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-xl">
              se vårt arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-dark px-8 py-4 rounded-full hover:bg-white transition-all duration-300 border border-gray-200 shadow-md hover:shadow-lg">
              kontakta oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;