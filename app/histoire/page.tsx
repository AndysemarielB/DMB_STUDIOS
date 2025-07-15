import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function HistoirePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 md:mb-16 text-center">L&apos;Histoire</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1173&auto=format&fit=crop"
                  alt="DMB au travail"
                  width={600}
                  height={800}
                  className="w-full grayscale"
                />
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-6">DMB, un esprit libre</h2>
                <div className="w-16 h-px bg-gold mb-6"></div>
                <p className="text-white/80 mb-6">
                  Qui transforme les étoffes en œuvres d&apos;art depuis 2018. Avec une vision unique du vêtement comme
                  extension de la personnalité, chaque création est pensée comme une sculpture portable.
                </p>
                <p className="text-white/80 mb-6">
                  Tout a commencé dans un petit atelier parisien avec une vieille machine à coudre héritée de ma
                  grand-mère. Cette passion pour le textile et la forme s&apos;est transformée en une quête
                  d&apos;innovation constante.
                </p>
                <p className="text-white/80 mb-6">
                  Formé à l&apos;École de la Chambre Syndicale de la Couture Parisienne, DMB a affiné sa technique tout
                  en développant une approche singulière du vêtement, où la structure dialogue avec le mouvement.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-serif mb-8 text-center">Notre Philosophie</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-anthracite">
                  <h3 className="text-xl font-serif mb-4">Audace</h3>
                  <p className="text-white/80">
                    Repousser les limites du conventionnel pour créer des silhouettes qui défient les attentes et
                    inspirent la confiance.
                  </p>
                </div>

                <div className="text-center p-6 bg-anthracite">
                  <h3 className="text-xl font-serif mb-4">Artisanat</h3>
                  <p className="text-white/80">
                    Chaque pièce est confectionnée avec soin dans notre atelier parisien, avec une attention méticuleuse
                    aux détails et aux finitions.
                  </p>
                </div>

                <div className="text-center p-6 bg-anthracite">
                  <h3 className="text-xl font-serif mb-4">Durabilité</h3>
                  <p className="text-white/80">
                    Un engagement pour des pratiques responsables, des matériaux de qualité et des créations
                    intemporelles qui transcendent les tendances.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-serif mb-8 text-center">L&apos;Atelier</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-white/80 mb-6">
                    Niché au cœur du Marais à Paris, notre atelier est un espace où la créativité et le savoir-faire se
                    rencontrent. C&apos;est ici que chaque idée prend forme, du croquis initial à la pièce finale.
                  </p>
                  <p className="text-white/80 mb-6">
                    Les grandes fenêtres laissent entrer la lumière naturelle, illuminant les tables de travail où les
                    tissus sont coupés avec précision, les machines à coudre qui donnent vie aux designs, et les
                    mannequins qui portent les créations en cours.
                  </p>
                  <p className="text-white/80 mb-10">
                    L&apos;atelier est aussi un lieu d&apos;échange et d&apos;inspiration, où l&apos;équipe de DMB
                    collabore pour repousser les frontières de la mode contemporaine.
                  </p>

                  <div className="relative aspect-video bg-black/50">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
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
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-16 h-16 rounded-full border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
                      >
                        <Play className="h-8 w-8" />
                        <span className="sr-only">Play video</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop"
                    alt="L'atelier DMB"
                    width={600}
                    height={800}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-8 text-center">Notre Parcours</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 text-gold font-serif text-2xl">2018</div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">Naissance de DMB Studios</h3>
                    <p className="text-white/80">
                      Création de la marque et lancement de la première collection capsule de 10 pièces.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 text-gold font-serif text-2xl">2020</div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">Ouverture de l&apos;atelier</h3>
                    <p className="text-white/80">
                      Installation dans notre espace actuel au cœur du Marais et expansion de l&apos;équipe.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 text-gold font-serif text-2xl">2022</div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">Première présentation à la Fashion Week</h3>
                    <p className="text-white/80">
                      Présentation remarquée de la collection "Structures" lors de la Fashion Week de Paris.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 text-gold font-serif text-2xl">2024</div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">Lancement de la boutique en ligne</h3>
                    <p className="text-white/80">
                      Ouverture de notre e-shop pour rendre nos créations accessibles à une clientèle internationale.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 text-gold font-serif text-2xl">2025</div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">Aujourd&apos;hui</h3>
                    <p className="text-white/80">
                      Poursuite de notre vision avec le développement de nouvelles collections et collaborations
                      exclusives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
