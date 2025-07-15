import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Logo et liens principaux */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-serif text-white">
              <span className="text-gold">D</span>MB Studios
            </Link>
          </div>

          {/* Navigation - réorganisée pour mobile */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-2 sm:flex sm:space-x-6 mb-4 md:mb-0">
            <Link href="/createur" className="text-white/60 hover:text-gold text-sm transition-colors">
              Créateur
            </Link>
            <Link href="/galerie" className="text-white/60 hover:text-gold text-sm transition-colors">
              Galerie
            </Link>
            <Link href="/boutique" className="text-white/60 hover:text-gold text-sm transition-colors">
              Boutique
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-gold text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/b.andysa?igsh=MWE3djM2ajlpamYzaA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              className="text-white/60 hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
          </div>
        </div>

        {/* Copyright et crédits */}
        <div className="border-t border-white/10 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} DMB Studios - Tous droits réservés
          </p>
          <p className="text-white/40 text-xs text-center md:text-right">
            Développé par{" "}
            <a
              href="https://www.instagram.com/b.andysa?igsh=MWE3djM2ajlpamYzaA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors"
            >
              Andy B
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
