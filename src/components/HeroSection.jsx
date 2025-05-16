import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import AuroraBackground from "./ui/AuroraBackground"
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion"
import logo from "./assets/workwise_white.svg"
import LoginForm from './LoginForm';

const BUTTON_COLORS = ["#64C4B2", "#45C6EE", "#526BB1", "#DA1D81", "#FED33C"]

function HeroSection() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [isLoaded, setIsLoaded] = useState(false)

  const buttonColor = useMotionValue(BUTTON_COLORS[0])
  const buttonBorder = useMotionTemplate`1px solid ${buttonColor}`
  const buttonShadow = useMotionTemplate`0px 0px 15px ${buttonColor}`

  useEffect(() => {
    setIsLoaded(true)
    animate(buttonColor, BUTTON_COLORS, {
      ease: "easeInOut",
      duration: 1, 
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })
  }, [buttonColor])

  const scrollToFeatures = () => {
    document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AuroraBackground>
      <div
        ref={heroRef}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-around min-h-screen"
      >
        <div
          className={`flex-1 space-y-8 text-center lg:text-left transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="space-y-2 flex flex-col items-center lg:items-start">
            <div
              className={`flex items-center justify-center lg:justify-start mt-2 mb-6 transition-all duration-700 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <img src={logo} alt="WORKWISE Logo" className="h-72 w-auto" />
            </div>

            <div className="text-center lg:text-left">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text transition-all duration-700 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Corporate Social Solution
              </h1>
            </div>

            <div
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-4 mb-4 max-w-[800px] transition-all duration-700 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex flex-col lg:text-left w-full lg:w-auto mb-1">
                <p className="text-base text-gray-300 mb-1">Your Business Operating System</p>
                <p className="text-base font-semibold text-gray-200">Easy • Effective • Efficient</p>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <motion.button
                style={{
                  border: buttonBorder,
                  boxShadow: buttonShadow,
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-1.5 rounded-full bg-gray-800/30 backdrop-blur-sm px-8 py-3 text-gray-50 transition-colors hover:bg-gray-800/50"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45" />
              </motion.button>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 w-full max-w-md transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <LoginForm/>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "800ms" }}
      >
        <motion.button
          style={{
            border: buttonBorder,
            boxShadow: buttonShadow,
          }}
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 animate-bounce"
          onClick={scrollToFeatures}
        >
          <ChevronRight className="h-5 w-5 rotate-90" />
        </motion.button>
      </div>
    </AuroraBackground>
  )
}

export default HeroSection
