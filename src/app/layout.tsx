import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud & DevSecOps Engineer Freelance | Migración, CI/CD, Arquitectura y Microservicios',
  description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes. Contacta para una consultoría gratuita.',
  icons: {
    icon: '/favicon-2.png',
  },
  keywords: 'AWS, DevOps, DevSecOps, consultor, cloud, migración cloud, CI/CD, arquitectura, microservicios, serverless, freelance',
  authors: [{ name: 'Rubén Casado' }],
  creator: 'Rubén Casado',
  publisher: 'Rubén Casado',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rcasado.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cloud & DevSecOps Engineer Freelance | Migración, CI/CD, Arquitectura y Microservicios',
    description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes.',
    url: 'https://rcasado.cloud',
    siteName: 'Cloud & DevSecOps Engineer Freelance',
    images: [
      {
        url: '/foto.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud & DevSecOps Engineer Freelance',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevSecOps Engineer Freelance | Migración, CI/CD, Arquitectura y Microservicios',
    description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes.',
    images: ['/foto.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon-2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-2.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-2.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B0D20" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 