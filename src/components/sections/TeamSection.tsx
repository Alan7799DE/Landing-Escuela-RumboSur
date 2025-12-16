import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import samantaPhoto from "@/assets/samanta.jpg";
import raulPhoto from "@/assets/raul.jpg";

export const TeamSection = () => {
  const isMobile = useIsMobile();

  const handleCardClick = (url: string) => {
    if (!isMobile) {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="sobre-nosotros" className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Quiénes somos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una pareja de artistas que vive de la música y acompaña a otros a conectar con su voz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Samanta */}
            <div 
              onClick={() => handleCardClick("https://www.youtube.com/@samantamusella")}
              className={`bg-background rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in ${!isMobile ? 'cursor-pointer' : ''}`}
            >
              <div className="space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                  <img src={samantaPhoto} alt="Samanta Musella" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-3xl font-bold text-center">Samanta Musella</h3>
                <p className="text-center text-muted-foreground font-semibold">Cantora popular y vocal coach</p>
                <p className="text-center leading-relaxed">
                  Artista con una trayectoria profunda en la música popular. Se dedica a acompañar procesos
                  de desarrollo vocal y personal, ayudando a cada persona a encontrar su voz única y
                  auténtica.
                </p>
              </div>
            </div>

            {/* Raúl */}
            <div 
              onClick={() => handleCardClick("https://youtube.com/@unpasitomasalfondo")}
              className={`bg-background rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in ${!isMobile ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                  <img src={raulPhoto} alt="Raúl Bervejillo" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-3xl font-bold text-center">Raúl Bervejillo</h3>
                <p className="text-center text-muted-foreground font-semibold">Multi-instrumentista, cantautor y arreglador</p>
                <p className="text-center leading-relaxed">
                  Músico versátil que domina múltiples instrumentos. Se especializa en acompañamiento
                  en vivo, arreglos musicales y en crear atmósferas que potencian el trabajo vocal.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground">
              Seguinos en nuestras redes para conocer más de nuestro trabajo:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.youtube.com/@SamantaMusella", "_blank")}
                className="rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Youtube className="mr-2" size={20} />
                YouTube
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.instagram.com/samantamusellacanta/", "_blank")}
                className="rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.facebook.com/samantamusellacanta", "_blank")}
                className="rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Facebook className="mr-2" size={20} />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
