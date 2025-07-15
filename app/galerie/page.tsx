"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

interface GalleryItemProps {
  title: string
  category: string
  image: string
  slug: string
  index: number
}

function GalleryItem({ title, category, image, slug, index }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/galerie/${slug}`} className="block aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:bg-black/50"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <span className="text-gold text-sm uppercase tracking-wider mb-2">{category}</span>
          <h3 className="text-2xl font-serif mb-2">{title}</h3>
          <div className={`w-10 h-px bg-gold mb-4 transition-all duration-300 ${isHovered ? "w-20" : "w-10"}`}></div>
          <p
            className={`text-white/80 transition-all duration-300 transform ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Découvrir le projet
            <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [isFilterSticky, setIsFilterSticky] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const filterPosition = filterRef.current.getBoundingClientRect().top
        setIsFilterSticky(filterPosition <= 80)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Collection Automne",
      category: "Stylisme",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
      slug: "collection-automne",
      year: "2023",
    },
    {
      title: "Série Portraits Urbains",
      category: "Shooting",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      slug: "portraits-urbains",
      year: "2022",
    },
    {
      title: "Direction Artistique - Campagne Éthérée",
      category: "Direction Artistique",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
      slug: "campagne-etheree",
      year: "2023",
    },
    {
      title: "Capsule Minimaliste",
      category: "Stylisme",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
      slug: "capsule-minimaliste",
      year: "2022",
    },
    {
      title: "Lookbook Printemps",
      category: "Shooting",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
      slug: "lookbook-printemps",
      year: "2023",
    },
    {
      title: "Collaboration Textile",
      category: "Stylisme",
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      slug: "collaboration-textile",
      year: "2022",
    },
    {
      title: "Direction Artistique - Magazine",
      category: "Direction Artistique",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      slug: "direction-magazine",
      year: "2023",
    },
  ]

  const filteredProjects =
    activeCategory === "Tous" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories = ["Tous", "Stylisme", "Shooting", "Direction Artistique"]

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop"
              alt="Galerie DMB Studios"
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
              Galerie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
            >
              Découvrez l&apos;univers créatif de DMB Studios à travers nos différents projets
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
        <div
          ref={filterRef}
          className={`py-8 px-4 md:px-8 bg-black z-30 transition-all duration-300 ${
            isFilterSticky ? "sticky top-0 shadow-lg bg-black/90 backdrop-blur-md" : ""
          }`}
        >
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
        </div>

        {/* Gallery Grid */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <GalleryItem
                  key={project.slug}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  slug={project.slug}
                  index={index}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-white/60">Aucun projet trouvé dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
