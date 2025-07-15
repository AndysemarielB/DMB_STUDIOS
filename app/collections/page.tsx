import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 md:mb-16 text-center">Collections</h1>

            <div className="grid grid-cols-1 gap-16">
              {/* Collection 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-serif mb-4">Automne 2025</h2>
                  <div className="w-16 h-px bg-gold mb-6"></div>
                  <p className="text-white/80 mb-8">
                    Inspirée par les lignes brutes de l&apos;architecture urbaine, cette collection repousse les limites
                    du tailoring avec des coupes asymétriques et des matières contrastées.
                  </p>
                  <Link
                    href="/collections/automne-2025"
                    className="inline-flex items-center text-gold hover:text-white transition-colors"
                  >
                    Découvrir la collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop"
                    alt="Collection Automne 2025"
                    width={600}
                    height={800}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Collection 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop"
                    alt="Collection Été Sauvage"
                    width={600}
                    height={800}
                    className="w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-serif mb-4">Été Sauvage</h2>
                  <div className="w-16 h-px bg-gold mb-6"></div>
                  <p className="text-white/80 mb-8">
                    Une ode à la liberté et à la fluidité, où les tissus légers se mêlent aux structures audacieuses
                    pour créer un contraste saisissant entre douceur et caractère.
                  </p>
                  <Link
                    href="/collections/ete-sauvage"
                    className="inline-flex items-center text-gold hover:text-white transition-colors"
                  >
                    Découvrir la collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Collection 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-serif mb-4">Capsule Urbaine</h2>
                  <div className="w-16 h-px bg-gold mb-6"></div>
                  <p className="text-white/80 mb-8">
                    Une collection qui célèbre la vie citadine avec des pièces polyvalentes et intemporelles,
                    réinterprétées avec une touche contemporaine et des détails inattendus.
                  </p>
                  <Link
                    href="/collections/capsule-urbaine"
                    className="inline-flex items-center text-gold hover:text-white transition-colors"
                  >
                    Découvrir la collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop"
                    alt="Collection Capsule Urbaine"
                    width={600}
                    height={800}
                    className="w-full"
                  />
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
