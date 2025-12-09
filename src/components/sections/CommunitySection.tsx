import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import community4 from "@/assets/community-4.jpg";

export const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Nuestra comunidad</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              En Rumbo Sur no estás solo/a cuando cantás. Hay prácticas escénicas mensuales con micrófono,
              sonido y luces. Hacemos shows en vivo varias veces al año en espacios como Casa de las Artes.
              Los alumnos comparten escenario, se escuchan entre sí y se acompañan.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
                <img
                  src={community4}
                  alt="Momento de show en vivo con alumnos cantando"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img
                  src={community2}
                  alt="Alumnos posando después del show con luces azules"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <img
                  src={community3}
                  alt="Grupo mostrando diplomas en el escenario"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <img
                  src={community1}
                  alt="Grupo de alumnos celebrando en el escenario"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
