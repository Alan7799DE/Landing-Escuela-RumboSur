import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Completá todos los campos",
        description: "Por favor, completá todos los campos del formulario.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the form data
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto con vos a la brevedad.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/XXXXXXXXXXX", "_blank");
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52323.64746478948!2d-56.23677082424193!3d-34.899999935698654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81c76e000001%3A0xabcdef1234567890!2sRumbo%20Sur!5e0!3m2!1ses!2suy!4v1234567890123!5m2!1ses!2suy"
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
                    Nuestro estudio está ubicado en Montevideo, Uruguay.
                    <br />
                    Escribinos para conocer la dirección exacta y coordinar tu visita.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-stage-foreground/10 border-stage-foreground/20 text-stage-foreground placeholder:text-stage-foreground/50 rounded-xl py-6"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-stage-foreground/10 border-stage-foreground/20 text-stage-foreground placeholder:text-stage-foreground/50 rounded-xl py-6"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu mensaje"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-stage-foreground/10 border-stage-foreground/20 text-stage-foreground placeholder:text-stage-foreground/50 rounded-xl min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Quiero más info
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stage-foreground/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-stage-dark text-stage-foreground/60">o</span>
                </div>
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
