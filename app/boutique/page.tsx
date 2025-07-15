"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

interface ProductCardProps {
  name: string
  price: number
  image: string
  slug: string
  index: number
}

function ProductCard({ name, price, image, slug, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/boutique/${slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />

          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-4 py-2 border border-white text-white text-sm uppercase tracking-wider">
              Voir détails
            </span>
          </div>
        </div>

        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-white/80">{price} €</p>
      </Link>
    </motion.div>
  )
}

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const products = [
    {
      name: "Veste Structurée",
      price: 580,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
      slug: "veste-structuree",
      category: "Vêtements",
    },
    {
      name: "Robe Asymétrique",
      price: 420,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1083&auto=format&fit=crop",
      slug: "robe-asymetrique",
      category: "Vêtements",
    },
    {
      name: "Sérigraphie Limitée",
      price: 150,
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      slug: "serigraphie-limitee",
      category: "Art",
    },
    {
      name: "Pantalon Fluide",
      price: 320,
      image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
      slug: "pantalon-fluide",
      category: "Vêtements",
    },
    {
      name: "Tirage Photo",
      price: 180,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      slug: "tirage-photo",
      category: "Photo",
    },
    {
      name: "Chemise Déstructurée",
      price: 280,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
      slug: "chemise-destructuree",
      category: "Vêtements",
    },
    {
      name: "Sculpture Textile",
      price: 450,
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      slug: "sculpture-textile",
      category: "Art",
    },
    {
      name: "Manteau Oversize",
      price: 690,
      image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
      slug: "manteau-oversize",
      category: "Vêtements",
    },
  ]

  const filteredProducts =
    activeCategory === "Tous" ? products : products.filter((product) => product.category === activeCategory)

  const categories = ["Tous", "Vêtements", "Art", "Photo"]

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop"
              alt="Boutique DMB Studios"
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
              Boutique
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
            >
              Découvrez et réservez nos créations uniques
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

        {/* Filter Section */}
        <section className="py-8 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm rounded-full transition-colors ${
                    activeCategory === category ? "bg-gold text-black" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  slug={product.slug}
                  index={index}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-white/60">Aucun produit trouvé dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 md:px-8 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif mb-6"
            >
              Comment réserver
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-10 text-white/80"
            >
              Toutes nos créations sont uniques et fabriquées avec soin. Pour réserver un article, il vous suffit de
              cliquer sur "Réserver" sur la page du produit. Vous serez alors redirigé vers WhatsApp pour finaliser
              votre commande directement avec nous.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold/80 text-black rounded-none px-8 py-6 text-lg transition-all duration-300"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Contacter via WhatsApp
            </motion.a>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
