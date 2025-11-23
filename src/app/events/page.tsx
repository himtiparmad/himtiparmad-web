"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const UnderConstructionPage: FC = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-xl w-full bg-[#212882]/80 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-8 mt-40 text-center"
      >
        {/* Ikon sederhana */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7h18M3 12h18M3 17h18"
            />
          </svg>
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-main md:text-3xl font-semibold text-white mb-4"
        >
          Kami paham kamu sangat ingin melihat halaman ini
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white mb-6"
        >
          Sayangnya halaman ini sedang dalam pengerjaan.
        </motion.p>

        {/* Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-sm text-white"
        >
          Buruh Ketik Rumahan —{" "}
          <span className="font-medium text-white">Web Developer</span>
        </motion.div>

      </motion.div>
    </main>
  );
};

export default UnderConstructionPage;
