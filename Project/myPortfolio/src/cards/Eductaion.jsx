import React from "react";

function Eductaion(props) {
  const { service, index } = props; // Destructure service and index from props
  const oddBackgroundColor =
    service.id % 2 === 0 ? "bg-blue-200" : "bg-green-200"; // Define odd background color

  return (
    <div
      className={`border w-[300px] px-2 py-2 rounded-lg ${oddBackgroundColor}`}
    >
      <p>{service.date}</p>
      <h2 className="text-2xl font-bold">{service.title}</h2>
      <p className="text-justify my-2">{service.school}</p>
    </div>
  );
}

export default Eductaion;
