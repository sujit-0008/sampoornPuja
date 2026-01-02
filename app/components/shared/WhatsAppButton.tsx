import { Button, ButtonProps } from "../ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps extends Omit<ButtonProps, 'variant' | 'asChild'> {
  phone?: string;
  message?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  phone = "917768090844",
  message = "Hello, I would like to order a Pooja Box.",
  className,
  children = "Order on WhatsApp",
  size,
  ...props
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button variant="whatsapp" className={className} size={size} asChild {...props}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5" />
        {children}
      </a>
    </Button>
  );
}
