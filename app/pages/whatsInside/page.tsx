
import { OrnamentalDivider } from "../../components/shared/ornamental-divider"
import Image from "next/image"
import { Flame, Droplet, Sparkles } from "lucide-react"
import { Layout } from "./../../components/layout/Layout";
import poojaBoxInside from "./../../assets/whats-20inside.png";
import whatsinsideBackground from "./../../assets/red.png";


export default function WhatsInsidePage() {
  const dailyEssentials = ["Incense Sticks", "Dhoop", "Camphor (Kapoor)", "Cow Ghee", "Cotton Wicks", "Honey (Madhu)"]

  const tilakItems = ["Kumkum & Turmeric", "Ashtagandha", "Vibhuti", "Small Kalawa/Mauli (sacred thread)"]

  const ritualItems = [
    "Janeeu (Sacred Thread)",
    "Betel Nuts",
    "Chandan Tika",
    "Gulal Abir (Colored Powder)",
    "Small Oti Essentials (Supari, Cloves, Cardamom)",
  ]

  return (


    <div className=" min-h-screen py-30 px-5 md:px-10 mx-auto py-16 z-50 w-full mx-auto backdrop-blur-sm border-b border-gold/20in-h-screen texture-overlay bg-fit bg-cover bg-center "
              style={{ backgroundImage: `url(${whatsinsideBackground.src})` }}>
      {/* Hero Section */}
      <Layout>
      <section className="container mx-auto px-4 py-16 ">
        <div className="ornamental-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl text-[#8B2635] font-bold leading-tight">What's Inside</h1>
              <h2 className="text-2xl text-[#3D2817] font-semibold">Complete Set of Pooja Essentials in One Box</h2>
              <p className="text-[#6B5344] leading-relaxed">
                Lorem ipsum qut sem, heum rhes, muslit bis Gallus wih idl, non malesie maleitus .ida. Cursque detia
                serim, riatque sex, ia tempor ced, perimentur. Aetus, set, ait semmastm, euienas ica in naser set, sies
                in junem destimstom letrent, qus mih,, ago, sele mihu, getiat, tarque cuis, mitriees, get, fallus. Aera.
              </p>
            </div>
            <div className="relative">
              <Image
                src={poojaBoxInside }
                alt="Pooja Box Contents"
                width={600}
                height={450}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <OrnamentalDivider />

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#8B2635] font-bold mb-2 inline-flex items-center gap-4">
            <span className="text-[#D4AF37]">✦</span>
            Why Choose Us Today
            <span className="text-[#D4AF37]">✦</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Daily Pooja Essentials */}
          <div className="ornamental-border  rounded-2xl p-8 bg-background">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#FFE4B5] to-[#F5DEB3] p-4 rounded-full">
                <Flame className="w-12 h-12 text-[#8B2635]" />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#8B2635] font-bold text-center mb-3">Daily Pooja Essentials</h3>
            <p className="text-center text-[#6B5344] mb-6">Must-have items for your daily worship</p>
            <ul className="space-y-3">
              {dailyEssentials.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#3D2817]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tilak & Shuddhi */}
          <div className="ornamental-border  rounded-2xl p-8 bg-background">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFA07A] p-4 rounded-full">
                <Droplet className="w-12 h-12 text-[#8B2635]" />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#8B2635] font-bold text-center mb-3">Tilak & Shuddhi</h3>
            <p className="text-center text-[#6B5344] mb-6">For purity and auspicious blessings</p>
            <ul className="space-y-3">
              {tilakItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#3D2817]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tilak & Shuddhi (repeated) */}
          <div className="ornamental-border  rounded-2xl p-8 bg-background">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#DEB887] to-[#CD853F] p-4 rounded-full">
                <Droplet className="w-12 h-12 text-[#8B2635]" />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#8B2635] font-bold text-center mb-3">Tilak & Shuddhi</h3>
            <p className="text-center text-[#6B5344] mb-6">For purity and auspicious blessings</p>
            <ul className="space-y-3">
              {tilakItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#3D2817]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Ritual Items */}
          <div className="ornamental-border  rounded-2xl p-8 bg-background">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-4 rounded-full">
                <Sparkles className="w-12 h-12 text-[#8B2635]" />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#8B2635] font-bold text-center mb-3">Special Ritual Items</h3>
            <p className="text-center text-[#6B5344] mb-6">Authentic items for important rituals & festivals</p>
            <ul className="space-y-3">
              {ritualItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#3D2817]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </Layout>

    </div>
    
  )
}
