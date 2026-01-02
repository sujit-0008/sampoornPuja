import { Button } from'../ui/button';
import  Link from "next/link";
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: any;
}

export function ProductCard({ title, subtitle, image }: ProductCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card border border-gold/10 hover:shadow-golden transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5  bg-[#ffe289] text-center">
        <h3 className="font-heading text-lg md:text-xl text-primary font-semibold mb-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>
        <Button variant="golden" size="sm" asChild>
          <Link href="/pages/products">
            <span className="text-xs">✦</span>
            View Details
            <span className="text-xs">✦</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
