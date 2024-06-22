import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white bg-opacity-5 mb-10 mt-32 flex flex-row rounded-lg p-14">
      <div className="w-[15%]">
        <h4 className="text-base text-white font-bold uppercase">Menu</h4>
        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-base text-white">About Us</li>
          <li className="text-base text-white">Events</li>
          <li className="text-base text-white">Articles</li>
          <li className="text-base text-white">Programs</li>
          <li className="text-base text-white">FAQs</li>
        </ul>
      </div>
      <div className="w-[35%]">
        <h4 className="text-base text-white font-bold uppercase">OUR CAMP</h4>
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
          className="w-full max-w-80"
        />
      </div>
    </div>
  );
};

export default Footer;
