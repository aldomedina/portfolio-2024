import { AnimatePresence, motion } from 'framer-motion'
import { useState, PropsWithChildren, ReactNode } from 'react'

interface AccordionProps extends PropsWithChildren {
  header: string | ReactNode
  initialState?: boolean
  className?: string
}

const Accordion = ({ header, children, initialState = false, className }: AccordionProps) => {
  const [open, setOpen] = useState(initialState)

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div onClick={() => setOpen((s) => !s)}>{header}</div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
