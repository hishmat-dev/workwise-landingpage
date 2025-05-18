import { CheckCircle, Quote, ArrowRight } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import ParallaxSection from "./ui/ParallaxSection"
import GlassCard from "./ui/GlassCard"

function DifferenceSection() {
  const differences = [
    "All-in-one place with easy-to-use solutions",
    "Making team members more effective",
    "Making organizations more efficient",
    "Customer-centric approach",
    "Advanced analytics and reporting capabilities",
    "Detailed view of your customers' preferences and needs",
  ]

  return (
    <ParallaxSection bgColor="bg-gradient-to-br from-waikawa-grey/10 via-white to-vivid-cerise/10" className="py-12">
      <div className="landing-container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <RevealOnScroll animation="fade-down" delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-waikawa-grey/10 text-waikawa-grey text-sm font-medium mb-4">
              Our Advantage
            </span>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <GradientText from="from-waikawa-grey" to="to-vivid-cerise">
                What Makes Us Different?
              </GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600">
              We do it all in one place with an easy-to-use solutions making team members more effective and
              organisations more efficient
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Quote */}
          <div className="order-2 lg:order-1">
            <RevealOnScroll animation="fade-right" delay={400}>
              <GlassCard
                background="bg-white/80"
                blur="backdrop-blur-lg"
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-lg relative transition-all duration-700 overflow-visible"
                style={{ transitionDelay: "600ms" }}
              >
                {/* Quote Icon - Outside top-left of card content */}
                <Quote className="absolute -top-6 -left-6 text-waikawa-grey h-16 w-16 z-10" />

                {/* Card Content */}
                <div className="relative z-20">
                  <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                    "Today's workforce is under siege by a flood of communications apps. More than ever, our attention is scattered
                    across a wide array of different apps and communications channels. These apps are meant to bolster our
                    productivity, but managing myriad apps is proving difficult—with serious repercussions for businesses."
                  </p>

                  <div className="mt-2 flex justify-end">
                    <div>
                      <p className="text-vivid-cerise font-bold">Riadh Dridi</p>
                      <p className="text-slate-600">CMO, RingCentral</p>
                    </div>
                  </div>
                </div>

                {/* Gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-waikawa-grey to-vivid-cerise z-10" />
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={600} className="mt-7">
              <GlassCard
                background="bg-gradient-to-r from-blue-hosta/10 to-bright-sun/10"
                blur="backdrop-blur-sm"
                border="border-0"
                className="p-8"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Making a company feel more connected, improving productivity and communication while making work fun.
                </h3>
                <button className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-waikawa-grey to-vivid-cerise hover:from-vivid-cerise hover:to-waikawa-grey text-white font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </GlassCard>
            </RevealOnScroll>
          </div>

          {/* Right side - Differences */}
          <div className="order-1 lg:order-2">
            <RevealOnScroll animation="fade-left" delay={400}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-waikawa-grey/20 to-vivid-cerise/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-7 shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-waikawa-grey flex items-center justify-center text-white mr-3">
                      <CheckCircle className="h-5 w-5" />
                    </span>
                    Our Advantages
                  </h3>

                  <div className="grid grid-cols-1 gap-2">
                    {differences.map((item, index) => (
                      <RevealOnScroll key={index} animation="fade-up" delay={500 + index * 100}>
                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 hover:cursor-pointer transition-colors duration-300 group">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-waikawa-grey to-vivid-cerise flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-slate-900">{item}</p>
                            <div className="mt-2 h-1 w-0 bg-gradient-to-r from-waikawa-grey to-vivid-cerise rounded-full group-hover:w-full transition-all duration-500"></div>
                          </div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default DifferenceSection
