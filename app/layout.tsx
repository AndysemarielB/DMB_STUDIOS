import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AudioController from "@/components/audio-controller"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

// Update the metadata
export const metadata: Metadata = {
  title: "DMB Studios | Studio Créatif Multidisciplinaire",
  description:
    "DMB Studios - Studio créatif multidisciplinaire explorant l'art, le design et la mode à travers une vision artistique unique.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AudioController />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
