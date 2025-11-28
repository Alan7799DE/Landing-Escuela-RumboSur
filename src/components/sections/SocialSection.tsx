import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook } from "lucide-react";

export const SocialSection = () => {
  // Placeholder images simulating Instagram posts
  const posts = Array(6).fill(null);

  return (
    <section className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Seguí nuestro día a día</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En redes compartimos videos, fragmentos de shows, ensayos y momentos del estudio.
            </p>
          </div>

          {/* Grid of placeholder posts */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
            {posts.map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              />
            ))}
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in">
            <Button
              size="lg"
              onClick={() => window.open("https://www.instagram.com/samantamusellacanta/", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Instagram className="mr-2" size={20} />
              Ver más en Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.youtube.com/@SamantaMusella", "_blank")}
              className="border-2 font-semibold px-8 py-6 rounded-full hover:scale-105 transition-transform"
            >
              <Youtube className="mr-2" size={20} />
              Ver canal en YouTube
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.facebook.com/samantamusellacanta", "_blank")}
              className="border-2 font-semibold px-8 py-6 rounded-full hover:scale-105 transition-transform"
            >
              <Facebook className="mr-2" size={20} />
              Seguir en Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
