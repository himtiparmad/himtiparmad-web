"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function KontakKami() {
  return (
    <main className="relative z-10">
      {/* <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      /> */}
      <section className="px-11 py-24 lg:py-[150px] flex flex-col lg:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 lg:py-0 py-6"
        >
          <h1 className="mb-4 text-1xl lg:text-2xl font-main font-bold !leading-snug text-gray-200">
            Innovara Himti Paramadina
            <br />
            <span className="text-[#0066FF] lg:text-4xl text-3xl">
              Siap Mendengar dan Membantu
            </span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Kami dari Himti Paramadina siap melayani
            pertanyaan, masukan, maupun aspirasi dari civitas akademika
            Universitas Paramadina. Baik seputar kegiatan keislaman, kajian,
            donasi, hingga program sosial. Silakan hubungi kami kapan saja.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina.">
              <button className="flex items-center gap-2 cursor-pointer bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
                <FaWhatsapp className="text-white" />
                Hubungi Whatsapp
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/images/discuss.svg"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
        />
      </section>


      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6181827941696!2d106.90414257421631!3d-6.314974993674382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c398b48d51%3A0x2a232e58c9357e8f!2sUniversitas%20Paramadina!5e1!3m2!1sid!2sid!4v1745765573804!5m2!1sid!2sid"
          className="w-full h-[450px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
