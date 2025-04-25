import React from "react";
import TechCard from "./TechCard";
import { ModeToggle } from "./theme/darkmode";
import Center from "./Center";
import ProjectTitle from "./PageTitle";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

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
              <div className="my-name h-[45%] flex flex-col justify-center">
                <h1 className="center pl-24 pt-8 text-6xl">hi,</h1>
                <p className="center pt-8 pl-20 text-8xl">
                  i&apos;m{" "}
                  <span className="center underline underline-offset-[15px]">abhishek maliyal</span>
                </p>
              </div>
              <div className="whoami h-[35%] text-6xl">
                <h1 className="pl-20">a front-end web developer</h1>
                <h1 className="pt-8 pl-20">my techstack -&gt;</h1>
              </div>
              <div className="techstack h-[20%] grid lg:grid-cols-7 grid-cols-3 px-20">
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">HTML</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">7/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">CSS</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">6/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">JavaScript</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">6/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">ReactJS</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">6/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">NextJS</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">7/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">TailwindCSS</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">6/10</HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className=" cursor-crosshair">
                    <TechCard className="lg:hover:shadow-orange-300">RestAPI</TechCard>
                  </HoverCardTrigger>
                  <HoverCardContent className=" w-full flex text-3xl">5/10</HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
