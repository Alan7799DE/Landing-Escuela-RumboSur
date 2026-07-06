import clubImage from "@/assets/club-canto.webp";

export const ProposalSection = () => {
  return (
    <section id="propuesta" className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Nuestra propuesta
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Rumbo Sur fue creada por <strong>Samanta Musella</strong> y <strong>Raúl Bervejillo</strong>,
                  dos artistas que viven de la música, están cumpliendo sus sueños y acompañan a otros
                  a hacer lo mismo.
                </p>
                <p>
                  Acá el foco no es sólo la técnica, sino el <strong>encuentro con uno mismo</strong>,
                  la expresión auténtica y la confianza para mostrarte al mundo.
                </p>
                <p>
                  Rumbo Sur es un <strong>espacio cuidado, amoroso y personalizado</strong>, donde cada
                  persona es única y su proceso es respetado. Te acompañamos a encontrar tu voz y a
                  animarte al escenario, porque cantar es mucho más que una técnica: es una forma de
                  conectar con tu esencia.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <img
                src={clubImage}
                alt="Grupo de alumnos practicando en un ambiente íntimo con guitarra y teclado"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                width={1200}
                height={872}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
