import Image from "next/image";

type CardCooperationProps = {
  image: string;
  alt: string;
};

export const CardCooperation = ({ image, alt }: CardCooperationProps) => {
  return (
    <div className="bg-white bg-opacity-5 w-full h-52 rounded-md flex flex-row items-center justify-center">
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100%"
        alt={alt}
        className="w-48"
      />
    </div>
  );
};
