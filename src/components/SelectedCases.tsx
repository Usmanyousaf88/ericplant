import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const SelectedCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-block">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary relative">
              Utvalda Case
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary-light font-display">
            Framgångsrika
          </p>
          <p className="text-xl md:text-2xl text-primary-light font-display mb-8">
            Kundprojekt
          </p>
          <Button 
            variant="outline" 
            className="mt-6 group hover:bg-primary hover:text-white transition-all duration-300"
          >
            Se Alla Case
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Case */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-full bg-gradient-to-br from-[#1A1F2C] to-[#403E43]">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
                    alt="Acasting Case Study"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
                        UGC
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                        Organisk Tillväxt
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
                        B2B
                      </span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                        B2C
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-primary">Acasting</h3>
                    <p className="text-primary-light mb-6">
                      Organisk tillväxt genom UGC
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        30M+
                      </span>
                      <span className="text-sm text-primary-light">Visningar</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="ml-auto group hover:bg-primary hover:text-white transition-all duration-300"
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