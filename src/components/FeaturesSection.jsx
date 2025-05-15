import { ChevronRight, Check, ArrowRight } from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"
import FloatingElement from "./ui/FloatingElement"

import Expense from "../components/assets/features/Expense&Travel.svg";
import Finance from "../components/assets/features/Finance&More.svg";
import HR from "../components/assets/features/HRManagement.svg";
import ProjectManagement from "../components/assets/features/ProjectManagement.svg";
import Schedule from "../components/assets/features/Schedules&Deadlines.svg";

function FeaturesSection() {
  const features = [
    {
      title: "Flexible Project Management",
      description:
        "Plan, organize, and manage resources to meet goals within a defined timeframe. Get clear views of tasks, align objectives, and enhance team collaboration.",
      gradient: "from-blue-hosta to-to-white",
      icon: ProjectManagement,
      benefits: [
        "Task assignment and tracking",
        "Timeline visualization",
        "Resource allocation",
        "Progress reporting"
      ],
      delay: 0,
    },
    {
      title: "Finance & More",
      description:
        "Manage finances with ease. Track payroll, expenses, and invoicing while ensuring financial stability with real-time reports.",
      gradient: "from-medium-turquoise to-white",
      icon: Finance,
      benefits: [
        "Payroll management",
        "Expense tracking",
        "Invoicing",
        "Real-time financial reporting"
      ],
      delay: 100,
    },
    {
      title: "Schedule & Deadlines",
      description:
        "Coordinate tasks, assign responsibilities, and track deadlines with reminders and effective time management.",
      gradient: "from-vivid-cerise to-white",
      icon: Schedule,
      benefits: [
        "Task prioritization",
        "Real-time reminders",
        "Deadline tracking",
        "Effective time management"
      ],
      delay: 200,
    },
    {
      title: "Digital Archives",
      description:
        "Store, retrieve, and manage documents efficiently with version control and notifications for updates and changes.",
      gradient: "from-medium-turquoise to-vivid-cerise",
      icon: Schedule,
      benefits: [
        "Document creation",
        "Version control",
        "Easy document retrieval",
        "Change notifications"
      ],
      delay: 300,
    },
    {
      title: "Expense & Travel",
      description:
        "Track and approve business expenses with real-time visibility. Manage travel expenses from approval to completion.",
      gradient: "from-bright-sun to-blue-hosta",
      icon: Expense,
      benefits: [
        "Expense tracking and approval",
        "Real-time spending visibility",
        "Detailed travel expense management",
        "Approval workflow automation"
      ],
      delay: 400,
    },
    {
      title: "HR Management",
      description:
        "Efficiently manage employee onboarding, payroll, attendance, and performance with a seamless HR solution.",
      gradient: "from-waikawa-grey to-vivid-cerise",
      icon: HR,
      benefits: [
        "Onboarding management",
        "Salary and compensation tracking",
        "Attendance and performance tracking",
        "Employee rewards and promotions"
      ],
      delay: 500,
    }
  ];
  
  
  

  return (
    <section id="features-section" className="relative py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-hosta/5 to-transparent -z-5"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-vivid-cerise/5 to-transparent -z-5"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 -z-5">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8">
          {/* <RevealOnScroll animation="fade-down" delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-hosta/10 text-blue-hosta text-sm font-medium mb-4">
              Powerful Features
            </span>
          </RevealOnScroll> */}

          <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              <GradientText from="from-vivid-cerise" to="to-bright-sun">
                Key Features
              </GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300} className="max-w-3xl mx-auto">
            <p className="text-lg text-white">Designed with your team's productivity and collaboration in mind</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} animation="zoom-in" delay={400 + feature.delay} className="h-full">
              <div className="relative h-full group">
                {/* Hover glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-1000`}
                ></div>

                <div className="relative bg-gray-800 rounded-2xl shadow-lg border hover:cursor-pointer border-slate-500 p-6 h-full flex flex-col">
                  {/* Feature header */}
                  <div className="mb-3">
                    <div className="flex flex-row align-middle items-center justify-start gap-6">
                      <FloatingElement
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-2`}
                        xRange={5}
                        yRange={5}
                        rotateRange={3}
                        speed={5}
                        delay={index * 200}
                      >
                        <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="h-8 w-8" />
                      </FloatingElement>

                      <h3 className="text-xl font-bold text-slate-200 mb">{feature.title}</h3>
                    </div>

                    <p className="text-slate-200">{feature.description}</p>
                  </div>

                  {/* Feature benefits */}
                  <div className="mt-auto">
                    <div className="pt-4 border-t border-slate-100">
                      <p className="font-medium text-slate-400 mb-3">Key Benefits:</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mt-0.5`}
                            >
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-slate-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>

                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA Section */}
        <RevealOnScroll animation="fade-up" delay={1000}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-hosta/20 via-waikawa-grey/20 to-vivid-cerise/20 rounded-3xl blur-xl"></div>

            <div className="relative bg-gray-700 rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-300 mb-4">Ready to explore all features?</h3>
                  <p className="text-lg text-slate-400">Discover how <strong>Workwise</strong>  can transform your team's productivity</p>
                </div>

                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default FeaturesSection
