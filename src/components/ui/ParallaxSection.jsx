
import { useRef, useEffect, useState } from "react"

function ParallaxSection({
  children,
  className = "",
  bgImage = "",
  bgColor = "bg-white",
  speed = 0.5,
  overlay = "bg-black/0",
}) {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate how far the section is from the viewport center
      const sectionCenter = top + sectionRef.current.offsetHeight / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = sectionCenter - viewportCenter

      // Apply parallax effect
      setOffset(distanceFromCenter * speed)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  const backgroundStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `center ${50 + offset * 0.1}%`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {}

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${bgColor} ${className}`}>
      {bgImage && <div className="absolute inset-0 w-full h-full transition-transform" style={backgroundStyle}></div>}
      <div className={`absolute inset-0 w-full h-full ${overlay}`}></div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default ParallaxSection
