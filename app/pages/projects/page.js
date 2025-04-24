import Center from "@/components/Center";
import { ModeToggle } from "@/components/theme/darkmode";
import Left from "@/components/Left";
import Topbar from "@/components/Topbar";
import React from "react";
import ProjectTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <>
      <div className="contain">
        <Topbar />
        <div className="mainbody">
          <Left />
          <Center>
            <ProjectTitle>project.</ProjectTitle>
            <div className="w-[90%] flex">
              <div className="projects w-full h-full grid lg:grid-cols-2">
                <ProjectCard
                  name="wayther"
                  tech="NextJS 15, React 19, TailwindCSS v4"
                  src="/projects/wayther-preview.png"
                  host="https://wayther-app.netlify.app"
                >
                  <p>simple at-a-glance weather application.</p>
                </ProjectCard>
                <ProjectCard
                  name="naice"
                  tech="NextJS 15, React 19, TailwindCSS v4"
                  src="/projects/naice-preview.png"
                  host="https://naice.netlify.app"
                >
                  <p>a minimalistic countdown timer till november 10, 2190.</p>
                </ProjectCard>
                <ProjectCard
                  name="pokedeckinfo"
                  tech="NextJS 15, React 19, TailwindCSS v4"
                  src="/projects/pokedeck-preview.png"
                  host="https://pokedeckinfo.netlify.app"
                >
                  <p>search and get to know your pokemon.</p>
                </ProjectCard>
                <ProjectCard
                  name="summ"
                  tech="NextJS 15, React 19, TailwindCSS v4"
                  src="/projects/summ-preview.png"
                  host="https://summ-summarizer.netlify.app"
                >
                  <p>an article summarizer that uses url of the article to summarize.</p>
                </ProjectCard>
              </div>
            </div>
          </Center>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
