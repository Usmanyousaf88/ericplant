import { Target, Video, Share, BarChart } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      title: "Strategi",
      description: "Vi analyserar ditt varumärke och utvecklar en skräddarsydd TikTok-strategi",
      icon: Target,
      gradient: "from-[#FDE1D3] to-[#FFB088]"
    },
    {
      title: "Skapande",
      description: "Våra kreatörer producerar engagerande, trendanpassat innehåll",
      icon: Video,
      gradient: "from-[#D3E4FD] to-[#89B9FF]"
    },
    {
      title: "Distribution",
      description: "Strategisk innehållsdistribution för maximal genomslagskraft",
      icon: Share,
      gradient: "from-[#F2FCE2] to-[#C3E5A8]"
    },
    {
      title: "Analys",
      description: "Datadriven optimering för kontinuerlig förbättring",
      icon: BarChart,
      gradient: "from-[#FFDEE2] to-[#FFB1B9]"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-[#F6F6F7] to-[#F1F1F1]" />
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#FDE1D3]/10 via-[#D3E4FD]/10 to-[#F2FCE2]/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#D3E4FD]/10 via-[#F2FCE2]/10 to-[#FDE1D3]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-secondary-dark mb-4">
            Från Vision Till
            <span className="block">Viral Framgång</span>
          </h2>
          <p className="text-secondary-dark/70 max-w-2xl mx-auto">
            En systematisk approach för att skapa viralt TikTok-innehåll som engagerar och konverterar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${process.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <process.icon className="w-8 h-8 text-secondary-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary-dark mb-3">
                  {process.title}
                </h3>
                <p className="text-secondary-dark/70">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;