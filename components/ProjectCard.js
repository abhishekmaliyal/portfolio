import Image from "next/image";
import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      <div className="projectcard p-8">
        <div className="image w-full h-[70%]"><Image width={200} height={100} alt="sample project image" src="/"></Image></div>
        <div className="info w-full h-[30%]">
          <div className="name w-full h-[40%]">{props.name}</div>
          <div className="tech w-full h-[30%]">{props.tech}</div>
          <div className="detail w-full h-[30%]">{props.children}</div>
        </div>
      </div>
    </>
  );
}
