import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Users, Mic2, Calendar, Radio, MessageCircle } from "lucide-react";

const classes = [
  {
    icon: Music,
    title: "Clases individuales de canto",
    description: "Para adultos que quieren encontrar su voz. Clases personalizadas con acompañamiento en vivo de guitarra o piano. Trabajamos técnica, expresión y confianza a tu ritmo.",
  },
  {
    icon: Users,
    title: "Clases de canto para menores",
    description: "Desde los 14 años. Un espacio para que descubran su voz, trabajen la expresión y desarrollen seguridad vocal en un ambiente cuidado y divertido.",
  },
  {
    icon: Mic2,
    title: "Club de Canto / Práctica escénica",
    description: "Encuentros grupales mensuales donde practicás con micrófono, sonido y luces. Te preparás para el escenario en un ambiente de acompañamiento y comunidad.",
  },
  {
    icon: Calendar,
    title: "Shows en vivo",
    description: "Varios shows durante el año en espacios culturales como Casa de las Artes. La oportunidad de compartir escenario con tus compañeros y vivir la experiencia del canto en vivo.",
  },
  {
    icon: Radio,
    title: "Grabación de demos",
    description: "Tenemos un home studio donde podés grabar tus canciones con acompañamiento profesional. Los presupuestos se arman de manera personalizada según tu proyecto.",
  },
];

export const ClassesSection = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=5491136135864&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section id="clases" className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Clases y modalidades</h2>
            <p className="text-xl text-stage-foreground/80 max-w-3xl mx-auto">
              Diferentes formas de acercarte al canto, todas con el mismo espíritu: acompañarte en tu proceso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((item, index) => (
              <Card
                key={index}
                className="bg-stage-foreground/5 border-stage-foreground/10 hover:bg-stage-foreground/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-stage-foreground text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stage-foreground/80 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 pt-8 animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              ¡ARANCELES ACCESIBLES!
            </p>
            <p className="text-lg text-stage-foreground/90">
              Escribinos para conocer los valores actualizados y la disponibilidad de horarios.
            </p>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2" size={20} />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
