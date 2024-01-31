import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"
import CustomLink from "../CustomLink/customLink";

const Logo = () => {
  return (
  <Link href="/" className="flex items-center ml-11 mr-11">
    <Image src={logo} alt={"Kelvinator"} className="rounded-3xl size-14 border-2 mr-2"/>
  </Link>
  );
};

export default Logo;
