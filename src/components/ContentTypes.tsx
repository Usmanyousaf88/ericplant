import { Users, UserPlus, Building2, Award, Palette } from "lucide-react";

const ContentTypes = () => {
  const types = [
    {
      title: "UGC (Användargenererat Innehåll)",
      description: "Autentiskt innehåll skapat av användare och kunder som bygger förtroende",
      icon: Users,
      gradient: "from-[#FDE1D3] to-[#FFB088]"
    },
    {
      title: "IGC (Influencer-genererat Innehåll)",
      description: "Strategiskt innehåll skapat av influencers för att nå deras följare",
      icon: UserPlus,
      gradient: "from-[#D3E4FD] to-[#89B9FF]"
    },
    {
      title: "EGC (Anställd-genererat Innehåll)",
      description: "Genuint innehåll från anställda som visar företagskultur",
      icon: Building2,
      gradient: "from-[#F2FCE2] to-[#C3E5A8]"
    },
    {
      title: "AGC (Ambassadör-genererat Innehåll)",
      description: "Långsiktigt partnerskap som ger konsekvent varumärkesrepresentation",
      icon: Award,
      gradient: "from-[#FFDEE2] to-[#FFB1B9]"
    },
    {
      title: "CGC (Kreatörs-genererat Innehåll)",
      description: "Professionellt innehåll från dedikerade kreatörer",
      icon: Palette,
      gradient: "from-[#E2E2FC] to-[#B9B9FF]"
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
          {/* Left side - Text and Cards */}
          <div className="flex-1 space-y-16">
            {/* Header */}
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-dark">
                Olika Typer av
                <br />
                <span className="bg-gradient-to-r from-secondary-dark via-[#403E43] to-[#8E9196] bg-clip-text text-transparent">
                  TikTok Innehåll
                </span>
              </h2>
              <p className="text-lg text-secondary-dark/70 leading-relaxed">
                Olika innehållstyper tjänar unika syften i din TikTok-strategi. Vi hjälper dig välja och implementera rätt mix för dina mål.
              </p>
            </div>

            {/* Content Type Cards */}
            <div className="space-y-6">
              {types.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className={`w-full h-full bg-gradient-to-r ${type.gradient}`} />
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${type.gradient} bg-opacity-20`}>
                        <Icon className="w-6 h-6 text-secondary-dark group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-secondary-dark mb-2">
                          {type.title}
                        </h3>
                        <p className="text-secondary-dark/70 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative max-w-md lg:max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDE1D3]/20 via-[#D3E4FD]/20 to-[#F2FCE2]/20 rounded-3xl transform rotate-3 scale-105" />
            <img
              src="https://res.cloudinary.com/acasting-prod/image/upload/v1734039877/blog-articles/vdwh3uabmqgqjgqbmffh.jpg"
              alt="TikTok Content Types"
              className="relative rounded-2xl shadow-md w-full h-auto object-cover hover:scale-[1.01] transition-all duration-500 max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTypes;