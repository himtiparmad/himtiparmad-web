import Image from "next/image";
import Hero from "@/assets/images/hero.png";
import Button from "@/components/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import SectionEvent from "@/components/event";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-fit mt-10">
        <Image
          src={Hero}
          alt="hero"
          width={1360}
          height={900}
          className="w-full h-full object-cover bg-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-center bg-black bg-opacity-50 px-16 pb-12">
          <p className="text-2xl">
            # A <span className="text-brand-main">Team</span> Like No Other
          </p>
          <h1 className="text-[96px] mb-6 text-start leding-[130%]">
            HIMTI <br />
            <span className="text-brand-main">NEOCOSMIC</span>
          </h1>
          <Button
            variant="green"
            icon={
              <Icon
                icon={"material-symbols:arrow-right-alt"}
                className="w-6 h-6"
              />
            }
            text="learn more"
            className="px-8 py-4 rounded-md"
          />
        </div>
      </div>
      <SectionEvent/>
    </div>
  );
}
