import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Inter, Barlow_Condensed } from 'next/font/google'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

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

const App = ({ Component, pageProps }: AppProps) => {
  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   // Used for page transition
  //   const start = () => {
  //     setLoading(true)
  //   }
  //   const end = () => {
  //     setLoading(false)
  //   }
  //   Router.events.on('routeChangeStart', start)
  //   Router.events.on('routeChangeComplete', end)
  //   Router.events.on('routeChangeError', end)
  //   return () => {
  //     Router.events.off('routeChangeStart', start)
  //     Router.events.off('routeChangeComplete', end)
  //     Router.events.off('routeChangeError', end)
  //   }
  // }, [])

  const router = useRouter()

  return (
    <>
      <div className={`h-full antialiased ${inter.variable} ${condensed.variable} bg-gray-200 font-sans text-gray-950`}>
        <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      {/* vercel metrics */}
      <SpeedInsights />
      <Analytics />
    </>
  )
}
export default appWithTranslation(App)
