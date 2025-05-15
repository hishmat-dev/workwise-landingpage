import { Check, Zap, Shield, Users, BarChart } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import FloatingElement from "./ui/FloatingElement"

function SolutionSection() {
  const solutionFeatures = [
    "Unified communication platform with video conferencing and virtual meetings",
    "Approval flow and process management",
    "Finance and payroll automation",
    "HR management and employee engagement",
    "Project management and task tracking",
    "Document creation, sharing, and collaboration",
    "Lending and business credit solutions"
  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-hosta/10 to-transparent -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-bright-sun/10 to-transparent -z-5"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5 -z-5"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <RevealOnScroll animation="fade-right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright-sun/20 text-sm font-medium text-slate-800 mb-4">
                <Check className="h-4 w-4 text-bright-sun" /> The Solution
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-right" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                One Platform For{" "}
                <GradientText from="from-blue-hosta" to="to-bright-sun">
                  All Your Needs
                </GradientText>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-right" delay={300}>
              <p className="text-lg text-slate-600 mb-8">
                Centralize all services and strategies that a business can use to optimize its operations and increase
                overall productivity. <strong>Workwise</strong> is a corporate social solution or simply put an Enterprise SaaS which
                hosts a number of innovative modules.
              </p>
            </RevealOnScroll>

            <div className="space-y-2 mb-6">
              {solutionFeatures.map((item, index) => (
                <RevealOnScroll key={index} animation="fade-right" delay={400 + index * 100}>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md hover:cursor-pointer transition-all duration-300 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-hosta/20 flex items-center justify-center group-hover:bg-blue-hosta group-hover:text-white transition-all duration-300">
                      <Check className="h-4 w-4 text-blue-hosta group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 pt-1">{item}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>

          {/* Right side - Interactive 3D Dashboard */}
          <div className="w-full max-w-[700px] flex-shrink transform scale-100 sm:scale-95 xs:scale-90">

            <RevealOnScroll animation="fade-left" delay={300}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-hosta/30 to-bright-sun/30 rounded-2xl blur-xl"></div>

                {/* Dashboard container */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform perspective-1000 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-500">
                  {/* Dashboard header */}
                  <div className="bg-slate-800 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-sm">Workwise Dashboard</div>
                    <div className="w-6"></div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                    {/* Dashboard grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {[
                        { icon: Users, title: "Team", value: "12 members", color: "bg-blue-hosta" },
                        { icon: BarChart, title: "Progress", value: "68%", color: "bg-bright-sun" },
                        { icon: Zap, title: "Activity", value: "High", color: "bg-vivid-cerise" },
                        { icon: Shield, title: "Security", value: "Protected", color: "bg-waikawa-grey" },
                      ].map((item, index) => {
                        const Icon = item.icon
                        return (
                          <FloatingElement
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-md border border-slate-100 flex items-center gap-3"
                            xRange={3}
                            yRange={3}
                            rotateRange={1}
                            speed={5}
                            delay={index * 200}
                          >
                            <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-500">{item.title}</p>
                              <p className="font-medium text-slate-900">{item.value}</p>
                            </div>
                          </FloatingElement>
                        )
                      })}
                    </div>

                    <FloatingElement
                      className="bg-white rounded-xl p-4 shadow-md border border-slate-100 h-auto mb-4"
                      xRange={5}
                      yRange={5}
                      rotateRange={1}
                      speed={8}
                    >
                      <div className="space-y-4">
                        <h3 className="text-slate-700 text-sm">Approval Process</h3>

                      
                        <div className="flex justify-between items-center">
                        
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
                              <span>1</span>
                            </div>
                            <span className="text-xs text-slate-600 mt-2">Submit Request</span>
                            <div className="w-4 h-4 bg-green-500 rounded-full mt-1" title="Approved"></div>
                          </div>

                        
                          <div className="w-16 h-1 bg-blue-500 mx-4"></div>

                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
                              <span>2</span>
                            </div>
                            <span className="text-xs text-slate-600 mt-2">Manager Review</span>
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1" title="Pending"></div>
                          </div>

                          <div className="w-16 h-1 bg-gray-300 mx-4"></div>

                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
                              <span>3</span>
                            </div>
                            <span className="text-xs text-slate-600 mt-2">Final Approval</span>
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1" title="Rejected"></div>
                          </div>
                        </div>
                      </div>
                    </FloatingElement>

                    <FloatingElement
                      className="bg-white rounded-xl p-4 shadow-md border border-slate-100 flex justify-between items-center"
                      xRange={3}
                      yRange={3}
                      rotateRange={1}
                      speed={6}
                      delay={600}
                    >
                      <div className="text-sm text-slate-500">Updated just now</div>
                      <button className="text-blue-hosta text-sm font-medium hover:text-bright-sun transition-colors duration-300">
                        View Details
                      </button>
                    </FloatingElement>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
