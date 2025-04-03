import React from "react";
import Topbar from "./Topbar";
import Left from "./Left";
import Center from "./Center";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ModeToggle } from "./theme/darkmode";

export default function LandingPage() {
  return (
    <>
      <div className="contain" id="hero">
        <Topbar />
        <div className="mainbody flex w-full h-[calc(100vh-5vh)]">
          <Left />
          <Center>
            <div className="center text-7xl font-bold w-full flex h-full items-center justify-center">
              <HoverCard>
                <HoverCardTrigger className="center cursor-crosshair">
                  front.end-web(developer)__
                </HoverCardTrigger>
                <HoverCardContent className="center w-full flex text-3xl">
                  hi! i&apos;m{" "}
                  <span className="center underline pl-8 underline-offset-8">
                    {" "}
                    abhishek-maliyal{" "}
                  </span>
                  , i build websites ...
                </HoverCardContent>
              </HoverCard>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
