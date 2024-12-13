import { Smartphone, Home, MessageSquare, Users, Sparkles } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      title: "Mobil-Först Innehåll",
      description: "Innehåll inspelat med mobil presterar ofta bättre än professionellt kamerainspelat material",
      icon: Smartphone,
      gradient: "from-[#FDE1D3] to-[#FFB088]"
    },
    {
      title: "Autentiska Miljöer",
      description: "Naturliga miljöer som kontor eller hem skapar mer relaterbart innehåll",
      icon: Home,
      gradient: "from-[#D3E4FD] to-[#89B9FF]"
    },
    {
      title: "Varumärkesintegration",
      description: "Vi integrerar ditt varumärkes budskap samtidigt som vi behåller autenticitet",
      icon: MessageSquare,
      gradient: "from-[#F2FCE2] to-[#C3E5A8]"
    },
    {
      title: "Kreatörssamarbete",
      description: "Samarbeta med erfarna kreatörer som förstår din varumärkesröst",
      icon: Users,
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
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side - Text */}
          <div className="flex-1 space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D946EF]" />
              <p className="text-[#D946EF] font-display text-lg font-semibold">
                Vår Process
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-secondary-dark mb-6 leading-tight">
              Skapa Effektivt
              <span className="block bg-gradient-to-r from-secondary-dark via-[#403E43] to-[#8E9196] bg-clip-text text-transparent">
                UGC Innehåll
              </span>
            </h2>
            <p className="text-lg text-secondary-dark/70 leading-relaxed">
              Baserat på vår erfarenhet med ledande varumärken som Acasting har vi identifierat nyckelelement som gör UGC-innehåll framgångsrikt
            </p>
          </div>

          {/* Right side - Process Cards */}
          <div className="flex-1">
            <div className="grid gap-6">
              {processes.map((process, index) => {
                const Icon = process.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className={`w-full h-full bg-gradient-to-r ${process.gradient}`} />
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${process.gradient} bg-opacity-20`}>
                        <Icon className="w-6 h-6 text-secondary-dark group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-secondary-dark mb-2">
                          {process.title}
                        </h3>
                        <p className="text-secondary-dark/70 leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;