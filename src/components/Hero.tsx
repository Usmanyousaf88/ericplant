import { ArrowRight, Heart, Award, Users, Check, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F6F6F7] to-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <div className="mb-12 group hover:scale-105 transition-all duration-500">
            <img 
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
              alt="TikTok Content" 
              className="w-[30%] rounded-xl shadow-2xl animate-fade-in hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in bg-gradient-to-r from-secondary-dark via-[#403E43] to-[#8E9196] bg-clip-text text-transparent">
            Skapa.
            <br />
            Engagera.
            <br />
            <span className="text-[#1A1F2C] opacity-90">Väx.</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-secondary-dark/70 max-w-2xl mb-14 animate-fade-in [animation-delay:200ms] font-light leading-relaxed">
            Vi är din tiktok-partner för att skapa autentiskt innehåll som når 
            din målgrupp och driver verklig tillväxt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:400ms]">
            <button className="flex items-center justify-center gap-2 bg-secondary-dark text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-xl">
              Se vårt arbete
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-dark px-8 py-4 rounded-full hover:bg-white transition-all duration-300 border border-gray-200/50 shadow-md hover:shadow-lg">
              Kontakta oss
            </button>
          </div>
        </div>

        {/* TikTok Partner Section */}
        <div className="mt-32 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left animate-fade-in [animation-delay:200ms]">
              <div className="inline-block">
                <div className="flex items-center gap-3 px-4 py-2 bg-[#FDE1D3]/30 rounded-full w-fit mb-4 group hover:bg-[#FDE1D3]/50 transition-all duration-300">
                  <Award className="w-5 h-5 text-secondary-dark group-hover:scale-110 transition-transform" />
                  <p className="text-secondary-dark font-display text-lg">
                    Officiell TikTok Partner
                  </p>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-secondary-dark via-[#403E43] to-[#8E9196] bg-clip-text text-transparent">
                  Kraften i
                  <br />
                  UGC Innehåll
                </h2>
              </div>
              
              <p className="text-secondary-dark/70 text-lg leading-relaxed max-w-xl">
                I dagens digitala landskap har UGC revolutionerat varumärkesmarknadsföring. Som TikTok-partner använder vi plattformens unika algoritm för att leverera innehåll som utbildar, underhåller och konverterar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="group hover:scale-105 transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-secondary-dark mb-2">83%</p>
                  <p className="text-secondary-dark/70 text-sm leading-relaxed">
                    av konsumenter föredrar autentisk varumärkeskommunikation framför traditionell reklam
                  </p>
                </div>
                
                <div className="group hover:scale-105 transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-secondary-dark mb-2">70%</p>
                  <p className="text-secondary-dark/70 text-sm leading-relaxed">
                    av konsumenter prioriterar personligt innehåll i sin varumärkesinteraktion
                  </p>
                </div>
                
                <div className="group hover:scale-105 transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-secondary-dark mb-2">#1</p>
                  <p className="text-secondary-dark/70 text-sm leading-relaxed">
                    TikToks algoritm levererar perfekt matchat innehåll till användare
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <button className="flex items-center justify-center gap-2 bg-secondary-dark text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-xl">
                  Starta Din Resa
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-dark px-8 py-4 rounded-full hover:bg-white transition-all duration-300 border border-gray-200/50 shadow-md hover:shadow-lg">
                  Se Vår Showreel
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:400ms]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FDE1D3]/20 via-[#D3E4FD]/20 to-[#F2FCE2]/20 rounded-3xl transform rotate-3 scale-105"></div>
              <img 
                src="https://res.cloudinary.com/acasting-prod/image/upload/v1734038138/blog-articles/m2cm59s7dej7iqupjqr6.png" 
                alt="TikTok Marketing Partner" 
                className="relative rounded-2xl shadow-lg w-[80%] mx-auto hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* UGC Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-dark mb-8 animate-fade-in">
            Varför Välja UGC?
          </h2>
          <p className="font-sans text-lg text-secondary-dark/70 mb-16 max-w-3xl animate-fade-in [animation-delay:100ms] leading-relaxed">
            I dagens digitala landskap är äkthet nyckeln. UGC-innehåll har revolutionerat hur varumärken ansluter till sin publik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Autentisk Koppling */}
            <div className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:200ms] hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#FDE1D3] text-[#403E43] group-hover:bg-[#403E43] group-hover:text-white transition-colors duration-300">
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-dark">Autentisk Koppling</h3>
              </div>
              <p className="font-sans text-secondary-dark/70 leading-relaxed">
                83% av konsumenter litar på användargenererat innehåll för dess äkthet
              </p>
            </div>

            {/* Bevisade Resultat */}
            <div className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:300ms] hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#D3E4FD] text-[#403E43] group-hover:bg-[#403E43] group-hover:text-white transition-colors duration-300">
                  <Check className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-dark">Bevisade Resultat</h3>
              </div>
              <p className="font-sans text-secondary-dark/70 leading-relaxed">
                Driv högre engagemang och konverteringar med personligt innehåll
              </p>
            </div>

            {/* TikTok Expertis */}
            <div className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:400ms] hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#F2FCE2] text-[#403E43] group-hover:bg-[#403E43] group-hover:text-white transition-colors duration-300">
                  <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-dark">TikTok Expertis</h3>
              </div>
              <p className="font-sans text-secondary-dark/70 leading-relaxed">
                Officiell TikTok Creative Partner med djup plattformskunskap
              </p>
            </div>

            {/* Kreativ Excellence */}
            <div className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:500ms] hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#FFDEE2] text-[#403E43] group-hover:bg-[#403E43] group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-dark">Kreativ Excellence</h3>
              </div>
              <p className="font-sans text-secondary-dark/70 leading-relaxed">
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
