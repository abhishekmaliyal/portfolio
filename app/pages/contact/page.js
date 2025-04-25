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
            <div className="content w-full h-full flex flex-col">
              <div className="connect w-full flex items-end justify-center h-[45%] pb-5">
                <p className="text-xl font-bold">connect with me.</p>
              </div>
              <div className="contactlinks w-full flex items-center justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <ContactCard link="mailto:abhishekmaliyal123@gmail.com" className="lg:hover:shadow-red-400">mail.</ContactCard>
                <ContactCard link="https://www.linkedin.com/in/abhishek-maliyal-a3113b217/" className="lg:hover:shadow-blue-400">
                  linkedin.
                </ContactCard>
                <ContactCard link="https://github.com/abhishekmaliyal" className="lg:hover:shadow-gray-400">github</ContactCard>
              </div>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
