 
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";


// Define the treatments array at the top
const treatments = [
  { "name": "Wisdom Teeth Removal", "link": "/Treatment/wisdom-teeth-removal" },
  { "name": "Teeth Extractions", "link": "/Treatment/teeth-extractions" },
  { "name": "Braces", "link": "/Treatment/braces" },
  { "name": "Clear Aligners", "link": "/Treatment/clear-aligners" },
  { "name": "Full Mouth Reconstruction", "link": "/Treatment/full-mouth-reconstruction" },
  { "name": "Advanced Gum Treatments", "link": "/Treatment/advanced-gum-treatments" },
  { "name": "Cosmetic Smile Makeovers", "link": "/Treatment/cosmetic-smile-makeovers" },
  { "name": "Scaling and Root Planing", "link": "/Treatment/scaling-and-root-planing" },
  { "name": "Tooth Crown", "link": "/Treatment/tooth-crown" },
  { "name": "Teeth Cleaning", "link": "/Treatment/teeth-cleaning" },
  { "name": "Tooth Filling", "link": "/Treatment/tooth-filling" },
  { "name": "Root Canal", "link": "/Treatment/root-canal" },
  { "name": "Sedation Dentistry", "link": "/Treatment/sedation-dentistry" },
  { "name": "Sleep Apnea", "link": "/Treatment/sleep-apnea" },
  { "name": "Dental Sealants", "link": "/Treatment/dental-sealants" },
  { "name": "Dentures", "link": "/Treatment/dentures" },
  { "name": "Fluoride Treatment", "link": "/Treatment/fluoride-treatment" },
  { "name": "Mouth Guard", "link": "/Treatment/mouth-guard" },
  { "name": "Inlays and Onlays", "link": "/Treatment/inlays-and-onlays" },
  { "name": "Oral Cancer Screening", "link": "/Treatment/oral-cancer-screening" },
  { "name": "Teeth Bonding", "link": "/Treatment/teeth-bonding" },
  { "name": "Tooth Bridge", "link": "/Treatment/tooth-bridge" },
  { "name": "X-rays and Imaging", "link": "/Treatment/xrays-and-imaging" },
  { "name": "Veneers", "link": "/Treatment/veneers" },
  { "name": "Dental Implants", "link": "/Treatment/dental-implants" },
  
  { "name": "Teeth Whitening", "link": "/Treatment/teeth-whitening" },
  
]
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleAnswer, setVisibleAnswer] = useState(null); // Track which answer is visible


  

  useEffect(() => {
    if (slug) {
      const fetchTreatment = async () => {
        try {
          const response = await fetch(`http://localhost:1336/api/treatments?filters[slug]=${slug}`);
          const data = await response.json();
          setTreatment(data.data[0]);
        } catch (error) {
          console.error("Error fetching treatment:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchTreatment();
    }
  }, [slug]);
  

  const toggleAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!treatment) {
    return <p>No treatment found.</p>;
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="container mx-auto p-4 relative z-20 flex flex-col items-center">
      
      <h1
          className="text-6xl md:text-6xl font-extrabold  mb-12 mt-32 text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          style={{
            textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
            color: "#172554",
            animation: "zoomIn 1s ease-in-out",
          }}
        >
        {treatment.name}
       </h1>
          <div className="flex flex-wrap">
          <div className="w-full md:w-3/4 p-4">
            {/* Treatment Sections */}
            <motion.section
  className="mb-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">{treatment.Title}</h2>
  
  {/* Handle different possible structures of description1 */}
  {Array.isArray(treatment.discription) ? (
    treatment.discription.map((block, index) => (
      block.type === "paragraph" ? (
        <p key={index} className="text-lg text-gray-700">
          {block.children?.map((child) => child.text).join('') || ''}
        </p>
      ) : null
    ))
  ) : (
    <p className="text-lg text-gray-700">
      {treatment.discription || "No description available."}
    </p>
  )}
</motion.section>



{/* img section */}
 
<motion.div
  className="my-8 flex justify-center"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <Image
    src={treatment.img}
    alt={treatment.alText}
    layout="fill"
    objectFit="contain"
    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
  />
</motion.div>
 
 
          {/* Advantages of Dental Implants */}

<motion.section
  className="mb-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    {treatment.title2}
  </h2>
  <ul className="list-disc list-inside space-y-2">
    {treatment.discription2?.map((list, index) => (
      // Ensure `list.children` is defined before mapping
      list.children?.map((item, subIndex) => (
        <li key={`${index}-${subIndex}`}>
          <span className="font-bold">
            {item.children?.[0]?.text || 'No text available'}
          </span>
          <span> {item.children?.[1]?.text || ''}</span>
        </li>
      ))
    ))}
  </ul>
</motion.section>

            {/* teatment section */}


            <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {treatment.title3}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {treatment.description3?.map((list, index) => (
            list.children?.map((item, subIndex) => (
              <li key={`${index}-${subIndex}`}>
                <span className="font-bold">
                  {item.children?.[0]?.text || 'No text available'}
                </span>
                <span> {item.children?.[1]?.text || ''}</span>
              </li>
            ))
          ))}
        </ul>
      </motion.section>

      {/* advantages */}



      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {treatment.title4}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {treatment.description4?.map((list, index) => (
            list.children?.map((item, subIndex) => (
              <li key={`${index}-${subIndex}`}>
                <span className="font-bold">
                  {item.children?.[0]?.text || 'No text available'}
                </span>
                <span> {item.children?.[1]?.text || ''}</span>
              </li>
            ))
          ))}
        </ul>
      </motion.section>
            {/* What a Patient Should Know Before the Procedure */}
             



            <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {treatment.title5}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {treatment.Description5?.map((list, index) => (
            list.children?.map((item, subIndex) => (
              <li key={`${index}-${subIndex}`}>
                <span className="font-bold">
                  {item.children?.[0]?.text || 'No text available'}
                </span>
                <span> {item.children?.[1]?.text || ''}</span>
              </li>
            ))
          ))}
        </ul>
      </motion.section>



{/* 6 */}


      
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {treatment.title6}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {treatment.Description6?.map((list, index) => (
            list.children?.map((item, subIndex) => (
              <li key={`${index}-${subIndex}`}>
                <span className="font-bold">
                  {item.children?.[0]?.text || 'No text available'}
                </span>
                <span> {item.children?.[1]?.text || ''}</span>
              </li>
            ))
          ))}
        </ul>
      </motion.section>


      
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ask Questions
        </h2>
        <div className="space-y-6">
      <div className="border rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          onClick={() => toggleAnswer(1)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.que1}</h3>
          <span className="text-xl">{visibleAnswer === 1 ? "-" : "+"}</span>
        </button>
        {visibleAnswer === 1 && <p className="p-4 text-gray-700">{treatment.ans1}</p>}
      </div>

      <div className="border rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          onClick={() => toggleAnswer(2)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.que2}</h3>
          <span className="text-xl">{visibleAnswer === 2 ? "-" : "+"}</span>
        </button>
        {visibleAnswer === 2 && <p className="p-4 text-gray-700">{treatment.ans2}</p>}
      </div>



      <div className="border rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          onClick={() => toggleAnswer(3)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.que3}</h3>
          <span className="text-xl">{visibleAnswer === 3 ? "-" : "+"}</span>
        </button>
        {visibleAnswer === 3 && <p className="p-4 text-gray-700">{treatment.ans3}</p>}
      </div>
      {/* Repeat similar blocks for additional questions and answers if needed */}


      <div className="border rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          onClick={() => toggleAnswer(5)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.que5}</h3>
          <span className="text-xl">{visibleAnswer === 5 ? "-" : "+"}</span>
        </button>
        {visibleAnswer === 5 && <p className="p-4 text-gray-700">{treatment.ans5}</p>}
      </div>

      <div className="border rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          onClick={() => toggleAnswer(4)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.que4}</h3>
          <span className="text-xl">{visibleAnswer === 4 ? "-" : "+"}</span>
        </button>
        {visibleAnswer === 4 && <p className="p-4 text-gray-700">{treatment.ans4}</p>}
      </div>


       




    </div>
   

   
     


    
    
</motion.section>
            
            {/* Conclusion */}
            
            {/* Schedule Your Appointment */}
            <div className="mt-12">
              <motion.div
                className="mt-12 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Schedule Your Appointment
                </h2>
                <Link
                  href="/Contact_Us"
                  className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-8 py-3 rounded-lg text-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  Click Me
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="hidden md:block w-1/4 p-4">
            <div className="sticky top-28 bg-blue-900/70 shadow-lg rounded-lg p-6 max-h-[none] overflow-hidden"> 
              <h3 className="text-2xl font-semibold text-black mb-7">Other Treatments</h3>
              <ul className="space-y-4">
                {treatments.map((treatment) => (
                  <li key={treatment.link}>
                    <Link
                      href={treatment.link}
                      className="block p-2 rounded-lg transition-colors duration-300 text-white hover:bg-blue-50 hover:text-blue-900"
                    >
                      {treatment.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
</div>
</div>
       
   
  );
};

export default Slug;
