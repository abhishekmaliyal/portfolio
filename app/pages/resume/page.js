import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";
import ProjectTitle from "@/components/PageTitle";
import InfoCard from "@/components/InfoCard";

export default function page() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody">
          <Left />
          <Center>
            <ProjectTitle>resume.</ProjectTitle>
            <div className="resume-cointainer w-full h-full">
              <div className="aboutdetail h-[15%] px-20 pt-2 text-2xl">
                hi, i&apos;m abhishek maliyal, i&apos;m passionate about creating things for the
                web. i love the combination of technical skill and creative design that goes into
                making a website both functional and beautiful. i&apos;m always striving to
                improve my skills and stay up-to-date with the latest web technologies.
              </div>
              <div className="resume grid grid-cols-2 h-[85%] px-20 pt-10 gap-2">
                <InfoCard title="education.">
                  <div className="college">
                    <p className="font-bold text-xl pl-2">b.tech cse</p>
                    <p className="pl-8">
                      <span className="font-semibold">school : </span>Graphic era hill university,
                      dehradun
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">graduation year : </span>2024
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">score : </span>82.5%
                    </p>
                  </div>
                  <div className="school">
                    <p className="font-bold text-xl pl-2">intermediate</p>
                    <p className="pl-8">
                      <span className="font-semibold">school : </span>Army Public School, Birpur
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">graduation year : </span>2019
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">score : </span>70%
                    </p>
                  </div>
                  <div className="school">
                    <p className="font-bold text-xl pl-2">high school</p>
                    <p className="pl-8">
                      <span className="font-semibold">school : </span>Army Public School, Birpur
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">graduation year : </span>2017
                    </p>
                    <p className="pl-8">
                      <span className="font-semibold">score : </span>84%
                    </p>
                  </div>
                </InfoCard>
                <InfoCard title="experience.">
                  <p className="text-xl pl-2 font-bold">full stack developer intern.</p>
                  <p className=" font-semibold text-lg pl-4">OpenWeaver and ICT Academy</p>
                  <p className="pl-4 font-semibold"> 07/2023 - 10/2023</p>
                  <p className="pl-8"> -- worked on training project.</p>
                  <p className="pl-8">
                    {" "}
                    -- Worked on a e-commerce website with the team on OpenWeaver&apos;s proprietary
                    platform.
                  </p>
                  <p className="pl-8">
                    {" "}
                    -- The platform made it easier to build websites with complete features such as
                    authentication and databases.{" "}
                  </p>
                  <p className="pl-8">
                    {" "}
                    -- Developed further understanding of team dynamics needed in industry.{" "}
                  </p>
                </InfoCard>
                <InfoCard title="soft skills.">
                  <p className="font-bold text-xl pl-2">communication</p>
                  <p className="font-bold text-xl pl-2">Teamwork</p>
                  <p className="font-bold text-xl pl-2">Problem-Solving</p>
                  <p className="font-bold text-xl pl-2">Adaptability</p>
                </InfoCard>
                <InfoCard title="techinical skills.">
                  <p>
                    <span className="font-bold text-xl pl-2">programming languages : </span>HTML,
                    CSS, JavaScript, ReactJS, C++
                  </p>
                  <p>
                    <span className="font-bold text-xl pl-2">frameworks : </span>NextJS, TailwindCSS
                  </p>
                  <p>
                    <span className="font-bold text-xl pl-2">databases : </span>MongoDB, mySQL
                  </p>
                  <p>
                    <span className="font-bold text-xl pl-2">tools : </span>shadcn, netlify, git
                  </p>
                  <p>
                    <span className="font-bold text-xl pl-2">OS : </span>windows, linux, macOS, wsl
                  </p>
                </InfoCard>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
