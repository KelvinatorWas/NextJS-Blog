'use client'
import { joinClass } from "$/utils/stringManiplation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type CustomLinkProps = {
  children: ReactNode;
  style: string;
  activeStyle?: string;
  href: string;
};

const CustomLink = ({
  children,
  style,
  activeStyle,
  href,
}: CustomLinkProps) => {
  const pathname = usePathname();

  const active = pathname === href;
  const className = active ? (activeStyle ? activeStyle : "") : "";
  return (
    <Link href={href} className={joinClass(style, className)}>
      {children}
    </Link>
  );
};

export default CustomLink;