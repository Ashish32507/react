import React from "react";

function WorkSkill({ service }) {
  return (
    <div className="flex items-center text-center gap-2 rounded-lg">
      <div className="flex items-center justify-center">
        <div className="text-2xl text-[#FF9C1A]">{service.icon}</div>
      </div>
      <p className="text-blue-800 font-semibold text-lg">{service.name}</p>
    </div>
  );
}

export default WorkSkill;
