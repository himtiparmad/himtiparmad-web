import Image from "next/image";
import Hero from "@/assets/images/hero.png";
import Button from "@/components/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import EventImage from "@/components/event";
import event1 from "@/assets/images/event1.png";
import event2 from "@/assets/images/event2.png";
import ArticleCard from "@/components/article";
import BlogIcon from "@/assets/icons/blog.svg";
import Link from "next/link";
import Programs from "@/components/programs";
import { featuredData } from "./_data/featured_data";
import { CardCooperation } from "@/components/card/card-cooperation";
import ProgramsList from "@/components/program-list";
import CooperationBox from "@/components/coop-box";
import About from "@/components/About";

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
        <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-center bg-opacity-50 px-16 pb-12">
          <p className="text-2xl">
            # A <span className="text-brand-main">Team</span> Like No Other
          </p>
          <h1 className="text-[96px] mb-6 text-start leading-[130%]">
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

      <div className="mt-28 px-11 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[40px] leading-[130%] font-normal text-brand-main">
              Upcoming Events
            </h2>
            <p className="text-base mt-2 font-normal text-dark-dark">
              Here are some events that will be held by HIMTI Paramadina in the
              near future
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/events"
              className="text-brand-main text-base font-normal flex items-center"
            >
              see all events
              <Icon
                icon={"material-symbols:arrow-right-alt"}
                className="w-6 h-6 ml-2 transform rotate-[-45deg]"
              />
            </a>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6 mt-14">
          <EventImage
            src={event1}
            href="/events"
            alt="HIMTI IT Fest Competition 4.0"
            title="HIMTI IT Fest Competition 4.0"
          />
          <EventImage src={event2} href="/" alt="HIMTI GO!" title="HIMTI GO!" />
        </div>
      </div>

      <div className="px-11">
        <h3 className="text-brand-main text-4xl justify-center text-center pt-[120px]">
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
              <div key={index} className="flex flex-row justify-between py-6">
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
      </div>

      <div className="px-11 mt-32">
        <div className="flex flex-col items-center">
          <h3 className="text-brand-main text-4xl justify-center text-center">
            Featured Programs
          </h3>
          <p className="w-3/5 text-dark-dark justify-center text-center pt-6">
            HIMTI has several work program agendas (proker) every year. This
            program involves students, lecturers, alumni, and other related
            parties
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
            href="/programs"
            backgroundColor="green"
          />
        </div>
      </div>

      <div className="px-11 mt-20">
        <h4 className="text-xl text-[#3A3A3C]">in cooperation with</h4>
        <div className="grid grid-cols-4 gap-5 mt-16">
          <CardCooperation
            image="/images/logo/paramadina.png"
            alt="paramadina"
          />
          <CardCooperation image="/images/logo/fir.png" alt="fir" />
          <CardCooperation image="/images/logo/ti.png" alt="ti" />
          <CardCooperation image="/images/logo/sema.png" alt="sema" />
        </div>
      </div>

      <div className="px-11 mt-36">
        <h3 className="text-brand-main text-4xl justify-center text-center">
          <span className="text-brand-dark">Have Questions About HIMTI?</span>{" "}
          <br />
          We Have Answer!
        </h3>
        <div className="flex flex-col mt-5">
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Apa kepanjangan dari HIMTI Paramadina?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                HIMTI Paramadina merupakan akronim atau kependekan dari Himpunan
                Mahasiswa Teknik Informatika Universitas Paramadina.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Apa nama kabinet HIMTI Paramadina?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                Setiap kepengurusan memiliki nama kabinet yang berbeda-beda.
                HIMTI Paramadina Kepengurusan 24/25 memiliki nama kabinet
                ‘Neocosmic’. Neocosmic memiliki arti alam yang baru, dengan
                filosofi menciptakan dimensi baru, dengan arah gerak baru, yang
                berfokus pada riset dan pengembangan.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Apakah HIMTI Neocosmic memiliki slogan/tagline?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                HIMTI Neocosmic memiliki slogan “A Team Like No Other”. Slogan
                ini memiliki arti bahwa HIMTI Neocosmic akan menjadi tim baru
                yang berbeda, baik itu dengan HIMTI yang sebelumnya maupun
                dengan tim/organisasi yang lain.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Bagaimana struktur organisasi HIMTI Neocosmic?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                Susunan struktur organisasi HIMTI Neocosmic terdiri dari seorang
                Ketua Umum, seorang Wakil Ketua, dan 6 Departemen. Departemen
                tersebut diantaranya Dept. Administrasi dan Keuangan, Dept.
                Riset dan Teknologi, Dept. Pendidikan dan Pelatihan, Dept.
                Kreatif dan Desain, Dept. Media dan Publikasi, Dept. Humas dan
                Diplomasi.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Siapa saja yang boleh menjadi pengurus HIMTI Neocosmic?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                Siapa saja boleh untuk mendaftarkan dirinya menjadi pengurus
                HIMTI selama ia adalah mahasiswa Program Studi Teknik
                Informatika Universitas Paramadina.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Apakah bisa menjalin kerja sama dengan HIMTI? Bagaimana Caranya?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                HIMTI Neocosmic sangat terbuka untuk berbagai bentuk kerja sama.
                JIka ada ide untuk menjalin kerja sama, kamu dapat menghubungi
                HIMTI melalui media sosial HIMTI di instagram @himtiparamadina
                dan tim media akan merespon atau bisa juga melalui email HIMTI
                di himti@paramadina.ac.id
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row py-10 border-[#3A3A3C] border-b-[1px]">
            <div className="w-1/2">
              <h3 className="text-light-main text-xl">
                Jika ada pertanyaan terkait HIMTI, bagaimana caranya untuk dapat
                bertanya?
              </h3>
            </div>
            <div className="w-1/2">
              <p className="text-base text-dark-light">
                Sama seperti ajakan kerja sama atau yang lainnya, apapaun itu
                baik bentuknya pertanyaan, ajakan, tawaran, dll. dapat langsung
                menghubungi HIMTI via media sosial HIMTI di instagram
                @himtiparamadina atau email di himti@paramadina.ac.id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
