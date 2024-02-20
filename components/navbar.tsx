"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { classNames, scrollToDiv } from "@/libs";
import { links } from "@/configs";

export const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const section = window.location.hash;
    const hash = section.split("#")[1];
    const activeSection = hash && hash.length ? hash : "home";
    setActiveLink(activeSection);
    scrollToDiv(activeSection);
  }, []);

  return (
    <header className="hidden lg:block sticky top-0 lg:px-24 pt-2 glass mix-blend- z-50">
      <nav className="flex gap-16 items-center">
        {links.map((link, i) => (
          <NavItem
            key={i}
            active={activeLink === link.text}
            text={link.text}
            url={link.url}
            setActiveLink={setActiveLink}
          />
        ))}
      </nav>
    </header>
  );
};

const NavItem = ({
  text,
  url,
  active,
  setActiveLink,
}: {
  text: string;
  url: string;
  active: boolean;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();

  const handleClick = () => {
    setActiveLink(text);
    scrollToDiv(text);
    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "bg-center bg-no-repeat bg-contain",
        "flex items-center pb-2",
        "text-lg",
        active &&
          "w-[9.4375rem] h-[6rem] bg-[url('/img/splatter-highlight.png')]",
        "capitalize font-bold",
        active && "pl-10",
        "cursor-pointer"
      )}
    >
      <Link
        href={url}
        className={classNames(
          active ? "text-accent" : "text-white",
          "scroll-smooth"
        )}
      >
        {text}
      </Link>
    </div>
  );
};
