import { Layout } from '@/components/dom/Layout'
import { Inter, Barlow_Condensed } from 'next/font/google'
import '@/global.css'

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

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`antialiased ${inter.variable} ${condensed.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
