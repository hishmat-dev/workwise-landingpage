import { Clock, Users, BarChart } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import AnimatedCounter from "./ui/AnimatedCounter"
import FloatingElement from "./ui/FloatingElement"

function StatsSection() {
  const stats = [
    {
      icon: Clock,
      title: "32",
      subtitle: "Days lost annually",
      description: "Due to app switching and context shifting",
      color: "bg-gradient-to-r from-blue-hosta to-medium-turquoise",
      textColor: "text-blue-hosta",
      delay: 0,
    },
    {
      icon: Users,
      title: "10+",
      subtitle: "Apps per employee",
      description: "The average number of tools used daily",
      color: "bg-gradient-to-r from-medium-turquoise to-waikawa-grey",
      textColor: "text-medium-turquoise",
      delay: 200,
    },
    {
      icon: BarChart,
      title: "15%",
      subtitle: "HR Opex loss",
      description: "Days lost divided by total working days.",
      color: "bg-gradient-to-r from-medium-turquoise to-waikawa-grey",
      textColor: "text-medium-turquoise",
      delay: 200,
    },

  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 -z-10"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 -z-5">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <FloatingElement
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              xRange={20}
              yRange={20}
              speed={Math.random() * 5 + 2}
              delay={i * 100}
            />
          ))}
        </div>
      </div>

      <div className="landing-container px-4 md:px-6 mx-auto mb-2 relative">
        <div className="text-center mb-8">
          <RevealOnScroll animation="fade-down" delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              The Challenge
            </span>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The{" "}
              <GradientText from="from-blue-hosta" to="to-vivid-cerise">
                Problem
              </GradientText>{" "}
              We Solve
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300">
              "Most workers toggle between apps 10 times an hour which equates to 32 days lost in workplace productivity."
            </p>
            <p className="mt-2 text-sm text-slate-400">Published by Forbes.com</p>
          </RevealOnScroll>
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <RevealOnScroll key={index} animation="zoom-in" delay={400 + stat.delay}>
                <div className="relative group">
                  {/* Hover glow effect */}
                  <div
                    className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 ${stat.color}`}
                  ></div>

                  {/* Card content */}
                  <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 hover:cursor-pointer border border-slate-700/50 h-full overflow-hidden group-hover:border-transparent transition-all duration-500">
                    {/* Top Row: Icon + Stat Title + Subtitle */}
                    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 ${stat.color} rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                        ></div>
                        <div className="relative w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className={`h-8 w-8 ${stat.textColor}`} />
                        </div>
                      </div>

                      <div className="flex flex-row items-center align-middle gap-3">
                        <h3 className="text-5xl font-bold text-white flex items-baseline mb-1">
                          <AnimatedCounter
                            end={Number.parseFloat(stat.title)}
                            suffix={stat.title.includes("+") ? "+" : stat.title.includes("%") ? "%" : ""}
                          />
                        </h3>
                        <p className={`text-xl font-medium ${stat.textColor}`}>{stat.subtitle}</p>
                      </div>
                    </div>

                    {/* Description below */}
                    <p className="text-slate-300">{stat.description}</p>

                    {/* Animated line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-1000 ease-out ${stat.color}`}
                    ></div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
          {/* <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mt-4 mx-auto">
            <p className="text-lg text-center text-slate-300">
              Days lost divided by total working days.
            </p>
          </RevealOnScroll> */}

      </div>
    </section>
  )
}

export default StatsSection
