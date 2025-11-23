import Image from "next/image";
import Hero from "@/assets/images/hero_himti.png";
import Button from "@/components/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import EventImage from "@/components/event";
import ArticleCard from "@/components/article";
import BlogIcon from "@/assets/icons/blog.svg";
import Link from "next/link";
import Programs from "@/components/programs";
import { featuredData } from "./_data/featured_data";
import { CardCooperation } from "@/components/card/card-cooperation";
import HimtiCommitteeCards, { members } from "@/components/himti-commitee";
import { ArrowUpRight, Mail, Pin } from "lucide-react";
import { GiSafetyPin } from "react-icons/gi";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[120vh] sm:h-[120vh] md:h-[80vh] lg:h-[120vh] overflow-hidden rounded-[20px]">
        {/* Background Hero */}
        <Image
          src={Hero}
          alt="hero"
          fill
          className="object-cover rounded-[20px]"
          priority
        />

        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 rounded-[20px]" />

        {/* Teks Hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 md:px-16">
          <div className="mb-4 flex w-fit items-center rounded-full border border-gray-200 bg-white/50 p-1 backdrop-blur">
            <div className="rounded-full bg-gray-200/50 px-2 py-1 font-semibold text-gray-700 backdrop-blur md:block text-xs md:text-md">
              # The{" "}
              <span className="text-brand-main font-main">Next Level</span>{" "}
              Squad
            </div>
          </div>
          <h1
            className="font-main leading-tight mb-4
      text-4xl sm:text-5xl md:text-7xl lg:text-[96px]"
          >
            HIMTI
            <span className="text-brand-main font-bold"> INNOVARA</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-gray-200 max-w-xl">
            Selamat datang di perjalanan inovasi, kolaborasi, dan unggulan di
            bidang Informatika.
          </p>
        </div>
      </div>

      <section className="py-12 text-center px-4 z-20" id="lihatselengkapnya">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-main lg:text-4xl font-bold text-[#0066FF] mt-12 mb-4">
            Selamat Datang di Himti Paramadina
          </h2>

          {/* ICON LINK KE /about */}
          <Link href="/about">
            <GiSafetyPin className="w-4 h-4 text-[#0066FF] hover:text-white hover:text-blue-700 transition" />
          </Link>
        </div>

        <p className="max-w-5xl mx-auto text-dark-dark">
          HIMTI Paramadina (Himpunan Mahasiswa Teknik Informatika Universitas
          Paramadina) merupakan organisasi resmi mahasiswa yang menaungi
          mahasiswa Program Studi Teknik Informatika di Universitas Paramadina.
          Organisasi ini berperan sebagai wadah bagi mahasiswa untuk
          mengembangkan kemampuan akademik, organisasi, dan keterampilan
          interpersonal melalui berbagai program dan kegiatan baik di dalam
          maupun di luar kampus.
        </p>

        <div className="my-5 mx-auto bg-[#0066FF] w-40 h-2 rounded-full"></div>
      </section>

      <div className="mt-28 px-11 text-white">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <h2 className="md:text-[40px] text-4xl leading-[130%] font-main text-brand-main">
              Program yang Akan Datang
            </h2>
            <p className="text-base mt-2 font-normal text-dark-dark">
              Berikut adalah beberapa program yang akan diselenggarakan oleh
              HIMTI Paramadina dalam waktu dekat.
            </p>
          </div>
          <div className="flex items-center py-4 md:py-0">
            <a
              href="/proker"
              className="text-brand-main text-base font-normal flex items-center"
            >
              Full list di sini cuy
              <Icon
                icon={"material-symbols:arrow-right-alt"}
                className="w-6 h-6 ml-2 transform rotate-[-45deg]"
              />
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-14">
          <EventImage
            src={"/images/itfest_4.jpg"}
            href="/proker"
            alt="HIMTI IT Fest Competition 5.0"
            title="HIMTI IT Fest Competition 5.0"
          />
          <EventImage
            src={"/images/reformatics_24.jpg"}
            href="/proker"
            alt="Reformatics 2025"
            title="Reformatics 2025"
          />
        </div>
      </div>

      {/* <div className="px-11">
        <h3 className="text-brand-main font-main text-4xl justify-center text-center pt-[120px]">
          Read Our Article
        </h3>
        <p className="text-dark-dark justify-center text-center pt-6">
          These articles are managed by the Research and Technology Department
          of HIMTI Paramadina. <br />
          Contains the latest information and technology, including hot
          technology issues
        </p>
        <div className="grid grid-cols-1 mt-16 divide-y-2 divide-dark-main border-y-2 border-dark-main">
          {[1, 2, 3, 4, 5, 6]
            .reduce<number[][]>((result, _, index, array) => {
              // Memecah array menjadi sub-array berisi 2 elemen
              if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
              }
              return result;
            }, [])
            .map((pair, index) => (
              <div key={index} className="flex lg:flex-row flex-col justify-between py-6">
                {pair.map((num) => {
                  if (num === 6) {
                    return (
                      <div
                        key={num}
                        className="w-1/2 flex flex-col items-center justify-center"
                      >
                        <Link
                          href="/articles"
                          className="text-brand-main text-xl font-normal flex items-center"
                        >
                          see all articles
                        </Link>
                        <p className="text-base text-[#797979] italic">
                          read more articles
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div key={num} className="w-1/2">
                      <ArticleCard
                        src={BlogIcon}
                        alt="blog"
                        title="Lorem Ipsum"
                        author="Author Placeholder | Month XX, 20XX"
                        href="/articles"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div> */}

      <div className="px-11 mt-32">
        <div className="md:w-3/4 w:1/2 m-auto text-center flex flex-col items-start md:items-center">
          <h3 className="text-brand-main font-main text-3xl md:text-4xl">
            Agenda Program Kerja HIMTI
          </h3>
          <p className="text-dark-dark pt-4 text-center">
            HIMTI memiliki beberapa agenda program kerja (proker) setiap
            tahunnya. Program-program ini melibatkan mahasiswa, dosen, alumni,
            serta pihak-pihak terkait lainnya sebagai bentuk kolaborasi dan
            pengembangan komunitas.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-16">
          {featuredData.map((item, index) => {
            return (
              <Programs
                key={index}
                title={item.name}
                href={item.href}
                backgroundColor="white"
              />
            );
          })}
          <Programs
            title="Explore our programs"
            href="/proker"
            backgroundColor="green"
          />
        </div>
      </div>

      <HimtiCommitteeCards members={members} />

      <div className="px-11 mt-20">
        <h4 className="text-xl text-[#3A3A3C]">in cooperation with</h4>
        <div className="flex lg:flex-row flex-col gap-5 mt-16">
          <CardCooperation
            image="/images/logo/paramadina.png"
            alt="paramadina"
          />
          <CardCooperation image="/images/logo/fir.png" alt="fir" />
          <CardCooperation image="/images/logo/ti.png" alt="ti" />
          <CardCooperation image="/images/logo/sema.png" alt="sema" />
        </div>
      </div>

      <div className="px-6 md:px-14 mt-24 mb-32">
        <h3 className="text-brand-main text-3xl md:text-4xl text-center leading-snug">
          <span className="text-brand-dark">Have Questions About HIMTI?</span>{" "}
          <br />
          <span className="font-main">We Have Answer!</span>
        </h3>

        {/* FAQ LIST */}
        <div className="flex flex-col mt-10 space-y-10">
          {/* ITEM */}
          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Apa kepanjangan dari HIMTI Paramadina?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              HIMTI Paramadina merupakan akronim atau kependekan dari Himpunan
              Mahasiswa Teknik Informatika Universitas Paramadina.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Apa nama kabinet HIMTI Paramadina?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              Setiap kepengurusan memiliki nama kabinet yang berbeda-beda. HIMTI
              Paramadina Kepengurusan 24/25 memiliki nama kabinet ‘Innovara’.
              Innovara memiliki arti alam yang baru dengan filosofi menciptakan
              dimensi baru yang berfokus pada riset dan pengembangan.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Apakah HIMTI Innovara memiliki slogan/tagline?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              HIMTI Innovara memiliki slogan “A Team Like No Other”, yang
              bermakna HIMTI Innovara hadir sebagai tim baru dengan karakter dan
              arah gerak berbeda yang lebih inovatif.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Bagaimana struktur organisasi HIMTI Innovara?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              Struktur HIMTI Innovara terdiri dari Ketua Umum, Wakil Ketua, dan
              6 Departemen: Administrasi & Keuangan, Riset & Teknologi,
              Pendidikan & Pelatihan, Kreatif & Desain, Media & Publikasi, dan
              Humas & Diplomasi.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Siapa saja yang boleh menjadi pengurus HIMTI Innovara?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              Semua mahasiswa aktif Program Studi Teknik Informatika Universitas
              Paramadina berhak mendaftarkan diri sebagai pengurus HIMTI.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Apakah bisa menjalin kerja sama dengan HIMTI? Bagaimana caranya?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              HIMTI sangat terbuka untuk berbagai bentuk kolaborasi. Kamu dapat
              menghubungi HIMTI melalui Instagram @himtiparamadina atau email
              himti@paramadina.ac.id untuk mengajukan kerja sama.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-start gap-5 pb-10 border-b border-[#3A3A3C]">
            <h3 className="text-light-main text-lg md:text-xl md:w-1/3">
              Bagaimana cara bertanya jika memiliki pertanyaan terkait HIMTI?
            </h3>
            <p className="text-base text-dark-light md:w-2/3">
              Pertanyaan, ajakan, maupun tawaran dapat langsung dikirim melalui
              Instagram @himtiparamadina atau email resmi
              himti@paramadina.ac.id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
