import { cn } from "../../lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="text-gold text-sm">✦</span>
      <h2 className="font-heading text-2xl md:text-3xl text-primary font-semibold">
        {title}
      </h2>
      <span className="text-gold text-sm">✦</span>
    </div>
  );
}
