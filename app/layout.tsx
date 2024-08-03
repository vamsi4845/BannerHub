// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { BannerProvider } from './BannerContext'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banner Hub',
  description: 'Create stunning banners in minutes',
  icons: {
    icon: '/favicon.ico',
  },
}


const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <BannerProvider>
        {children}
        </BannerProvider>
      </body>
    </html>
  )
}