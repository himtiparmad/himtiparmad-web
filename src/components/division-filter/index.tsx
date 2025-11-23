"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Brush,
  ClipboardList,
  Cpu,
  Megaphone,
  Wallet,
  GraduationCap,
} from "lucide-react";

interface Division {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  description: string;
}

const divisions: Division[] = [
  {
    id: 1,
    name: "Department Creative and Design",
    icon: Brush,
    image: "/images/creative.png",
    description:
      "Department Creative and Design bertanggung jawab dalam pembuatan konten visual, branding, UI/UX, serta kebutuhan desain untuk mendukung identitas organisasi.",
  },
  {
    id: 2,
    name: "Department Administration",
    icon: ClipboardList,
    image: "/images/admin.png",
    description:
      "Department Administration mengelola seluruh data, surat-menyurat, dokumentasi, dan pengarsipan untuk memastikan tata kelola organisasi rapi.",
  },
  {
    id: 3,
    name: "Department Research & Technology",
    icon: Cpu,
    image: "/images/ristek.png",
    description:
      "Department Research & Technology mengembangkan inovasi software, riset, dan project digital untuk meningkatkan kemampuan mahasiswa.",
  },
  {
    id: 4,
    name: "Department Public Relations and Media",
    icon: Megaphone,
    image: "/images/humas.png",
    description:
      "Department PR & Media mengatur komunikasi publik, media sosial, publikasi kegiatan, dan hubungan eksternal.",
  },
  {
    id: 5,
    name: "Department Financial",
    icon: Wallet,
    image: "/images/financial.png",
    description:
      "Department Financial mengelola anggaran, pencatatan keuangan, serta memastikan transparansi pendanaan organisasi.",
  },
  {
    id: 6,
    name: "Department Human Capital & Education",
    icon: GraduationCap,
    image: "/images/hc.png",
    description:
      "Department Human Capital & Education fokus pada pengembangan SDM melalui program pelatihan, edukasi, dan kaderisasi.",
  },
];

export default function DivisionsFilter() {
  const [selected, setSelected] = useState<Division | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (division: Division) => {
    setSelected(division);


    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <div className="w-full flex flex-col items-center mt-16">
  
      <div className="w-full flex justify-center">
        <div className="bg-neutral-200 p-3 rounded-xl w-[90%] overflow-x-auto">
          <div className="flex items-center gap-3 w-max">
            {divisions.map((d) => {
              const IconComponent = d.icon;

              return (
                <motion.button
                  key={d.id}
                  onClick={() => handleSelect(d)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap transition
              ${
                selected?.id === d.id
                  ? "bg-blue-600 text-white"
                  : "bg-red-500 text-white"
              }
            `}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <IconComponent className="text-white w-3.5 h-3.5" />
                  </div>

                  <span className="text-[11px] font-medium">{d.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

   
      <div ref={detailRef} className="w-full flex justify-center mt-16 mb-20">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="text-white shadow-lg p-10 rounded-2xl w-[80%] max-w-3xl text-center"
            >
              <Image
                src={selected.image}
                width={220}
                height={220}
                alt={selected.name}
                className="mx-auto mb-6 rounded-lg"
              />

              <h2 className="text-2xl font-bold mb-3">{selected.name}</h2>
              <p className="text-neutral-700 leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
