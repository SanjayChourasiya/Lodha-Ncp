import React from 'react';
import './App.css';
import logo from '../public/img/altlogo.png';
import About from "../public/img/newabout.jpg"
import About1 from "../public/img/aboutus.jpg"
import down from "../public/img/ncphero.png";
import Choose from "../public/img/g.png"
import Bill from "../public/img/bill.png"
import PROJECT1 from "../public/img/pimg1.png"
import PROJECT2 from "../public/img/pimg2.png"
import PROJECT3 from "../public/img/pimg3.png"
import Blurimg from "../public/img/blur.png"
import { motion } from "framer-motion";
import { useState } from 'react';
import { useEffect } from 'react';
import Hero from "../public/img/uplodha.png"
import { ToastContainer, toast } from 'react-toastify';
import CompareImage from "react-compare-image";
import Day from "../public/img/ncphero.png"
import Night from "../public/img/night.png"
import beforimg from "../public/img/afteroon.png"

import {
  FaSchool,
  FaHospital,
  FaUniversity,
  FaPlaceOfWorship,
  FaRoad,
  FaTrain,
  FaHorse
} from "react-icons/fa";
// import { FaSwimmingPool, FaDumbbell, FaGlassCheers, FaParking, FaShieldAlt, FaChild, FaSpa, FaWifi, FaBicycle, FaTree } from "react-icons/fa";

import QR from '../public/img/qr.png'

import { FaSwimmingPool, FaDumbbell, FaGlassCheers, FaParking, FaShieldAlt, FaChild, FaSpa, FaWifi, FaBicycle, FaTree, FaCity, FaBuilding, FaPlug, FaCashRegister, FaCreditCard, FaUtensils } from "react-icons/fa";

