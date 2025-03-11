 "use client";
import { color, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Dr. Sanchita Bhor",
    title: "MDS Conservative",
    imageSrc: "/images/dr-sanchita.webp",
    altText: "Dr. Sanchita Bhor",
    link: "/About_Us/page.js",
  },
  {
    name: "Dr. Ashutosh Pai",
    title: "Implantologist",
    imageSrc: "/images/Dr-Ashutosh_Pai.webp",
    altText: "Dr. Ashutosh Pai",
    link: "",
  },
  {
    name: "Dr. Mazin Deshmukh",
    title: "Oral and Maxillofacial Surgeon",
    imageSrc: "/images/Dr-Mazin_Deshmukh.webp",
    altText: "Dr. Mazin Deshmukh",
    link: "",
  },
  {
    name: "Dr. Pooja Shivasharan",
    title: "Pedodontics",
    imageSrc: "/images/Dr-Pooja_Shivasharan.webp",
    altText: "Dr. Pooja Shivasharan",
    link: "",
  },
  {
    name: "Dr. Tejas Pol",
    title: "Orthodontist",
    imageSrc: "/images/Dr-Tejas_Pol.webp",
    altText: "Dr. Tejas Pol",
    link: "",
  },
  {
    name: "Dr Ansil Pappachan",
    title: "Dentist",
    imageSrc: "/images/Dr-Ansil_Pappachan.webp",
    altText: "Dr Ansil Pappachan",
    link: "",
  },
];

const testimonials = [
  {
    name: "VINAY PATEL",
    review:
      "Dr. Sanchita is an exceptional dentist in Navi Mumbai. Her expertise, attention to detail, and patient-focused approach instilled confidence in me immediately. The clinic is clean, well-maintained, and perfect for families. I highly recommend Dr. Sanchita for top-notch dental care.",
    rating: 5,
  },
  {
    name: "DHAVAL SHELADIA",
    review:
      "I have got my teeth cleaning, root canal & extraction done here.  Clinic is always neat & clean. Staff is cordial and the dentist is excellent. All my treatments have been painless. Dr Sanchita goes out of her way to make you feel comfortable. Highly recommend! Also, it is convenient that a medical store is next door.",
    rating: 5,
  },
  {
    name: "ABHISHEK PITHAR",
    review:
      "The best dental care hospital. Dr. Sanchita is very professional and experienced. Does all the work with a great patience and calmly, which is very great for nervous patients. If any questions asked she explains the cause, treatment and precautions very well. The hospital is located in a very spacious area with adequate parking spaces for a car. Must recommended without any hesitation.",
    rating: 5,
  },
  {
    name: "ABHISHEK SHARMA",
    review:
      "The clinic is very neat and clean and has very kind staff. The doctor is very caring and gentle. She does an amazing work and is considerate of the patients concerns. She answers everything peacefully and gives her patients time.",
    rating: 4,
  },
];
const TeamCard = ({ name, title, imageSrc, altText, link }) => (
  <div className="relative group scroll-mt-70">
    <Link href={link} passHref>
      <div className="relative bg-white rounded-full shadow-3xl transition-transform duration-500 ease-in-out p-6 mb-6 text-center w-96 h-96 flex flex-col items-center justify-center group-hover:z-50 group-hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
        <div className="relative w-52 h-52 overflow-hidden rounded-full">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-full border-4 border-blue-500"
          />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mt-4">{name}</h3>
        <p className="text-blue-600 font-medium italic pt-3">{title}</p>
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="text-white text-xl font-semibold">Know More</span>
        </div>
      </div>
    </Link>
  </div>
);

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleReadMore = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-yellow-500 ${
          index < rating ? "opacity-100" : "opacity-50"
        }`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <button className="slick-arrow custom-next" aria-label="Next">
        Next
      </button>
    ),
    prevArrow: (
      <button className="slick-arrow custom-prev" aria-label="Previous">
        Previous
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-100">
      <motion.div
        className="relative w-full max-w-screen-xl flex flex-col md:flex-row overflow-hidden bg-gray-200"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        transition={{ staggerChildren: 0.5, type: "spring", stiffness: 100 }}
      >
        {/* Testimonial Section */}
        <motion.div
          id="testimonial-section"
          className="flex flex-col w-full md:w-1/2 justify-center items-center relative z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          onMouseEnter={() =>
            document.querySelector("#team-section")?.classList.add("blur-sm")
          }
          onMouseLeave={() =>
            document.querySelector("#team-section")?.classList.remove("blur-sm")
          }
        >
          <div className="w-full bg-white p-8 relative z-20 transition-all duration-500 ease-in-out">
            <h2
              className="text-4xl font-bold text-blue-900 text-center mb-8"
              style={{
                textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
                color: "#172554",
                animation: "zoomIn 1s ease-in-out",
              }}
            >
              What Our Patients Say
            </h2>
            <Link
              href="https://www.google.com/maps/place/Sanchita+Dental+Care/@19.034799,73.067598,13z/data=!4m8!3m7!1s0x3be7c214d7f97f31:0x24d0d5deb950350b!8m2!3d19.0347985!4d73.0675981!9m1!1b1!16s%2Fg%2F11b7kdx8dq?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank" passHref
            >
              <motion.button
                className="bg-yellow-500 text-blue-900 px-4 py-4 md:px-6 md:py-3 mx-auto my-4 mt-12 rounded-3xl shadow-lg hover:bg-yellow-400 border border-transparent hover:border-blue-700 transition-colors duration-300 flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Your Experience
              </motion.button>
            </Link>
            <div className="relative container mx-auto px-4 py-16">
              <motion.div
                key={currentIndex}
                className="bg-white p-6 -mt-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 border border-transparent hover:border-blue-700 transition-transform duration-300 ease-in-out w-full max-w-md mx-auto"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="flex space-x-1 mb-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
                <p
                  className={`text-gray-800 ${
                    isExpanded ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {testimonials[currentIndex].review}
                </p>
                <button
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={handleReadMore}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </motion.div>
            </div>
            <Link
              href="https://www.google.com/maps/place/Sanchita+Dental+Care/@19.034799,73.067598,13z/data=!4m8!3m7!1s0x3be7c214d7f97f31:0x24d0d5deb950350b!8m2!3d19.0347985!4d73.0675981!9m1!1b1!16s%2Fg%2F11b7kdx8dq?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank" passHref
            >
              <motion.button
                className="bg-blue-800/50 text-gray-800 px-4 py-4 md:px-6 md:py-3 mx-auto my-4 -mt-4 rounded-2xl shadow-lg hover:bg-blue-700/50 border-2 border-gray-800 transition-colors duration-300 flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More Testimonial
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          id="team-section"
          className="w-full md:w-1/2 flex flex-col justify-center p-8 transition-all duration-500 ease-in-out"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          onMouseEnter={() =>
            document
              .querySelector("#testimonial-section")
              ?.classList.add("blur-sm")
          }
          onMouseLeave={() =>
            document
              .querySelector("#testimonial-section")
              ?.classList.remove("blur-sm")
          }
        >
          <h2
            className="text-4xl font-bold text-blue-900 text-center mb-12 -mt-11"
            style={{
              textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
              color: "#172554",
              animation: "zoomIn 1s ease-in-out",
            }}
          >
            Meet Our Team
          </h2>
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </div>
  );
}
