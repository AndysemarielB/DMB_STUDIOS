"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fonction pour détecter si l'appareil est mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
      return mobileRegex.test(userAgent.toLowerCase())
    }

    // Vérifier si l'écran est petit (approche alternative)
    const checkSmallScreen = () => {
      return window.innerWidth <= 768
    }

    // Définir l'état en fonction des deux vérifications
    setIsMobile(checkMobile() || checkSmallScreen())

    // Mettre à jour lors du redimensionnement de la fenêtre
    const handleResize = () => {
      setIsMobile(checkMobile() || checkSmallScreen())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}
