import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    text: "Nunca había cantado frente a nadie y en Rumbo Sur me ayudaron a animarme. Ahora estoy en el escenario y no lo puedo creer.",
  },
  {
    name: "Joaquín R.",
    text: "El acompañamiento de Samanta y Raúl es único. No es sólo técnica, es un espacio para crecer como persona.",
  },
  {
    name: "Lucía M.",
    text: "La comunidad que se genera acá es increíble. Nos escuchamos, nos acompañamos y crecemos juntos.",
  },
  {
    name: "Carlos P.",
    text: "Vine con mucha vergüenza y hoy puedo decir que cantar me cambió la vida. Rumbo Sur es mi segunda casa.",
  },
  {
    name: "Andrea S.",
    text: "Los shows en vivo son una experiencia inolvidable. Te preparás de a poco y cuando llegás al escenario, te sentís acompañado.",
  },
  {
    name: "Martín L.",
    text: "Siempre canté por placer pero nunca me había tomado en serio. Acá encontré el espacio para desarrollarme.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Lo que dicen quienes cantan en Rumbo Sur</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-stage-foreground/5 border-stage-foreground/10 hover:bg-stage-foreground/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Quote className="text-primary" size={32} />
                    <p className="text-stage-foreground/90 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <p className="font-semibold text-stage-foreground">{testimonial.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
