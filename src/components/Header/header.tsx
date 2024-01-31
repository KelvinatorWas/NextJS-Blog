import React from "react";
import { Book, GitHub, Home, Info, LinkedIn } from "@mui/icons-material";
import CustomLink from "../CustomLink/customLink";
import Logo from "../Logo/logo";
import ItchIo from "@/public/itchio.svg";
import { SvgIcon } from "@mui/material";
import Image from "next/image";

const Naviagtion = {
  navs: [
    { href: "/", label: "Home", icon: Home },
    { href: "/blogs", label: "Blogs", icon: Book },
    { href: "/about", label: "About", icon: Info },
  ],
};

const Socials = {
  navs: [
    {
      href: "https://github.com/KelvinatorWas",
      icon: <GitHub className="fill-white" />,
    },
    {
      href: "https://www.linkedin.com/in/kalvisliepkalns/",
      icon: <LinkedIn className="fill-blue-200" />,
    },
    {
      href: "https://tmtext.itch.io/",
      icon: <Image src={ItchIo} width={24} height={24} alt="Itch" />,
    },
  ],
};

export const Header = () => {
  return (
    <header className="flex px-5 py-4 bg-tpurple text-lblue border-b-2 border-black shadow shadow-black">
      <div className="flex flex-row flex-grow items-center gap-2.5">
        <Logo />
        <nav className="flex items-center gap-8">
          {Naviagtion.navs.map((nav, index) => {
            return (
              <CustomLink
                href={nav.href}
                key={index}
                style="flex gap-2"
                activeStyle="text-active"
              >
                <nav.icon />
                {nav.label}
              </CustomLink>
            );
          })}
        </nav>

        <div className="flex flex-grow justify-end items-center gap-2 mr-11">
          {Socials.navs.map((social, index) => {
            return (
              <a href={social.href} target="_blank">
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
