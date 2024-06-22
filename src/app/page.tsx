import Image from "next/image";
import Hero from "@/assets/images/hero.png";
import Button from "@/components/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import EventImage from "@/components/event";
import event1 from "@/assets/images/event1.png";
import event2 from "@/assets/images/event2.png";
import ArticleCard from "@/components/article";
import Link from "next/link";

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

      <div className="mt-28 px-16 text-white">
        <div className="flex justify-between items-center mb-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EventImage
            src={event1}
            alt="HIMTI IT Fest Competition 4.0"
            title="HIMTI IT Fest Competition 4.0"
          />
          <EventImage src={event2} alt="HIMTI GO!" title="HIMTI GO!" />
        </div>
      </div>

      <div>
        <h1 className="text-brand-main text-[40px] justify-center text-center pt-[120px]">
          Read Our Article
        </h1>
        <p className="text-dark-dark text-[16px] justify-center text-center pt-[24px] pb-[60px]">
          These articles are managed by the Research and Technology Department
          of HIMTI Paramadina. <br />
          Contains the latest information and technology, including hot
          technology issues
        </p>
        <div>
          <hr className="border-gray-400 pb-[24px] pt-[24px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
            <ArticleCard
              src="/svgs/imgArticle.svg"
              alt="Description of the image"
              title="Title of Your Article"
              description="Description of your article. It can be a brief summary or an excerpt from the article content."
              href={""}
            />

            <ArticleCard
              src="/svgs/imgArticle.svg"
              alt="Description of the image"
              title="Title of Your Article"
              description="Description of your article. It can be a brief summary or an excerpt from the article content."
              href={""}
            />
          </div>
          <hr className="border-gray-400 pb-[24px] pt-[24px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
            <ArticleCard
              src="/svgs/imgArticle.svg"
              alt="Description of the image"
              title="Title of Your Article"
              description="Description of your article. It can be a brief summary or an excerpt from the article content."
              href={""}
            />

            <ArticleCard
              src="/svgs/imgArticle.svg"
              alt="Description of the image"
              title="Title of Your Article"
              description="Description of your article. It can be a brief summary or an excerpt from the article content."
              href={""}
            />
          </div>
          <hr className="border-gray-400 pb-[24px] pt-[24px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
            <ArticleCard
              src="/svgs/imgArticle.svg"
              alt="Description of the image"
              title="Title of Your Article"
              description="Description of your article. It can be a brief summary or an excerpt from the article content."
              href={""}
            />
            <div className="justify-center mt-[120px]">
              <h1 className="text-brand-main text-[22px] justify-center text-center">
                See More Articles
              </h1>
              <Link legacyBehavior href={""}>
                <a className="text-dark-dark ml-[253px] text-center justify-center ">
                  read more articles{" "}
                </a>
              </Link>
            </div>
          </div>
          <hr className="border-gray-400 pb-[24px] pt-[24px]" />
        </div>
      </div>
    </div>
  );
}
