// 📄 src/page/contact.jsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '/logo.svg';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-28 mb-4" />
          <h2 className="text-2xl  text-center text-gray-800">
            Get The Best Launch Offers
          </h2>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
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

          {/* OR Separator */}
       

          {/* WhatsApp Button */}
        
        </form>
      </div>
    </div>
  );
};

export default Contact;
