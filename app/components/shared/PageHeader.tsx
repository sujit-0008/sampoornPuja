import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative  py-12 md:py-16 border-b border-gold/20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold" />
      </div>

      <div className="container text-center relative">
        <h1 className="font-heading text-4xl md:text-5xl text-primary font-semibold italic mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        )}
        {breadcrumb && (
          <nav className="mt-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{breadcrumb}</span>
          </nav>
        )}
      </div>
    </section>
  );
}
