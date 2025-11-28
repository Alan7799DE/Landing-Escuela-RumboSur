import { Music2, Youtube, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="cream-section py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <Music2 className="text-primary" size={32} />
              <div className="text-center">
                <h3 className="text-2xl font-bold">Rumbo Sur</h3>
                <p className="text-muted-foreground">Escuela de canto</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-lg text-center text-muted-foreground italic max-w-md">
              "Cantar es encontrarse con uno mismo."
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://www.youtube.com/@SamantaMusella"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </a>
              <a
                href="https://www.instagram.com/samantamusellacanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/samantamusellacanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>&copy; {new Date().getFullYear()} Rumbo Sur. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
