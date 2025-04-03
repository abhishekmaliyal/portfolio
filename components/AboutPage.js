import React from "react";
import TechCard from "./TechCard";
import { ModeToggle } from "./theme/darkmode";
import Center from "./Center";
import ProjectTitle from "./PageTitle";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="contain" id="about">
        <div className="aboutsection h-full w-full flex relative">
          <ProjectTitle>about.</ProjectTitle>
          <Link href="/#hero">
            <div className="gototop absolute bottom-12 transform -rotate-90 left-14">go to top</div>
          </Link>
          <Center>
            <div className="introduction w-full h-full">
              <div className="my-name h-[45%] ">
                <h1 className="center pl-24 pt-8 text-6xl">hi,</h1>
                <p className="center pt-8 pl-20 text-9xl">
                  i&apos;m{" "}
                  <span className="center underline underline-offset-[15px]">abhishek maliyal</span>
                </p>
              </div>
              <div className="whoami h-[35%] text-7xl">
                <h1 className="pl-20">a front-end web developer</h1>
                <h1 className="pt-8 pl-20">i develop websites using -&gt;</h1>
              </div>
              <div className="techstack h-[20%] grid grid-cols-7 px-20">
                <TechCard>HTML</TechCard>
                <TechCard>CSS</TechCard>
                <TechCard>JavaScript</TechCard>
                <TechCard>ReactJS</TechCard>
                <TechCard>NextJS</TechCard>
                <TechCard>TailwindCSS</TechCard>
                <TechCard>RestAPI</TechCard>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
