"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight / 2;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-2 sm:p-4 transition-all duration-300 ${
        isHomePage && !isMenuOpen
          ? isScrolled
            ? "bg-blue-900/80 shadow-xl border-b border-white"
            : "bg-transparent border-b border-white/20"
          : "bg-blue-900/80 border-b border-white/20"
      }`}
      style={{
        boxShadow:
          !isHomePage || isScrolled || isMenuOpen
            ? "none"
            : "0px 4px 10px rgba(255, 255, 255, 0.1)",
        backgroundImage:
          !isHomePage || isScrolled || isMenuOpen
            ? "none"
            : `radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 70%)`,
      }}
    >
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center mx-4 sm:mx-16 p-2 transition-all duration-300 ${
            isHomePage
              ? isScrolled
                ? "bg-white shadow-md rounded-full"
                : ""
              : "bg-white shadow-md rounded-full"
          }`}
        >
          <a href="/">
            <Image
              src="/Images/logo-NoBackground.png"
              alt="Company Logo"
              width={isScrolled ? 120 : 150}
              height={isScrolled ? 40 : 50}
              className={`max-w-full h-auto transition-all duration-300 ${
                isHomePage
                  ? isScrolled
                    ? "opacity-100"
                    : "opacity-80"
                  : "opacity-100"
              }`}
              style={{
                backgroundColor:
                  isScrolled || !isHomePage ? "white" : "transparent",
                borderRadius: isScrolled || !isHomePage ? "50%" : "0",
                boxShadow:
                  isScrolled || !isHomePage
                    ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
                    : "none",
              }}
            />
          </a>
        </div>

        <button
          className="block sm:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`fixed inset-0 z-50 bg-blue-900/80 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } sm:translate-x-0 sm:relative sm:flex sm:items-center sm:bg-transparent sm:p-0 sm:w-auto sm:space-x-4 space-y-4 sm:space-y-0 p-4 lg:mx-auto lg:w-full lg:justify-end`}
        >
          <li className="sm:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </li>

          {[
            "/",
            "/Treatments",
            "/Our-Teams",
            "/About_Us",
            "/#Testimonial-Section",
            "/Contact_Us",
          ].map((href, index) => (
            <li key={index}>
              <Link
                href={href}
                className="block text-white hover:bg-blue-600 rounded-full py-2 px-6 text-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {
                  [
                    "Home",
                    "Treatments",
                    "Our Team",
                    "About Us",
                    "Testimonial",
                    "Contact Us",
                  ][index]
                }
              </Link>
            </li>
          ))}
          <div className="realtive bottom-4 right-4 sm:bottom-8 sm:right-8">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center ml-4 mr-7  bg-green-500 p-4 rounded-full shadow-lg border-2 border-green-700 transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-400/50"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white text-3xl transition duration-300 transform hover:scale-125"
              />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
