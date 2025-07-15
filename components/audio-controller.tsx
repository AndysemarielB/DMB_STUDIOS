"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { Volume2, VolumeX, AlertCircle } from "lucide-react"

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isMobile = useMobile()
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Fonction pour afficher une notification
  const showNotificationMessage = (message: string, isError = false) => {
    // Effacer le timeout précédent si existant
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current)
    }

    setNotificationMessage(message)
    setShowNotification(true)

    // Masquer la notification après 3 secondes
    notificationTimeoutRef.current = setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  // Fonction pour basculer l'audio
  const toggleAudio = () => {
    if (!audioRef.current) {
      showNotificationMessage("Erreur: Lecteur audio non disponible", true)
      return
    }

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
        showNotificationMessage("Audio désactivé")
      } else {
        setIsLoading(true)
        // Réinitialiser l'erreur lors d'une nouvelle tentative
        setAudioError(false)

        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Lecture audio démarrée avec succès")
              setIsPlaying(true)
              showNotificationMessage("Audio activé")
            })
            .catch((err) => {
              console.log("Erreur de lecture audio:", err)
              setAudioError(true)
              setIsPlaying(false)
              showNotificationMessage("Impossible de lire l'audio. Veuillez réessayer.", true)
            })
            .finally(() => {
              setIsLoading(false)
            })
        }
      }
    } catch (error) {
      console.error("Erreur lors de la manipulation audio:", error)
      setAudioError(true)
      setIsPlaying(false)
      setIsLoading(false)
      showNotificationMessage("Une erreur s'est produite avec l'audio", true)
    }
  }

  // Gestionnaires d'événements audio
  useEffect(() => {
    const handleCanPlayThrough = () => {
      console.log("Audio prêt à être joué entièrement")
      setIsLoading(false)
    }

    const handleError = (e: Event) => {
      console.error("Erreur audio détectée:", e)
      setAudioError(true)
      setIsLoading(false)
      setIsPlaying(false)
      showNotificationMessage("Erreur lors du chargement de l'audio", true)
    }

    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.addEventListener("canplaythrough", handleCanPlayThrough)
      audioElement.addEventListener("error", handleError)
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("canplaythrough", handleCanPlayThrough)
        audioElement.removeEventListener("error", handleError)
      }

      // Nettoyer le timeout de notification
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Élément audio réel dans le DOM */}
      <audio ref={audioRef} preload="auto" loop playsInline crossOrigin="anonymous" style={{ display: "none" }}>
        {/* Fournir plusieurs sources pour une meilleure compatibilité */}
        <source src="/Burna Boy - Ye.mp3" type="audio/mpeg" />
        <source src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3" type="audio/mpeg" />
        {/* Message pour les navigateurs qui ne prennent pas en charge l'élément audio */}
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed z-50 bottom-20 right-6 p-3 rounded-lg shadow-lg ${
              notificationMessage.includes("Erreur") || audioError
                ? "bg-red-900/90 text-white"
                : "bg-black/90 text-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              {(notificationMessage.includes("Erreur") || audioError) && (
                <AlertCircle className="h-5 w-5 text-red-300" />
              )}
              <span>{notificationMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de contrôle audio */}
      <button
        onClick={toggleAudio}
        disabled={isLoading}
        className={`fixed z-50 ${isMobile ? "bottom-8 right-8 p-4" : "bottom-6 right-6 p-3"} 
                 bg-black/80 backdrop-blur-sm border-2 ${isPlaying ? "border-gold" : "border-white/50"} 
                 hover:border-gold transition-all duration-300 rounded-full
                 ${isLoading ? "opacity-70" : "opacity-100"}`}
        aria-label={isPlaying ? "Désactiver la musique" : "Activer la musique"}
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full"
          />
        ) : isPlaying ? (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
            <Volume2 className="text-gold" size={isMobile ? 28 : 24} />
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
            <VolumeX className={`${audioError ? "text-red-500" : "text-white"}`} size={isMobile ? 28 : 24} />
          </motion.div>
        )}
      </button>
    </>
  )
}
