import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";
import ProjectTitle from "@/components/PageTitle";
import ContactCard from "@/components/ContactCard";

export default function page() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody">
          <Left />
          <Center>
            <ProjectTitle>contact.</ProjectTitle>
            <div className="contactlinks w-full h-full flex items-center justify-center gap-10">
              <ContactCard link="mailto:abhishekmaliyal123@gmail.com">mail.</ContactCard>
              <ContactCard link="https://www.linkedin.com/in/abhishek-maliyal-a3113b217/">linkedin.</ContactCard>
              <ContactCard link="https://github.com/abhishekmaliyal">github</ContactCard>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
