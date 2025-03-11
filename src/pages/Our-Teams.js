// "use client";

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const OurTeams = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeamMembers = async () => {
//       const headers = {
//         Authorization: `Bearer b9f60198e4ca0486386ec0db662291aede6974cc8ce044437101612ae9e1d20aa2edcc9fc796a13d45febe0b94a269ea82a6bdb22d0e78bcd46b0aa0474772cc5d9530ded88febace1522cbb86aa2ff38cd4e99c2eebeca0ae8b7950e27c1f0591b6231221bbf92572540d12976ddcd00fc0cfb9427e974d0735ff7f2199d46e`
//       };

//       try {
//         const url = `http://localhost:1337/api/our-teams?populate=*`; // API endpoint to fetch team members
//         console.log("Fetching team members from:", url); // Log the URL
//         const res = await fetch(url, { headers });
//         if (!res.ok) {
//           throw new Error('Failed to fetch team members');
//         }
//         const data = await res.json();
//         setTeamMembers(data.data);
//       } catch (err) {
//         console.error("Error fetching team members:", err); // Log the error for debugging
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeamMembers();
//   }, []);

//   if (loading) return <div>Loading team members...</div>;
//   if (error) return <div>Error loading team members: {error}</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen py-20 mt-4">
//       <h1
//         className="text-4xl font-extrabold text-center mb-14 mt-10"
//         style={{
//           textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
//           color: "#172554",
//           animation: "zoomIn 1s ease-in-out",
//         }}
//       >
//         Meet Our Team
//       </h1>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0">
//           {teamMembers.map((item) => {
//             const imageData = item.attributes.Image?.data?.attributes;
//             const imageUrl = imageData ? `http://localhost:1337${imageData.url}` : ''; // Construct image URL
//             const memberSlug = item.attributes.slug; // Ensure slug exists

//             // Log member details for debugging
//             console.log("Team Member:", item.attributes);

//             return (
//               <div
//                 key={item.id}
//                 className="relative bg-gray-300 max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group"
//               >
//                 <div className="h-28 mt-8 flex items-center justify-center">
//                   {imageData ? (
//                     <img
//                       src={imageUrl}
//                       alt={item.attributes.Name}
//                       className="h-full object-contain justify-center items-center" // Centered image
//                     />
//                   ) : (
//                     <div className="h-28 w-28 bg-gray-300" />
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <h2 className="text-2xl text-center font-bold text-gray-800 mb-3">
//                     {item.attributes.Name}
//                   </h2>
//                   <p className="text-gray-600 text-center leading-relaxed">
//                     {item.attributes.Description || 'No description available.'}
//                   </p>
//                 </div>

//                 {/* Sliding overlay animation */}
//                 <div className="absolute inset-0 bg-blue-400 bg-opacity-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

//                 {/* Button in the middle */}
//                 <div className="absolute inset-7 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//                   <Link href={`./our-team/${memberSlug}`}>
//                     <button className="bg-blue-700 text-gray-200 py-4 px-8 border-2 border-blue-600 rounded-full font-bold hover:bg-blue-600">
//                       Read More
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeams;



// "use client";

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image'; // Import Image component for Next.js image optimization

// const TeamCard = ({ name, title, imageSrc, altText, link }) => (
//   <Link href={link} passHref>
//     <div className="relative bg-white rounded-full shadow-2xl transition-shadow duration-300 ease-in-out p-6 mb-6 text-center w-96 h-96 flex flex-col items-center justify-center group">
//       <div className="relative w-52 h-52 overflow-hidden rounded-full">
//         <Image
//           src={imageSrc}
//           alt={altText}
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-full border-4 border-blue-500"
//         />
//       </div>
//       <h3 className="font-extrabold text-xl text-gray-800 mt-4">{name}</h3>
//       <p className="text-blue-600 font-medium italic pt-3">{title}</p>
//       <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <span className="text-white text-xl font-bold">Know More</span>
//       </div>
//     </div>
//   </Link>
// );

// const OurTeams = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeamMembers = async () => {
//       const headers = {
//                  Authorization: `Bearer b9f60198e4ca0486386ec0db662291aede6974cc8ce044437101612ae9e1d20aa2edcc9fc796a13d45febe0b94a269ea82a6bdb22d0e78bcd46b0aa0474772cc5d9530ded88febace1522cbb86aa2ff38cd4e99c2eebeca0ae8b7950e27c1f0591b6231221bbf92572540d12976ddcd00fc0cfb9427e974d0735ff7f2199d46e`
//                };
//       try {
//         const url = `http://localhost:1337/api/our-teams?populate=*`; // API endpoint to fetch team members
//         console.log("Fetching team members from:", url);
//         const res = await fetch(url, { headers });
//         if (!res.ok) {
//           throw new Error('Failed to fetch team members');
//         }
//         const data = await res.json();
//         setTeamMembers(data.data);
//       } catch (err) {
//         console.error("Error fetching team members:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeamMembers();
//   }, []);

//   if (loading) return <div>Loading team members...</div>;
//   if (error) return <div>Error loading team members: {error}</div>;

//   return (
//     <div className="container mx-auto px-6 py-12 pt-28 mt-10">
//       <div
//         className="text-4xl font-extrabold text-center mb-16"
//         style={{
//           textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
//           color: "#172554",
//           animation: "zoomIn 1s ease-in-out",
//         }}
//       >
//         Meet Our Expert Dental Team
//       </div>
//       <div className="text-center text-xl text-gray-800 mb-12 mx-4 italic">
//         <p>
//           Our team of dental professionals is not only highly qualified and
//           skilled but comes with invaluable experience that puts them at the top
//           of their game. Achieve a Beautiful Smile with our Conservative
//           Approach.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-8">
//         {teamMembers.map((member) => {
//           const imageData = member.attributes.Image?.data?.attributes;
          
//           const imageUrl = imageData ? `http://localhost:1337${imageData.url}` : ''; // Construct image URL
//           const memberSlug = member.attributes.slug; // Ensure slug exists

//           return (
//             <div key={member.id} className="flex-shrink-0">
//               <TeamCard
//                 name={member.attributes.Name}
//                 title={member.attributes.Title} // Make sure the field name matches your data structure
//                 imageSrc={imageUrl}
//                 altText={member.attributes.Name}
//                 link={`./our-team/${memberSlug}`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OurTeams;



"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Sanchita Bhor",
    title: "MDS Conservative,",
    imageSrc: "/images/dr-sanchita.webp",
    altText: "Dr. Sanchita Bhor",

    content: `MDS Conservative, Endodontics and Aesthetic Dentistry

      Dr. Sanchita Tukaram Bhor is a highly experienced dentist with 14 years of overall experience, including 10 years as a specialist. She practices at Sanchita Dental Care in Kharghar, Navi Mumbai and is also a visiting consultant doctor at Citizen Dental Clinic in Vashi and Sanghavi Clinic in Matunga. Dr. Sanchita specializes in painless root canal treatments, cosmetic dentistry, and laser esthetic treatments.
      
      She completed her MDS in Conservative Dentistry & Endodontics from Dr. D.Y. Patil Dental College Hospital in Pune in 2012. Dr. Sanchita is also a member of several prestigious dental associations, including the Indian Dental Association (IDA).
    `,
  },
  {
    name: "Dr. Ashutosh Pai",
    title: "Implantologist",
    imageSrc: "/images/Dr-Ashutosh_Pai.webp",
    altText: "Dr. Ashutosh Pai",
    link: "/Our_Team/Dr-Ashutosh-Pai",
    content: `Dr. Ashutosh Pai is a highly skilled Implantologist based in Mumbai, with over 12 years of experience in his field. He holds both a BDS and MDS degree and is a member of the Indian Dental Association, Indian Prosthodontic Society, and Dental Council of India. Dr. Pai is fluent in both English and Hindi, allowing him to effectively communicate with a wide range of patients. He offers a variety of medical services, including Artificial Teeth, Cast Partial Denture, Conscious Sedation, Endo Surgery or Apicoectomy, and Endosurgery.
    You can visit Dr. Ashutosh Pai at Sanchita Dentalcare in Kharghar, Navi Mumbai for top-quality dental care.`,
  },
  {
    name: "Dr. Mazin Deshmukh",
    title: "Oral and Maxillofacial Surgeon",
    imageSrc: "/images/Dr-Mazin_Deshmukh.webp",
    altText: "Dr. Mazin Deshmukh",
    link: "/Our_Team/Dr-Mazin-Deshmukh",
    content: `Dr. Mazin Deshmukh is an Oral and Maxillofacial Surgeon practicing in Mumbai with over 5 years of experience. He completed his Masters at MGM Dental College and Hospital and pursued a fellowship in Advanced Implantology. Dr. Mazin has several national and international publications and is a member of the Association of Oral and Maxillofacial Surgeons of India and the Indian Academy of Maxillofacial Surgery.`,
  },
  {
    name: "Dr. Pooja Shivasharan",
    title: "Pedodontics",
    imageSrc: "/images/Dr-Pooja_Shivasharan.webp",
    altText: "Dr. Pooja Shivasharan",
    link: "/Our_Team/Dr-Pooja-Shivasharan",
    content: `Dr. Pooja Shivasharan Johare is a Pediatric & Preventive dentist by specialty. She is a proficient clinician with 8 years of experience in delivering various pediatric dental procedures. Se has completed her masters from reputed Terna Dental College, Navi Mumbai. She is a life member of South Asian Association of Pediatric Dentistry, Foundation of Orofacial Myotherapy, Indian Dental Association.
    She is an Associate Professor in the department of Pediatric and Preventive Dentistry at Prestigious GD Pol Foundation YMT Dental College and Hospital where she is actively involved in both Undergraduate & Postgraduate training. She has several Research publications in National and International Journals to his credit. She is child friendly and gets to know the patient well before the treatment from the parents. She practices evidence based dentistry and uses behaviour management techniques suitable for every child.`,
  },
  {
    name: "Dr. Tejas Pol",
    title: "Orthodontist",
    imageSrc: "/images/Dr-Tejas_Pol.webp",
    altText: "Dr. Tejas Pol",
    link: "/Our_Team/Dr-Tejas-Pol",
    content: `Dr. Tejas R Pol is a highly skilled M.D.S Orthodontist and a certified INVISALIGN (invisible/clear aligners) orthodontist based in Vashi. He is renowned for his advanced methods and personalized approach, which have proven successful in meeting patient expectations. To stay abreast of the latest developments in Orthodontics (Braces), he has undergone training on Lingual Orthodontics (invisible braces) from world-renowned orthodontists such as Dr. Hee Moon Kyung (Korea), Dr. Rafi Romano (Israel), Dr Scuzzo & Dr Takemoto (Italy).

    Dr. Pol is an expert in Invisible Braces treatment and a certified doctor for INVISALIGN, ‘Incognito System (invisible braces), Germany’ and ‘Clear Aligner System’.`,
  },
  {
    name: "Dr Ansil Pappachan",
    title: "Dentist",
    imageSrc: "/images/Dr-Ansil_Pappachan.webp",
    altText: "Dr Ansil Pappachan",
    link: "/Our_Team/Dr-Ansil-Pappachan",
    content: `Dr. Ansil Pappachan is a Dentist and Orthodontist, with specializations in Aligner and Braces treatment for teeth alignment. He completed his MDS in Orthodontics from Ambedkar Dental College, Banglore in 2010 and BDS from MGV Dental College, Nashik in 2006. He is a member of the Indian Dental Association and Indian Orthodontic Society, with 16 years of experience in orthodontics.
    Dr. Ansil Pappachan is one of the most sought-after aligner and braces specialists in Navi Mumbai and Mumbai, transforming the lives of thousands of patients by aligning their teeth for a perfect smile.
    He is Invisalign certified and actively involved in the planning and fabrication of aligner systems.`,
  },
];

