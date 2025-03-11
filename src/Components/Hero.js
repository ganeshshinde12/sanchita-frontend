 "use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero-background.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(70%)",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <div
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            Welcome to Sanchita Dental Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed text-gray-300 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            Expert Dental Care for a Brighter, Healthier Smile
          </p>
          <button
            className="transition ease-in-out delay-150 bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-5 lg:px-8 xl:py-4 xl:px-7 rounded-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
