import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";
import ProjectTitle from "@/components/ProjectTitle";

export default function page() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody">
          <Left />
          <Center>
            <ProjectTitle>project.</ProjectTitle>
            <div className="w-[90%] flex">
              <div className="projects w-full grid grid-cols-2">
                <div className="project">project 1</div>
                <div className="project">project 2</div>
                <div className="project">project 3</div>
                <div className="project">project 4</div>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
