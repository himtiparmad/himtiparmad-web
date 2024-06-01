import Image from "next/image";
import Hero from "@/assets/images/hero.png";
import NavigationBar from "@/components/navigation-bar";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="relative -mt-24">
        <Image
          src={Hero}
          width={1360}
          height={900}
          alt="hero"
          className="w-full"
        />
      </div>
    </div>
  );
}
