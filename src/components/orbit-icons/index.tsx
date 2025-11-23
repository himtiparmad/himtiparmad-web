"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Crown,
  Wallet,
  Paintbrush,
  Megaphone,
  GraduationCap,
  Shield,
  ClipboardList,
  Cpu,
} from "lucide-react";

const icons = [
  { icon: Crown },
  { icon: Paintbrush },
  { icon: Megaphone },
  { icon: GraduationCap },
  { icon: Shield },
  { icon: ClipboardList },
  { icon: Cpu },
  { icon: Wallet },
];

export default function OrbitIcons() {
  return (
    <div
      className="
        relative
        w-[220px] h-[220px]
        sm:w-[300px] sm:h-[300px]
        md:w-[380px] md:h-[380px]
        mx-auto mt-10 select-none

        /* --- RESPONSIVE ORBIT RADIUS --- */
        [--radius:110px]      /* MOBILE */
        sm:[--radius:135px]  /* TABLET */
        md:[--radius:180px]  /* DESKTOP */
      "
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full border-[3px] border-blue-500/60 absolute" />

        {/* --- ICONS ON ORBIT --- */}
        {icons.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / icons.length) * 2 * Math.PI;

          // Posisi orbit pakai CSS variable
          const x = Math.cos(angle);
          const y = Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                top: `calc(50% + calc(var(--radius) * ${y}))`,
                left: `calc(50% + calc(var(--radius) * ${x}))`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="
                  rounded-full bg-[#0D6EFD] flex items-center justify-center shadow-md

                  w-10 h-10
                  sm:w-12 sm:h-12
                  md:w-14 md:h-14
                "
              >
                <Icon
                  className="
                    text-white
                    w-5 h-5
                    sm:w-6 sm:h-6
                    md:w-7 md:h-7
                  "
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* --- CENTER LOGO --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-blue-400/40 rounded-full blur-xl absolute"></div>

        <div className="relative z-10">
          <Image
            src="/images/kabinet_innovara.svg"
            width={200}
            height={200}
            alt="center icon"
            className="drop-shadow-lg
              w-16 sm:w-20 md:w-24
            "
          />
        </div>
      </div>
    </div>
  );
}
