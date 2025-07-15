"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface GalleryCardProps {
  title: string
  image: string
  slug: string
  category: string
}

export default function GalleryCard({ title, image, slug, category }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[3/4] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/galerie/${slug}`}>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <span className="text-gold text-sm uppercase tracking-wider mb-2">{category}</span>
          <h3 className="text-2xl font-serif">{title}</h3>
          <div
            className={`w-10 h-px bg-gold mt-4 mb-4 transition-all duration-300 ${isHovered ? "w-20" : "w-10"}`}
          ></div>
          <p className={`text-white/80 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            Découvrir le projet
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
