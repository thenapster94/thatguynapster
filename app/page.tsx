"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import { skills, socials } from "@/configs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Navbar />

      {/* hero section */}
      <div
        id="home"
        className="flex flex-col h-screen items-start justify-center px-12 lg:px-24 -mt-[7.5rem] gap-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-black font-extrabold tracking-[0.19rem] text-outline-white text-6xl lg:text-5xl">
            ANDREW OSEI-WUSU (NAPSTER)
          </h1>
          <p className="capitalize text-white text-4xl lg:text-4xl font-semibold text-outline-black">
            Engineer + Full Stack Developer
          </p>
        </div>

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

      {/* about section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="about"
      >
        <div className="hidden lg:flex col-span-5 h-[653px] relative slant-right mix-blend-luminosity">
          <Image
            className="grayscale mix-blend-luminosity"
            width={475}
            height={653}
            alt="Andrew"
            src={"/img/napster.jpg"}
          />
          {/* <div className="bg-[#C4C4C4]/70 w-full h-full absolute"></div> */}
        </div>

        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">
            about me
          </h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            A highly-motivated individual with a desire to take on new
            challenges. Strong worth ethic, adaptability and exceptional
            interpersonal skills. Adept at working effectively unsupervised and
            quickly mastering new skills.
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

      {/* skills section */}
      <div
        className="grid grid-cols-12 h-screen gap-12 items-center px-12 lg:px-24"
        id="skills"
      >
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 w-full">
          <h2 className="text-accent text-3xl font-bold capitalize">skills</h2>
          <p className="lg:w-10/12 text-3xl text-dark font-light text-outline-white text-outline-thin">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
          <div className="hex-grid">
            <div className="hex-grid__container">
              {skills.map(({ name, image }, i) => (
                <div className="mix-blend-difference">
                  <img
                    className="mix-blend-difference invert"
                    src={image}
                    alt={name}
                  />
                  <p className="text-dark text-2xl font-semibold text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex col-span-5 h-[653px] relative slant-left mix-blend-luminosity">
          <Image
            className="grayscale mix-blend-luminosity"
            width={475}
            height={653}
            alt="Andrew"
            src={"/img/skills.jpeg"}
          />
          {/* <div className="bg-[#C4C4C4]/70 w-full h-full absolute"></div> */}
        </div>
      </div>

      {/* works section */}
      <div className="h-screen" id="works"></div>

      {/* contact section */}
      <div className="h-screen" id="contact"></div>
    </main>
  );
}
