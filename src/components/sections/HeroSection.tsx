import { Button } from "@/components/ui/button";
import { Music2, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-stage.jpg";
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const openWhatsApp = () => {
    window.open("https://wa.me/XXXXXXXXXXX", "_blank");
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Comunidad de Rumbo Sur en el escenario" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stage-dark/80 via-stage-dark/70 to-stage-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Music2 size={60} className="text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stage-foreground leading-tight">
            Encontrá tu voz.
            <br />
            <span className="text-primary">Cantá en comunidad.</span>
          </h1>

          <p className="text-xl md:text-2xl text-stage-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Rumbo Sur es una escuela de canto que acompaña tu proceso de desarrollo personal y artístico.
            Con práctica escénica, shows en vivo y un espacio cuidado para crecer.
          </p>

          <p className="text-lg text-stage-foreground/80 max-w-2xl mx-auto">
            Clases personalizadas, práctica escénica y shows en vivo durante todo el año.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Quiero mi clase de canto
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp} className="border-2 border-stage-foreground/30 text-stage-foreground  font-semibold text-lg px-8 py-6 rounded-full">
              <MessageCircle className="mr-2" size={20} />
              Escribinos por WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stage-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>;
};