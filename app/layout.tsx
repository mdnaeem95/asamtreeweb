import type { Metadata } from 'next'
import { Open_Sans, Merriweather, Great_Vibes } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Asam Tree | Authentic Halal Malay Cuisine in Singapore Since 2013',
  description: 'Family-owned restaurant serving authentic Malay and Indonesian cuisine. Famous for our Nasi Padang, legendary sambal, and generous portions. 6 locations across Singapore. 100% Halal certified.',
  keywords: 'halal restaurant singapore, malay food, nasi padang, ayam penyet, ang mo kio restaurant, indonesian food, asam tree, halal certified',
  openGraph: {
    title: 'Asam Tree | Authentic Halal Malay Cuisine',
    description: 'Family-owned since 2013. Famous for our legendary sambal and generous portions. 6 locations islandwide.',
    images: ['/og-image.jpg'],
    locale: 'en_SG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${merriweather.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}