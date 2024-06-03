import React, { useState } from "react";
function Contact() {
  const [nameInputSize, setNameInputSize] = useState("");
  const [emailInputSize, setEmailInputSize] = useState("");
  const [messageInputSize, setMessageInputSize] = useState("");

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            onFocus={() => setNameInputSize("w-64")}
            onBlur={() => setNameInputSize("")}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${nameInputSize}`}
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            onFocus={() => setEmailInputSize("w-64")}
            onBlur={() => setEmailInputSize("")}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailInputSize}`}
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            onFocus={() => setMessageInputSize("h-32")}
            onBlur={() => setMessageInputSize("")}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${messageInputSize}`}
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
