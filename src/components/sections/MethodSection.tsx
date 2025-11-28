export const MethodSection = () => {
  const steps = [
    {
      number: "01",
      title: "Te conocemos",
      description: "En la primera clase charlamos sobre tus gustos musicales, tus objetivos y tu experiencia con el canto.",
    },
    {
      number: "02",
      title: "Elegimos canciones que te representen",
      description: "Trabajamos con temas que te gusten y te conecten. Aprender cantando lo que te emociona hace todo más natural.",
    },
    {
      number: "03",
      title: "Trabajamos técnica, expresión y confianza",
      description: "Con músico en vivo (guitarra, piano), desarrollamos tu técnica vocal, respiración y presencia escénica de manera gradual.",
    },
    {
      number: "04",
      title: "Te animás a la escena",
      description: "Con práctica escénica mensual y shows durante el año, vas ganando seguridad para compartir tu voz con otros.",
    },
  ];

  return (
    <section className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Cómo trabajamos</h2>
            <p className="text-xl text-stage-foreground/80 max-w-3xl mx-auto">
              Te acompañamos en un proceso gradual y respetuoso, a tu ritmo.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-8 items-start animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-bold text-stage-foreground mb-3">{step.title}</h3>
                  <p className="text-lg text-stage-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
