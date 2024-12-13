import { Target, Video, Share, BarChart } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      title: "Strategi",
      description: "Vi analyserar ditt varumärke och utvecklar en skräddarsydd TikTok-strategi",
      icon: Target,
      gradient: "from-[#FDE1D3] to-[#FFB088]",
      delay: "0"
    },
    {
      title: "Skapande",
      description: "Våra kreatörer producerar engagerande, trendanpassat innehåll",
      icon: Video,
      gradient: "from-[#D3E4FD] to-[#89B9FF]",
      delay: "100"
    },
    {
      title: "Distribution",
      description: "Strategisk innehållsdistribution för maximal genomslagskraft",
      icon: Share,
      gradient: "from-[#F2FCE2] to-[#C3E5A8]",
      delay: "200"
    },
    {
      title: "Analys",
      description: "Datadriven optimering för kontinuerlig förbättring",
      icon: BarChart,
      gradient: "from-[#FFDEE2] to-[#FFB1B9]",
      delay: "300"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Unique background design */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-secondary-dark mb-4 relative inline-block">
            Från Vision Till
            <span className="block">Viral Framgång</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FDE1D3] via-[#D3E4FD] to-[#F2FCE2] rounded-full transform scale-x-0 animate-[scaleX_0.5s_ease-out_forwards]" />
          </h2>
          <p className="text-secondary-dark/70 max-w-2xl mx-auto mt-6 text-lg">
            En systematisk approach för att skapa viralt TikTok-innehåll som engagerar och konverterar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Decorative connecting lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FDE1D3] via-[#D3E4FD] to-[#F2FCE2] transform -translate-y-1/2" />
          
          {processes.map((process, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards ${process.delay}ms`,
                opacity: 0,
              }}
            >
              {/* Process number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-sm font-semibold text-secondary-dark border border-gray-100">
                {index + 1}
              </div>
              
              <div className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${process.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative">
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-6 h-6 text-secondary-dark" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-secondary-dark mb-3">
                    {process.title}
                  </h3>
                  <p className="text-secondary-dark/70">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;