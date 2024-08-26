import React from "react";

function Eductaion({ service }) {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:border-orange-600">
      <h3 className="text-xl font-semibold  mb-2 relative px-4 py-2 text-white bg-[#FF9C1A] rounded-md shadow-sm">
        {service.title}
        <span className="absolute inset-0 rounded-md pointer-events-none"></span>
      </h3>
      <p className="text-base font-medium text-gray-700 mb-2">
        {service.school}
      </p>
      <p className="text-sm text-gray-500 italic">{service.date}</p>
    </div>
  );
}

export default Eductaion;
