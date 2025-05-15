import { ShoppingCart, Globe, Clock, Shield, ArrowRight } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import ParallaxSection from "./ui/ParallaxSection"
import FloatingElement from "./ui/FloatingElement"

function MarketPlaceSection() {
  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with buyers and sellers around the world",
      gradient: "from-blue-hosta to-medium-turquoise",
      delay: 0,
    },
    {
      icon: ShoppingCart,
      title: "Single Click",
      description: "Trade goods and services with just a single click",
      gradient: "from-medium-turquoise to-waikawa-grey",
      delay: 100,
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Eliminating the difficulty of establishing trust between parties",
      gradient: "from-waikawa-grey to-vivid-cerise",
      delay: 200,
    },
    {
      icon: Clock,
      title: "Enhanced Experience",
      description: "Speed up the process and enhance procurement experience",
      gradient: "from-vivid-cerise to-bright-sun",
      delay: 300,
    },
  ]

  return (
    <ParallaxSection
      bgColor="bg-slate-900"
      overlay="bg-gradient-to-br from-slate-900/90 to-slate-900/70"
      className="py-12"
    >
      <div className="container px-4 md:px-6 mx-auto">
        
        <FloatingElement
          className="absolute top-40 left-20 w-32 h-32 rounded-full border-4 border-vivid-cerise/10"
          xRange={20}
          yRange={30}
        />
        <FloatingElement
          className="absolute bottom-40 right-20 w-48 h-48 rounded-full border-4 border-blue-hosta/10"
          xRange={30}
          yRange={20}
          delay={500}
        />

        <div className="text-center mb-16 relative">
          
          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <GradientText from="from-vivid-cerise" to="to-bright-sun">
                Market Place
              </GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300">
              A digital platform established to connect buyers and seller around the world, allowing organisation to
              trade goods and services with just a single click.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
       
          <RevealOnScroll animation="fade-right" delay={400} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-vivid-cerise/30 to-bright-sun/30 rounded-full blur-3xl"></div>
              <div className="relative bg-slate-800 rounded-3xl p-8 overflow-hidden border border-slate-700">
                
                <div className="aspect-square relative">
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center z-10">
                    <ShoppingCart className="h-12 w-12 text-vivid-cerise" />
                  </div>

                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 h-1 bg-gradient-to-r from-vivid-cerise to-bright-sun origin-left"
                      style={{
                        width: "40%",
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        opacity: 0.6,
                      }}
                    ></div>
                  ))}

                  {[...Array(8)].map((_, i) => {
                    const angle = i * 45 * (Math.PI / 180)
                    const x = Math.cos(angle) * 120 + 50
                    const y = Math.sin(angle) * 120 + 50

                    return (
                      <FloatingElement
                        key={i}
                        className="absolute w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center"
                        style={{ top: `${y}%`, left: `${x}%` }}
                        xRange={10}
                        yRange={10}
                        delay={i * 200}
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${i % 2 === 0 ? "from-blue-hosta to-medium-turquoise" : "from-vivid-cerise to-bright-sun"}`}
                        ></div>
                      </FloatingElement>
                    )
                  })}

                  {[...Array(12)].map((_, i) => {
                    const angle = i * 30 * (Math.PI / 180)
                    const radius = 80 + (i % 3) * 20
                    const x = Math.cos(angle) * radius + 50
                    const y = Math.sin(angle) * radius + 50

                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white animate-pulse"
                        style={{
                          top: `${y}%`,
                          left: `${x}%`,
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.6,
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-3">
            <RevealOnScroll animation="fade-left" delay={500} className="mb-8">
              <p className="text-lg text-slate-300">
                <strong>Workwise</strong> is a market place designed to get the best options in terms of services and goods, by
                eliminating the difficulty of establishing the trust between buyers and sellers simply by playing the
                mediator.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-left" delay={600} className="mb-8">
              <p className="text-lg text-slate-300">
                The rise of e-commerce has fuelled the of online market places which speed up the process and enhancing
                the overall experience of procurement.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <RevealOnScroll key={index} animation="fade-up" delay={700 + benefit.delay}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vivid-cerise transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-400">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>

            {/* <RevealOnScroll animation="fade-up" delay={1100} className="mt-8">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-vivid-cerise to-bright-sun hover:from-bright-sun hover:to-vivid-cerise text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </RevealOnScroll> */}
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default MarketPlaceSection
