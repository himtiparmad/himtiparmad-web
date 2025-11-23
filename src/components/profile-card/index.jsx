"use client";

import Image from "next/image";

export default function ProfileCard({ imagesTop = [], imagesBottom = [] }) {
  return (
    <div className="w-full">

      {/* BAGIAN ATAS – 4 GAMBAR */}
      <div className="grid grid-cols-4 gap-4">
        {imagesTop.map((src, i) => (
          <div key={i} className="relative h-80">
            <Image
              src={src}
              alt={`img-top-${i}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* BAGIAN BAWAH – 4 GAMBAR */}
      <div className="grid grid-cols-4 gap-4 my-4">
        {imagesBottom.map((src, i) => (
          <div key={i} className="relative h-80">
            <Image
              src={src}
              alt={`img-bottom-${i}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
