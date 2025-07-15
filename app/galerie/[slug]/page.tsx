"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import InnovativeMenu from "@/components/innovative-menu"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

// Données des projets
const projects = {
  "collection-automne": {
    title: "Collection Automne",
    category: "Mode",
    year: "2023",
    description:
      "Une collection inspirée par les lignes brutes de l'architecture urbaine, repoussant les limites du tailoring avec des coupes asymétriques et des matières contrastées.",
    coverImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-9f6e8338af98?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550613781-5fae8040e9d7?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-b2a3212d7c41?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4f0e3d6b9421?q=80&w=687&auto=format&fit=crop",
    ],
    video:
      "https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4620c52305e4b2c7c9b0374&profile_id=165&oauth2_token_id=57447761",
    content: [
      {
        title: "Concept",
        text: "Cette collection explore la relation entre l'architecture urbaine et le corps humain. Chaque pièce est conçue comme une structure qui interagit avec le corps, créant un dialogue entre rigidité et fluidité, entre construction et mouvement.",
      },
      {
        title: "Matériaux",
        text: "Nous avons sélectionné des matériaux de haute qualité qui reflètent cette dualité : laine structurée, cuir souple, soie et coton organique. Les textures contrastées créent une expérience tactile riche qui complète l'expérience visuelle.",
      },
      {
        title: "Processus créatif",
        text: "Le processus de création a débuté par une série de croquis inspirés de bâtiments emblématiques. Ces dessins ont ensuite été transformés en patrons expérimentaux, testés et affinés pour créer des silhouettes à la fois audacieuses et portables.",
      },
    ],
    related: [
      {
        title: "Capsule Minimaliste",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
        slug: "capsule-minimaliste",
        category: "Mode",
      },
      {
        title: "Collaboration Textile",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
        slug: "collaboration-textile",
        category: "Mode",
      },
    ],
  },
  "portraits-urbains": {
    title: "Série Portraits Urbains",
    category: "Photo",
    year: "2022",
    description:
      "Une série photographique explorant l'identité et l'expression de soi dans le contexte urbain contemporain, capturant l'essence des individus dans leur environnement quotidien.",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1173&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Cette série photographique explore la relation entre l'individu et l'environnement urbain. Chaque portrait capture non seulement la personne, mais aussi comment elle interagit avec et est façonnée par son environnement quotidien.",
      },
      {
        title: "Technique",
        text: "Les photographies ont été réalisées avec un mélange de lumière naturelle et artificielle, créant un équilibre entre authenticité et mise en scène. L'approche visuelle privilégie les contrastes forts et une palette de couleurs distincte pour chaque sujet.",
      },
      {
        title: "Exposition",
        text: "Cette série a été exposée à la Galerie Moderne en 2022, accompagnée d'une installation sonore capturant l'ambiance sonore des lieux où les portraits ont été pris, créant ainsi une expérience immersive pour les visiteurs.",
      },
    ],
    related: [
      {
        title: "Lookbook Printemps",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
        slug: "lookbook-printemps",
        category: "Photo",
      },
      {
        title: "Direction Artistique - Magazine",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
        slug: "direction-magazine",
        category: "Direction Artistique",
      },
    ],
  },
  "campagne-etheree": {
    title: "Direction Artistique - Campagne Éthérée",
    category: "Direction Artistique",
    year: "2023",
    description:
      "Une campagne visuelle explorant les thèmes de la légèreté et de la transcendance, créant un univers onirique où la mode devient un véhicule d'expression poétique.",
    coverImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
    ],
    video:
      "https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4620c52305e4b2c7c9b0374&profile_id=165&oauth2_token_id=57447761",
    content: [
      {
        title: "Concept",
        text: "La campagne Éthérée explore la frontière entre le tangible et l'intangible, créant un univers visuel où les vêtements semblent défier la gravité. L'objectif était de transcender la simple présentation de mode pour créer une expérience immersive et poétique.",
      },
      {
        title: "Direction artistique",
        text: "En tant que directeur artistique, j'ai développé un concept visuel cohérent, sélectionné les lieux de tournage, dirigé l'équipe créative et supervisé tous les aspects visuels de la campagne, de la photographie à la post-production.",
      },
      {
        title: "Collaboration",
        text: "Ce projet a été réalisé en collaboration avec le photographe Marc Durand et la styliste Sophie Mercier. Ensemble, nous avons créé une série d'images qui transcendent la mode traditionnelle pour entrer dans le domaine de l'art visuel.",
      },
    ],
    related: [
      {
        title: "Direction Artistique - Magazine",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
        slug: "direction-magazine",
        category: "Direction Artistique",
      },
      {
        title: "Série Portraits Urbains",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
        slug: "portraits-urbains",
        category: "Photo",
      },
    ],
  },
  "capsule-minimaliste": {
    title: "Capsule Minimaliste",
    category: "Mode",
    year: "2022",
    description:
      "Une collection capsule explorant l'esthétique minimaliste à travers des pièces essentielles aux lignes épurées et aux détails soigneusement étudiés.",
    coverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1287&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Cette collection capsule explore l'essence du minimalisme dans la mode contemporaine. Chaque pièce est conçue pour être intemporelle, fonctionnelle et esthétiquement pure, avec une attention particulière portée aux proportions et aux détails subtils.",
      },
      {
        title: "Matériaux",
        text: "Nous avons sélectionné des matériaux naturels de haute qualité : coton biologique, lin, laine mérinos et soie. La palette de couleurs neutres - blanc, noir, beige et gris - renforce l'esthétique minimaliste tout en offrant une polyvalence maximale.",
      },
      {
        title: "Durabilité",
        text: "Au-delà de l'esthétique, cette collection incarne notre engagement envers la durabilité. Chaque pièce est conçue pour durer, tant par sa qualité que par son style intemporel, offrant une alternative consciente à la mode éphémère.",
      },
    ],
    related: [
      {
        title: "Collection Automne",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
        slug: "collection-automne",
        category: "Mode",
      },
      {
        title: "Collaboration Textile",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
        slug: "collaboration-textile",
        category: "Mode",
      },
    ],
  },
  "installation-lumineuse": {
    title: "Installation Lumineuse",
    category: "Art",
    year: "2021",
    description:
      "Une installation artistique explorant la relation entre lumière, espace et perception, créant une expérience immersive qui transforme l'environnement architectural.",
    coverImage: "https://images.unsplash.com/photo-1550613781-5fae8040e9d7?q=80&w=687&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550613781-5fae8040e9d7?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-9f6e8338af98?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-b2a3212d7c41?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4f0e3d6b9421?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=687&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Cette installation explore la matérialité de la lumière et sa capacité à transformer notre perception de l'espace. En utilisant des projections, des réflexions et des diffusions lumineuses, l'œuvre crée un environnement immersif qui évolue subtilement au fil du temps.",
      },
      {
        title: "Technique",
        text: "L'installation combine des sources lumineuses LED programmables, des surfaces réfléchissantes et des éléments textiles semi-transparents. Un système de contrôle numérique permet de créer des séquences lumineuses qui réagissent à la présence et aux mouvements des spectateurs.",
      },
      {
        title: "Exposition",
        text: "Présentée initialement à la Galerie Moderne en 2021, cette installation a ensuite été adaptée pour différents espaces, chaque itération étant spécifiquement conçue pour dialoguer avec l'architecture du lieu d'exposition.",
      },
    ],
    related: [
      {
        title: "Série Conceptuelle",
        image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
        slug: "serie-conceptuelle",
        category: "Art",
      },
      {
        title: "Direction Artistique - Campagne Éthérée",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
        slug: "campagne-etheree",
        category: "Direction Artistique",
      },
    ],
  },
  "lookbook-printemps": {
    title: "Lookbook Printemps",
    category: "Photo",
    year: "2023",
    description:
      "Une série photographique présentant la collection printemps dans un cadre naturel, jouant avec la lumière et les textures pour mettre en valeur les pièces et leur relation avec l'environnement.",
    coverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=686&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=686&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Ce lookbook explore la relation entre les vêtements et l'environnement naturel. Photographié au lever du soleil dans un jardin botanique, il capture la fraîcheur et la vitalité du printemps, créant un dialogue visuel entre les textures des tissus et celles de la nature.",
      },
      {
        title: "Direction photographique",
        text: "La direction photographique privilégie une lumière naturelle douce et des compositions qui intègrent harmonieusement les modèles dans leur environnement. L'approche visuelle est à la fois documentaire et artistique, capturant des moments qui semblent spontanés mais sont soigneusement composés.",
      },
      {
        title: "Stylisme",
        text: "Le stylisme met en valeur la fluidité et la légèreté des pièces de la collection printemps, créant des silhouettes qui semblent en mouvement même dans les images statiques. Les accessoires sont minimalistes, laissant les vêtements et leur interaction avec l'environnement au premier plan.",
      },
    ],
    related: [
      {
        title: "Série Portraits Urbains",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
        slug: "portraits-urbains",
        category: "Photo",
      },
      {
        title: "Capsule Minimaliste",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
        slug: "capsule-minimaliste",
        category: "Mode",
      },
    ],
  },
  "collaboration-textile": {
    title: "Collaboration Textile",
    category: "Mode",
    year: "2022",
    description:
      "Une collaboration avec des artisans textiles traditionnels, fusionnant techniques ancestrales et design contemporain pour créer des pièces uniques aux textures et motifs distinctifs.",
    coverImage: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Cette collaboration explore la rencontre entre l'artisanat textile traditionnel et le design contemporain. En travaillant avec des artisans maîtrisant des techniques ancestrales, nous avons créé des textiles uniques qui racontent une histoire tout en s'inscrivant dans une esthétique moderne.",
      },
      {
        title: "Processus",
        text: "Le processus a débuté par une immersion dans l'atelier des artisans pour comprendre leurs techniques et leur savoir-faire. S'en est suivie une phase de co-création où designs contemporains et méthodes traditionnelles ont fusionné pour donner naissance à des textiles innovants.",
      },
      {
        title: "Impact",
        text: "Au-delà de l'aspect créatif, cette collaboration s'inscrit dans une démarche de préservation et de valorisation de savoir-faire en voie de disparition. Elle offre également aux artisans une nouvelle plateforme d'expression et de reconnaissance pour leur art.",
      },
    ],
    related: [
      {
        title: "Collection Automne",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=774&auto=format&fit=crop",
        slug: "collection-automne",
        category: "Mode",
      },
      {
        title: "Capsule Minimaliste",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
        slug: "capsule-minimaliste",
        category: "Mode",
      },
    ],
  },
  "serie-conceptuelle": {
    title: "Série Conceptuelle",
    category: "Art",
    year: "2021",
    description:
      "Une série d'œuvres conceptuelles explorant les thèmes de l'identité, de la perception et de la transformation, utilisant divers médiums pour créer un dialogue visuel entre forme et fond.",
    coverImage: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Cette série conceptuelle explore les frontières entre réalité et perception, entre le tangible et l'intangible. Chaque œuvre est conçue comme une invitation à questionner nos modes de perception et d'interprétation du monde qui nous entoure.",
      },
      {
        title: "Médiums",
        text: "La série utilise une variété de médiums - photographie, collage, peinture et installation - créant un dialogue entre différentes formes d'expression artistique. Cette approche multidisciplinaire reflète la complexité des thèmes abordés et offre différentes perspectives d'interprétation.",
      },
      {
        title: "Exposition",
        text: "Présentée à la Galerie Moderne en 2021, l'exposition a été conçue comme un parcours immersif où chaque œuvre dialogue avec les autres, créant une expérience cohérente malgré la diversité des médiums utilisés.",
      },
    ],
    related: [
      {
        title: "Installation Lumineuse",
        image: "https://images.unsplash.com/photo-1550613781-5fae8040e9d7?q=80&w=687&auto=format&fit=crop",
        slug: "installation-lumineuse",
        category: "Art",
      },
      {
        title: "Direction Artistique - Campagne Éthérée",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
        slug: "campagne-etheree",
        category: "Direction Artistique",
      },
    ],
  },
  "direction-magazine": {
    title: "Direction Artistique - Magazine",
    category: "Direction Artistique",
    year: "2023",
    description:
      "Direction artistique pour un magazine de mode indépendant, créant une identité visuelle distinctive et cohérente à travers la mise en page, la typographie et la direction photo.",
    coverImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583846552654-306e0ef87df1?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=735&auto=format&fit=crop",
    ],
    content: [
      {
        title: "Concept",
        text: "Ce projet de direction artistique pour un magazine indépendant visait à créer une identité visuelle distinctive qui se démarque dans un marché saturé. L'approche éditoriale privilégie l'espace, la typographie expressive et une utilisation audacieuse de la photographie.",
      },
      {
        title: "Direction artistique",
        text: "En tant que directeur artistique, j'ai développé un système de grilles flexibles, sélectionné une palette typographique contrastée et établi des directives visuelles cohérentes pour l'ensemble du magazine. Chaque section a été conçue pour avoir sa propre identité tout en s'intégrant harmonieusement dans l'ensemble.",
      },
      {
        title: "Collaboration",
        text: "Ce projet a impliqué une collaboration étroite avec l'équipe éditoriale, les photographes et les stylistes. En tant que directeur artistique, mon rôle était de traduire visuellement la vision éditoriale tout en créant un cadre cohérent pour les différents contributeurs.",
      },
    ],
    related: [
      {
        title: "Direction Artistique - Campagne Éthérée",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
        slug: "campagne-etheree",
        category: "Direction Artistique",
      },
      {
        title: "Série Portraits Urbains",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
        slug: "portraits-urbains",
        category: "Photo",
      },
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projects[slug as keyof typeof projects]
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Projet non trouvé</h1>
          <Link href="/galerie" className="text-gold hover:underline">
            Retour à la galerie
          </Link>
        </div>
      </div>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <InnovativeMenu />

        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-sm uppercase tracking-wider mb-4"
            >
              {project.category} • {project.year}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif tracking-tight mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-3xl"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              >
                <div className="w-1 h-2 bg-white/80 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-8 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <Link href="/galerie" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la galerie
            </Link>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-serif mb-6 text-center">Galerie</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-[3/4] relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section (if available) */}
        {project.video && (
          <section className="py-16 px-4 md:px-8 bg-black">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-4xl font-serif mb-6 text-center">Vidéo</h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
              </motion.div>

              <div className="aspect-video relative overflow-hidden rounded-lg">
                <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-serif mb-6 text-center">À propos du projet</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
            </motion.div>

            <div className="space-y-16">
              {project.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-serif mb-4">{section.title}</h3>
                  <div className="w-12 h-px bg-gold mb-6"></div>
                  <p className="text-lg leading-relaxed text-white/80">{section.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {project.related && (
          <section className="py-16 px-4 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-4xl font-serif mb-6 text-center">Projets similaires</h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.related.map((relatedProject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <Link href={`/galerie/${relatedProject.slug}`} className="block aspect-[16/9] overflow-hidden">
                      <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:bg-black/50"></div>
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                        <span className="text-gold text-sm uppercase tracking-wider mb-2">
                          {relatedProject.category}
                        </span>
                        <h3 className="text-2xl font-serif mb-2">{relatedProject.title}</h3>
                        <div className="w-10 h-px bg-gold mb-4"></div>
                        <p className="text-white/80 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          Découvrir le projet
                          <ArrowRight className="inline-block ml-2 h-4 w-4" />
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </PageTransition>
  )
}
