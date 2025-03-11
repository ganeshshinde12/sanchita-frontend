 "use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const res = await fetch('http://localhost:1336/api/treatments?populate=*', {
          headers: {
            
            
            Authorization: `Bearer  781d98474745042e988d5d012178a5971eb13af4510ee36375a0a2a8b4a50ded7c22229a4001e5c2afcce80579d976b560e2dff75bff0b4357f8db5e4265d595be4621ecc49927ff459912bf71b6674b65753ec3c250639169114aa800c19b22598e34d66a44031af1a6cb91acdc75af634088cd68eccd0a1765c07bf31a4892`
                      },
        });

        if (!res.ok) throw new Error('Failed to fetch treatments');

        const { data } = await res.json();

        // Map the fetched data to match your structure
        // const formattedTreatments = data.map(({ id, name, discription, slug, Image }) => ({
        //   id,
        //   name,
        //   description: discription || 'No description available.', // Corrected spelling
        //   slug: slug || 'default-slug', // Ensure slug exists
        //   image: `http://localhost:1336${Image?.url || '/default-image.png'}`, // Ensure valid image URL
        //   alText: Image?.alternativeText || name,
        // }));


        const formattedTreatments = data.map(({ id, name, slug, title2, discription, Discriptions1, discription2, Image }) => ({
          id,
          name,
          description: title2 || discription || Discriptions1 || discription2 || "No description available.",
          slug: slug || "default-slug",
          image: `http://localhost:1336${Image?.url || '/default-image.png'}`,
          altText: Image?.alternativeText || name,
        }));

        setTreatments(formattedTreatments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  if (loading) return <div>Loading treatments...</div>;
  if (error) return <div>Error loading treatments: {error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-20 mt-4">
      <h1
        className="text-4xl font-extrabold text-center mb-14 mt-10"
        style={{
          textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
          color: "#172554",
          animation: "zoomIn 1s ease-in-out",
        }}
      >
        Curated Dental Treatments for You
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="relative bg-gray-300 max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative h-32 mt-8">
                <Image
                  src={treatment.image}
                  alt={treatment.alText}
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

              {/* Sliding overlay animation */}
              <div className="absolute inset-0 bg-blue-400 bg-opacity-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              {/* Button in the middle */}
              <div className="absolute inset-7 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <Link href={`/Treatment/${treatment.slug}`}>
                  <button className="bg-blue-700 text-gray-200 py-4 px-8 border-2 border-blue-600 rounded-full font-bold hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
