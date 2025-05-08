  import React from 'react';
  import './App.css';
  import logo from '../public/img/lodhalogo.png';
  import About from "../public/img/about.jpg"
  import About1 from "../public/img/aboutus.jpg"
  import down from "/down.png";
  import PROJECT1 from "../public/img/pimg1.png"
  import PROJECT2 from "../public/img/pimg2.png"
  import PROJECT3 from "../public/img/pimg3.png"
  import Blurimg from "../public/img/blur.png"
  import { motion } from "framer-motion";
  import { useState } from 'react';
  import { useEffect } from 'react';
  import Hero from "../public/img/hero.png"
  import { ToastContainer, toast } from 'react-toastify';
  import {
    FaSchool,
    FaHospital,
    FaUniversity,
    FaPlaceOfWorship,
    FaRoad,
    FaTrain,
    FaHorse
  } from "react-icons/fa";
  import { FaSwimmingPool, FaDumbbell, FaGlassCheers, FaParking, FaShieldAlt, FaChild, FaSpa, FaWifi, FaBicycle, FaTree } from "react-icons/fa";

  import QR from '../public/img/qr.png'
  const amenities = [
    { name: "Swimming Pool", icon: <FaSwimmingPool size={28} className="text-[#9C8856]" /> },
    { name: "Gymnasium", icon: <FaDumbbell size={28} className="text-[#9C8856]" /> },
    { name: "Clubhouse", icon: <FaGlassCheers size={28} className="text-[#9C8856]" /> },
    { name: "Parking", icon: <FaParking size={28} className="text-[#9C8856]" /> },
    { name: "24x7 Security", icon: <FaShieldAlt size={28} className="text-[#9C8856]" /> },
    { name: "Kids Play Area", icon: <FaChild size={28} className="text-[#9C8856]" /> },
    { name: "Spa & Wellness", icon: <FaSpa size={28} className="text-[#9C8856]" /> },
    { name: "High-Speed Internet", icon: <FaWifi size={28} className="text-[#9C8856]" /> },
    { name: "Cycling Track", icon: <FaBicycle size={28} className="text-[#9C8856]" /> },
    { name: "Green Park", icon: <FaTree size={28} className="text-[#9C8856]" /> },
  ];
  function LocationCard({ icon, title, subtitle }) {
    return (
      <div className="bg-white/10 border border-white/20 p-4 rounded-xl shadow-lg backdrop-blur-md hover:bg-white/20 transition duration-300">
        <div className="flex items-center gap-4">
          <div className="text-2xl">{icon}</div>
          <div>
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <p className="text-sm text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
  
  const unitPlans = [
    {
      label: "3 BHK",
      carpetArea: "1162 sq.ft.",
      price: "Price-₹4.67 Cr+",
      cta: "Enquire Now"
    },
    {
      label: "3 BHK + Study",
      carpetArea: "1267 sq.ft.",
      price: "",
      cta: "Check Price"
    },
    {
      label: "4 BHK",
      carpetArea: "1768 sq.ft.",
      price: "",
      cta: "Check Price"
    }
  ];
  

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const headingVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setNavBg(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);

      // Repeatedly show modal every 4 seconds
      const interval = setInterval(() => {
        setIsModalOpen(true);
      }, 20000); // 15,000 milliseconds = 15 seconds
      

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
      };
    }, []);

    const closeModal = () => {
      setIsModalOpen(false);
    };



    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const number = e.target.number.value;
      // CRM submission
      const crmUrl = `/.netlify/functions/createlead?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(number)}`;

      // Web3Forms setup
      const web3FormUrl = "https://api.web3forms.com/submit";
      const web3FormData = {
        access_key: "ffa3b19f-1b1e-4b5b-8d2e-959885602cbb",
        name,
        email,
        phone: number,
        subject: "New Contact Form Submission",
        message: `Name: ${name}, Email: ${email}, Phone: ${number}`
      };
      try {
        // Send to CRM
        const crmResponse = await fetch(crmUrl, {
          method: "GET",
        });

        if (!crmResponse.ok) {
          throw new Error("CRM submission failed");
        }
        // Send to Web3Forms
        const web3Response = await fetch(web3FormUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(web3FormData)
        });

        if (!web3Response.ok) {
          throw new Error("Web3Forms submission failed");
        }

        toast.success("Form submitted successfully! ✅");
        e.target.reset();
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    };
    return (
      <div className="min-h-screen bg-gray-50 relative">
        {/* Modal */}
        {isModalOpen && (
    <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    onClick={closeModal}
    >
      <div
        className="w-fit max-w-lg p-12 rounded-2xl shadow-2xl relative bg-white"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
      >
        {/* ❌ Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#9C8856] text-white hover:bg-gray-300 transition border border-[#9C8856] hover:text-black"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Logo and Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-28 mb-4" />
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Get The Best Launch Offers
          </h2>
        </div>

        {/* Contact Form */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="number"
              name="number"
              type="tel"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#9C8856] text-white py-2 rounded-lg font-semibold hover:bg-[#B49D6B] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )}


        {/* Navbar */}
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${navBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} className="h-10 w-auto bg-white rounded-[5px]" alt="Logo" />
            </a>

            {/* Nav Links */}
            <ul className={`hidden md:flex space-x-6 text-sm md:text-base font-medium transition-colors duration-300 ${navBg ? 'text-gray-700' : 'text-white'}`}>

              {["Highlights", "Floor Plans", "Amenities", "Location", "About us"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                    className="hover:text-[#9C8856] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Enquire Now */}
            <div className="ml-auto md:ml-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-auto bg-[#9C8856] hover:bg-[#b29b6a] text-white font-bold  py-2 px-4 rounded-lg 
              border border-white animate-pulse transition-all duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden mt-4 w-full overflow-x-auto no-scrollbar px-4">
            <ul className={`flex space-x-6 text-sm font-medium whitespace-nowrap pb-2 transition-colors duration-300 ${navBg ? 'text-gray-700' : 'text-white'}`}>

              {["Highlights", "Floor Plans", "Amenities", "Location", "About us"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                    className="hover:text-[#9C8856] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>



        {/* Spacer for Fixed Navbar */}
        <div className="md:sm-h-20"></div>
        <section
          className="relative w-full h-[780px] bg-cover bg-center flex items-center justify-start"
          style={{
            // backgroundImage: `url(${})`,
          }}
        >
          {/* Optional gradient overlay for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-0" />

          {/* Left-side content */}
          <motion.div
            className="relative z-10 max-w-3xl px-6 md:px-12 lg:px-24 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-white"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.p
                className="text-sm font-medium text-yellow-400 tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Premium Living
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
             Where Design<br/>
             Meets Elite Living
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
               Experience exquisite designer residences at.
<br />
                <span className="font-semibold">Lodha Lumis, Wadala Mumbai</span>
              </motion.p>

              <motion.div
                className="flex justify-start flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}

                  className="bg-[#9C8856] hover:bg-[#b29b6a] text-white font-bold py-3 px-6 rounded-lg  animate-pulse transition-all duration-300">
                  Schedule a Visit
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}

                  className="border border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded-lg transition duration-300">
                  View Residences
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>


        {/* Project Highlights - Visual Section */}
        {/* Project Highlights - Visual Section */}

        <section
          id="highlights"
          className="scroll-mt-28 py-12 md:sm-py-2 px-4 md:px-8 lg:px-24 bg-white"
        >
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center font-serif">
             Project Highlight 
            </h2>
            <div className="w-full h-px bg-[#e0dcca] my-8"></div>

            {/* Scrollable image gallery with arrows */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => document.getElementById("gallery").scrollBy({ left: -300, behavior: "smooth" })}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#9C8856] w-12 h-12 p-0 rounded-full shadow-lg hover:bg-[#9C8856] hover:text-white  focus:outline-none transition-all duration-300 border border-[#9C8856]"
              >
                <span className="text-2xl">&lt;</span>
              </button>

              <div
                id="gallery"
                className="flex space-x-6 overflow-x-auto no-scrollbar pb-4"
              >
                {/* Card 1 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={down} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Panoramic City View
                  </div>
                </div>

                {/* Card 2 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={PROJECT2} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Skyline Facing Balcony
                  </div>
                </div>

                {/* Card 3 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={PROJECT3} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Luxury Terrace Lounge
                  </div>
                </div>

                {/* Card 4 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={PROJECT1} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Infinity Pool Retreat
                  </div>
                </div>

                {/* Card 5 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={down} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Panoramic City View
                  </div>
                </div>

                {/* Card 6 */}
                <div className="min-w-[260px] md:min-w-[300px] rounded-2xl overflow-hidden shadow-md border border-[#e9e4d7] flex-shrink-0">
                  <img src={PROJECT2} className="w-full h-52 object-cover" />
                  <div className="p-3 text-center text-sm font-medium text-gray-700">
                    Skyline Facing Balcony
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => document.getElementById("gallery").scrollBy({ left: 300, behavior: "smooth" })}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#9C8856]  w-12 h-12 p-0 rounded-full shadow-lg hover:bg-[#9C8856] hover:text-white focus:outline-none transition-all duration-300 border border-[#9C8856]"
              >
                <span className="text-2xl">&gt;</span>
              </button>
            </div>
          </div>
        </section>



        {/* Pricing Section */}
        <motion.section
          id="floorplans"
          className="py-8 px-6 md:px-12 lg:px-20 scroll-mt-28 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center font-serif"
              variants={headingVariant}
            >
              Plans & Pricing
            </motion.h2>
            <div className="w-full h-px bg-[#e0dcca] my-8"></div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {unitPlans.map((unit, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: -1 }}
      className="bg-white rounded-xl border border-[#e5decf] shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-transform duration-300"
    >
      <motion.div
        className="w-full h-40 bg-cover bg-center rounded-md mb-4 flex items-center justify-center text-sm text-white cursor-pointer"
        style={{ backgroundImage: `url(${Blurimg})` }}
        whileHover={{ rotate: 1 }}
        onClick={() => setIsModalOpen(true)}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Click to View Plan
      </motion.div>

      <h3 className="text-xl font-bold text-[#443d2d] mb-2">{unit.label}</h3>

      <p className="text-center text-gray-600 text-sm mb-2">
        Carpet Area – {unit.carpetArea}
      </p>

      <p className="text-center text-gray-500 text-sm">{unit.price}</p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.08 }}
        className="mt-auto bg-[#9C8856] hover:bg-[#b29b6a] text-white font-bold py-2 px-4 rounded-lg border border-white animate-pulse transition-all duration-300"
      >
        {unit.cta}
      </motion.button>
    </motion.div>
  ))}
</div>

          </div>
        </motion.section>




        <div id="aboutus" className="w-full  h-pxv bg-[#e0dcca] my-8 scroll-mt-28"></div>
        {/* <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center font-serif">
            About Us
          </motion.h2>
          <div className="w-full h-px bg-[#e0dcca] mx-auto mt-4 mb-12"></div>
        </div> */}

<section className="min-h-screen flex items-center justify-center bg-white px-6 py-1">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Side Content */}
    <div className="order-2 md:order-1 text-center md:text-left">
      {/* Badge */}
      <div className="hidden md:inline-block bg-[#f0f4f8] text-[#5A4A2F] px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wide shadow-sm">
        Lodha Lumis | Premium Lifestyle
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
        Experience Urban Elegance at<br />
        <span className="text-[#9C8856]">Lodha Lumis</span>
      </h1>

      {/* Description */}
      <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-xl md:max-w-md mx-auto md:mx-0 leading-relaxed">
        Discover <b>Lodha Lumis</b>, a haven of sophistication and serenity nestled within
        the city's most desirable locale. Designed for those who seek more than just a home,
        it offers a lifestyle of distinction and class.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#9C8856] hover:bg-[#B49D6B] text-white py-3 px-6 rounded-xl shadow-md transition duration-300 animate-pulse font-bold"
        >
          Schedule a Visit
        </button>
      </div>
    </div>

    {/* Right Side Images */}
    <div className="relative w-full h-auto order-1 md:order-2">
      {/* Main Image */}
      <img
        src={About}
        alt="Lodha Lumis Main Interior"
        className="rounded-2xl shadow-xl w-full"
      />

      {/* Overlapping Image (Top Left Corner) */}
      {/* <img
        src={About1}
        alt="Lodha Balcony View"
        className="hidden md:block absolute top-0 left-0 w-2/3 rounded-xl shadow-lg border-4 border-white transform -translate-x-8 -translate-y-8"
      /> */}

      {/* Mobile stacked second image */}
      <div className="mt-4 md:hidden">
        {/* <img
          src="https://images.unsplash.com/photo-1600585154206-1fe871c3a106"
          alt="Lodha Balcony View"
          className="rounded-xl shadow-lg w-full"
        /> */}
      </div>
    </div>
  </div>
</section>


        <section id="amenities" className="py-10 scroll-mt-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-10 items-start">
      
      {/* Text Section */}
      <div className="text-center md:text-left md:col-span-2 space-y-4 mx-4 md:mx-0">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
          Amenities That <span className="text-[#9C8856]">Inspire</span>
        </h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl md:max-w-md mx-auto md:mx-0 leading-relaxed">
        Discover elevated living with meticulously crafted amenities designed for your comfort and way of life.        </p>
        <div className="hidden md:block pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#9C8856] hover:bg-[#B49D6B] text-white px-6 py-3 rounded-full shadow-md animate-pulse transition-all duration-300 font-bold"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Carousel Section with Shared Arrows */}
      <div className="relative md:col-span-3 space-y-10">
        
        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 top-[42%] transform -translate-y-1/2 z-10 flex justify-between px-2 pointer-events-none">
          <button
            onClick={() => {
              document.getElementById("carousel-0")?.scrollBy({ left: -300, behavior: "smooth" });
              document.getElementById("carousel-1")?.scrollBy({ left: -300, behavior: "smooth" });
            }}
            className="pointer-events-auto bg-white text-[#9C8856] w-10 h-10 rounded-full shadow hover:text-white hover:bg-[#9C8856] flex items-center justify-center border border-[#9C8856]"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              document.getElementById("carousel-0")?.scrollBy({ left: 300, behavior: "smooth" });
              document.getElementById("carousel-1")?.scrollBy({ left: 300, behavior: "smooth" });
            }}
            className="pointer-events-auto bg-white text-[#9C8856] w-10 h-10 rounded-full shadow hover:text-white hover:bg-[#9C8856] flex items-center justify-center border border-[#9C8856]"
          >
            &gt;
          </button>
        </div>

        {/* Amenity Rows */}
        {[0, 4].map((startIndex, i) => (
          <div key={i} className="min-h-[180px] sm:min-h-[160px] py-2">
            <div
              id={`carousel-${i}`}
              className="overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-10"
            >
              <div className="flex gap-4 sm:gap-6 p-2 w-max">
                {amenities.slice(startIndex, startIndex + 4).map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[160px] sm:min-w-[200px] flex flex-col items-center justify-center px-6 py-6 sm:px-8 sm:py-8 rounded-2xl shadow-md hover:shadow-xl transition bg-white"
                  >
                    <div className="mb-4 sm:mb-6 text-3xl sm:text-4xl text-[#9C8856]">{item.icon}</div>
                    <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 text-center">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4"></div>
    </div>
  </div>

  {/* Mobile Only Button (visible below entire section) */}
  <div className="block md:hidden text-center ">
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-[#9C8856] hover:bg-[#B49D6B] text-white px-6 py-3 rounded-full shadow-md animate-pulse transition-all duration-300 font-bold"
    >
      Download Brochure
    </button>
  </div>
</section>


  <section id="location" className="scroll-mt-28 relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Google Map Background */}
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610013448!2d72.74110174952985!3d19.082197839508785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f2d53edff%3A0x457b5f1f0f83ff8!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640075393877!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full z-0 grayscale-[40%] brightness-60"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Overlay Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-12"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 drop-shadow-lg">
            Location Highlights of Lodha Lumis
          </h2>
          <p className="text-center text-white/90 mb-10 max-w-2xl mx-auto">
           In Tardeo, South Mumbai — unparalleled convenience to everyday needs and lifestyle centers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <LocationCard icon={<FaSchool className="text-[#FFD700]" />} title="Finland International School" subtitle="0.93 KM • International curriculum" />
            <LocationCard icon={<FaHospital className="text-[#FFD700]" />} title="Wockhardt Hospitals" subtitle="0.57 KM • Multi-speciality" />
            <LocationCard icon={<FaUniversity className="text-[#FFD700]" />} title="Lala Lajpat Rai College" subtitle="0.69 KM • Commerce institute" />
            <LocationCard icon={<FaPlaceOfWorship className="text-[#FFD700]" />} title="Mahalakshmi Temple" subtitle="1.28 KM • Spiritual site" />
            <LocationCard icon={<FaRoad className="text-[#FFD700]" />} title="Eastern Express Highway" subtitle="3.3 KM • City-wide access" />
            <LocationCard icon={<FaTrain className="text-[#FFD700]" />} title="Mahalaxmi Railway Station" subtitle="1.0 KM • Rail connectivity" />
            {/* <LocationCard icon={<FaHorse className="text-[#FFD700]" />} title="Race Course" subtitle="0.36 KM • Equestrian destination" /> */}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#9C8856] hover:shadow-[0_0_20px_#B49D6B] transition duration-300 text-white px-6 py-3 rounded-full font-bold animate-pulse border-white"
            >
              Explore Surroundings
            </button>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-0" />
    </section>

          <section className="bg-gray-100 py-12 px-4 ">
          <div className="flex items-center justify-center bg-gray-100">
  <div className="bg-white rounded-lg p-6 md:w-1/2 shadow">
    <h2 className="text-2xl font-bold mb-2">Hi, How can we help You?</h2>
    <p className="text-gray-600 mb-6">
      For any other queries or information, please write to us here and we will contact you.
    </p>

    <form className="space-y-5" onSubmit={handleFormSubmit}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="number"
          name="number"
          type="tel"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9C8856] focus:border-[#9C8856]"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#9C8856] text-white py-2 rounded-lg font-semibold hover:bg-[#B49D6B] transition"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

          </section>



        <div className="bg-black text-white p-10 px-6 md:px-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-start mb-8"
          >
            {/* <img
        src={logo}
        alt="25 Downtown Logo"
        className="w-40 rounded-2xl bg-white p-2 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
      /> */}
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Project Address */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="md:w-1/3 md:border-r md:border-gray-700 md:pr-6 text-sm text-gray-400"
            >
              <h3 className="text-white font-semibold mb-3">Project Address</h3>
              <p>lodha New Cuffe Parade, off Eastern Freeway, near Wadala Truck Terminal, Wadala East, Sion, Mumbai, Maharashtra 400037</p>
            </motion.div>

            {/* Contact and RERA Info */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2  gap-8 text-sm text-gray-400">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h3 className="text-white font-semibold mb-3">Contact</h3>
                <p>📞 +91 90040 44500</p>
                <p>📧 info@valueproperties.in</p>
              </motion.div>

              {/* RERA Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h3 className="text-white font-semibold mb-3">RERA Details</h3>
                <p>
                  RERA No: <strong className="text-gray-300">P51900046590</strong>
                </p>
                <img
                  src={QR}
                  alt="RERA QR Code"
                  className="w-24 h-auto mt-3 border border-white rounded-md"
                />
                {/* <a
                  href="https://maharera.mahaonline.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline block mt-2"
                >
                  View Registration
                </a> */}
              </motion.div>
            </div>
          </div>

          {/* Developer Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 text-sm text-gray-400"
          >
            <h3 className="text-white font-semibold mb-2">Marketed By: Value Properties</h3>
            <p>
              Registered under MahaRERA: A52100047567. Address: Office No. 706, Ecstasy Business Park,
              City of Joy, Mulund West, Mumbai - 400080
            </p>
          </motion.div> */}

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-500"
          >
              <h3 className="text-white font-semibold mb-2">Marketed By: Value Properties</h3>
            <p>
              Registered under MahaRERA: A52100047567. Address: Office No. 706, Ecstasy Business Park,
              City of Joy, Mulund West, Mumbai - 400080
            </p>
            This is NOT an official website of 25 Downtown. We may send updates to the mobile number/email id submitted with us. All image/s are strictly for representational purposes. The specifications, pictures, images, aesthetics, features, views, amenities, facilities, and surroundings shown/mentioned are only for representational, illustrational, and indicative purposes, and the terms of the agreement for sale (if any), if entered into by parties, will solely govern, control and prevail. Features, fixtures, fittings, goods, accessories, and furniture reflected/displayed in images are strictly for illustrative and representational purposes only and are not part of the standard final amenities & finishes and the actual amenities will vary in planning and upon actual construction. Prospective customers are requested to refer to the sanctioned plans for further information for the phase or visit the Maharashtra RERA Website for further details. *Terms & Conditions apply. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images are for representation purposes only. The logos and images used on this website are the exclusive property of 25 Downtown and are protected under applicable copyright laws. We do not claim any ownership or rights to these materials, and they are used on this website solely for informational purposes.
          </motion.div>
        </div>
        <ToastContainer position="top-center" autoClose={1000} />

      </div>
    );
  }

  export default App;
