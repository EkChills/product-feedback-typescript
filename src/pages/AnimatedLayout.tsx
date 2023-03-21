import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'

interface Props {
  children: ReactNode
}

const AnimatedLayout = ({children}:Props) => {
  return (
    <motion.div
    initial={{
      scale:0.8,
      opacity:0,
    }}
    animate={{
      scale:1,
      opacity:1,
    }}
    exit={{
      scale: 0.8,
      opacity: 0,
    }}
    transition={{
      duration:0.3
    }}>
      <div>{children}</div>
    </motion.div>
  )
}

export default AnimatedLayout