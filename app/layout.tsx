import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hyeonki Min',
    template: '%s | Hyeonki Min',
  },
  description: 'Software Engineer, Hyeonki Min, Making the world run better through data.',
  openGraph: {
    title: 'Hyeonki Min',
    description: '소프트웨어 엔지니어·개발자 민현기',
    url: baseUrl,
    siteName: 'Hyeonki Min',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-neutral-900 dark:text-white dark:bg-black scroll-smooth',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased leading-relaxed text-slate-400">
        <main className="mx-auto min-h-screen max-w-4xl px-6 py-6 md:px-12 md:py-16 lg:py-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
