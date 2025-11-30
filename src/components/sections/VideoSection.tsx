import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-24 stage-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Escuchanos</h2>
            <p className="text-xl text-stage-foreground/80 max-w-3xl mx-auto">
              Mirá cómo suenan los shows y el trabajo de nuestros alumnos.
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/watch?v=xEDYK94RJgQ"
              title="Rumbo Sur - Shows y presentaciones"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="text-center animate-fade-in">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.youtube.com/@SamantaMusella", "_blank")}
              className="border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white font-semibold px-8 py-6 rounded-full"
            >
              <Youtube className="mr-2" size={20} />
              Ver más en YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
