import Center from "@/components/Center";
import { ModeToggle } from "@/components/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";

export default function page() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody">
          <Left />
          <Center>
            <p className="flex h-full items-center w-full justify-center">this is contact page</p>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
