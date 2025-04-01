import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ProjectTitle from "@/components/ProjectTitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="contain" id="hero">
        <Topbar />
        <div className="mainbody flex w-full h-[calc(100vh-5vh)]">
          <Left />
          <Center>
            <div className="center text-5xl font-bold w-full flex h-full items-center justify-center">
              <HoverCard>
                <HoverCardTrigger className="center cursor-crosshair">
                  front.end-web(developer)__
                </HoverCardTrigger>
                <HoverCardContent className="center w-full flex text-3xl">
                  hi! i&apos;m{" "}
                  <p className="center underline pl-8 underline-offset-8"> abhishek-maliyal </p>, i
                  build websites ...
                </HoverCardContent>
              </HoverCard>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
      <div className="contain" id="about">
        <div className="aboutsection h-full w-full flex relative">
          <ProjectTitle>about.</ProjectTitle>
          <Link href="/#hero">
            <div className="gototop absolute bottom-12 transform -rotate-90 left-14">go to top</div>
          </Link>
          <Center>
            <div className="introduction w-full h-full">
              <div className="my-name h-[40%]"><h1>abhishek</h1></div>
              <div className="whoami h-[40%]"><h1>frontend dev</h1></div>
              <div className="techstack h-[20%]"><h1>techstack</h1></div>
            </div>
          </Center>
          <ModeToggle/>
        </div>
      </div>
    </>
  );
}
