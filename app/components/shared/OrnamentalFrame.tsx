import { cn } from "../../lib/utils";

interface OrnamentalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function OrnamentalFrame({ children, className }: OrnamentalFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
      
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
