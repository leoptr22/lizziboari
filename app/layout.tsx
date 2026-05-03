import type { Metadata } from 'next'
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lizzi  Boari | Estudio de Arquitectura',
  description: 'Estudio de arquitectura en Gualeguaychú, Entre Ríos. Especialistas en paisajismo, interiorismo, refacciones y adaptaciones desde 2013.',
  generator: 'leoptr-dev',
  icons: {
    icon: [
      {
        url: '/logo-lizzi-boari.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-lizzi-boari.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-lizzi-boari.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
