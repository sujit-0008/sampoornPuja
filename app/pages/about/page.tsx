import { Layout } from "./../../components/layout/Layout";
// import { PageHeader } from "./../../components/shared/PageHeader";
// import { OrnamentalFrame } from "./../../components/shared/OrnamentalFrame";
import { SectionTitle } from "./../../components/shared/SectionTitle";
import thaliImage from "./../../assets/pooja-thali.jpg";
import AboutusBg from "./../../assets/yellow.png";
import Image from "next/image";

const About = () => {
  return (
    <div className=" bg-background bg-fit bg-cover bg-center "
              style={{ backgroundImage: `url(${AboutusBg.src})` }}>

      <section >
        <Layout>
          <div className="max-w-5xl mx-auto">
          
              <div className="grid md:grid-cols-2 gap-8 items-left">
                {/* Text Content */}
                <div className="text-left md:text-left">
                  <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold italic mb-6">
                    About Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At Shree Sampoorna Pooja Samagri, we are dedicated to bringing the essence of
                    traditional worship into your home. With a deep understanding of spiritual needs
                    and rituals, we curate the finest quality pooja essentials that honor your faith.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our commitment to purity, authenticity, and devotion guides every product we offer.
                    We believe that worship should be accessible, convenient, and complete — which is why
                    we created the Sampoorna Pooja Box, containing everything you need for daily and
                    special rituals.
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gold">
                    <span className="text-2xl">🪔</span>
                    <span className="font-heading text-lg italic text-primary">
                      Your Trust • Our Service
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card border border-gold/20">
                    <Image
                      src={thaliImage}
                      alt="Traditional Pooja Thali with divine essentials"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
        
          </div>
        </Layout>
      </section>

      {/* Values Section */}
      <div className="mx-auto px-4 py-16">   
      <section className="p-16  border-y  border-gold/20">
        <div className="container">
          <SectionTitle title="Why Choose Us" className="mb-10" />
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🙏",
                title: "Purity",
                description: "Every item in our box is sourced with care to ensure the highest quality and purity."
              },
              {
                icon: "✨",
                title: "Trust",
                description: "We are committed to delivering authentic products that honor your spiritual traditions."
              },
              {
                icon: "📦",
                title: "Convenience",
                description: "Complete pooja essentials in one box — everything you need, ready to use."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl text-primary font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
       </div>
      
    </div>
  );
};

export default About;
