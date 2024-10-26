import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const programs = [
  "HIMTI IT Fest Competition 4.0",
  "Reformatics 2024",
  "Brahma: IT Fest Ready",
  "Brahma: Kobit & Barbar",
  "HIMTI GO!",
  "Microblog & Article",
  "Bengkel IT"
];

const ProgramsList = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      {programs.map((program, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-dark-main rounded-lg cursor-pointer"
        >
          <p className="text-lg text-white">{program}</p>
          <Icon
            icon={"material-symbols:arrow-right-alt"}
            className="w-6 h-6 transform rotate-[-45deg] text-brand-main"
          />
        </div>
      ))}
    </div>
  );
};

export default ProgramsList;
