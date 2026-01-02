import { Layout } from "./../../components/layout/Layout";
import { PageHeader } from "./../../components/shared/PageHeader";
import { WhatsAppButton } from "./../../components/shared/WhatsAppButton";
import { ProductCard } from "./../../components/shared/ProductCard";
//import { SectionTitle } from "./../../components/shared/SectionTitle";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import productImage from "./../../assets/pooja-box-product.png";
import contactbg from "./../../assets/wood.png";
import Image from "next/image";

const Contact = () => {
  return (

    <div  className=" bg-background fit bg-cover bg-center "
              style={{ backgroundImage: `url(${contactbg.src})` }}>

   
    <Layout>
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact"
      />

      <section className="py-16 b">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl text-primary font-semibold mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-primary font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 7768090844</p>
                      <p className="text-sm text-muted-foreground/70 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> 9 AM to 7 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-primary font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">info@poojasamagri.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-primary font-medium mb-1">Visit</h3>
                      <p className="text-muted-foreground">Pune, Maharashtra</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <WhatsAppButton size="lg">
                    <span className="text-xs">✦</span>
                    Order on WhatsApp
                    <span className="text-xs">✦</span>
                  </WhatsAppButton>
                </div>
              </div>

              {/* Featured Products */}
              <div>
                <h2 className="font-heading text-2xl text-primary font-semibold mb-8">
                  Featured Products
                </h2>
                <div className="grid gap-6">
                  <ProductCard
                    title="Shree Sampoorna Pooja Box"
                    subtitle="Complete Pooja Set for All Rituals"
                    image={productImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-cream-dark border-y border-gold/20">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-gold">✦</span>
            <span className="font-heading text-xl md:text-2xl text-primary italic">
              Your Trust • Our Service
            </span>
            <span className="text-gold">✦</span>
          </div>
        </div>
      </section>
    </Layout>
     </div>
  );
};

export default Contact;