// TeamCard component for each team member
const TeamCard = ({ name, title, imageSrc, altText, onClick }) => (
  <div
    onClick={onClick}
    className="relative bg-white rounded-full shadow-2xl transition-shadow duration-300 ease-in-out p-6 mb-6 text-center w-96 h-96 flex flex-col items-center justify-center group cursor-pointer"
  >
    <div className="relative w-52 h-52 overflow-hidden rounded-full">
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-full border-4 border-blue-500"
      />
    </div>
    <h3 className="font-extrabold text-xl text-gray-800 mt-4">{name}</h3>
    <p className="text-blue-600 font-medium italic pt-3">{title}</p>
    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <span className="text-white text-xl font-bold">Know More</span>
    </div>
  </div>
);

// Modal component with new layout and animations
const DoctorInfoModal = ({ isOpen, onClose, doctor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-3xl mt-20 border-2  border-black shadow-lg w-11/12 max-w-3xl p-8 relative animate-slideIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-4xl font-bold text-white hover:text-gray-300 transition duration-200"
        >
          &times;
        </button>
        <div className="flex flex-col mt-5 md:flex-row items-center">
          <Image
            src={doctor.imageSrc}
            alt={doctor.altText}
            width={190}
            height={190}
            className="rounded-full border-4 border-white  shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col ml-5 text-center md:text-left">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 mb-2 animate-fadeIn">
              {doctor.name}
            </h1>

            <h2 className="text-xl font-semibold text-yellow-300 mb-2 italic animate-fadeIn">
              {doctor.title}
            </h2>
          </div>
        </div>
        <p className="text-lg text-gray-900 mt-10 mb-10 text-justify whitespace-pre-line animate-fadeIn">
          {doctor.content}
        </p>
      </div>
    </div>
  );
};

// Main component
export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="container mx-auto px-6 py-12 pt-28 mt-10">
      <div
        className="text-4xl font-extrabold text-center mb-16"
        style={{
          textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
          color: "#172554",
          animation: "zoomIn 1s ease-in-out",
        }}
      >
        Meet Our Expert Dental Team
      </div>
      <div className="text-center text-xl text-gray-800 mb-12 mx-4 italic">
        <p>
          Our team of dental professionals is not only highly qualified and
          skilled but comes with invaluable experience that puts them at the top
          of their game. Achieve a Beautiful Smile with our Conservative
          Approach.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0">
            <TeamCard
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              altText={member.altText}
              onClick={() => openModal(member)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <DoctorInfoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        doctor={selectedDoctor}
      />
    </div>
  );
}
