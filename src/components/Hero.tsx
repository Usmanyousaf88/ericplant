import { ArrowRight, Video, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-primary-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-dark mb-6">
            Din TikTok-framgång <br />
            <span className="text-primary">börjar här</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-8">
            Vi hjälper företag att nå sin fulla potential på TikTok genom 
            professionellt innehåll och strategisk marknadsföring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
              Boka konsultation
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-secondary-dark px-8 py-3 rounded-full hover:bg-gray-50 transition-colors border border-gray-200">
              Se våra tjänster
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <Video className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professionellt Innehåll</h3>
            <p className="text-secondary">Skräddarsytt innehåll som engagerar din målgrupp</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beprövad Strategi</h3>
            <p className="text-secondary">Datadriven approach för maximalt resultat</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dedikerat Team</h3>
            <p className="text-secondary">Expertis inom sociala medier och marknadsföring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;