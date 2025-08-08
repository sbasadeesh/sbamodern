import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ITAutomationPlatform from "./Whatwedo";
import SolutionsSection from "./Whatwedo";

function Solutions(){


     useEffect(() => {
            AOS.init({
                  duration: 1000,
                  once: true,
                });
          }, []);

    return(
        <>
        <section className="min-h-screen flex items-center justify-center text-center pt-10 px-4 sm:px-6 lg:px-8 bg-black">
            <div data-aos="fade-up" className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                    Empower Through <span className="text-red-500">Intelligent Automation</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto">
                    Free up your teams to focus on what truly matters — <span className="text-red-400">innovation and impact</span>.
                </p>
                <button
                    onClick={() => setShowPopup(true)}
                    className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border-2 border-red-500 text-white rounded bg-black hover:bg-red-500 transition-all duration-300"
                >
                    <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-500 ease-out group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-white">Request a Demo</span>
                </button>
            </div>
        </section>

        <SolutionsSection />
    
        </>
    )
}

export default  Solutions;
