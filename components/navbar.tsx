"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { classNames, scrollToDiv } from "@/libs";
import { links } from "@/configs";

const Navbar = () => {
  const params = useParams();

  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const section = window.location.hash;
    setActiveLink(
      section.split("#")[1]?.length ? section.split("#")[1] : "home"
    );
    scrollToDiv(section.split("#")[1]?.length ? section.split("#")[1] : "home");
  }, [params]);

  return (
    <header className="hidden lg:block sticky top-0 lg:px-24 pt-2 glass mix-blend- z-50">
      <nav className="flex gap-16 items-center">
        {links.map((link, i) => (
          <NavItem
            key={i}
            active={activeLink === link.text}
            text={link.text}
            url={link.url}
            onClick={(navLink: string) => {
              setActiveLink(navLink);
              scrollToDiv(navLink.length ? navLink : "home");
            }}
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
  onClick,
}: {
  text: string;
  url: string;
  active: boolean;
  onClick: (link: string) => void;
}) => {
  return (
    <div
      onClick={() => {
        onClick(text);
      }}
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

export default Navbar;
