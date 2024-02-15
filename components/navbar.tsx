"use client";

import Link from "next/link";
import React, { useState } from "react";

import { links } from "@/configs/details";
import { classNames, scrollToDiv } from "@/libs";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <header className="sticky top-0 md:px-24 pt-2 glass mix-blend-difference">
      <nav className="hidden md:flex gap-16 items-center">
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
        className={classNames(active ? "text-accent" : "text-white")}
      >
        {text}
      </Link>
    </div>
  );
};

export default Navbar;
