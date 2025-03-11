"use client";
const Footer = () => {
  return (
    <footer className="bg-blue-900/80 text-white py-8 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="container mx-auto flex flex-wrap justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Working Hours Section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
          <h3 className="font-serif font-bold text-2xl md:text-xl mb-2 text-center lg:text-left">
            Working Hours
          </h3>
          <div className="text-center lg:text-left space-y-1">
            <p>Monday - Friday: 11:00 AM - 8:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
          <h3 className="font-serif font-bold text-2xl md:text-xl mb-2 text-center lg:text-left">
            Contact Number
          </h3>
          <div className="text-center lg:text-left space-y-1">
            <p>+91-22-3595-7237</p>
            <p>+91-8450944245</p>
            <p>sanchitadentalcare@gmail.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
          <h3 className="font-serif font-bold text-2xl md:text-xl mb-2 text-center lg:text-left">
            Find us at
          </h3>
          <p className="leading-7 text-center lg:text-left">
            Shop No. 26-27, Aum Sai Apartments,
            <br />
            Plot No. 23C, Sector 7,
            <br />
            Kharghar, Navi Mumbai, 410210 India
          </p>
        </div>

        {/* Google Maps Section */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mt-4 lg:mt-0">
          <div className="relative overflow-hidden group w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15086.630877963207!2d73.0675981!3d19.0347985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c214d7f97f31%3A0x24d0d5deb950350b!2sSanchita%20Dental%20Care!5e0!3m2!1sen!2sin!4v1725537643744!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} {" "}
          Sanchita Dental Care.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
