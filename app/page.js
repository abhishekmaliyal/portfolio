import { ModeToggle } from "@/components/darkmode";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="contain w-screen h-screen p-10 overflow-x-hidden">
        <div className="topbar flex items-center justify-between">
          <div className="title w-[10%] flex justify-center">
            <Link className="font-bold text-4xl" href="/">
              am.
            </Link>
          </div>
          <div className="available flex justify-center items-center w-[10%] text-green-500 font-bold text-lg">
            <p className="text-4xl">&#x2022;</p> available
          </div>
        </div>
        <div className="mainbody flex w-full h-[95%]">
          <div className="left h-full w-[10%]">
            <nav className="h-full">
              <ul className="h-full flex flex-col gap-20 justify-end p-10 items-center">
                <li>
                  <a href="#">
                    <div className="transform -rotate-90 ">first</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="transform -rotate-90 ">second</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="transform -rotate-90 ">third</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="transform -rotate-90 ">fourth</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-5xl font-bold w-[80%] flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger className="center cursor-crosshair">front.end-web(developer)__</HoverCardTrigger>
              <HoverCardContent className="center w-full flex text-3xl">
                hi! i&apos;m{" "}
                <p className="center underline pl-8 underline-offset-8"> abhishek-maliyal </p>, i
                build websites ...
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex items-end right w-[10%]">
            <div className="darkmode h-[20%] w-full flex items-center justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
