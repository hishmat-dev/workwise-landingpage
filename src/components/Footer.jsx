import logo from '../components/assets/workwise_white.svg'
import googlePlay from "../components/assets/googleplay.png"
import appStore from "../components/assets/appstore.png"
import mac from "../components/assets/apple.png"
import windows from "../components/assets/windows.png"
import RevealOnScroll from "./ui/RevealOnScroll"

import { Mail, MapPin } from "lucide-react";



function Footer() {
  const storeLinks = [
    { name: "Google Play", icon: googlePlay },
    { name: "App Store", icon: appStore },
    { name: "Windows", icon: windows },
    { name: "Mac", icon: mac },
  ]

  return (
    <footer className="pb-6 bg-gray-700 text-slate-300">
      <div className="landing-container px-1 md:px-2 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end ">

          <RevealOnScroll animation="fade-right" delay={100}>
            <div className="md:mb-0">
              <img src={logo} alt="WORKWISE Logo" className="h-52 w-auto" />
              <p className="text-base text-slate-400">
                Work from anywhere the way it should be
                <br />
                Easy • Effective • Efficient
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-down" delay={200}>
            <div className="flex flex-col items-center justify-center self-center">
              <ul className="text-base text-slate-400 space-y-3">
                <li>
                  <strong>Workwise LLC - FZ (2530778)</strong>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-blue-400 mt-1" />
                  <div>
                    Meydan Free Zone, Meydan Grandstand,<br />
                    6th Floor, Meydan Rd, Nad Al Sheba 1,<br />
                    Dubai, UAE.
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:info@workw.com" className="hover:underline">
                    info@workw.com
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>


          <RevealOnScroll animation="fade-left" delay={200}>
            <div className="mt-6 md:mt-0 flex items-center gap-4">
              {storeLinks.map((store, index) => (
                <a key={index} href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <img src={store.icon} alt={store.name} className="h-10 w-auto object-contain" />
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll animation="fade-up" delay={300}>
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center md:items-center gap-y-6">
            <p className="text-sm text-slate-400 text-center md:text-left">
              Copyrights ©2016-{new Date().getFullYear()} All rights reserved | Workwise
            </p>


            <div className="flex gap-4">
              <a href="https://www.workw.com/login" className="text-slate-400 hover:text-bright-sun transition-colors">
                www.workw.com
              </a>
              <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  )
}

export default Footer
