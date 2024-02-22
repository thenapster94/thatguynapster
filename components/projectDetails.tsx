import React from "react";

export const ProjectDetails = ({ project }: { project: any }) => {
  return (
    <>
      <h3 className="text-accent text-2xl font-semibold capitalize">
        {project.name}
      </h3>
      <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin line-clamp-">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-4">
        {project.skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="py-2 px-3 bg-gray w-max justify-center items-center rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        className="py-2 px-3 border border-gray text-black w-max justify-center items-center rounded-md capitalize"
      >
        view project
      </a>
    </>
  );
};
