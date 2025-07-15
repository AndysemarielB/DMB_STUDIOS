import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 md:mb-16 text-center">FAQ</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif mb-6">Commandes et livraisons</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="text-left">Comment passer commande sur votre site ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Pour passer commande, il vous suffit de sélectionner les articles qui vous intéressent, de choisir
                      votre taille et votre couleur, puis de les ajouter à votre panier. Une fois vos sélections
                      terminées, procédez au paiement en suivant les étapes indiquées.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-white/10">
                    <AccordionTrigger className="text-left">Quels sont les délais de livraison ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Les délais de livraison varient selon votre localisation. Pour la France métropolitaine, comptez
                      2-3 jours ouvrés. Pour l&apos;Europe, 3-5 jours ouvrés. Pour le reste du monde, 5-10 jours ouvrés.
                      Ces délais sont indicatifs et peuvent varier selon la disponibilité des articles.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-white/10">
                    <AccordionTrigger className="text-left">Quels sont les frais de livraison ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Les frais de livraison sont offerts pour toute commande supérieure à 300€ en France
                      métropolitaine. Pour les commandes inférieures à ce montant, les frais s&apos;élèvent à 10€. Pour
                      l&apos;international, les frais varient selon la destination et vous sont indiqués lors du
                      processus de commande.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-white/10">
                    <AccordionTrigger className="text-left">Comment suivre ma commande ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Une fois votre commande expédiée, vous recevrez un email contenant un numéro de suivi. Vous
                      pourrez utiliser ce numéro sur le site du transporteur pour suivre l&apos;acheminement de votre
                      colis en temps réel.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">Produits et tailles</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-5" className="border-white/10">
                    <AccordionTrigger className="text-left">Comment choisir la bonne taille ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Nous vous recommandons de consulter notre guide des tailles disponible sur chaque fiche produit.
                      Si vous hésitez entre deux tailles, n&apos;hésitez pas à nous contacter pour obtenir des conseils
                      personnalisés.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-white/10">
                    <AccordionTrigger className="text-left">
                      Les produits sont-ils fabriqués en France ?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Oui, toutes nos pièces sont conçues et fabriquées dans notre atelier à Paris. Nous attachons une
                      grande importance au savoir-faire local et à la qualité de fabrication.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-white/10">
                    <AccordionTrigger className="text-left">
                      Comment entretenir mes vêtements DMB Studios ?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Chaque vêtement est accompagné d&apos;instructions d&apos;entretien spécifiques. De manière
                      générale, nous recommandons un nettoyage à sec pour la plupart de nos pièces afin de préserver
                      leur qualité et leur durabilité.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">Retours et échanges</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-8" className="border-white/10">
                    <AccordionTrigger className="text-left">Quelle est votre politique de retour ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un
                      article. Les articles retournés doivent être dans leur état d&apos;origine, non portés et avec
                      toutes les étiquettes attachées.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="border-white/10">
                    <AccordionTrigger className="text-left">Comment effectuer un retour ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Pour effectuer un retour, connectez-vous à votre compte client, sélectionnez la commande concernée
                      et suivez les instructions. Vous recevrez ensuite une étiquette de retour à imprimer et à apposer
                      sur votre colis.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="border-white/10">
                    <AccordionTrigger className="text-left">Combien de temps pour être remboursé ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Une fois votre retour reçu et vérifié, le remboursement est effectué sous 5 à 10 jours ouvrés. Le
                      délai peut varier selon votre banque pour que la somme soit effectivement créditée sur votre
                      compte.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">Autres questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-11" className="border-white/10">
                    <AccordionTrigger className="text-left">Proposez-vous des cartes cadeaux ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Oui, nous proposons des cartes cadeaux d&apos;une valeur de 100€, 200€, 500€ ou 1000€. Elles sont
                      valables un an à compter de la date d&apos;achat et peuvent être utilisées en une ou plusieurs
                      fois.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-12" className="border-white/10">
                    <AccordionTrigger className="text-left">
                      Est-il possible de visiter votre atelier ?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Nous organisons occasionnellement des journées portes ouvertes. Pour être informé des prochaines
                      dates, inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-13" className="border-white/10">
                    <AccordionTrigger className="text-left">Proposez-vous des créations sur mesure ?</AccordionTrigger>
                    <AccordionContent className="text-white/80">
                      Oui, nous proposons un service de création sur mesure pour des occasions spéciales. Pour en savoir
                      plus, veuillez nous contacter directement par email à contact@dmb-studios.com ou par téléphone.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-white/80 mb-4">Vous n&apos;avez pas trouvé la réponse à votre question ?</p>
              <Link
                href="/contact"
                className="text-gold hover:text-white underline underline-offset-4 transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
