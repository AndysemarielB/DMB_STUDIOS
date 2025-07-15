"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

// Collection data
const collections = {
  "automne-2025": {
    title: "Automne 2025",
    description:
      "Inspirée par les lignes brutes de l'architecture urbaine, cette collection repousse les limites du tailoring avec des coupes asymétriques et des matières contrastées.",
    coverImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-9f6e8338af98?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550613781-5fae8040e9d7?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-b2a3212d7c41?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4f0e3d6b9421?q=80&w=687&auto=format&fit=crop",
    ],
    video: "https://cdn.coverr.co/videos/coverr-fashion-show-in-slow-motion-3633/1080p.mp4",
    products: [
      {
        name: "Veste Structurée",
        price: 580,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
        slug: "veste-structuree",
      },
      {
        name: "Manteau Oversize",
        price: 690,
        image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
        slug: "manteau-oversize",
      },
      {
        name: "Blazer Cintré",
        price: 480,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop",
        slug: "blazer-cintre",
      },
      {
        name: "Pantalon Fluide",
        price: 320,
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
        slug: "pantalon-fluide",
      },
    ],
  },
  "ete-sauvage": {
    title: "Été Sauvage",
    description:
      "Une ode à la liberté et à la fluidité, où les tissus légers se mêlent aux structures audacieuses pour créer un contraste saisissant entre douceur et caractère.",
    coverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=686&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=686&auto=format&fit=crop",
    ],
    video: "https://cdn.coverr.co/videos/coverr-fashion-show-in-slow-motion-3633/1080p.mp4",
    products: [
      {
        name: "Robe Asymétrique",
        price: 420,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1083&auto=format&fit=crop",
        slug: "robe-asymetrique",
      },
      {
        name: "Top Drapé",
        price: 220,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1305&auto=format&fit=crop",
        slug: "top-drape",
      },
      {
        name: "Jupe Plissée",
        price: 290,
        image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1170&auto=format&fit=crop",
        slug: "jupe-plissee",
      },
      {
        name: "Chemise Déstructurée",
        price: 280,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
        slug: "chemise-destructuree",
      },
    ],
  },
  "capsule-urbaine": {
    title: "Capsule Urbaine",
    description:
      "Une collection qui célèbre la vie citadine avec des pièces polyvalentes et intemporelles, réinterprétées avec une touche contemporaine et des détails inattendus.",
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
    ],
    video: "https://cdn.coverr.co/videos/coverr-fashion-show-in-slow-motion-3633/1080p.mp4",
    products: [
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
      {
        name: "Chemise Déstructurée",
        price: 280,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
        slug: "chemise-destructuree",
      },
      {
        name: "Top Drapé",
        price: 220,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1305&auto=format&fit=crop",
        slug: "top-drape",
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const collection = collections[slug as keyof typeof collections]
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Add error handler for video
    const video = videoRef.current
    if (video) {
      const handleVideoError = () => {
        console.log("Video failed to load, falling back to image")
        setVideoFailed(true)
      }

      video.addEventListener("error", handleVideoError)

      return () => {
        video.removeEventListener("error", handleVideoError)
      }
    }
  }, [])

  if (!collection) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Collection non trouvée</h1>
          <Link href="/collections" className="text-gold hover:underline">
            Retour aux collections
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={collection.coverImage || "/placeholder.svg"}
            alt={collection.title}
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">{collection.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">{collection.description}</p>
          </div>
        </section>

        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <Link
            href="/collections"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux collections
          </Link>
        </div>

        {/* Gallery Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Lookbook</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collection.gallery.map((image, index) => (
                <div key={index} className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${collection.title} lookbook ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 md:px-8 bg-anthracite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Défilé</h2>

            <div className="aspect-video relative overflow-hidden">
              {!videoFailed ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={collection.coverImage}
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-fashion-show-in-slow-motion-3633/1080p.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://cdn.coverr.co/videos/coverr-fashion-show-in-slow-motion-3633/720p.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4620c52305e4b2c7c9b0374&profile_id=165&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Image
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={`${collection.title} défilé`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Pièces de la collection</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.products.map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  slug={product.slug}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild className="bg-gold hover:bg-gold/80 text-black rounded-none px-8 py-6 text-lg">
                <Link href="/boutique">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Voir toute la boutique
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
