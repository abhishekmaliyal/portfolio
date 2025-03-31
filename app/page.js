import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Home() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody flex w-full h-[95%]">
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
    </>
  );
}
