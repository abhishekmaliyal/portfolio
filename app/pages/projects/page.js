import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectCard from "@/components/ProjectCard";

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
              <div className="projects w-full h-full grid grid-cols-2">
                <ProjectCard name="test" tech="html"><p>this is sample</p></ProjectCard>
                <ProjectCard name="test" tech="html"><p>this is sample</p></ProjectCard>
                <ProjectCard name="test" tech="html"><p>this is sample</p></ProjectCard>
                <ProjectCard name="test" tech="html"><p>this is sample</p></ProjectCard>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
