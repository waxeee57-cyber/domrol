import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isHu = locale === 'hu'
  return {
    title: 'DomRol — Building Europe\'s next billion-euro SaaS',
    description: isHu
      ? 'A DomRol Európa domináns SaaS platformjait és egyedi digitális termékeket épít. TableOS, Rentivo, RentalOS — éles rendszerek. Egyedi weboldal, SaaS rendszer, AI integráció.'
      : 'DomRol builds Europe\'s dominant SaaS platforms and custom digital products. TableOS, Rentivo, RentalOS — live. Custom websites, SaaS systems, AI integration available.',
    keywords: [
      'SaaS Europe', 'vertical SaaS', 'custom website development',
      'SaaS development Europe', 'AI integration', 'React Native app development',
      'Supabase development', 'TableOS', 'RentalOS', 'Rentivo',
    ],
    openGraph: {
      title: 'DomRol — Building Europe\'s next billion-euro SaaS',
      description: isHu
        ? 'Európa domináns SaaS platformjait és egyedi digitális termékeket épít.'
        : 'Building Europe\'s dominant SaaS platforms and custom digital products.',
      url: isHu ? 'https://domrol.com/hu' : 'https://domrol.com',
      siteName: 'DomRol',
      locale: isHu ? 'hu_HU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DomRol — Building Europe\'s next billion-euro SaaS',
    },
    alternates: {
      canonical: isHu ? 'https://domrol.com/hu' : 'https://domrol.com/en',
      languages: {
        en: 'https://domrol.com/en',
        hu: 'https://domrol.com/hu',
      },
    },
    robots: { index: true, follow: true },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DomRol',
  url: 'https://domrol.com',
  description: 'Building Europe\'s dominant SaaS platforms',
  foundingDate: '2026',
  areaServed: 'Europe',
  email: 'info@domrol.com',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ink text-paper antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
