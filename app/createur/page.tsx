"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function CreateurPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
              alt="Le créateur de DMB Studios"
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
              Le Créateur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
            >
              L&apos;histoire et la vision derrière DMB Studios
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

        {/* Bio Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                  alt="Le créateur de DMB Studios"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif mb-6">Biographie</h2>
                <div className="w-16 h-px bg-gold mb-6"></div>
                <p className="text-lg mb-6 text-white/80">
                  Né avec une sensibilité artistique innée, le fondateur de DMB Studios a toujours été attiré par
                  l&apos;expression créative sous toutes ses formes. Son parcours commence dans le monde de la mode, où
                  il développe une fascination pour les textures, les formes et la manière dont les vêtements peuvent
                  transformer la perception et l&apos;expression de soi.
                </p>
                <p className="text-lg mb-6 text-white/80">
                  Après des études en design et arts visuels, il affine sa vision unique qui transcende les frontières
                  traditionnelles entre la mode, l&apos;art et le design. Cette approche multidisciplinaire devient la
                  pierre angulaire de DMB Studios, fondé comme un espace où différentes formes d&apos;expression
                  artistique peuvent coexister et se nourrir mutuellement.
                </p>
                <p className="text-lg text-white/80">
                  Sa philosophie créative repose sur l&apos;idée que l&apos;art ne devrait pas être confiné à des
                  catégories rigides. Qu&apos;il s&apos;agisse de concevoir un vêtement, de diriger une séance photo ou
                  de créer une installation artistique, son objectif reste le même : évoquer des émotions et raconter
                  des histoires visuelles captivantes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <blockquote className="text-2xl md:text-3xl italic font-serif text-gold max-w-3xl mx-auto">
                "Je ne me considère pas simplement comme un designer ou un artiste, mais comme un conteur visuel. Chaque
                création est une histoire qui attend d&apos;être racontée, chaque projet une nouvelle façon
                d&apos;explorer notre relation avec l&apos;esthétique et l&apos;expression."
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Vision & Approach */}
        <section className="py-20 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Vision & Approche</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop"
                    alt="Vision artistique"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4">Vision</h3>
                <div className="w-12 h-px bg-gold mb-6"></div>
                <p className="text-lg text-white/80">
                  Ma vision artistique est ancrée dans la conviction que l&apos;art devrait transcender les frontières
                  traditionnelles. Je m&apos;efforce de créer des œuvres qui non seulement plaisent esthétiquement, mais
                  qui provoquent également une réflexion et évoquent des émotions profondes.
                </p>
                <p className="text-lg text-white/80 mt-4">
                  Je crois en la fusion des disciplines artistiques, où mode, design, photographie et art contemporain
                  se rencontrent pour créer des expériences immersives et significatives. Cette vision
                  multidisciplinaire est au cœur de tout ce que nous faisons chez DMB Studios.
                </p>
              </motion.div>

              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop"
                    alt="Approche créative"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4">Approche</h3>
                <div className="w-12 h-px bg-gold mb-6"></div>
                <p className="text-lg text-white/80">
                  Mon approche créative est intuitive et expérimentale. Je commence souvent par une émotion ou une idée
                  abstraite, puis j&apos;explore différents médiums et techniques pour lui donner vie. Cette méthode me
                  permet de rester ouvert aux possibilités inattendues et aux découvertes qui émergent du processus
                  créatif lui-même.
                </p>
                <p className="text-lg text-white/80 mt-4">
                  Je crois fermement en la collaboration et au pouvoir de la créativité collective. C&apos;est pourquoi
                  DMB Studios est non seulement un espace pour ma propre expression artistique, mais aussi une
                  plateforme pour collaborer avec d&apos;autres créateurs et artistes partageant des valeurs similaires.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif mb-6"
            >
              Découvrez mes créations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-10 text-white/80"
            >
              Explorez mon portfolio de projets et découvrez comment ma vision artistique prend vie à travers différents
              médiums et collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                className="bg-gold hover:bg-gold/80 text-black rounded-none px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="/galerie">
                  Voir la galerie
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-none px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="/contact">Me contacter</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
