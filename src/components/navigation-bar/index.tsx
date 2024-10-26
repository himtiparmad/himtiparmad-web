"use client";
import { useEffect, useState } from "react"; // Import useEffect and useState
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  {
    name: "Himtipedia",
    href: "/himtipedia",
  },
];

const NavigationBar = () => {
  const pathname = usePathname();
  const [isHimtipedia, setIsHimtipedia] = useState(false); 

  const isActive = (href: string) => {
    return pathname === href;
  };


  useEffect(() => {
    setIsHimtipedia(pathname === "/himtipedia");
    if (pathname === "/himtipedia") {
      document.body.style.backgroundColor = "#EBEBF0"; 
    } else {
      document.body.style.backgroundColor = ""; 
    }
  }, [pathname]);

  return (
    <nav className={`w-full max-w-[1360px] mx-auto gap-x-5 z-50 sticky -top-10 ${isHimtipedia ? "bg-gray-50" : "bg-dark-himti"}`}>
      <div className="w-full flex flex-row items-center justify-between absolute pt-5 mt-10">
        <div className={`w-1/6 px-10 h-20 rounded-lg flex items-center justify-center ${isHimtipedia ? "bg-gray-50" : "bg-dark-himti"}`}>
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} width={80} height={36} alt="logo" />
          </Link>
        </div>
        <ul className={`flex flex-row items-center justify-between w-full h-20 p-3 gap-2 rounded-lg mx-3 ${isHimtipedia ? "bg-gray-50" : "bg-dark-himti"}`}>
          {nav.map((item, index) => (
            <li
              className={`${
                isActive(item.href) ? "border-brand-main border" : ""
              } w-full h-full flex items-center justify-center rounded-lg`}
              key={index}
            >
              <Link href={item.href} className={`text-brand-main ${isHimtipedia ? "text-dark" : "text-white"}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`w-1/6 px-5 h-20 rounded-lg flex gap-1 items-center justify-center ${isHimtipedia ? "bg-gray-50" : "bg-dark-himti"}`}>
          <Link
            href={"#"}
            className={`text-brand-main flex flex-row gap-1 items-center ${isHimtipedia ? "text-dark" : "text-white"}`}
          >
            <Icon
              icon={"material-symbols:arrow-right-alt"}
              className="w-6 h-6"
            />
            Contact Us.
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
