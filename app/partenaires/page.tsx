"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

interface PartnerCardProps {
  name: string
  description: string
  image: string
  link: string
  index: number
}

function PartnerCard({ name, description, image, link, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
    >
      <div className="h-40 relative mb-6 overflow-hidden rounded-lg">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-serif mb-2">{name}</h3>
      <p className="text-white/70 mb-4 text-sm">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:text-white transition-colors inline-flex items-center text-sm"
      >
        Visiter
        <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </motion.div>
  )
}

export default function PartenairesPage() {
  const partners = [
    {
      name: "Studio Lumière",
      description: "Studio photo professionnel spécialisé dans la mode et l'art contemporain.",
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Atelier Textile",
      description: "Fournisseur de tissus de haute qualité et partenaire de production.",
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Galerie Moderne",
      description: "Espace d'exposition pour artistes contemporains et designers.",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Magazine Avant-Garde",
      description: "Publication spécialisée dans la mode et le design contemporain.",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "École de Design",
      description: "Institution éducative formant la prochaine génération de créateurs.",
      image: "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Fondation Arts & Culture",
      description: "Organisation à but non lucratif soutenant les projets artistiques innovants.",
      image: "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Agence Créative",
      description: "Agence de communication spécialisée dans les projets artistiques et culturels.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop",
      link: "https://example.com",
    },
    {
      name: "Collectif Artistique",
      description: "Groupe d'artistes multidisciplinaires collaborant sur des projets innovants.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1170&auto=format&fit=crop",
      link: "https://example.com",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop"
              alt="Partenaires DMB Studios"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif tracking-tight mb-6"
            >
              Partenaires
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
            >
              Découvrez les collaborateurs qui nous aident à donner vie à notre vision créative
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              >
                <div className="w-1 h-2 bg-white/80 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos collaborateurs</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Chez DMB Studios, nous croyons en la puissance de la collaboration. Nous travaillons avec des
                partenaires partageant notre vision et notre passion pour la créativité et l'innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  description={partner.description}
                  image={partner.image}
                  link={partner.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-20 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-serif mb-6">Devenez partenaire</h2>
                <div className="w-16 h-px bg-gold mb-6"></div>
                <p className="text-lg mb-6 text-white/80">
                  Nous sommes toujours à la recherche de nouveaux partenaires partageant notre vision et notre passion
                  pour la créativité. Que vous soyez une marque établie, un artiste émergent, une galerie ou une
                  institution culturelle, nous serions ravis d'explorer les possibilités de collaboration avec vous.
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Notre approche collaborative nous permet de créer des projets uniques qui transcendent les frontières
                  traditionnelles entre différentes disciplines artistiques. Ensemble, nous pouvons donner vie à des
                  idées innovantes et inspirantes.
                </p>
                <Button
                  asChild
                  className="bg-gold hover:bg-gold/80 text-black rounded-none px-6 py-4 text-base transition-all duration-300"
                >
                  <Link href="/contact">
                    Nous contacter pour un partenariat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop"
                  alt="Collaboration créative"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
