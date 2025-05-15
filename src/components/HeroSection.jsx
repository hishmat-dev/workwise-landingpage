import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import LoginForm from "./LoginForm"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import logo from '../components/assets/logo.png';

function HeroSection() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToFeatures = () => {
    document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-hosta blur-3xl opacity-30 animate-drift1"></div>
  <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-vivid-cerise blur-3xl opacity-20 animate-drift2"></div>
  <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-bright-sun blur-3xl opacity-20 animate-drift3"></div>
</div>
    



      <div className="container px-4 md:px-14 sm:space-y-3 flex flex-col lg:flex-row items-center justify-around z-10">
        <div
          className={`flex-1 space-y-8 text-center lg:text-left transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="space-y-2 flex flex-col items-center lg:items-start">
            <div
              className={`flex items-center justify-center lg:justify-start mt-2 mb-6 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <img src={logo} alt="WORKWISE Logo" className="h-80 w-auto" />
            </div>

            <div className="text-center lg:text-left">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-hosta to-vivid-cerise">
                  Corporate Social Solution
                </span>
              </h1>
            </div>

            <div
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-4 mb-4 max-w-[800px] transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "500ms" }}
            >

              <div className="flex flex-col lg:text-left w-full lg:w-auto mb-1">
                <p className="text-base text-slate-600 mb-1">
                  Your Business Operating System
                </p>
                <p className="text-base font-semibold text-slate-600">
                  Easy • Effective • Efficient
                </p>
              </div>


              {/* <div className="w-full lg:w-auto flex justify-center self-center lg:justify-end mb-2 mt-3 lg:mt-0">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-medium-turquoise text-white font-medium transition-all duration-200">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div> */}
            </div>


            <div className="w-full lg:w-auto flex justify-center lg:justify-start  ">
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-medium-turquoise text-white font-medium transition-all duration-200">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        <div
          className={`flex-1 w-full max-w-md transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <LoginForm />
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "800ms" }}
      >
        <button
          className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 animate-bounce"
          onClick={scrollToFeatures}
        >
          <ChevronRight className="h-5 w-5 rotate-90" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
