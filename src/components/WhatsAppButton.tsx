import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5491136135864&text&type=phone_number&app_absent=0", "_blank");
  };

  // Hidden for now - floating WhatsApp button
  return null;
};
