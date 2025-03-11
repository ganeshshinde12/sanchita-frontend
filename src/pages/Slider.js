"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Treatments = () => {
  const treatments = [
    {
      id: 1,
      name: "Dental Implants",
      description:
        "Dental implants are a popular and effective option for replacing missing teeth because they provide a durable and natural-looking solution.",
      image: "/images/dental-implants.png",
      altText: "Dental Implants",
    },
    {
      id: 2,
      name: "Teeth Whitening",
      description:
        "Teeth whitening is a popular cosmetic dental procedure that can help you achieve the smile of your dreams.",
      image: "/images/teeth-whitening.png",
      altText: "Teeth Whitening",
    },
    {
      id: 3,
      name: "Tooth Crown",
      description: "Get your tooth crown at Sanchita Dental Care and Orthodontics...",
      image: "/images/dental-crown.png",
      altText: "Tooth Crown",
    },
    {
      id: 4,
      name: "Teeth Cleaning",
      description:
        "Get your teeth cleaned at Sanchita Dental Care and Orthodontics to maintain...",
      image: "/images/clean-teeth.png",
      altText: "Teeth Cleaning",
    },
    {
      id: 5,
      name: "Tooth Filling",
      description:
        "Are you experiencing tooth pain or sensitivity? You may have a cavity that needs...",
      image: "/images/Tooth-Filling.png",
      altText: "Tooth Filling",
    },
    {
      id: 6,
      name: "Root Canal",
      description:
        "If you are experiencing tooth pain, gum swelling, or sensitivity to hot...",
      image: "/images/root-canal.webp",
      altText: "Root Canal",
    },
    {
      id: 7,
      name: "Dentures",
      description:
        "Dentures are a great option for those missing multiple teeth that want to be...",
      image: "/images/Dentures.png",
      altText: "Dentures",
    },
    {
      id: 8,
      name: "Fluoride Treatment",
      description:
        "If you are looking to prevent cavities for yourself or your kids, then consider a fluoride...",
      image: "/images/fluoride-treatment.png",
      altText: "Fluoride Treatment",
    },
    {
      id: 9,
      name: "Mouth Guard",
      description:
        "If you find yourself grinding in your sleep, then you are most likely filing down your teeth...",
      image: "/images/mouth-guard.png",
      altText: "Mouth Guard",
    },
  ];
  const slideCount = 3; 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const treatmentSlides = [...treatments, ...treatments];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= treatments.length ? 0 : nextIndex; 
    });
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? treatments.length - 1 : nextIndex; 
    });
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-gray-50 py-20 -mt-20">
      <h1
        className="text-4xl font-extrabold text-center mb-14 mt-10"
        style={{
          textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
          color: "#172554",
        }}
      >
        Discover Our Premium Dental Services
      </h1>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * (100 / slideCount))}%)`,
            }}
          >
            {treatmentSlides.map((treatment, index) => (
              <div
                key={index} 
                className="flex-shrink-0 w-full max-w-xs mx-10 bg-gray-300 border-2 border-gray-500 rounded-3xl overflow-hidden shadow-lg relative group"
              >
                <div className="relative h-32 mt-8">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full object-center"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl text-center font-bold text-gray-800 mb-3">
                    {treatment.name}
                  </h2>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-700 text-gray-200 py-2 px-4 mb-6 border-2 border-blue-600 rounded-full font-bold hover:bg-blue-600 transition duration-300">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-blue-950 bg-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-blue-950 bg-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Treatments;