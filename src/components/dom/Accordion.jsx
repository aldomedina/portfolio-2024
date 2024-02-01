import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const Accordion = ({ header, children, initialState, className }) => {
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
