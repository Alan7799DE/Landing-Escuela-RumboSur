import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Cuánto espera la ventana antes de aparecer, en milisegundos.
const DELAY_MS = 6000;
// Si la persona la cierra, no vuelve a aparecer en esa misma visita (pestaña).
const STORAGE_KEY = "rumbosur-popup-verano-visto";

const WHATSAPP_URL =
  "https://wa.me/5491136135864?text=" +
  encodeURIComponent(
    "Hola! Estuve en la página y me gustaría recibir información sobre las propuestas de verano.",
  );

export const SummerPopup = () => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Aparece unos segundos después de entrar, una sola vez por visita.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage puede no estar disponible (modo privado estricto): igual se muestra.
    }
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  // Mientras está abierta: cerrar con Escape, foco en la X y sin scroll de fondo.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sin sessionStorage simplemente no se recuerda
    }
  };

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
    close();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-verano-titulo"
      aria-describedby="popup-verano-texto"
    >
      {/* Fondo oscurecido: un click afuera la cierra */}
      <div
        className="absolute inset-0 bg-[hsl(var(--stage-dark))]/70 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={close}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl stage-section shadow-2xl ring-1 ring-primary/25 animate-in fade-in zoom-in-95 slide-in-from-bottom-6 duration-500">
        {/* Sol de verano decorativo */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-64 w-64">
          <div className="absolute inset-0 rounded-full bg-secondary/15" />
          <div className="absolute inset-8 rounded-full bg-secondary/25" />
          <div className="absolute inset-16 rounded-full bg-primary/50 blur-[2px]" />
          <div className="absolute inset-[5.5rem] rounded-full bg-primary shadow-[0_0_60px_20px_hsl(var(--primary)/0.45)]" />
        </div>
        {/* Brillo cálido desde abajo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent"
        />

        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--stage-dark))]/60 text-stage-foreground/80 transition hover:bg-[hsl(var(--stage-dark))]/90 hover:text-stage-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X size={18} />
        </button>

        <div className="relative px-7 pb-8 pt-12 sm:px-9 sm:pt-14 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Verano en Rumbo Sur
          </p>

          <h2
            id="popup-verano-titulo"
            className="text-3xl sm:text-4xl leading-tight text-stage-foreground text-balance"
          >
            ¡Escribinos por las <span className="italic text-primary">propuestas de verano</span>!
          </h2>

          <p id="popup-verano-texto" className="text-stage-foreground/80 leading-relaxed">
            Este verano seguimos cantando. Consultanos por WhatsApp y te contamos todas las
            opciones.
          </p>

          <Button
            size="lg"
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03]"
            data-gtm="whatsapp-verano"
          >
            <MessageCircle className="mr-2" size={20} />
            Escribinos por WhatsApp
          </Button>

          <button
            type="button"
            onClick={close}
            className="block w-full text-center text-sm text-stage-foreground/60 underline-offset-4 transition hover:text-stage-foreground hover:underline"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
};
