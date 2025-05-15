import { useState, useEffect, useRef } from "react"

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const startTimeRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    // Only start animation when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.disconnect()
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end])

  const startAnimation = () => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      // Easing function - easeOutExpo
      const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

      if (progress < duration) {
        const easedProgress = easeOutExpo(progress / duration)
        setCount(easedProgress * end)
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
  }

  const formattedCount = count.toFixed(decimals)

  return (
    <span ref={countRef} className="tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
