import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface EventImageProps {
  src: string;
  alt: string;
  title: string;
}

const EventImage: React.FC<EventImageProps> = ({ src, alt, title }) => {
  return (
    <div className="relative w-[610px] h-[400px]">
      <Image
        src={src}
        alt={alt}
        width={610}
        height={400}
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-dark-himti bg-opacity-45 flex items-end p-4">
        <p className="text-lg font-normal text-brand-main">{title}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-14 h-14 bg-dark-himti flex items-center justify-center rounded">
          <Icon href="/events"
            icon={"material-symbols:arrow-right-alt"}
            className="w-6 h-6 transform rotate-[-45deg] text-brand-main"
          />
        </div>
      </div>
    </div>
  );
};

export default EventImage;
