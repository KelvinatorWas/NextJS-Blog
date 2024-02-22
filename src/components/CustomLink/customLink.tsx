'use client'
import { joinClass } from "$/utils/stringManiplation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type HrefType = {
  pathname:string,
  query: { [key:string]: string | number}
}

type CustomLinkProps = {
  children: ReactNode;
  style: string;
  activeStyle?: string;
  href: string | HrefType;
  as?:true
};
{}

const CustomLink = ({
  children,
  style,
  activeStyle,
  href,
  as
}: CustomLinkProps) => {
  const pathname = usePathname();

  const finalAs = !as ? "" : typeof href === 'object' ? href.pathname : href 
  //console.log(pathname, finalAs)
  const active = pathname === href;
  const className = active ? (activeStyle ? activeStyle : "") : "";
  return (
    <Link href={href} className={joinClass(style, className)} as={finalAs}>
      {children}
    </Link>
  );
};

export default CustomLink;