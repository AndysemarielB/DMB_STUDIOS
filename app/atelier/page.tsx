import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AtelierPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop"
            alt="L'atelier DMB"
            fill
            className="object-cover"
          />

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">L&apos;Atelier</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Le lieu où naissent nos créations, entre tradition et innovation
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h2 className="text-3xl font-serif mb-6">Notre espace créatif</h2>
                <div className="w-16 h-px bg-gold mb-6"></div>
                <p className="text-white/80 mb-6">
                  Niché au cœur du Marais à Paris, notre atelier est un espace où la créativité et le savoir-faire se
                  rencontrent. C&apos;est ici que chaque idée prend forme, du croquis initial à la pièce finale.
                </p>
                <p className="text-white/80 mb-6">
                  Les grandes fenêtres laissent entrer la lumière naturelle, illuminant les tables de travail où les
                  tissus sont coupés avec précision, les machines à coudre qui donnent vie aux designs, et les
                  mannequins qui portent les créations en cours.
                </p>
                <p className="text-white/80">
                  L&apos;atelier est aussi un lieu d&apos;échange et d&apos;inspiration, où l&apos;équipe de DMB
                  collabore pour repousser les frontières de la mode contemporaine.
                </p>
              </div>

              <div>
                <Image
                  src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1074&auto=format&fit=crop"
                  alt="Espace de travail"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-serif mb-8 text-center">Notre processus créatif</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1594750852563-5ed8d0e4b0ff?q=80&w=1287&auto=format&fit=crop"
                      alt="Inspiration et recherche"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-4">Inspiration et recherche</h3>
                  <p className="text-white/80">
                    Chaque collection commence par une phase d&apos;exploration et de recherche, où nous puisons notre
                    inspiration dans l&apos;art, l&apos;architecture et les mouvements culturels.
                  </p>
                </div>

                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1621600411688-4be93c2c1208?q=80&w=880&auto=format&fit=crop"
                      alt="Conception et prototypage"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-4">Conception et prototypage</h3>
                  <p className="text-white/80">
                    Les idées se transforment en croquis, puis en patrons. Nous créons des prototypes pour tester les
                    coupes, les proportions et les techniques de construction.
                  </p>
                </div>

                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1074&auto=format&fit=crop"
                      alt="Fabrication artisanale"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-4">Fabrication artisanale</h3>
                  <p className="text-white/80">
                    Chaque pièce est confectionnée à la main dans notre atelier, avec une attention méticuleuse aux
                    détails et aux finitions, dans le respect des traditions de la haute couture.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-serif mb-8 text-center">Visite virtuelle</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="aspect-video relative">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
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
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-3xl font-serif mb-8 text-center">Notre équipe</h2>
              <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1173&auto=format&fit=crop"
                      alt="DMB - Fondateur et Directeur Créatif"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">DMB</h3>
                  <p className="text-white/80">Fondateur et Directeur Créatif</p>
                </div>

                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop"
                      alt="Sophie M. - Directrice de l'Atelier"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">Sophie M.</h3>
                  <p className="text-white/80">Directrice de l&apos;Atelier</p>
                </div>

                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                      alt="Thomas L. - Modéliste"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">Thomas L.</h3>
                  <p className="text-white/80">Modéliste</p>
                </div>

                <div className="text-center">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop"
                      alt="Emma R. - Couturière"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">Emma R.</h3>
                  <p className="text-white/80">Couturière</p>
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
