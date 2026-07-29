import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/PageTransition'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'White Moons Love Events | Premium Event Planning',
  description: 'Create your perfect celebration with White Moons Love Events. Luxury event planning for weddings, engagements, and special occasions.',
  keywords: 'event planning, wedding planning, luxury events, celebrations, engagements',
  authors: [{ name: 'White Moons Love Events' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://whitemoonsevents.com',
    siteName: 'White Moons Love Events',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1816' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${playfairDisplay.variable} ${poppins.variable}`}>
     <body className="antialiased overflow-x-hidden">
  <PageTransition>
    {children}
  </PageTransition>

  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
    </html>
  )
}
