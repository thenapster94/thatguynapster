"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { classNames } from "@/libs";
import { Navbar, PreviewImage } from "@/components";
import { Skills } from "@/components/skills";
import ProjectDetails from "@/components/projectDetails";
import {
  name,
  projects,
  role,
  skills,
  skillsDescription,
  socials,
  summary,
} from "@/configs";

export default function Home() {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <main className="flex flex-col min-h-screen justify-center">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col h-screen items-start justify-center px-12 lg:px-24 -mt-[7.5rem] gap-10"
      >
        {/* Hero Content */}
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-black font-extrabold tracking-[0.19rem] text-outline-white text-6xl lg:text-5xl">
            {name}
          </h1>
          <p className="capitalize text-white text-4xl lg:text-4xl font-semibold text-outline-black">
            {role}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socials.map(({ link, icon, ariaLabel }, i) => (
            <Link
              key={i}
              aria-label={ariaLabel}
              href={link}
              className="w-8 rounded-full bg-gray"
            >
              <div className="p-1.5 text-black">{icon}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="about"
      >
        {/* Image */}
        <div className="col-start-2 col-span-4">
          <PreviewImage images={["/img/napster.jpg"]} />
        </div>

        {/* About Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">
            about me
          </h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            {summary}
          </p>
          <a
            href="/files/Andrew_Osei-Wusu_Resume.pdf"
            download={"Resume_Andrew Osei-Wusu"}
            className="py-4 px-6 bg-dark w-max justify-center items-center rounded-md"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="skills"
      >
        {/* Skills Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">skills</h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            {skillsDescription}
          </p>
          <Skills skills={skills} />
        </div>

        {/* Image */}
        <div className="col-span-5">
          <PreviewImage images={["/img/skills.jpeg"]} slantDirection="left" />
        </div>
      </div>

      {/* Works Section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="works"
      >
        {/* Image */}
        <div className="col-start-2 col-span-4">
          <PreviewImage
            slant={false}
            grayscale={false}
            images={projects[currentProject].images}
          />
        </div>

        {/* Works Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">works</h2>
          <ProjectDetails project={projects[currentProject]} />

          {/* Project Navigation */}
          <div className="flex gap-2 justify-between items-end w-10/12">
            {projects.map(({ name }, i) => (
              <ProjectNavigationItem
                key={i}
                name={name}
                currentProject={currentProject}
                index={i}
                setCurrentProject={setCurrentProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="h-screen" id="contact"></div>
    </main>
  );
}

// Project Navigation Item Component
const ProjectNavigationItem = ({
  name,
  currentProject,
  index,
  setCurrentProject,
}: {
  name: string;
  currentProject: number;
  index: number;
  setCurrentProject: (index: number) => void;
}) => (
  <div
    className="flex flex-col w-full justify-end min-h-[30px] cursor-pointer"
    onClick={() => setCurrentProject(index)}
  >
    <p className="text-black font-semibold truncate">
      {currentProject === index && name}
    </p>
    <div
      className={classNames(
        "h-1.5 w-full",
        currentProject === index ? "bg-black" : "bg-gray"
      )}
    ></div>
  </div>
);
