"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Navbar from "@/components/navbar";
import { links, socials } from "@/configs/details";
import { scrollToDiv } from "@/libs";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Navbar />

      {/* hero section */}
      <div
        id="home"
        className="flex flex-col h-screen items-start justify-center px-12 md:px-24 -mt-[7.5rem] gap-10"
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
          {socials.map(({ link, icon }, i) => (
            <Link key={i} href={link} className="w-8 rounded-full bg-gray">
              <div className="p-1.5 text-black">{icon}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* about section */}
      <div className="h-screen" id="about"></div>

      {/* skills section */}
      <div className="h-screen" id="skills"></div>

      {/* works section */}
      <div className="h-screen" id="works"></div>

      {/* contact section */}
      <div className="h-screen" id="contact"></div>
    </main>
  );
}
