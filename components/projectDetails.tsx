import React from "react";

const ProjectDetails = ({ project }: { project: any }) => {
  return (
    <>
      <h3 className="text-accent text-2xl font-semibold capitalize">
        {project.name}
      </h3>
      <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin line-clamp-4">
        {project.description}
      </p>
      <div className="flex gap-4">
        {project.skills.map((skill: string) => (
          <span className="py-2 px-3 bg-gray w-max justify-center items-center rounded-md">
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

export default ProjectDetails;
