import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const SelectedCases = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-[#F6F6F7] to-[#F1F1F1]" />
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#FDE1D3]/10 via-[#D3E4FD]/10 to-[#F2FCE2]/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#D3E4FD]/10 via-[#F2FCE2]/10 to-[#FDE1D3]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4 bg-gradient-to-r from-secondary-dark via-[#403E43] to-[#8E9196] bg-clip-text text-transparent">
            Utvalda Case
          </h2>
          <p className="text-xl text-secondary-dark/70 font-display mb-2">
            Framgångsrika
          </p>
          <p className="text-xl text-secondary-dark/70 font-display mb-8">
            Kundprojekt
          </p>
          <Button 
            variant="outline" 
            className="group hover:bg-secondary-dark hover:text-white transition-all duration-300"
          >
            Se Alla Case
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Case */}
        <div className="max-w-4xl mx-auto animate-fade-in [animation-delay:200ms]">
          <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-white/80 backdrop-blur-sm border border-gray-100">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-full bg-gradient-to-br from-[#1A1F2C] to-[#403E43] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
                    alt="Acasting Case Study"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white/50 to-gray-50/30 backdrop-blur-sm">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-purple-100/80 text-purple-800 rounded-full text-sm font-medium border border-purple-200/50 backdrop-blur-sm hover:bg-purple-100 transition-colors">
                        UGC
                      </span>
                      <span className="px-3 py-1 bg-blue-100/80 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50 backdrop-blur-sm hover:bg-blue-100 transition-colors">
                        Organisk Tillväxt
                      </span>
                      <span className="px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200/50 backdrop-blur-sm hover:bg-emerald-100 transition-colors">
                        B2B
                      </span>
                      <span className="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-full text-sm font-medium border border-amber-200/50 backdrop-blur-sm hover:bg-amber-100 transition-colors">
                        B2C
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-secondary-dark">Acasting</h3>
                    <p className="text-secondary-dark/70 mb-6">
                      Organisk tillväxt genom UGC
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        30M+
                      </span>
                      <span className="text-sm text-secondary-dark/70">Visningar</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="ml-auto group hover:bg-secondary-dark hover:text-white transition-all duration-300"
                    >
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SelectedCases;