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
            <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                    <img
                        src={logo}
                        alt="WORKWISE Logo"
                        className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
                    />
                </div>

                <div
                    ref={heroRef}
                    className={`flex items-center justify-center w-full transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{ transitionDelay: "100ms" }}
                >
                    <Message message={message} />
                </div>

                <footer className="absolute bottom-2 w-full text-center text-white px-2 sm:px-4">
                    <p className="text-xs sm:text-sm md:text-base font-medium">
                        Copyrights ©Workwise 2016-{new Date().getFullYear()} All rights reserved
                    </p>
                </footer>
            </div>

        </AuroraBackground>
    );
}

export default ToogleThankyou;