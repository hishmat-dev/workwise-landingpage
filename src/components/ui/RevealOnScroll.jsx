import { useEffect, useRef, useState } from "react"

function RevealOnScroll({
  children,
  className = "",
  threshold = 0.1,
  animation = "fade-up",
  duration = 800,
  delay = 0,
  distance = 50,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    }

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        }
      case "fade-down":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : `translateY(-${distance}px)`,
        }
      case "fade-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : `translateX(${distance}px)`,
        }
      case "fade-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : `translateX(-${distance}px)`,
        }
      case "zoom-in":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
        }
      case "zoom-out":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(1.2)",
        }
      default:
        return baseStyles
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "transform, opacity",
        ...getAnimationStyles(),
      }}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
