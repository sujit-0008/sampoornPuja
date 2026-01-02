'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Layout } from "./Layout";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pages/about", label: "About Us" },
  { href: "/pages/products", label: "Products" },
  { href: "/pages/whatsInside", label: "What's Inside" },
  { href: "/pages/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (

    <header className="sticky top-0 px-5 md:px-10 mx-auto   z-50 w-full bg-[#ffd042]  mx-auto backdrop-blur-sm border-b border-gold/20">
      <div className="container flex items-center justify-between py-3">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Left Navigation */}
        <nav className="hidden md:flex flex-1 justify-start items-center gap-6">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo Center */}
        <Link href="/" className="flex flex-col items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <div className="absolute inset-0 rounded-full border-2 border-maroon/30 bg-gradient-to-b from-cream to-cream-dark flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/40 flex items-center justify-center bg-cream">
                <span className="font-heading text-maroon text-2xl md:text-3xl font-bold">श्री</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Right Navigation */}
        <nav className="hidden md:flex flex-1 justify-end items-center gap-6">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Search */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#ffd042]  border-t border-gold/20 py-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "py-2 px-4 rounded-lg font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
