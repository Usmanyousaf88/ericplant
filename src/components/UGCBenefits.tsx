import { Heart, Award, Users, ChartBarIcon } from "lucide-react";

const UGCBenefits = () => {
  const benefits = [
    {
      icon: ChartBarIcon,
      title: "Ökat Engagemang",
      description: "UGC-innehåll genererar 6.9x högre engagemang än varumärkesskapat innehåll",
      gradient: "from-[#FDE1D3] to-[#FFB088]"
    },
    {
      icon: Award,
      title: "Bygger Förtroende",
      description: "83% av konsumenter litar mer på användargenererat innehåll än traditionell reklam",
      gradient: "from-[#D3E4FD] to-[#88B7FF]"
    },
    {
      icon: Heart,
      title: "Autentisk Koppling",
      description: "Skapa genuina kopplingar med din målgrupp genom relaterbart innehåll",
      gradient: "from-[#F2FCE2] to-[#A3FF88]"
    },
    {
      icon: Users,
      title: "Bättre Konverteringar",
      description: "UGC leder till 29% högre webbkonverteringar än kampanjer utan det",
      gradient: "from-[#FFDEE2] to-[#FF88A3]"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-secondary-dark mb-4">
            Fördelar med UGC
          </h2>
          <h3 className="text-xl sm:text-2xl font-display text-secondary-dark/80 mb-4">
            Varför UGC Fungerar
          </h3>
          <p className="text-secondary-dark/70 max-w-2xl mx-auto">
            Upptäck kraften i autentiskt, användargenererat innehåll för att driva verkliga affärsresultat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-dark/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCBenefits;