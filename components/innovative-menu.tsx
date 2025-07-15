"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function InnovativeMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const menuItems = [
    { path: "/", label: "ACCUEIL" },
    { path: "/createur", label: "CRÉATEUR" },
    { path: "/galerie", label: "GALERIE" },
    { path: "/boutique", label: "BOUTIQUE" },
    { path: "/contact", label: "CONTACT" },
  ]

  const menuVariants = {
    closed: {
      clipPath: "circle(0px at calc(100% - 45px) 45px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      clipPath: "circle(2000px at calc(100% - 45px) 45px)",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 bg-black/80 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-white z-50">
            <span className="text-gold">D</span>MB
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 w-12 h-12 flex items-center justify-center text-white focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex items-center justify-center"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-full flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-6 md:space-y-8">
                  {menuItems.map((item, i) => (
                    <motion.div key={item.path} custom={i} variants={menuItemVariants} className="overflow-hidden">
                      <Link
                        href={item.path}
                        className={`text-3xl md:text-4xl font-serif transition-colors duration-300 relative group ${
                          pathname === item.path ? "text-gold" : "text-white hover:text-gold"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-2 left-0 w-full h-px transform origin-left transition-transform duration-300 ${
                            pathname === item.path ? "bg-gold scale-x-100" : "bg-gold scale-x-0 group-hover:scale-x-100"
                          }`}
                        ></span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } },
                  }}
                  className="mt-16 flex space-x-6"
                >
                  <a
                    href="https://www.instagram.com/b.andysa?igsh=MWE3djM2ajlpamYzaA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9.5 15.5a5 5 0 0 0 5 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:contact@dmb-studios.com"
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
