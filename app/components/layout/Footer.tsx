import Link from 'next/link';
import { Phone, Mail, MapPin } from "lucide-react";
import { Layout } from './Layout';

export function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-gold/20 py-12">
      <div className="containe mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl text-primary font-semibold mb-3">
              Shree Sampoorna Pooja 
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing divine essentials to your doorstep with purity, trust, and devotion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading text-lg text-primary font-medium mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/pages/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/pages/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/pages/whatsInside" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                What's Inside
              </Link>
              <Link href="/pages/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-heading text-lg text-primary font-medium mb-3">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 7768090844</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@poojasamagri.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="golden-divider mb-6" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shree Sampoorna Pooja Samagri. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2 font-heading italic">
            ✦ Your Trust • Our Service ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
