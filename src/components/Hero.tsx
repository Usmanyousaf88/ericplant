import { ArrowRight, Heart, Award, Users, Check, BrandTiktok } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fdfcfb] to-[#e2d1c3]">
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
            Vi är din tiktok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:400ms]">
            <button className="flex items-center justify-center gap-2 bg-secondary-dark text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-xl">
              Se vårt arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-dark px-8 py-4 rounded-full hover:bg-white transition-all duration-300 border border-gray-200 shadow-md hover:shadow-lg">
              Kontakta oss
            </button>
          </div>
        </div>

        {/* UGC Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-8 animate-fade-in">
            Varför Välja UGC?
          </h2>
          <p className="text-lg text-secondary-dark/80 mb-16 max-w-3xl animate-fade-in [animation-delay:100ms]">
            I dagens digitala landskap är äkthet nyckeln. UGC-innehåll har revolutionerat hur varumärken ansluter till sin publik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Autentisk Koppling */}
            <div className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:200ms]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark">Autentisk Koppling</h3>
              </div>
              <p className="text-secondary-dark/80">
                83% av konsumenter litar på användargenererat innehåll för dess äkthet
              </p>
            </div>

            {/* Bevisade Resultat */}
            <div className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:300ms]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Check className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark">Bevisade Resultat</h3>
              </div>
              <p className="text-secondary-dark/80">
                Driv högre engagemang och konverteringar med personligt innehåll
              </p>
            </div>

            {/* TikTok Expertis */}
            <div className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:400ms]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <BrandTiktok className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark">TikTok Expertis</h3>
              </div>
              <p className="text-secondary-dark/80">
                Officiell TikTok Creative Partner med djup plattformskunskap
              </p>
            </div>

            {/* Kreativ Excellence */}
            <div className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:500ms]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark">Kreativ Excellence</h3>
              </div>
              <p className="text-secondary-dark/80">
                Professionella UGC-kreatörer som levererar högkvalitativt innehåll
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;