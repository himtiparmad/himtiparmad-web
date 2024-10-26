"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname.startsWith("/himtipedia") ? "hidden" : "flex flex-row"
      } w-full max-w-[1400px] mx-auto bg-white bg-opacity-5 mb-10 mt-32 rounded-lg p-14`}
    >
      <div className="w-[15%]">
        <h4 className="text-base text-white font-bold uppercase">Menu</h4>
        <ul className="flex flex-col gap-4 mt-6">
          <li>
            <Link href="/" className="text-base text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/events" className="text-base text-white">
              Events
            </Link>
          </li>
          <li>
            <Link href="/articles" className="text-base text-white">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/programs" className="text-base text-white">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="text-base text-white">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[35%]">
        <h4 className="text-base text-white font-bold uppercase">Our Camp</h4>
        <p className="text-base text-white w-3/5 mt-6">
          Jl. Raya Mabes Hankam No.Kav 9, Setu, Kec. Cipayung, Kota Jakarta
          Timur, Daerah Khusus Ibukota Jakarta 16680
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-start">
        <Image
          src="/images/logo.svg"
          width={80}
          height={36}
          alt="logo"
          className="max-w-[80px]"
        />
      </div>
    </div>
  );
};

export default Footer;
