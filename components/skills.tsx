import { classNames } from "@/libs";
import Image from "next/image";
import React from "react";

export const Skills = ({
  skills,
}: {
  skills: { name: string; image: string }[];
}) => {
  return (
    <div className="hex-grid">
      <div className="hex-grid__container">
        {skills.map(({ name, image }, i) => (
          <div key={i}>
            <Skill {...{ name, image }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skill = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image
        className={classNames("invert")}
        width={70}
        height={70}
        loading="lazy"
        alt={name}
        src={image}
      />
      <p className="text-dark text-base font-semibold text-center">{name}</p>
    </div>
  );
};
