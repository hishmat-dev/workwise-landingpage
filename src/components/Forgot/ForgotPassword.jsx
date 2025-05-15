import { useState, useEffect } from "react"
import ForgotForm from "./ForgotForm"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"
import logo from '../../components/assets/logo.png';

function ForgotPassword() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-hosta blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-vivid-cerise blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-bright-sun blur-3xl opacity-20"></div>
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
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-8 mb-4 max-w-[800px] transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "500ms" }}
            >

              <div className="flex flex-col lg:text-left w-full lg:w-auto mb-1">
                <p className="text-base text-slate-600 mb-1">
                  Work from home the way it should be
                </p>
                <p className="text-base font-semibold text-slate-600">
                  Easy • Effective • Efficient
                </p>
              </div>
            </div>

          </div>

        </div>

        <div
          className={`flex-1 w-full max-w-md transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <ForgotForm />
        </div>
      </div>

      <div className="text-center lg:text-left mb-0">
        <h1
          className={`text-sm md:text-base lg:text-xl font-bold tracking-tight text-slate-900 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          <span className="">
            Workwise Ltd - Copyrights ©2016-2025
          </span>
        </h1>
      </div>
    </section>
  )
}

export default ForgotPassword
