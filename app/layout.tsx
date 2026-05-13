import type { Metadata } from 'next'
import { Bricolage_Grotesque, Onest, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Domrol — Every business deserves an operating system.',
  description:
    'Domrol builds vertical SaaS for industries that still run on WhatsApp. RentalOS for rental businesses. TableOS for restaurants. One architecture. Every vertical.',
  openGraph: {
    title: 'Domrol — Every business deserves an operating system.',
    description: 'Vertical SaaS platform for SMB industries across Europe.',
    url: 'https://domrol.com',
    siteName: 'Domrol',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domrol — Every business deserves an operating system.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${onest.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-ink text-paper antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
