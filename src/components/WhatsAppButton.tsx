import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    // Placeholder - replace with actual WhatsApp number
    window.open("https://wa.me/XXXXXXXXXXX", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-105 group flex items-center gap-3"
      aria-label="Escribinos por WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse flex-shrink-0" />
      <span className="font-semibold text-sm whitespace-nowrap">Escribinos por WhatsApp</span>
    </button>
  );
};
