import { Variants, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import CommonHead from './CommonHead'

const anim = (variants: Variants, custom?: number) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    custom,
    variants,
  }
}

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: '0', top: '0' },
  }),
  exit: (i: number) => ({
    height: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}
const opacity = {
  initial: {
    opacity: 0.5,
  },

  enter: {
    opacity: 0,
  },

  exit: {
    opacity: 0.5,
  },
}
const nbOfColumns = 5

const Layout = ({ children }: PropsWithChildren) => (
  <div className='min-h-dvh'>
    <CommonHead />
    <motion.div {...anim(opacity)} className='pointer-events-none fixed left-0 top-0 h-dvh w-screen bg-black' />
    <div className='pointer-events-none fixed left-0 top-0 z-[2] flex h-screen w-screen'>
      {[...Array(nbOfColumns)].map((_, i) => {
        return <motion.div className='relative size-full bg-black' key={i} {...anim(expand, nbOfColumns - i)} />
      })}
    </div>
    {children}
    <Nav />
    <Footer />
  </div>
)
export default Layout
