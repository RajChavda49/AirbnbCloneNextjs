"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer h-10 w-fit mr-2"
      src={require("../../../public/images/logo.png")}
      onClick={()=>router.push("/")}
    />
  );
};

export default Logo;
