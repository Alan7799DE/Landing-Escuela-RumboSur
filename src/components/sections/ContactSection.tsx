import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=5491136135864&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section id="contacto" className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Ubicación y contacto</h2>
            <p className="text-xl text-stage-foreground/80">
              Escribinos para coordinar tu clase o conocer más sobre Rumbo Sur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="space-y-6 animate-fade-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-80">
                <iframe
                  title="Ubicación de Rumbo Sur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5734569781343!2d-58.463985524261425!3d-34.564353672968515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58d3a0bb197%3A0x95109b763ae4e49d!2sEscuela%20de%20Canto%20Rumbo%20Sur!5e0!3m2!1ses!2sar!4v1764542221015!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-stage-foreground/90 leading-relaxed">
                    Nuestro estudio está ubicado en Belgrano, sobre la Av. Cramer, entre Juramento y Mendoza. CABA.
                    <br />
                    Escribinos para conocer la dirección exacta y coordinar tu visita.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="space-y-6 animate-fade-in flex flex-col justify-center">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-stage-foreground">
                  ¿Querés más información?
                </h3>
                <p className="text-stage-foreground/80">
                  Escribinos por WhatsApp y te contamos todo sobre nuestras clases y talleres.
                </p>
              </div>
              
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                Escribinos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
