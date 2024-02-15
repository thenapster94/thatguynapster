import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Navbar />
      {/* hero section */}
      <div
        id="home"
        className="flex flex-col h-screen items-start justify-center md:px-24 -mt-[7.5rem] gap-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-black font-extrabold tracking-[0.19rem] text-outline-white text-6xl lg:text-5xl">
            ANDREW OSEI-WUSU (NAPSTER)
          </h1>
          <p className="capitalize text-white text-4xl lg:text-4xl font-semibold text-outline-black">
            Engineer + Full Stack Developer
          </p>
        </div>
      </div>

      {/* about section */}
      <div className="h-screen" id="about"></div>
    </main>
  );
}
