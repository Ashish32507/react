import React, { useState } from "react";

function Contact() {
  const [nameInputSize, setNameInputSize] = useState("");
  const [emailInputSize, setEmailInputSize] = useState("");
  const [messageInputSize, setMessageInputSize] = useState("");

  return (
    <div className="flex flex-col items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FF9C1A] mb-8">
        Get in Touch
      </h2>
      <p className="text-center text-gray-500 text-sm sm:text-base mb-12 max-w-xl">
        We'd love to hear from you! Please fill out the form below and we'll get
        back to you as soon as possible.
      </p>

      {/* Form */}
      <form className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-10">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            onFocus={() => setNameInputSize("w-full")}
            onBlur={() => setNameInputSize("")}
            className={`appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FF9C1A] ${nameInputSize}`}
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            onFocus={() => setEmailInputSize("w-full")}
            onBlur={() => setEmailInputSize("")}
            className={`appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FF9C1A] ${emailInputSize}`}
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            onFocus={() => setMessageInputSize("h-32")}
            onBlur={() => setMessageInputSize("")}
            className={`appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FF9C1A] ${messageInputSize}`}
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-full sm:w-auto bg-[#FF9C1A] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
