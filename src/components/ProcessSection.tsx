import { Smartphone, Home, MessageSquare, Users } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      title: "Mobil-Först Innehåll",
      description: "Innehåll inspelat med mobil presterar ofta bättre än professionellt kamerainspelat material",
      icon: Smartphone,
      gradient: "from-[#8B5CF6] to-[#D946EF]"
    },
    {
      title: "Autentiska Miljöer",
      description: "Naturliga miljöer som kontor eller hem skapar mer relaterbart innehåll",
      icon: Home,
      gradient: "from-[#D946EF] to-[#F97316]"
    },
    {
      title: "Varumärkesintegration",
      description: "Vi integrerar ditt varumärkes budskap samtidigt som vi behåller autenticitet",
      icon: MessageSquare,
      gradient: "from-[#F97316] to-[#0EA5E9]"
    },
    {
      title: "Kreatörssamarbete",
      description: "Samarbeta med erfarna kreatörer som förstår din varumärkesröst",
      icon: Users,
      gradient: "from-[#0EA5E9] to-[#8B5CF6]"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-[#1a1f2c] to-[#2d1f3f]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block">
            <p className="text-[#8B5CF6] font-display text-lg font-semibold mb-3">
              Vår Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Skapa Effektivt
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
                UGC Innehåll
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-300/90 leading-relaxed mt-6">
            Baserat på vår erfarenhet med ledande varumärken som Acasting har vi identifierat nyckelelement som gör UGC-innehåll framgångsrikt
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-r ${process.gradient}`} />
                </div>
                <div className="relative flex flex-col items-start gap-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${process.gradient} bg-opacity-10`}>
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-300/90 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;