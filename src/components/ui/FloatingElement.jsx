import { useState, useEffect, useRef } from "react"

function FloatingElement({
  children,
  className = "",
  xRange = 20,
  yRange = 20,
  rotateRange = 5,
  speed = 3,
  delay = 0,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 })
  const animationRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current

      // Add delay before animation starts
      if (elapsed < delay) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const actualElapsed = elapsed - delay

      // Calculate position based on sine waves with different frequencies
      const x = Math.sin(actualElapsed / (1000 * speed)) * xRange
      const y = Math.sin(actualElapsed / (1500 * speed)) * yRange
      const rotate = Math.sin(actualElapsed / (2000 * speed)) * rotateRange

      setPosition({ x, y, rotate })
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [xRange, yRange, rotateRange, speed, delay])

  return (
    <div
      className={`transition-transform will-change-transform ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg)`,
      }}
    >
      {children}
    </div>
  )
}

export default FloatingElement
