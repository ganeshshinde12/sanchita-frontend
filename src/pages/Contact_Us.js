"use client";

import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [note, setNote] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!note) newErrors.note = "Note is required";

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        const form = { name, email, phoneNumber, note };

        try {
            const response = await fetch('./api/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const content = await response.json();

            if (response.ok) {
                //alert(content.data.tableRange); // Handle successful response
                setIsSubmitted(true);
                setName("");
                setEmail("");
                setPhoneNumber("");
                setNote("");
            } else {
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            console.error('Fetch error:', error);
            //alert("An unexpected error occurred.");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: "url('/images/Contact-us-bg-image.jpg')",
                backgroundAttachment: "fixed",
            }}>
                <div className="absolute inset-0 bg-white opacity-40 brightness-50"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg px-4 mt-24 sm:mt-36">
                <div className="flex mb-10 items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center"
                        style={{
                            textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
                            color: "#172554",
                            animation: "zoomIn 1s ease-in-out",
                        }}>
                        Enhance your smile with Top Endodontist
                    </h2>
                </div>

                <div className="sticky top-16 mb-24 p-8 rounded-lg transition-transform duration-500 ease-in-out border border-gray-300 shadow-lg shadow-gray-600/30 backdrop-blur-lg bg-white bg-opacity-30"
                    style={{
                        backdropFilter: "blur(10px)",
                        background: "rgba(255, 255, 255, 0.3)",
                        animation: "fadeIn 1.5s ease-in-out",
                    }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name *</label>
                            <input type="text" id="name" name="name" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 transition-all duration-300 ${errors.name ? "border-red-500" : "border-gray-300"} hover:border-blue-500`}
                                placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email *</label>
                            <input type="email" id="email" name="email" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 transition-all duration-300 ${errors.email ? "border-red-500" : "border-gray-300"} hover:border-blue-500`}
                                placeholder="@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>

                        {/* Phone Number Input */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 transition-all duration-300 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} hover:border-blue-500`}
                                placeholder="+91" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
                        </div>

                        {/* Note Textarea */}
                        <div>
                            <label htmlFor="note" className="block text-gray-700 font-bold mb-2">Add Note *</label>
                            <textarea id="note" name="note" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 transition-all duration-300 ${errors.note ? "border-red-500" : "border-gray-300"} hover:border-blue-500`}
                                placeholder="Your message here" value={note} onChange={(e) => setNote(e.target.value)} />
                            {errors.note && <p className="text-red-500 text-xs italic">{errors.note}</p>}
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block transition-transform duration-300 transform hover:scale-105">
                            Enquiry
                        </button>
                    </form>
                </div>
            </div>

            {/* Thank You Popup */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
                    <div className="bg-gradient-to-b from-white via-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg border-4 border-blue-500 transition-transform transform scale-105 text-center animate-popup">
                        <h3 className="text-3xl font-extrabold mb-4 text-blue-800">Thank You!</h3>
                        <p className="text-lg text-gray-700 mb-6">Your enquiry has been submitted successfully.</p>
                        <button onClick={() => setIsSubmitted(false)} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes zoomIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes popup {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-popup {
                    animation: popup 0.6s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}

export default ContactForm;
