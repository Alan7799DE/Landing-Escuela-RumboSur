import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Esteban Garcia",
    text: "Excelente espacio, muy profesional. Ideal para aprender. Me enseñó mucho más que otros profesores que conocí. Muy recomendable!!! Gracias!!!!!",
  },
  {
    name: "Monica",
    text: "Las mejores clases de canto que tomé! Samanta y Raúl son dos artistas talentosos y con la vocación de enseñar!",
  },
  {
    name: "Ana Gonzalez",
    text: "Una escuela de canto super cálida donde se puede aprender y crecer con mucho cariño de parte de los profes! Ambos son muy talentosos! 💞.",
  },
  {
    name: "Lucia Kihn",
    text: "Las mejores clases de canto sin dudas. Personalizadas, con instrumentos en vivo, y de mucho nivel. Me encantan!!!",
  },
  {
    name: "Pablo perez",
    text: "Super satisfecho con las clases y con las muestras. Aprendí un montón a conocer mí voz y me llevo una re buena experiencia.",
  },
  {
    name: "Adrian Pierotti",
    text: "La mejor escuela de canto del pais.Son puro amor y pasion por la musica!!!!",
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
