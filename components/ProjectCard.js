import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      <div className="projectcard p-8">
        <div className="image w-full h-[70%]">
          <Image width={500} height={200} alt="sample project image" src={props.src}></Image>
        </div>
        <div className="info w-full h-[30%] p-2">
          <div className="name w-full h-[40%] text-2xl font-bold ">
            <Link href={props.host} className="flex">
              <p className="underline underline-offset-4">{props.name}</p> <span>-&gt;</span>
            </Link>
          </div>
          <div className="tech w-full h-[30%]">{props.tech}</div>
          <div className="detail w-full h-[30%]">{props.children}</div>
        </div>
      </div>
    </>
  );
}
