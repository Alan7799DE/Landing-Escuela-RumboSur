import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open( "https://wa.me/5491136135864?text=Hola%21%20Estuve%20en%20la%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20las%20clases%20de%20canto....",
  "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Escribinos por WhatsApp"
      data-gtm="whatsapp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </button>
  );
};
