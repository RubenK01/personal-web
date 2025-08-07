import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consultor AWS Freelance | Migración, CI/CD, Arquitectura y Costes',
  description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes. Contacta para una auditoría gratuita.',
  keywords: 'AWS, DevOps, consultor, migración cloud, CI/CD, arquitectura, costes, freelance',
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  publisher: 'Tu Nombre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Consultor AWS Freelance | Migración, CI/CD, Arquitectura y Costes',
    description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes.',
    url: 'https://tu-dominio.com',
    siteName: 'Consultor AWS Freelance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultor AWS Freelance',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultor AWS Freelance | Migración, CI/CD, Arquitectura y Costes',
    description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes.',
    images: ['/og-image.jpg'],
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

const SEO_CONFIG = {
  titleTemplate: '%s | Consultor AWS Freelance',
  defaultTitle: 'Consultor AWS Freelance | Migración, CI/CD, Arquitectura y Costes',
  description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes. Contacta para una auditoría gratuita.',
  canonical: 'https://tu-dominio.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-dominio.com',
    siteName: 'Consultor AWS Freelance',
    title: 'Consultor AWS Freelance | Migración, CI/CD, Arquitectura y Costes',
    description: 'Diseño y optimizo infraestructuras AWS para startups y pymes. Migraciones cloud, pipelines CI/CD, seguridad y ahorro de costes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultor AWS Freelance',
      },
    ],
  },
  twitter: {
    handle: '@tu-twitter',
    site: '@tu-twitter',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'AWS, DevOps, consultor, migración cloud, CI/CD, arquitectura, costes, freelance',
    },
    {
      name: 'author',
      content: 'Tu Nombre',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B0D20" />
      </head>
      <body className={inter.className}>
        <DefaultSeo {...SEO_CONFIG} />
        {children}
      </body>
    </html>
  )
} 