const amenities = [

  { name: "Pool", icon: <FaSwimmingPool size={28} className="text-[#9C8856]" /> },
  { name: "Gym", icon: <FaDumbbell size={28} className="text-[#9C8856]" /> },
  { name: "Club", icon: <FaGlassCheers size={28} className="text-[#9C8856]" /> },
  { name: "Parking", icon: <FaParking size={28} className="text-[#9C8856]" /> },
  { name: "Security", icon: <FaShieldAlt size={28} className="text-[#9C8856]" /> },
  { name: "Kids Zone", icon: <FaChild size={28} className="text-[#9C8856]" /> },
  { name: "Spa", icon: <FaSpa size={28} className="text-[#9C8856]" /> },
  { name: "Wi-Fi", icon: <FaWifi size={28} className="text-[#9C8856]" /> },
  { name: "Cycle Track", icon: <FaBicycle size={28} className="text-[#9C8856]" /> },
  { name: "Park", icon: <FaTree size={28} className="text-[#9C8856]" /> },
  { name: "Smart Home", icon: <FaCity size={28} className="text-[#9C8856]" /> },
  { name: "High Ceilings", icon: <FaBuilding size={28} className="text-[#9C8856]" /> },
  { name: "View", icon: <FaCity size={28} className="text-[#9C8856]" /> },
  { name: "Reserved Park", icon: <FaParking size={28} className="text-[#9C8856]" /> },
  { name: "Power", icon: <FaPlug size={28} className="text-[#9C8856]" /> },
  { name: "Sanitary", icon: <FaPlug size={28} className="text-[#9C8856]" /> },
  { name: "Concealed Work", icon: <FaBuilding size={28} className="text-[#9C8856]" /> },
  { name: "Kitchen Top", icon: <FaUtensils size={28} className="text-[#9C8856]" /> },
  { name: "Help Desk", icon: <FaShieldAlt size={28} className="text-[#9C8856]" /> },
  { name: "Reception", icon: <FaCreditCard size={28} className="text-[#9C8856]" /> },
  { name: "Market", icon: <FaCashRegister size={28} className="text-[#9C8856]" /> },
  { name: "Food & Shop", icon: <FaUtensils size={28} className="text-[#9C8856]" /> },
  { name: "ATM", icon: <FaCreditCard size={28} className="text-[#9C8856]" /> },
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
  { type: "3 BHK", area: "1789 sq.ft", price: "₹ 17.50 Cr*" },
  { type: "3 BHK", area: "1789 sq.ft", price: "₹ 19.50 Cr*" },
  { type: "4 BHK", area: "2562 sq.ft", price: "On Request" },
  { type: "Penthouse", area: "3000 - 4000 sq.ft", price: "On Request" }
];
const locations = [
  {
    category: "Project",
    icon: <FaBuilding />,
    details: [
      {
        name: "Atlantis One",
        distance: "0.0 KM",
        description: "Luxury residential project on Tejpal Road, Gamdevi, South Mumbai"
      }
    ]
  },
  {
    category: "Schools & Colleges",
    icon: <FaSchool />,
    details: [
      { name: "St. Columba School", distance: "", description: "Well-known local school" },
      { name: "Queen Mary School", distance: "", description: "Renowned girls’ school" },
      { name: "Bright Start Fellowship International School", distance: "", description: "International curriculum" },
      { name: "Bombay International School", distance: "", description: "Progressive learning environment" },
      { name: "Edubridge International School", distance: "", description: "IB World School" },
      { name: "J.D. Bharda High School", distance: "", description: "Established institution" },
      { name: "The Universal School, Tardeo", distance: "", description: "Modern education approach" },
      {
        name: "BM Ruia Girls College",
        distance: "",
        description: "Affiliated with SNDT Women's University"
      }
    ]
  },
  {
    category: "Hospitals & Clinics",
    icon: <FaHospital />,
    details: [
      { name: "Cods Clinic", distance: "", description: "Outpatient specialist clinic" },
      { name: "Dolby Hospital", distance: "", description: "General medical services" },
      { name: "Dr. Gala's Nursing Home", distance: "", description: "Maternity & general healthcare" },
      { name: "Dr. Nisar's Eye Care Centre", distance: "", description: "Specialized eye treatment" },
      { name: "Foresight Eye Center", distance: "", description: "Comprehensive eye care services" },
      {
        name: "Dalvi Hospital",
        distance: "",
        description: "Located on NS Patkar Marg, general surgery facility"
      }
    ]
  },
  {
    category: "Places of Worship",
    icon: <FaPlaceOfWorship />,
    details: [
      {
        name: "Babulnath Temple",
        distance: "",
        description: "Historic Shiva temple and landmark"
      },
      {
        name: "Gamdevi Temple",
        distance: "",
        description: "Dedicated to the goddess Gaondevi"
      },
      {
        name: "Arya Samaj Mandir",
        distance: "",
        description: "Located in Kakadwadi, Girgaon"
      },
      {
        name: "Vitthal Mandir",
        distance: "",
        description: "Located in Mangal Wadi, Girgaon"
      }
    ]
  },
  {
    category: "Roads & Highways",
    icon: <FaRoad />,
    details: [
      {
        name: "NS Patkar Marg (Hughes Road)",
        distance: "",
        description: "Major arterial road in South Mumbai"
      },
      {
        name: "Sardar Vallabhbhai Patel Road (SVP Road)",
        distance: "",
        description: "Connects multiple city areas"
      },
      {
        name: "Grant Road",
        distance: "",
        description: "Key route with good connectivity"
      },
      {
        name: "Western Express Highway",
        distance: "3.3 KM",
        description: "Primary north-south Mumbai artery"
      }
    ]
  },
  {
    category: "Railway Stations",
    icon: <FaTrain />,
    details: [
      {
        name: "Grant Road Station",
        distance: "1.0 KM",
        description: "Western line local train access"
      },
      {
        name: "Charni Road Station",
        distance: "",
        description: "Nearby station on the Western Line"
      },
      {
        name: "Marine Lines Station",
        distance: "",
        description: "Serves the Western Line"
      },
      {
        name: "Mumbai Central Station",
        distance: "",
        description: "Major hub for local and long-distance trains"
      }
    ]
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

    // CRM API URL
    const crmUrl = `https://valueproperties.tranquilcrmone.in/v1/createlead?` +
      new URLSearchParams({
        api_key: "TRNQUILCRMvalueproperties",
        country_code: "91",
        mobile_number: number,
        project_id: "1",
        source_type: "2",
        customer_name: name,
        email: email,
        sub_source: "Website",
        remark: "Lead from Website",
        campaign_name: "Default Campaign",
        adgroup_name: "Default Adgroup",
        ad_name: "Default Ad",
        budget: "0",
        spi: "Default Project",
        location: "Mumbai",
        requirment_type: "residential",
        property_type: "sale",
        configuration: "2BHK",
      }).toString();

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
      // Submit to CRM
      const crmResponse = await fetch(crmUrl, {
        method: "GET"
      });

      if (!crmResponse.ok) {
        throw new Error("CRM submission failed");
      }

      // Submit to Web3Forms
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
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
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
      <section className="relative w-full h-auto bg-black py-28 text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE: Promo Text */}
          <div className="flex-1 space-y-6">
            <p className="text-white animate-pulse text-sm font-semibold uppercase">
              0% Stamp Duty Offer <span className='text-yellow-400'>LIVE Now!</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-yellow-400">
              ATLANTIS ONE
            </h1>
            <p className="text-yellow-300 text-base sm:text-lg font-medium">
              3, 4.5 & 5 BHK Luxury Homes – ₹17.50 Cr* Onwards
            </p>

            <ul className="text-white text-base space-y-2 list-disc list-inside leading-relaxed">
              <li>Located near Worli Sea Link</li>
              <li>Half-acre premium development</li>
              <li>Ultra-low density – only 2 residences per floor</li>
              <li>13 ft clear floor-to-ceiling height</li>

              <li>G+27 storey iconic tower</li>
              <li>Lifetime panoramic views</li>
              <li>3-tier amenity zones across levels</li>
              <li>Builder-finished luxury apartments</li>
              <li>2 minutes from Sea Link entry point</li>
              {/* <li>Handover: Internal – Dec 2026 | RERA – July 2028</li> */}
            </ul>

            <button 
             onClick={() => setIsModalOpen(true)}
            className=" animate-pulse mt-4 px-6 py-3 bg-[#9C8856] text-white font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
              Schedule a Visit
            </button>
          </div>

          {/* RIGHT SIDE: Image Slider */}
          <div className="flex-1 w-full h-[400px] sm:h-[500px] md:h-[600px] rounded overflow-hidden shadow-2xl">
            <CompareImage
              leftImage={Day}
              rightImage={Night}
              sliderLineWidth={2}
              sliderLineColor="#ffffff"
              handle={
                <div className="w-1 h-full bg-white rounded-full shadow-md" />
              }
            />
          </div>
        </div>
      </section>





      {/* Project Highlights - Visual Section */}
      {/* Project Highlights - Visual Section */}

      <section
        id="highlights"
        className="scroll-mt-28 py-16 px-4 md:px-8 lg:px-24 bg-white"
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-serif">
            Project Highlights
          </h2>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() =>
                document.getElementById("gallery").scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#9C8856] w-10 h-10 rounded-full shadow-lg border border-[#9C8856] hover:bg-[#9C8856] hover:text-white transition-all duration-300"
            >
              &lt;
            </button>

            {/* Scrollable gallery */}
            <div
              id="gallery"
              className="flex space-x-6 overflow-x-auto no-scrollbar px-12 scroll-smooth pb-4"
            >
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#e9e4d7] min-w-[260px] md:min-w-[300px] flex-shrink-0">
                <img
                  src={down}
                  alt="Panoramic City View"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Panoramic City View</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#e9e4d7] min-w-[260px] md:min-w-[300px] flex-shrink-0">
                <img
                  src={PROJECT2}
                  alt="Skyline Facing Balcony"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Skyline Facing Balcony</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#e9e4d7] min-w-[260px] md:min-w-[300px] flex-shrink-0">
                <img
                  src={PROJECT3}
                  alt="Luxury Terrace Lounge"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Luxury Terrace Lounge</p>
                </div>
              </div>

              {/* Duplicate Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#e9e4d7] min-w-[260px] md:min-w-[300px] flex-shrink-0">
                <img
                  src={PROJECT1}
                  alt="Infinity Pool Retreat"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Infinity Pool Retreat</p>
                </div>
              </div>

              {/* Duplicate Card 5 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#e9e4d7] min-w-[260px] md:min-w-[300px] flex-shrink-0">
                <img
                  src={down}
                  alt="Panoramic City View"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">Panoramic City View</p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                document.getElementById("gallery").scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#9C8856] w-10 h-10 rounded-full shadow-lg border border-[#9C8856] hover:bg-[#9C8856] hover:text-white transition-all duration-300"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <section className="min-fit  flex items-center justify-center bg-white px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-[#D1A83C]">Elevated Coastal Living</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mb-8">
              Discover a new pinnacle of luxury at Atlantis One, Worli’s most prestigious address. This upcoming ultra-luxury icon is poised to reshape Mumbai’s skyline with spacious 3, 4 & 5 BHK sea-facing residences. Nestled in the vibrant heart of Worli, Atlantis One is crafted for those who seek nothing but the extraordinary.           </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-8">
              <div className="text-[#9C8856] text-2xl font-bold">5 Acres
                <p className="text-sm text-gray-600">Land Parcel</p>
              </div>
              <div className="text-[#9C8856] text-2xl font-bold">20+
                <p className="text-sm text-gray-600">Lifestyle Amenities</p>
              </div>
              <div className="text-[#9C8856] text-2xl font-bold">27 Storey
                <p className="text-sm text-gray-600">Tall Tower</p>
              </div>
              <div className="text-[#9C8856] text-2xl font-bold">Dec' 2026
                <p className="text-sm text-gray-600">Possession Date</p>
              </div>
            </div>

            <button className="bg-[#9C8856] hover:bg-[#D1A83C] text-white py-3 px-6 rounded-xl shadow-md transition duration-300 font-bold">
              About the Developer →
            </button>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-auto">
            <img src={About} alt="Property Image" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </section>




      {/* Pricing Section */}
      <motion.section className="py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#9C8856] font-serif">
            Area Pricing
          </h2>
          <div className="overflow-hidden">

            {/* Desktop View: Table Layout (Borders around the table and content) */}
            <div className="hidden md:block">
              <table className="min-w-full bg-white table-auto border-2 border-[#9C8856]">
                <thead className="bg-[#9C8856] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Area</th>
                    <th className="px-4 py-3 text-left">Price (Onward)</th>
                    <th className="px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {unitPlans.map((unit, index) => (
                    <tr key={index} className="even:bg-gray-50 border-t rounded border-[#9C8856]">
                      <td className="px-4 py-3 text-gray-700">{unit.type}</td>
                      <td className="px-4 py-3 text-gray-700">{unit.area}</td>
                      <td className="px-4 py-3 text-gray-700">{unit.price}</td>
                      <td className="px-4 py-3 text-center">
                        <button className="bg-[#9C8856] text-white px-4 py-2 rounded-md hover:bg-[#b29b6a]">
                          Complete Costing Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View: Card Layout with Borders only on Cards */}
            <div className="md:hidden">
              {unitPlans.map((unit, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-2xl mb-6 p-4 shadow-md border-2 border-[#9C8856]"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold">Type:</span>
                    <span className="text-gray-700">{unit.type}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-700 font-semibold">Area:</span>
                    <span className="text-gray-700">{unit.area}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-700 font-semibold">Price (Onward):</span>
                    <span className="text-gray-700">{unit.price}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="bg-[#9C8856] text-white px-4 py-2 rounded-md hover:bg-[#b29b6a]">
                      Complete Costing Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>

      <section className="py-6 px-4 sm:px-6 md:px-16">
        <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-2xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-6 md:px-12">
          Atlantis  One
          <span className="text-[#9C8856]"> | Premium Lifestyle</span>
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Request Virtual Tour Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-80">
            <img
              src={Choose}
              alt="Virtual Tour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0   flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className=" bg-[#9C8856] hover:bg-[#b29b6a] text-white font-bold  rounded-lg 
                       animate-pulse transition-all text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 ">
                Request Virtual Tour
              </button>
            </div>
          </div>

          {/* Download Cost Sheet Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-80">
            <img
              src={Bill}
              alt="Cost Sheet"
            />

            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Button on top */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#9C8856] hover:bg-[#b29b6a] text-white font-bold  rounded-lg 
                       animate-pulse transition-all text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3">
                Download Cost Sheet
              </button>
            </div>
          </div>

        </div>
      </section>




      <div id="aboutus" className="w-full  h-pxv bg-[#e0dcca] my-8 scroll-mt-28"></div>
      {/* <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center font-serif">
            About Us
          </motion.h2>
          <div className="w-full h-px bg-[#e0dcca] mx-auto mt-4 mb-12"></div>
        </div> */}



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
              {[0, 10].map((startIndex, i) => (
                <div key={i} className="min-h-[180px] sm:min-h-[160px] py-2">
                  <div
                    id={`carousel-${i}`}
                    className="overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-10"
                  >
                    <div className="flex gap-4 sm:gap-6 p-2 w-max">
                      {amenities.slice(startIndex, startIndex + 10).map((item, index) => (
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
      <section id="location" className="relative w-full min-h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-16">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-white drop-shadow-md  sm:text-4xl md:text-5xl lg:text-6xl font-serif   leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Location   Atlantis
          <span className='text-[#B49D6B]'> One</span>

        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.category} className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-4">
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-white hover:text-yellow-400 transition-colors"
                  onClick={() => toggleCategory(loc.category)}
                >
                  <div className="flex items-center space-x-3">{loc.icon}<span>{loc.category}</span></div>
                  <span className="text-yellow-400">{openCategory === loc.category ? "-" : "+"}</span>
                </button>
                {openCategory === loc.category && (
                  <div className="mt-4 pl-4 space-y-3">
                    {loc.details.map((detail, index) => (
                      <div key={index} className="text-white/90">
                        <p className="font-semibold">{detail.name}</p>
                        <p className="text-sm text-white/60">{detail.distance} • {detail.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610013448!2d72.74110174952985!3d19.082197839508785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f2d53edff%3A0x457b5f1f0f83ff8!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640075393877!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
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
