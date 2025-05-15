import { Calendar, Users, Shield, Globe, MessageSquare, BarChart, Check, ArrowRight } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import FloatingElement from "./ui/FloatingElement"

function ToolsSection() {
  const tools = [
    {
      icon: Calendar,
      title: "Project/Task Management",
      description: "Team member inclusion, scheduling, tasks, and progress tracking",
      color: "from-blue-hosta to-medium-turquoise",
      delay: 0,
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Including remote hiring, teams, bonus, designations, complaints, and more",
      color: "from-medium-turquoise to-waikawa-grey",
      delay: 100,
    },
    {
      icon: Shield,
      title: "Document Management",
      description: "Including a complete office suite and digital equivalents",
      color: "from-waikawa-grey to-vivid-cerise",
      delay: 200,
    },
    {
      icon: Globe,
      title: "Market Place",
      description: "Connect buyers and sellers across the world with a single click",
      color: "from-vivid-cerise to-bright-sun",
      delay: 300,
    },
    {
      icon: MessageSquare,
      title: "Communication Center",
      description: "Email, Chat, Video Conferencing, and integrated messaging",
      color: "from-bright-sun to-blue-hosta",
      delay: 400,
    },
    {
      icon: BarChart,
      title: "Finance Management",
      description: "Expense tracking, financial reports, and making a budget",
      color: "from-blue-hosta to-vivid-cerise",
      delay: 500,
    },
  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>

      {/* Animated background */}
      <div className="absolute inset-0 -z-5">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <FloatingElement
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${i % 2 === 0 ? "from-blue-hosta/20 to-medium-turquoise/10" : "from-vivid-cerise/20 to-bright-sun/10"
            } blur-2xl`}
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4,
          }}
          xRange={30}
          yRange={30}
          speed={Math.random() * 5 + 5}
          delay={i * 1000}
        />
      ))}

      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center mb-16">
          <RevealOnScroll animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vivid-cerise/20 text-sm font-medium text-vivid-cerise mb-4">
              <Check className="h-4 w-4" /> Comprehensive Toolkit
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <GradientText from="from-vivid-cerise" to="to-bright-sun">
                Solution Tools
              </GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300">
              Everything you need to streamline your workflow and boost productivity in one integrated platform.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <RevealOnScroll
                key={index}
                animation={index % 2 === 0 ? "fade-up" : "fade-down"}
                delay={400 + tool.delay}
                className="h-full"
              >
                <div className="relative h-full group hover:cursor-pointer perspective-1000">
                  {/* Card front */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 h-full transition-all duration-500 transform-style-3d backface-hidden group-hover:rotate-y-180">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-300">{tool.description}</p>
                  </div>

                  {/* Card back */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl p-6 flex flex-col justify-between transform-style-3d backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-all duration-500`}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <Icon className="h-8 w-8 text-white/90" />
                        <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                      </div>
                      <p className="text-white/80">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ToolsSection
