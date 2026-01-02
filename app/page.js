import { Layout } from "./components/layout/Layout";
import { Button } from "./components/ui/button";
import { SectionTitle } from "./components/shared/SectionTitle";
import { ProductCard } from "./components/shared/ProductCard";
import { WhatsAppButton } from "./components/shared/WhatsAppButton";
import { OrnamentalFrame } from "./components/shared/OrnamentalFrame";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import heroImage from "./assets/pooja-box-hero.png";
import productImage from "./assets/pooja-box-product.png"
import Hero from './assets/background.png'
import SecondBG from './assets/whatsinsideBack.png'
import Image from "next/image";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      
      <section
        className=" w-full bg-no-repeat bg-cover bg-center  py-30 px-5 md:px-10"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        <Layout>
          <div className="py-8 md:py-16">
            <div>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="font-heading text-3xl text-maroon md:text-4xl lg:text-5xl text-primary font-semibold leading-tight mb-4">
                  Bring Positivity,<br />
                  <span className="italic">Faith & Peace</span> into Your Home
                </h1>
                <p className="text-muted-foreground text-maroon text-lg mb-8">
                  All Types of Pooja Essentials — in One Box
                </p>
                <WhatsAppButton size="lg">
                  <span className="text-xs">✦</span>
                  Order on WhatsApp
                  <span className="text-xs">✦</span>
                </WhatsAppButton>
              </div>

              {/* Right Image */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src={heroImage}
                    alt="Shree Sampoorna Pooja Box with divine essentials"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div></Layout>
       
      </section>
  

      {/* Best Selling Section */}
      <div className="bg-no-repeat bg-cover bg-center py-30 px-5 md:px-10"
        style={{ backgroundImage: `url(${SecondBG.src})` }}>
      <Layout>
      <section className="py-16 px-5 ">
        <div  className="container">
          <SectionTitle title="Best Selling" className="mb-10" />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-gold/10">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={productImage}
                  alt="Shree Sampoorna Pooja Box"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 bg-[#ffe289] text-center">
                <h3 className="font-heading text-2xl md:text-3xl text-primary font-semibold mb-2">
                  Shree Sampoorna Pooja Box
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complete Box Useful for Daily & Religious Rituals
                </p>
                <Button variant="golden" size="lg" asChild>
                  <Link href="/pages/whatsInside">View</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>

      {/* WhatsApp Booking Section */}
      
      <section className="py-12 px-5 bg-cream-dark border-y border-gold/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl text-primary font-semibold mb-2">
                WhatsApp Booking
              </h3>
              <p className="text-muted-foreground">
                Select your desired items and place orders directly via WhatsApp
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-xl border border-gold/20 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-xl text-primary font-semibold">9856234567</span>
              </div>
              <WhatsAppButton>
                <span className="text-xs">✦</span>
                Order on WhatsApp
                <span className="text-xs">✦</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      

      {/* Product Grid */}
      <Layout>
      <section className="py-16 ">
        <div className="container">
          <SectionTitle title="Our Products" className="mb-10" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Shree Sampoorna Pooja Box"
              subtitle="Complete pooja set for all rituals"
              image={productImage}
            />
            <ProductCard
              title="Shree Sampoorna Pooja Box"
              subtitle="Complete pooja set for all rituals "
              image={productImage}
            />
            <ProductCard
              title="Shree Sampoorna Pooja Box"
              subtitle="Complete pooja set for all rituals"
              image={productImage}
            />
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      </Layout>
      </div>
      </div>
  

  );
};

export default Index;
