import Image from "next/image";
import localFont from "next/font/local";
import Hero from "../Components/Hero";
import About_Us from "./About_Us";
import Treatments from "./Treatments";
import Testimonial from "./Testimonial"
import Slider from "react-slick";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
    <Hero />
    <About_Us />
    <section id="Testimonial-Section">
    <Testimonial />
    </section>
   <Slider /> 
  </div>
  );
}
