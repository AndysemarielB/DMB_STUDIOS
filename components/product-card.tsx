"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProductCardProps {
  name: string
  price: number
  image: string
  slug: string
}

export default function ProductCard({ name, price, image, slug }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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

          {/* Quick view button */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
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
