import { Smartphone, Globe, Lock, Monitor } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import GlassCard from "./ui/GlassCard"
import FloatingElement from "./ui/FloatingElement"

function SolutionAvailabilitySection() {
  const platforms = [
    {
      icon: Globe,
      title: "Web Browser",
      description: "Access from any modern web browser",
      color: "bg-blue-hosta",
      gradient: "from-blue-hosta to-medium-turquoise",
      delay: 0,
    },
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Native mobile apps for all devices",
      color: "bg-medium-turquoise",
      gradient: "from-medium-turquoise to-waikawa-grey",
      delay: 100,
    },
    {
      icon: Lock,
      title: "Secure P2P",
      description: "End-to-end encrypted communication",
      color: "bg-waikawa-grey",
      gradient: "from-waikawa-grey to-vivid-cerise",
      delay: 200,
    },
    {
      icon: Monitor,
      title: "Desktop Application",
      description: "Optimized experience for Windows and macOS",
      color: "bg-vivid-cerise",
      gradient: "from-vivid-cerise to-blue-hosta",
      delay: 300,
    },

  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white -z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-hosta/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vivid-cerise/10 rounded-full blur-3xl -z-5"></div>

      {/* Decorative patterns */}
      <div
        className="absolute inset-0 opacity-5 -z-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Floating elements */}
        <FloatingElement
          className="absolute top-20 left-20 w-16 h-16 bg-blue-hosta/20 rounded-full blur-xl"
          xRange={30}
          yRange={20}
        />
        <FloatingElement
          className="absolute bottom-40 right-20 w-24 h-24 bg-bright-sun/20 rounded-full blur-xl"
          xRange={20}
          yRange={40}
          delay={500}
        />
        <FloatingElement
          className="absolute top-40 right-40 w-12 h-12 bg-vivid-cerise/20 rounded-full blur-xl"
          xRange={15}
          yRange={25}
          delay={1000}
        />

        <div className="text-center mb-16">
          <RevealOnScroll animation="fade-down" delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-hosta/10 text-blue-hosta text-sm font-medium mb-4">
              Access Anywhere
            </span>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <GradientText from="from-blue-hosta" to="to-waikawa-grey">
                Solution Availability
              </GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600">
              Our solution is designed to be easily accessible to anyone with an internet connection. It leverages technology that enables secure, peer-to-peer communication eliminating the need for intermediaries.
            </p>
          </RevealOnScroll>
        </div>

        <div className="relative p-5">

          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fillRule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fillOpacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <RevealOnScroll key={index} animation="zoom-in" delay={400 + platform.delay} className="h-full">
                  <GlassCard className="h-full w-[300px] flex-shrink-0">

                    <div className="bg-white rounded-xl p-4 h-full flex flex-col items-start  text-center relative overflow-hidden group-hover:bg-slate-50 transition-colors duration-300">

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>

                      <div className="flex flex-row items-center  gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-hosta transition-colors duration-300">
                          {platform.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-2">{platform.description}</p>

                      <div
                        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${platform.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              )
            })}
          </div>

          <RevealOnScroll animation="fade-up" delay={800} className="mt-8 text-center">
            <p className="text-lg text-slate-600 mb-4">
              <strong>Workwise</strong> is easy to access via web browser or any mobile platform i.e. iOS and android.
            </p>

          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default SolutionAvailabilitySection
