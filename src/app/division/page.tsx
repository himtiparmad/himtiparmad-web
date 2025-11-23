"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OrbitIcons from "@/components/orbit-icons";
import FilterDivisi from "@/components/filter-divisi";
import ProfileCard from "@/components/profile-card";

function Division() {
  return (
    <div className="w-full">
      <section className="px-4 py-24 lg:py-[150px] flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10 relative z-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-1xl lg:text-2xl font-bold !leading-snug text-gray-200">
            2025/2026
            <br />
            <span className="text-[#0066FF] lg:text-6xl text-3xl font-main">
              {" "}
              Kabinet Innovara
            </span>
          </h1>
          <p className="font-medium text-gray-200 lg:text-lg">
            DKM Paramadina memiliki beberapa divisi yang saling bersinergi untuk
            mewujudkan visi dan misi dakwah kampus. Setiap divisi memiliki peran
            penting dalam menunjang kegiatan keislaman yang aktif, kreatif dan
            berdampak.
          </p>
          <Link href="#divisi">
            <button className="mt-6 cursor-pointer bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat Selengkapnya
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="rounded-3xl lg:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OrbitIcons />
        </motion.div>
      </section>
      <FilterDivisi />
      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-administration"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Administration
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DA_1.png",
              "/images/divisi/DA_2.png",
              "/images/divisi/DA_3.png",
              "/images/divisi/DA_4.png",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-financial"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Financial
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DF_1.png",
              "/images/divisi/DF_2.png",
              "/images/divisi/DF_3.png",
              "/images/divisi/DF_4.png",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-public-relations-and-media"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Public Relations and Media
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DPRM_1.png",
              "/images/divisi/DPRM_2.png",
              "/images/divisi/DPRM_3.png",
              "/images/divisi/DPRM_4.png",
            ]}
            imagesBottom={[
              "/images/divisi/DPRM_5.png",
              "/images/divisi/DPRM_6.png",
              "/images/divisi/DPRM_7.png",
              "/images/divisi/DPRM_8.png",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-research-Technology"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Research Technology
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DRT_1.png",
              "/images/divisi/DRT_2.png",
              "/images/divisi/DRT_3.png",
              "/images/divisi/DRT_4.png",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-creative-and-design"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Creative and Design
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DCD_1.png",
              "/images/divisi/DCD_2.png",
              "/images/divisi/DCD_3.png",
              "/images/divisi/DCD_4.png",
            ]}
            imagesBottom={[
              "/images/divisi/DCD_5.png",
              "/images/divisi/DCD_6.png",
              "/images/divisi/DCD_7.png",
              "/images/divisi/DCD_8.png",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="department-human-capital-education"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold font-main">
            Department Human Capital & Education
          </h3>
          <p className="text-gray-200 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            imagesTop={[
              "/images/divisi/DHCPE_1.png",
              "/images/divisi/DHCPE_2.png",
              "/images/divisi/DHCPE_3.png",
              "/images/divisi/DHCPE_4.png",
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}

export default Division;
