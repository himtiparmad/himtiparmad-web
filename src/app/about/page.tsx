"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 text-center px-4 z-20" id="lihatselengkapnya">
        <h2 className="text-2xl font-main lg:text-4xl font-bold text-[#0066FF] mt-12 mb-4">
          Tentang Kami
        </h2>
        <p className="max-w-5xl mx-auto text-dark-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-5 mx-auto bg-[#0066FF] w-40 h-2 rounded-full"></div>
      </section>
      <div
        className="w-full h-[150px] sm:h-[200px] md:h-[420px] lg:h-[600px] xl:h-[900px] mb-[20px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-200px]"
        style={{
          backgroundImage: "url('/images/background-bottom.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="space-y-10">
        {/* ANIMASI KE KIRI */}
        <div className="overflow-hidden group relative">
          <div className="flex w-[200%] animate-left-marquee group-hover:[animation-play-state:paused] gap-6 items-center">
            <div className="flex gap-6">
              <img src="/images/img1_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_3.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_4.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_2.png" className="h-40 w-auto rounded-xl" />

              {/* copy kedua untuk seamless */}
              <img src="/images/img1_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_3.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img1_4.png" className="h-40 w-auto rounded-xl" />
            </div>
          </div>
        </div>

        {/* ANIMASI KE KANAN */}
        <div className="overflow-hidden group relative">
          <div className="flex w-[200%] animate-right-marquee group-hover:[animation-play-state:paused] gap-6 items-center">
            <div className="flex gap-6">
              <img src="/images/img2_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_3.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_4.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_5.png" className="h-40 w-auto rounded-xl" />

              {/* copy kedua */}
              <img src="/images/img2_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_5.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img2_4.png" className="h-40 w-auto rounded-xl" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden group relative">
          <div className="flex w-[200%] animate-left-marquee group-hover:[animation-play-state:paused] gap-6 items-center">
            <div className="flex gap-6">
              <img src="/images/img3_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_3.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_4.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_3.png" className="h-40 w-auto rounded-xl" />

              {/* copy kedua untuk seamless */}
              <img src="/images/img3_1.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_2.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_3.png" className="h-40 w-auto rounded-xl" />
              <img src="/images/img3_4.png" className="h-40 w-auto rounded-xl" />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes left-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes right-marquee {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-left-marquee {
            animation: left-marquee 40s linear infinite;
          }

          .animate-right-marquee {
            animation: right-marquee 40s linear infinite;
          }
        `}</style>
      </div>

      <section className="px-4 py-36 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/images/ketum_himti.svg"
          loading="lazy"
          width="500"
          height="500"
          className="rounded-3xl lg:w-2/5"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <p className="mb-2 text-lg font-medium text-[#0066FF] lg:text-xl">
            Ketua Umum HIMTI Paramadina
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#0066FF] lg:text-5xl font-main">
            Miftahul Fitriah
          </h2>
          <p className="mt-2 mb-4 text-dark-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-24 flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-left lg:text-right"
        >
          <p className="mb-2 text-lg font-medium text-[#0066FF] lg:text-xl">
            Wakil Ketua Umum HIMTI Paramadina
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#0066FF] lg:text-5xl font-main">
            Raka Adrian Hartono
          </h2>
          <p className="mt-2 mb-4 text-dark-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
        <img
          src="/images/waketum_himti.svg"
          loading="lazy"
          width="500"
          height="500"
          className="rounded-3xl lg:w-2/5"
        />
      </section>
    </div>
  );
}
