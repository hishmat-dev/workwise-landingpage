import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import AuroraBackground from "../ui/AuroraBackground";
import { useMotionValue, animate } from "framer-motion";
import logo from "../assets/workwise_white.svg";
import Message from "./Message";

const BUTTON_COLORS = ["#64C4B2", "#45C6EE", "#526BB1", "#DA1D81", "#FED33C"];

function ToogleThankyou() {
    const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [isLoaded, setIsLoaded] = useState(false);
    const buttonColor = useMotionValue(BUTTON_COLORS[0]);

    useEffect(() => {
        setIsLoaded(true);
        animate(buttonColor, BUTTON_COLORS, {
            ease: "easeInOut",
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
        });
    }, [buttonColor]);

    const message =
        "Thank you for your registration and confirmation of email. You are now in the queue to get access to Workwise. We apologise that due to the high demand you may experience some delay before access is granted.";
    return (
        <AuroraBackground>
            <div
                ref={heroRef}
                className="landing-container mx-auto flex flex-col items-center justify-center min-h-screen"
            >
                <div
                    className={`flex-1 flex flex-col justify-center items-center text-center lg:text-left transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{ transitionDelay: "100ms" }}
                >
                    <div className="space-y-2 flex flex-col items-center lg:items-start">
                        <div
                            className={`flex items-center justify-center lg:justify-start mt-2  transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: "300ms" }}
                        >
                            <img src={logo} alt="WORKWISE Logo" className="h-72 w-auto" />
                        </div>
                    </div>

                </div>

                <div
                    className={`flex-1 w-full flex items-center justify-center transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    style={{ transitionDelay: "300ms" }}
                >
                    <Message message={message} />
                </div>

                <footer className="w-full py-4 text-center text-white bg-opacity-50">
                    <p className="text-xl font-semibold">
                        Copyrights &copy;Workwise 2016-{new Date().getFullYear()} All rights reserved. Workwise
                    </p>
                </footer>
            </div>
        </AuroraBackground>
    );
}

export default ToogleThankyou;