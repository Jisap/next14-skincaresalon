"use client"

import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useState, useEffect, createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

// create context
export const CursorContext = createContext();                // Permite compartir datos entre componentes sin tener que pasar props manualmente en cada nivel de la jerarquía

const CursorProvider = ({ children }) => {
  
  const [cursor, setCursor] = useState({                     // Tamaño y color
    size:30,
    background: '#473936'
  })

  const [isHovering, setIsHovering] = useState(false)        // Estado que indica si el cursor está sobre un elemento.

  const smallViewportIsActive = useMediaQuery({              // Variable que verifica si el ancho de la ventana es menor o igual a 1200px. 
    query: "(max-width: 1200px)",
  })

  const mouseX = useMotionValue(0);                          // Valores de movimiento para las coordenadas X e Y del cursor. 
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stifness: 290, mass: 0.45 }; // Animaciones de resorte que siguen las coordenadas del mouse.
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handelMouseMove = (e) => {                           // Función que actualiza las posiciones X e Y del cursor según el movimiento del mouse, ajustando también el tamaño y el color del cursor para pantallas pequeñas.
    if (!smallViewportIsActive) {                            // Si la ventana actual es más grande que 1200px de ancho.                         
      mouseX.set(e.clientX - cursor.size /2);                // Se actualizan los valores de mouseX y mouseY con los valores del cursor
      mouseY.set(e.clientY - cursor.size / 2);               // y se resta la mitad del tamaño del cursor a las coordenadas del mouse para centrar el cursor personalizado en el punto del mouse.
    }else{
      setCursor({ size: 0, background: none });              // Si la ventana es más pequeña o igual a 1200px de ancho (smallViewportIsActive es true), se oculta el cursor personalizado.
    }
  }

  useEffect(() => {                                          // Añade y limpia un event listener para el movimiento del mouse, actualizando las posiciones del cursor.
    window.addEventListener("mousemove", handelMouseMove)
    return () => window.removeEventListener("mousemove", handelMouseMove)
  },[cursor]);

  const mouseEnterHandler = () => {                          //  Agranda y cambia el color del cursor cuando entra en un elemento.
    setCursor({size: 90, background: "#00423a"})
    setIsHovering(true)
  }

  const mouseLeaveHandler = () => {                          // Restaura el tamaño y el color original del cursor cuando sale de un elemento.
    setCursor({ size: 30, background: "#473936" })
    setIsHovering(false)
  }

  return (
    <CursorContext.Provider 
      value={{
        mouseEnterHandler,
        mouseLeaveHandler
      }}
    >
      {/* div animado que sigue las posiciones y propiedades del cursor, manteniéndose en la posición fija en la pantalla 
      y ajustando su estilo según los estados del cursor. */}
      <motion.div 
        className='fixed z-[99] rounded-full pointer-events-none transition-all duration-300'
        style={{
          left: springX,
          top: springY,
          width: cursor.size,
          height: cursor.size,
          backgroundColor: cursor.background,
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease-in-out, height 0.2s ease-in-out"
        }}
      />
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider