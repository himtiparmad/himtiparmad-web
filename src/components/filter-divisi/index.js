"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SekretarisIcon,
  BendaharaIcon,
  RistekIcon,
  HumasIcon,
  KreatifIcon,
  EduIcon,
} from "../icons";

const divisions = [
  { name: "Department Administration", id: "department-administration", icon: SekretarisIcon },
  { name: "Department Financial", id: "department-financial", icon: BendaharaIcon },
  { name: "Department Public Relations and Media", id: "department-public-relations-and-media", icon: HumasIcon },
  { name: "Department Research & Technology", id: "department-research-Technology", icon: RistekIcon },
  { name: "Department Creative and Design", id: "department-creative-and-design", icon: KreatifIcon },
  { name: "Department Human Capital & Education", id: "department-human-capital-education", icon: EduIcon },
];

export default function FilterDivisi() {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  const textRefs = useRef({});

  return (
    <aside className="hidden md:flex fixed top-1/4 left-0 z-40 flex-col gap-3">
      {divisions.map((item, i) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        const baseWidth = 48; // icon only
        const targetWidth =
          baseWidth + (textRefs.current[item.id]?.offsetWidth || 0) + 20;

        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.id); // cuma ubah warna
              setHovered(null); // langsung nutup teks
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group relative"
          >
            <motion.div
              className={`
                flex items-center gap-3 rounded-e-[50px] px-3 py-2 cursor-pointer
                border border-blue-400
                overflow-hidden transition-colors duration-300
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-blue-100 text-blue-600"
                }
              `}
              animate={{
                width: hovered === item.id ? targetWidth : baseWidth,
              }}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${
                  isActive
                    ? "text-[#DAE9FF]"
                    : "text-blue-600 group-hover:text-blue-800"
                }`}
              />

              <span
                ref={(el) => (textRefs.current[item.id] = el)}
                className={`
                  text-sm font-medium whitespace-nowrap
                  transition-opacity duration-200
                  ${hovered === item.id ? "opacity-100" : "opacity-0"}
                `}
              >
                {item.name}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </aside>
  );
}
