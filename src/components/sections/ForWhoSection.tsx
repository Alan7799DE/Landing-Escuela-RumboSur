import { UserPlus, Home, TrendingUp } from "lucide-react";

const profiles = [
  {
    icon: UserPlus,
    title: "Nunca estudiaste canto",
    description: "No necesitás experiencia previa. Te acompañamos desde el primer día a conocer tu voz y ganar confianza.",
  },
  {
    icon: Home,
    title: "Cantás en casa",
    description: "Si siempre cantaste por placer y querés animarte al escenario, este es tu lugar para crecer.",
  },
  {
    icon: TrendingUp,
    title: "Tenés experiencia",
    description: "Cantantes con trayectoria que buscan mejorar técnica, afinación o presencia escénica.",
  },
];

export const ForWhoSection = () => {
  return (
    <section className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Para quién es</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rumbo Sur está abierto para todas las personas que quieran cantar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-8 rounded-3xl bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <profile.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">{profile.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-2xl font-semibold text-primary animate-fade-in">
              No necesitás experiencia previa, sólo ganas de cantar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
