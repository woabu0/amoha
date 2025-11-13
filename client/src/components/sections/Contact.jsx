import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Connect with us
          </h1>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4">
            No need to knock – just drop your thoughts in our inbox for a
            caffeine-free chat.
          </p>
        </motion.div>
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions or want to learn more? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-indigo-600 w-5 h-5"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Address
                  </h3>
                  <p className="text-gray-900 font-medium">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </h3>
                  <a href="mailto:inquiries@amoha.ai" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    inquiries@amoha.ai
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/amoha-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition-all"
                >
                  <img
                    src="img/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://twitter.com/AmohaAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition-all"
                >
                  <img
                    src="img/twitter.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-semibold text-gray-700 mb-2">
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="user_profession"
                    required
                    placeholder="Doctor"
                    className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization/Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="user_company"
                  required
                  placeholder="Your organization name"
                  className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="user_city"
                    required
                    placeholder="City"
                    className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="user_state"
                    required
                    placeholder="State"
                    className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="user_country"
                    required
                    placeholder="Country"
                    className="w-full h-12 bg-gray-50 border border-gray-200 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
