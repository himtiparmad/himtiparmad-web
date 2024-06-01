import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="w-full max-w-[1360px] flex flex-row items-center justify-between mx-auto gap-x-5">
      <div className="bg-dark-himti px-5 py-10">
        <Image src={"/images/logo.svg"} width={80} height={36} alt="logo" />
      </div>
      <ul className="flex flex-row items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        <Link href={"#"}>Contact Us.</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
