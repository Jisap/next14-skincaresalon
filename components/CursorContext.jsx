"use client"

import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useState, useEffect, createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

// create context
export const CursorContext = createContext()

const CursorProvider = ({ children }) => {
  
  const [cursor, setCursor] = useState({                     // Tamaño y color
    size:30,
    background: '#473936'
  })

  const [isHovering, setIsHovering] = useState(false)        // Estado para si el cursor esta hover en algún elemento 

  const smallViewportIsActive = useMediaQuery({
    query: "(max-width: 1200px)",
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = {damping:20, stifness: 290, mass: 0.45}
  const springX = useSpring(mouseX, springConfig)

  return (
    <CursorContext.Provider>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContext