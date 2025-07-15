"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

// Product data
const products = {
  "veste-structuree": {
    name: "Veste Structurée",
    price: 580,
    description:
      "Une veste au tailoring impeccable avec des épaules structurées et une coupe asymétrique. Confectionnée en laine texturée de haute qualité, elle présente des détails architecturaux qui en font une pièce statement de votre garde-robe.",
    details: ["100% laine vierge", "Doublure en cupro", "Fermeture asymétrique", "Poches à rabat", "Fabriquée à Paris"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Noir", "Anthracite", "Bordeaux"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=687&auto=format&fit=crop",
    ],
    category: "Vêtements",
    related: [
      {
        name: "Pantalon Fluide",
        price: 320,
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
        slug: "pantalon-fluide",
      },
      {
        name: "Chemise Déstructurée",
        price: 280,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
        slug: "chemise-destructuree",
      },
      {
        name: "Manteau Oversize",
        price: 690,
        image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
        slug: "manteau-oversize",
      },
    ],
  },
  "robe-asymetrique": {
    name: "Robe Asymétrique",
    price: 420,
    description:
      "Une robe audacieuse avec une coupe asymétrique qui joue sur les volumes et les proportions. Sa silhouette fluide et son drapé sophistiqué en font une pièce à la fois élégante et avant-gardiste.",
    details: [
      "Soie et viscose",
      "Drapé asymétrique",
      "Fermeture invisible sur le côté",
      "Longueur midi",
      "Fabriquée à Paris",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Noir", "Ivoire", "Bordeaux"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1083&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&w=687&auto=format&fit=crop",
    ],
    category: "Vêtements",
    related: [
      {
        name: "Veste Structurée",
        price: 580,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
        slug: "veste-structuree",
      },
      {
        name: "Sculpture Textile",
        price: 450,
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
        slug: "sculpture-textile",
      },
      {
        name: "Chemise Déstructurée",
        price: 280,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
        slug: "chemise-destructuree",
      },
    ],
  },
  "serigraphie-limitee": {
    name: "Sérigraphie Limitée",
    price: 150,
    description:
      "Une sérigraphie originale en édition limitée, numérotée et signée. Cette œuvre d'art contemporaine capture l'essence de notre vision créative à travers des motifs abstraits et une palette de couleurs soigneusement sélectionnée.",
    details: [
      "Édition limitée à 50 exemplaires",
      "Numérotée et signée",
      "Encres écologiques",
      "Papier 300g/m²",
      "Dimensions: 50x70cm",
    ],
    colors: ["Multicolore"],
    images: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
    ],
    category: "Art",
    related: [
      {
        name: "Tirage Photo",
        price: 180,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
        slug: "tirage-photo",
      },
      {
        name: "Sculpture Textile",
        price: 450,
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
        slug: "sculpture-textile",
      },
    ],
  },
  "pantalon-fluide": {
    name: "Pantalon Fluide",
    price: 320,
    description:
      "Un pantalon à la coupe ample et fluide qui allie confort et élégance. Sa silhouette contemporaine et son tombé impeccable en font une pièce polyvalente qui s'adapte à toutes les occasions.",
    details: ["Laine et soie", "Taille haute", "Jambe large", "Poches latérales", "Fabriqué à Paris"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Noir", "Marine", "Écru"],
    images: [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
    ],
    category: "Vêtements",
    related: [
      {
        name: "Veste Structurée",
        price: 580,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
        slug: "veste-structuree",
      },
      {
        name: "Chemise Déstructurée",
        price: 280,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
        slug: "chemise-destructuree",
      },
    ],
  },
  "tirage-photo": {
    name: "Tirage Photo",
    price: 180,
    description:
      "Un tirage photographique en édition limitée, capturant l'essence de notre vision artistique. Cette œuvre d'art visuel explore les thèmes de l'identité et de l'expression à travers une composition soigneusement étudiée.",
    details: [
      "Édition limitée à 25 exemplaires",
      "Numéroté et signé",
      "Impression fine art sur papier Hahnemühle",
      "Dimensions: 60x90cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
    ],
    category: "Photo",
    related: [
      {
        name: "Sérigraphie Limitée",
        price: 150,
        image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
        slug: "serigraphie-limitee",
      },
      {
        name: "Sculpture Textile",
        price: 450,
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
        slug: "sculpture-textile",
      },
    ],
  },
  "chemise-destructuree": {
    name: "Chemise Déstructurée",
    price: 280,
    description:
      "Une chemise aux proportions réinventées qui joue sur l'asymétrie et les volumes. Sa construction non conventionnelle et ses détails inattendus en font une pièce statement qui transforme instantanément n'importe quelle silhouette.",
    details: ["Coton biologique", "Coupe asymétrique", "Détails plissés", "Boutons en nacre", "Fabriquée à Paris"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanc", "Noir", "Bleu pâle"],
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
    ],
    category: "Vêtements",
    related: [
      {
        name: "Veste Structurée",
        price: 580,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
        slug: "veste-structuree",
      },
      {
        name: "Pantalon Fluide",
        price: 320,
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
        slug: "pantalon-fluide",
      },
    ],
  },
  "sculpture-textile": {
    name: "Sculpture Textile",
    price: 450,
    description:
      "Une œuvre d'art textile qui explore la frontière entre mode et sculpture. Cette pièce unique, créée à partir de techniques de tissage expérimentales, transforme le textile en une forme tridimensionnelle qui invite à la contemplation.",
    details: [
      "Pièce unique",
      "Fibres naturelles et synthétiques",
      "Techniques mixtes",
      "Dimensions variables",
      "Certificat d'authenticité",
    ],
    images: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
    ],
    category: "Art",
    related: [
      {
        name: "Sérigraphie Limitée",
        price: 150,
        image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
        slug: "serigraphie-limitee",
      },
      {
        name: "Tirage Photo",
        price: 180,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
        slug: "tirage-photo",
      },
    ],
  },
  "manteau-oversize": {
    name: "Manteau Oversize",
    price: 690,
    description:
      "Un manteau aux proportions généreuses qui joue sur le contraste entre volume et structure. Sa silhouette contemporaine et ses détails minimalistes en font une pièce statement qui transcende les saisons et les tendances.",
    details: ["Laine et cachemire", "Coupe oversize", "Épaules structurées", "Poches plaquées", "Fabriqué à Paris"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Noir", "Camel", "Gris"],
    images: [
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop",
    ],
    category: "Vêtements",
    related: [
      {
        name: "Veste Structurée",
        price: 580,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
        slug: "veste-structuree",
      },
      {
        name: "Pantalon Fluide",
        price: 320,
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
        slug: "pantalon-fluide",
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const product = products[slug as keyof typeof products]

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Produit non trouvé</h1>
          <Link href="/boutique" className="text-gold hover:underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    )
  }

  const handleReservation = () => {
    // Redirect to WhatsApp with product information
    const message = `Bonjour, je souhaite réserver le produit suivant : ${product.name} (${
      selectedSize ? `Taille: ${selectedSize}, ` : ""
    }${selectedColor ? `Couleur: ${selectedColor}, ` : ""}Prix: ${product.price}€)`

    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-sm uppercase tracking-wider mb-4"
            >
              {product.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif tracking-tight mb-6"
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-gold"
            >
              {product.price} €
            </motion.p>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-8 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/boutique"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la boutique
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <Image
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square relative overflow-hidden rounded-md ${
                        selectedImage === index ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} vue ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-lg text-white/80">{product.description}</p>

                {/* Size Selection (if applicable) */}
                {product.sizes && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Taille</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border ${
                            selectedSize === size
                              ? "border-gold text-gold"
                              : "border-white/30 text-white/80 hover:border-white/60"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection (if applicable) */}
                {product.colors && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Couleur</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 border ${
                            selectedColor === color
                              ? "border-gold text-gold"
                              : "border-white/30 text-white/80 hover:border-white/60"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reservation Button */}
                <Button
                  onClick={handleReservation}
                  className="w-full bg-gold hover:bg-gold/80 text-black rounded-none py-6 text-lg"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Réserver via WhatsApp
                </Button>

                {/* Product Details */}
                {product.details && (
                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-lg font-medium mb-4">Détails</h3>
                    <ul className="space-y-2 text-white/80">
                      {product.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {product.related && (
          <section className="py-16 px-4 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-4xl font-serif mb-6 text-center">Vous aimerez aussi</h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.related.map((relatedProduct, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/boutique/${relatedProduct.slug}`}>
                      <div className="relative aspect-[3/4] overflow-hidden mb-4 rounded-lg">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-4 py-2 border border-white text-white text-sm uppercase tracking-wider">
                            Voir détails
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-medium">{relatedProduct.name}</h3>
                      <p className="text-white/80">{relatedProduct.price} €</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </PageTransition>
  )
}
