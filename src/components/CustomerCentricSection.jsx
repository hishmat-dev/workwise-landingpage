import { Users, BarChart2, MessageSquare, Heart, User, UserPlus, Activity } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import FloatingElement from "./ui/FloatingElement"

function CustomerCentricSection() {
  const features = [
    {
      icon: Users,
      title: "Meaningful Relationships",
      description: "Build deeper connections with your customers",
      gradient: "from-blue-hosta to-medium-turquoise",
      delay: 0,
    },
    {
      icon: MessageSquare,
      title: "Ongoing Engagement",
      description: "Manage every aspect of the customer journey",
      gradient: "from-medium-turquoise to-waikawa-grey",
      delay: 100,
    },
    {
      icon: BarChart2,
      title: "Advanced Analytics",
      description: "Data indexing and cataloging capabilities",
      gradient: "from-waikawa-grey to-vivid-cerise",
      delay: 200,
    },
    {
      icon: Heart,
      title: "Tailored Experiences",
      description: "Understand preferences and provide personalized service",
      gradient: "from-vivid-cerise to-bright-sun",
      delay: 300,
    },
  ]

  return (
    <section className="relative py-12 overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-br from-bright-sun/5 via-white to-blue-hosta/5 -z-10"></div>

      <div
        className="absolute inset-0 opacity-5 -z-5"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <RevealOnScroll animation="fade-right" delay={100}>
              <span className="inline-block px-4 py-1 rounded-full bg-bright-sun/10 text-bright-sun text-sm font-medium mb-4">
                Customer First
              </span>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-right" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText from="from-bright-sun" to="to-vivid-cerise">
                  Customer Centric Approach
                </GradientText>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-right" delay={300}>
              <p className="text-lg text-slate-600 mb-8">
                <strong>Workwise</strong> provides you tools and resources to build a more meaningful relationship with the customers of
                your business by so you can connect with them on a deeper level.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-right" delay={400}>
              <p className="text-lg text-slate-600 mb-8">
              Our platform helps you manage the entire customer journey from first contact to ongoing engagement with powerful analytics and reporting.
              </p>
            </RevealOnScroll>
            <RevealOnScroll animation="fade-right" delay={400}>
              <p className="text-lg text-slate-600 mb-8">
              With detailed data indexing and customer insights, your team can better understand preferences and deliver personalized experiences that drive loyalty and long-term satisfaction.
              </p>
            </RevealOnScroll>

          </div>

      
          <div className="lg:w-1/2 relative">
           
            <FloatingElement
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-4 border-bright-sun/10"
              xRange={20}
              yRange={30}
            />
            <FloatingElement
              className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full border-4 border-blue-hosta/10"
              xRange={30}
              yRange={20}
              delay={500}
            />

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-bright-sun/20 to-blue-hosta/20 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <RevealOnScroll
                      key={index}
                      animation="fade-up"
                      delay={index * 150}
                    >
                      <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 ease-out group">
                        <div className="flex items-center gap-4 mb-2">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-vivid-cerise transition-colors duration-300">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-slate-500 transition-opacity duration-300">{feature.description}</p>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerCentricSection
