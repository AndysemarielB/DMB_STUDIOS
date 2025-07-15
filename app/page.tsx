"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/loading-screen"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Gestion des erreurs vidéo
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoError = () => {
      console.log("Video error occurred, showing fallback image")
      setVideoError(true)
    }

    video.addEventListener("error", handleVideoError)

    // Tentative de lecture de la vidéo
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Video autoplay prevented:", error)
        // Ne pas définir videoError ici, car cela pourrait être juste une restriction d'autoplay
      })
    }

    return () => {
      video.removeEventListener("error", handleVideoError)
    }
  }, [loading])

  if (loading) {
    return <LoadingScreen onEnter={() => setLoading(false)} />
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section with Video Background */}
        <section className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop"
              >
                <source
                  src="https://videos.pexels.com/video-files/4937260/4937260-uhd_1440_2732_25fps.mp4"
                  type="video/mp4"
                />
                {/* Fallback si la vidéo ne peut pas être chargée */}
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop"
                  alt="Studio background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </video>
            ) : (
              // Fallback image si la vidéo a une erreur
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop')",
                }}
              ></div>
            )}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif tracking-tight mb-6 flex items-end justify-center"
            >
              <span className="text-6xl md:text-8xl">DMB</span>
              <span className="text-2xl md:text-4xl ml-3 mb-1">STUDIOS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
            >
              Là où l'art et la mode se rencontrent.
            </motion.p>

            {/* Suppression du bouton 'DÉCOUVRIR LE STUDIO' */}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
        </section>

        {/* Exploration Sections */}
        <ExploreSection />

        <Footer />
      </div>
    </PageTransition>
  )
}

// Exploration Section Component
function ExploreSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 relative inline-block">
            <span className="relative z-10">Explorez notre univers</span>
            <motion.span
              className="absolute -bottom-3 left-0 h-1 bg-gold"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mt-6">
            Découvrez les différentes facettes de DMB Studios à travers nos espaces créatifs
          </p>
        </motion.div>

        {/* Suppression de la section Studio (notre espace studio) */}

        {/* Innovative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Créateur Card */}
          <ExploreCard
            title="Créateur"
            description="Rencontrez l'artiste derrière DMB Studios et découvrez sa vision créative."
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
            link="/createur"
            delay={0.1}
            variant="gradient"
          />

          {/* Galerie Card */}
          <ExploreCard
            title="Galerie"
            description="Explorez nos créations à travers différents médiums et projets artistiques."
            image="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop"
            link="/galerie"
            delay={0.2}
            variant="framed"
          />

          {/* Boutique Card */}
          <ExploreCard
            title="Boutique"
            description="Découvrez et réservez nos créations uniques directement via WhatsApp."
            image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop"
            link="/boutique"
            delay={0.3}
            variant="overlay"
          />

          {/* Suppression de la carte Partenaires */}

          {/* Contact Card */}
          <ExploreCard
            title="Contact"
            description="Vous avez un projet en tête ? Contactez-nous pour discuter de votre vision créative."
            image="https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop"
            link="/contact"
            delay={0.5}
            variant="minimal"
            className="md:col-span-2 lg:col-span-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

// Innovative Card Component with Multiple Design Variants
function ExploreCard({ title, description, image, link, delay = 0, variant = "gradient", className = "" }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  // Different card styles based on variant
  const cardStyles = {
    gradient: {
      container: "relative overflow-hidden rounded-xl h-[400px] group",
      overlay: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10",
      content: "absolute inset-0 flex flex-col justify-end p-6 z-20",
      title: "text-3xl font-serif mb-3",
      description: "text-white/80 mb-6 max-w-xs",
      link: "inline-flex items-center text-gold hover:text-white transition-colors",
    },
    framed: {
      container: "relative overflow-hidden h-[400px] group",
      overlay: "absolute inset-0 bg-black/40 z-10",
      content: "absolute inset-0 flex flex-col justify-center items-center p-6 z-20",
      title: "text-3xl font-serif mb-3 text-center",
      description: "text-white/80 mb-6 text-center max-w-xs",
      link: "inline-flex items-center text-gold hover:text-white transition-colors",
    },
    overlay: {
      container: "relative overflow-hidden rounded-xl h-[400px] group",
      overlay: "absolute inset-0 bg-black/30 z-10",
      content: "absolute inset-0 flex flex-col justify-end p-6 z-20",
      title: "text-3xl font-serif mb-3",
      description: "text-white/80 mb-6 max-w-xs",
      link: "inline-flex items-center text-gold hover:text-white transition-colors",
    },
    split: {
      container: "relative overflow-hidden rounded-xl h-[400px] group",
      overlay: "absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10",
      content: "absolute inset-0 flex flex-col justify-center p-10 z-20",
      title: "text-3xl font-serif mb-3",
      description: "text-white/80 mb-6 max-w-xs",
      link: "inline-flex items-center text-gold hover:text-white transition-colors",
    },
    minimal: {
      container: "relative overflow-hidden rounded-xl h-[300px] group",
      overlay: "absolute inset-0 bg-black/50 backdrop-blur-sm z-10",
      content: "absolute inset-0 flex flex-col justify-center items-center p-6 z-20",
      title: "text-4xl font-serif mb-4 text-center",
      description: "text-white/80 mb-8 text-center max-w-md",
      link: "inline-flex items-center text-gold hover:text-white transition-colors",
    },
  }

  const style = cardStyles[variant]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay }}
      className={`${style.container} ${className}`}
    >
      <div className={style.overlay}></div>
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {variant === "framed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="absolute inset-8 border border-gold/50 z-10"
        />
      )}

      <div className={style.content}>
        {variant === "minimal" && (
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : { width: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="h-px bg-gold mb-6"
          />
        )}

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className={style.title}
        >
          {title}
        </motion.h3>

        {variant === "gradient" && (
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : { width: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="h-px bg-gold mb-4"
          />
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className={style.description}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          <Link href={link} className={style.link}>
            <span className="relative group-hover:pr-1 transition-all duration-300">
              Découvrir
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-gold group-hover:bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              />
            </span>
            <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
