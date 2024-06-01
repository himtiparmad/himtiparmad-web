import Image from "next/image";

import Hero from "@/assets/images/hero.png";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src={Hero}
          width={1360}
          height={900}
          alt="hero"
          className="w-full -z-10"
        />
      </div>
    </div>
  );
}
