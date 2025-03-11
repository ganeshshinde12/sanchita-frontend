import React from "react";
import Image from "next/image";

const About_Us = () => {
  return (
    <section className="py-16 pt-32 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex-1 p-5 md:p-10 text-center md:text-left">
            <h2
              className="text-4xl font-bold mb-12 text-center"
              style={{
                textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
                color: "#172554",
                animation: "zoomIn 1s ease-in-out",
              }}>
              About Sanchita Dental Care
            </h2>
            <p className="text-lg leading-relaxed mb-5 text-gray-800 text-justify">
              Dr. Sanchita Bhor is a renowned Endodontist and Dentist who has
              been practicing in Kharghar, Navi Mumbai for over a decade. She
              offers a wide range of dental services, including root canal
              treatments, cosmetic dentistry, and dental implants.
            </p>
            <p className="text-lg leading-relaxed mb-5 text-gray-800 text-justify">
              She engages a team of experienced professionals at Sanchita Dental
              Care, such as Dr. Ashutosh Pai (Implantologist), Dr. Pradnya
              Asawale (Dental Surgeon), Dr. Mazin Deshmukh (Maxillofacial
              Surgeon), Dr. Aishwarya Kamble (Dental Surgeon), Dr. Tejas Pol
              (Orthodontist), and Dr Ansil Pappachan (Orthodontist).
            </p>
            <p className="text-lg leading-relaxed mb-5 text-gray-800 text-justify">
              She is also a member of the Indian Dental Association and the
              Indian Association of Conservative Dentistry and Endodontics
              (IACDE), where she constantly updates her knowledge and skills in
              her field.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/i4tugj4-1392x1536.webp"
              alt="Our Dental Team"
              width={450}
              height={300}
              className="rounded-xl shadow-md"
              style={{
                animation: "zoomIn 1s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Us;
