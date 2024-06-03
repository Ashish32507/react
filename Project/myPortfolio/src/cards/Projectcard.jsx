import React from "react";

export default function Projectcard(props) {
  const project = props.project;

  console.log(project);
  return (
    // const { service, index } = props; // Destructure service and index from props
    // const oddBackgroundColor = service.id % 2 === 0 ? "bg-blue-200" : "bg-green-200"; // Define odd background color
    <div className="h-[220px] w-[300px] px-2 py-2 border flex flex-col items-center justify-center gap-2 bg-[#FFE3BF] rounded-sm group">
      <div className="h-[150px] w-full overflow-hidden hover:duration-75">
        <img
          src={project.img}
          alt=""
          className="h-full w-full rounded-sm group-hover:scale-150 hover:duration-75"
        />
      </div>
      <div className="w-full">
        <h3 className="font-bold">{project.title}</h3>
      </div>
      <div className="w-full">
        <button className="w-full h-9 border font-semibold bg-yellow-400">
          Github Repository
        </button>
      </div>
    </div>
  );
}
