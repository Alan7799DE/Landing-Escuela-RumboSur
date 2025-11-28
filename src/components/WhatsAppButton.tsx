import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    // Placeholder - replace with actual WhatsApp number
    window.open("https://wa.me/XXXXXXXXXXX", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Escribinos por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </button>
  );
};
