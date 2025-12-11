"use client";
import { useState } from "react";
import React from "react";

const Footer = () => {
  const [projectType, setProjectType] = useState("Brand Film");

  return (
    <section className="bg-[#1B1918] w-full text-white pt-24 pb-4 flex flex-col w-full gap-8 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Let’s Build Your <br />
            <span className="italic">Next Campaign.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            Whether you need a full-scale brand film, an ecommerce catalog
            overhaul, or AI-driven content, we are ready to partner with you.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6 text-sm tracking-wide">
            <div>
              <p className="font-semibold">NEW BUSINESS</p>
              <p className="text-gray-400">hello@paahi.com</p>
            </div>

            <div>
              <p className="font-semibold">SHOWREEL CALL</p>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="bg-[#231F1D] border border-gray-800 p-8 rounded-xl space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-400">NAME</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500 text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">EMAIL</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full mt-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="text-xs text-gray-400">PROJECT TYPE</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full mt-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            >
              <option className="bg-black">Brand Film</option>
              <option className="bg-black">Product Video</option>
              <option className="bg-black">Ecommerce Content</option>
              <option className="bg-black">Campaign Strategy</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs text-gray-400">MESSAGE</label>
            <textarea
              placeholder="Tell us about your vision..."
              rows={4}
              className="w-full mt-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 bg-transparent"
            />
            I want to book a showreel presentation
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-white text-black py-3 rounded-md font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            SEND INQUIRY →
          </button>
        </form>
      </div>
      
      <div className="border-t-3 border-t-[#231F1D] mx-auto w-full pt-5 gap-16">
        <div className="max-w-7xl flex md:flex-row flex-col gap-10 text-center items-center justify-between mx-auto w-full">
        {/* LEFT – LOGO + ABOUT */}
        <div>
          <h2 className="text-3xl font-serif tracking-wide">PAAHI.</h2>
          <p className="text-gray-400 mt-4 leading-relaxed max-w-sm">
            A luxury content studio based in Bengaluru. We craft stories that
            move people and build brands.
          </p>
        </div>

        {/* CENTER – STUDIO INFO */}
        <div>
          <h3 className="text-xs text-gray-500 font-semibold tracking-wider">
            STUDIO
          </h3>
          <div className="mt-4 space-y-1 text-gray-300 text-sm leading-relaxed">
            <p>123 Indiranagar, 12th Main</p>
            <p>Bengaluru, KA 560038</p>
            <p className="mt-2">+91 98765 43210</p>
          </div>
        </div>

        {/* RIGHT – LINKS */}
        <div>
          <h3 className="text-xs text-gray-500 font-semibold tracking-wider">
            LINKS
          </h3>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Ecommerce
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Brand Films
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Footer;
