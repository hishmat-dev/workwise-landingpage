import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
// import keyImage from "../components/assets/keyImage.svg"
import keyImage from "../components/assets/key_image1.svg"
import RevealOnScroll from "./ui/RevealOnScroll"
import GradientText from "./ui/GradientText"

function CTASection() {
  const [ctaRef, isCTAVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      ref={ctaRef}
      className="py-12 bg-gradient-to-b from-white to-slate-100 overflow-hidden"
    >
      <div className="landing-container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
  
          <div
            className={`md:w-1/2 text-center md:text-left space-y-6 transform transition-all duration-700 ease-out delay-400 ${
              isCTAVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <RevealOnScroll animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText from="from-blue-hosta" via="via-waikawa-grey" to="to-vivid-cerise">
                Unlock The Power of Your Organization Now!
              </GradientText>
            </h2>
          </RevealOnScroll>
            <p className="text-lg text-slate-600">
              Register for a 14 day free trial and get the opportunity to get the maximum out of your teams while reducing the work load.
              After the trial as low as only $15 per user per month. Start Your Free Trial Now!
            </p>
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta text-white rounded-full font-medium transition-colors duration-200">
                Start Your Free Trial Now
              </button>
            </div>
          </div>

      
          <div
            className={`md:w-2/3 flex justify-center transform transition-all duration-700 ease-out delay-50 ${
              isCTAVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img src={keyImage} alt="Key Visual" className="w-full max-w-2/3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
