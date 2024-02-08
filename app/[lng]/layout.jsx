import { Layout } from '@/components/dom/Layout'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './global.css'
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Aldo - Design & Development',
  description: 'Portfolio. Front-end focused on creative development and UX UI design. Creative Developer.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const condensed = Barlow_Condensed({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-condensed',
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)} className={`antialiased ${inter.variable} ${condensed.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout lng={lng}>{children}</Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
