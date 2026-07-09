import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://miarquitectos.cl'),
  title: {
    default: 'MI Arquitectos | Diseño arquitectónico y visualización 3D',
    template: '%s | MI Arquitectos',
  },
  description:
    'Estudio de arquitectura en Santiago de Chile. Transformamos ideas en espacios extraordinarios: diseño arquitectónico, visualización 3D y desarrollo integral de proyectos residenciales y comerciales.',
  keywords: [
    'arquitectura',
    'diseño arquitectónico',
    'visualización 3D',
    'diseño de interiores',
    'remodelación',
    'Santiago',
    'Chile',
    'MI Arquitectos',
  ],
  authors: [{ name: 'MI Arquitectos' }],
  openGraph: {
    title: 'MI Arquitectos | Diseño arquitectónico y visualización 3D',
    description:
      'Transformamos ideas en espacios extraordinarios. Diseño arquitectónico, visualización 3D y desarrollo integral de proyectos.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'MI Arquitectos',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0e0e0d',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable} bg-background scroll-smooth`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
