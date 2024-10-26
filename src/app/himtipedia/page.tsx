import Image from "next/image";
import Hero from "@/assets/images/hero.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Himtipedia() {
    return (
        <div className="w-full mt-40">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Image 
                        src={Hero}
                        alt="hero"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow">
                        <h1 className="text-4xl text-center font-normal text-brand-main mb-4">Explore the world of HIMTI Paramadina</h1>
                        <div className="relative w-full">
                            <input type="text"
                            placeholder="search here for everything about himti"
                            className="w-full border border-[#D5D5D5] rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-brand-main"/>
                            <Icon icon={"material-symbols:search"} 
                            className="absolute top-3 left-4 text-lg text-[#737373]"
                            height={20}
                            width={20}/>
                        </div>                     
                    </div>
                </div>
                <div className="mt-8 bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-normal mb-10">
                        What are you looking for
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Profil Organisasi",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/profile",
                        },
                        {
                            title: "Program Kerja",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/programKerja",
                        },
                        {
                            title: "Kegiatan dan Acara",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/kegiatan-acara",
                        },
                        {
                            title: "Artikel dan Berita",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/artikel-berita",
                        },
                        {
                            title: "Dokumen dan Berkas",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/dokumen",
                        },
                        {
                            title: "Dokumen dan Berkas",
                            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                            link: "/himtipedia/dokumen",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <div>
                                <Link href={item.link} legacyBehavior>
                                    <a className="flex items-center justify-between w-full">
                                        <h3 className="text-lg font-medium text-brand-main ">{item.title}</h3>
                                        <div className="flex-shrink-0">
                                        <Icon
                                            icon={"material-symbols:arrow-right-alt"}
                                            className="w-6 h-7 transform rotate-[-45deg] text-brand-main"
                                        />
                                        </div>
                                    </a>
                                </Link>
                                <p className="font-normal text-left mt-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

