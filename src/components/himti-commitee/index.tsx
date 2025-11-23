"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ketum from "@/assets/images/mita.png";
import waketum from "@/assets/images/raka.png";
import sekre from "@/assets/images/qilla.png";
import bandar from "@/assets/images/rofiqo.png";
import creative from "@/assets/images/hamid.jpeg";
import ristek from "@/assets/images/arya.png";
import humas from "@/assets/images/galbin.jpeg";
import edu from "@/assets/images/apung.jpeg";

export type Member = {
  id: string;
  name: string;
  role: string;
  image?: any;
  bio?: string;
  major?: string;
  socials?: { twitter?: string; instagram?: string; linkedin?: string };
};
type Props = { members: Member[] };
export default function HimtiCommitteeCards({ members }: Props) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 mt-32">
      <div className="flex flex-col items-start md:items-center">
        <h3 className="text-brand-main font-main text-3xl md:text-4xl text-xl">
          Pengurus HIMTI
        </h3>
        <p className="text-dark-dark pt-4 text-center">
          Pengurus inti HIMTI terdiri dari ketua, wakil ketua, serta koordinator
          departemen yang memimpin berbagai bidang untuk memastikan keberjalanan
          organisasi secara profesional dan kolaboratif.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {members.map((m) => (
          <div
            key={m.id}
            className="relative group rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoverId(m.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            <Image
              src={m.image}
              alt={m.name}
              className="w-full h-fill object-cover rounded-2xl mt-12 md:mt-0 transition duration-300 group-hover:brightness-50"
            />

            {/* Tooltip hanya untuk DESKTOP */}
            <AnimatePresence>
              {hoverId === m.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="bg-white/90 text-black px-4 py-2 rounded-xl shadow-lg">
                    <p className="font-bold">{m.name}</p>
                    <p className="text-sm">{m.major}</p>
                    <p className="text-xs text-gray-200">{m.role}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* DESKRIPSI KHUSUS MOBILE (tanpa tooltip) */}
            <div className="md:hidden mt-6 text-center">
              <p className="font-bold text-white text-4xl">{m.name}</p>
              <p className="text-sm text-white">{m.major}</p>
              <p className="text-xs text-white">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const members: Member[] = [
  {
    id: "1",
    name: "Miftahul Fitriah",
    role: "President",
    major: "Teknik Informatika",
    image: ketum,
  },
  {
    id: "2",
    name: "Raka Adrian Hartono",
    role: "Vice President",
    major: "Teknik Informatika",
    image: waketum,
  },
  {
    id: "3",
    name: "Syaqilla Maulida",
    role: "Department Administration",
    major: "Teknik Informatika",
    image: sekre,
  },
  {
    id: "7",
    name: "Rofiqo Aldina",
    role: "Department Finansial",
    major: "Teknik Informatika",
    image: bandar,
  },
  {
    id: "4",
    name: "Abdul Hamid",
    role: "Creative & Design",
    major: "Teknik Informatika",
    image: creative,
  },
  {
    id: "5",
    name: "Naufal Arya",
    role: "Riset & Teknologi",
    major: "Teknik Informatika",
    image: ristek,
  },
  {
    id: "6",
    name: "Galbin Adi",
    role: "Humas & Media",
    major: "Teknik Informatika",
    image: humas,
  },
  {
    id: "8",
    name: "Alfin Masykur",
    role: "Human Capital & Education",
    major: "Teknik Informatika",
    image: edu,
  },
];
