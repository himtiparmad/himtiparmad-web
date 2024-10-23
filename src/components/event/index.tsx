import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface EventImageProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  href: string;
}

const EventImage: React.FC<EventImageProps> = ({ src, alt, title, href }) => {
  return (
    <Link href={href} className="relative w-full h-[400px]">
      <Image
        src={src}
        alt={alt}
        width={610}
        height={400}
        className="rounded-lg object-cover bg-cover w-full h-[400px]"
      />
      <div className="absolute inset-0 bg-opacity-45 flex items-end p-4 bg-gradient-to-b from-transparent to-dark-himti">
        <p className="text-2xl font-normal text-brand-main">{title}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-14 h-14 bg-dark-himti flex items-center justify-center rounded">
          <Icon
            href="/events"
            icon={"material-symbols:arrow-right-alt"}
            className="w-6 h-6 transform rotate-[-45deg] text-brand-main"
          />
        </div>
      </div>
    </Link>
  );
};

export default EventImage;
