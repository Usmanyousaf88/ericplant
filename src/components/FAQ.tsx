import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Vad är UGC-innehåll?",
      answer: "UGC (User Generated Content) är autentiskt, varumärkesfokuserat innehåll skapat av användare, kreatörer eller kunder. Som TikTok Creative Partner specialiserar vi oss på att producera högkvalitativt UGC-innehåll som driver engagemang och bygger förtroende med din målgrupp. Detta innehåll är särskilt effektivt eftersom det uppfattas som mer genuint och trovärdigt av konsumenter."
    },
    {
      question: "Varför ska jag använda UGC-innehåll?",
      answer: "UGC-innehåll har bevisat sig vara mycket effektivt eftersom det är autentiskt och relaterbart. Studier visar att 83% av konsumenter litar på användargenererat innehåll för dess autenticitet. Det hjälper till att bygga trovärdighet, ökar engagemangsgraden och driver bättre konverteringsgrad jämfört med traditionell reklam. Dessutom ger det en konstant ström av färskt innehåll som håller ditt varumärke relevant."
    },
    {
      question: "Hur lång tid tar det att se resultat med UGC?",
      answer: "Resultaten varierar beroende på flera faktorer, men många av våra kunder ser märkbara förbättringar i engagemang inom de första 30 dagarna. För organisk tillväxt rekommenderar vi en 3-6 månaders strategi för att bygga en stark närvaro och se betydande resultat i form av följare och konverteringar."
    },
    {
      question: "Hur mycket kostar UGC-innehåll?",
      answer: "Vi erbjuder skräddarsydda paket baserade på dina specifika behov och mål. Kostnaden beror på faktorer som innehållsvolym, komplexitet och distributionsstrategi. Vi arbetar transparent med prismodeller som passar både mindre företag och större varumärken, med fokus på att maximera ROI för varje investerad krona."
    },
    {
      question: "Vad är skillnaden mellan UGC och influencer marketing?",
      answer: "Medan både UGC och influencer marketing är värdefulla marknadsföringsstrategier, finns det viktiga skillnader. UGC fokuserar på autentiskt innehåll skapat av vanliga användare eller dedikerade kreatörer, ofta med ett mer genuint och relaterbart tilltal. Influencer marketing använder etablerade profiler med stora följarskaror. Vi rekommenderar ofta en kombination av båda för bästa resultat."
    },
    {
      question: "Hur säkerställer ni innehållets kvalitet?",
      answer: "Vi har en rigorös kvalitetssäkringsprocess som inkluderar noggrann kreatörsscreening, tydliga varumärkesriktlinjer, och flera granskningssteg innan publicering. Vårt team av erfarna innehållsstrategier övervakar varje projekt för att säkerställa att innehållet möter både tekniska krav och varumärkesstandarder."
    },
    {
      question: "Kan ni hjälpa till med innehållsstrategi?",
      answer: "Ja, absolut! Vi erbjuder omfattande strategitjänster som inkluderar målgruppsanalys, innehållsplanering, trendspaning och prestationsoptimering. Vår strategiska approach är datadriven och anpassas kontinuerligt baserat på resultat och marknadstrender."
    },
    {
      question: "Hur mäter ni framgång?",
      answer: "Vi använder en kombination av KPI:er anpassade efter dina specifika mål, inklusive engagemang (likes, kommentarer, delningar), räckvidd, följartillväxt, konverteringar och ROI. Våra månadsrapporter ger detaljerad insikt i prestanda och rekommendationer för optimering."
    },
    {
      question: "Vilka typer av företag arbetar ni med?",
      answer: "Vi arbetar med företag av alla storlekar inom olika branscher, från e-handelsvarumärken till B2B-företag. Vår erfarenhet sträcker sig över mode, teknik, mat & dryck, skönhet och mer. Oavsett om du precis börjar på TikTok eller vill skala din befintliga närvaro kan vi hjälpa till."
    },
    {
      question: "Hur kommer ni igång med mitt företag?",
      answer: "Vi börjar med ett kostnadsfritt strategimöte där vi diskuterar dina mål, målgrupp och nuvarande utmaningar. Baserat på detta utvecklar vi en skräddarsydd strategi och handlingsplan. Efter godkännande påbörjar vi produktionen av innehåll, vanligtvis inom 1-2 veckor."
    },
    {
      question: "Äger vi rättigheterna till innehållet?",
      answer: "Ja, ni får fulla rättigheter till allt innehåll som skapas genom vårt samarbete. Detta inkluderar användning på andra plattformar och i andra marknadsföringskanaler. Vi säkerställer att alla nödvändiga avtal och rättigheter är på plats innan innehållet produceras."
    },
    {
      question: "Kan vi använda innehållet på andra plattformar?",
      answer: "Absolut! Allt innehåll vi skapar optimeras primärt för TikTok men designas för att fungera över flera plattformar. Vi kan även anpassa innehållet för specifika format som Instagram Reels, YouTube Shorts eller andra sociala medier utan extra kostnad."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            FAQ
          </h2>
          <p className="text-xl md:text-2xl text-primary-light font-display">
            Vanliga
          </p>
          <p className="text-xl md:text-2xl text-primary-light font-display mb-4">
            Frågor & Svar
          </p>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Allt du behöver veta om UGC-innehåll och våra tjänster
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-display font-medium text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-primary-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;