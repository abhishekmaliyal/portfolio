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
            <ProjectTitle>contact.</ProjectTitle>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
