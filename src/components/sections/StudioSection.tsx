import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";

export const StudioSection = () => {
  return (
    <section className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">Grabaciones y estudio</h2>
              <div className="space-y-4 text-lg leading-relaxed text-stage-foreground/90">
                <p>
                  Tenemos un <strong>home studio</strong> donde podés grabar demos de tus canciones
                  con acompañamiento profesional de músicos en vivo.
                </p>
                <p>
                  Es la oportunidad perfecta para llevar tu música al próximo nivel, tener un registro
                  de tu trabajo o preparar material para compartir.
                </p>
                <p className="text-primary font-semibold">
                  Los presupuestos de grabación se arman de manera personalizada según tu proyecto.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={studio1}
                  alt="Alumnas cantando al micrófono con auriculares en sesión de grabación"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={studio2}
                  alt="Alumno grabando con guitarra y micrófono"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={studio3}
                  alt="Espacio de estudio con teclado y micrófono"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
