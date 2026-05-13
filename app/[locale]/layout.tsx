import type { Metadata } from 'next'
import { Bricolage_Grotesque, Onest, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-bricolage',
  display: 'swap',
})

const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-onest',
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
    title: 'DomRol — Every business deserves an operating system.',
    description: isHu
      ? 'A DomRol vertikális SaaS megoldásokat épít bérlési és vendéglátóipari vállalkozásoknak. RentalOS és TableOS — élő rendszerek.'
      : 'DomRol builds vertical SaaS for industries that still run on WhatsApp. RentalOS for rental businesses. TableOS for restaurants.',
    openGraph: {
      title: 'DomRol — Every business deserves an operating system.',
      description: isHu
        ? 'Vertikális SaaS platform kkv iparágaknak Európa-szerte.'
        : 'Vertical SaaS platform for SMB industries across Europe.',
      url: isHu ? 'https://domrol.com/hu' : 'https://domrol.com',
      siteName: 'DomRol',
      locale: isHu ? 'hu_HU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DomRol — Every business deserves an operating system.',
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
      className={`${bricolage.variable} ${onest.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-ink text-paper antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
