"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function KontakKami() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    year: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", phone: "", year: "", type: "", message: "" });
    }
  };

  const waLink = form.phone
    ? `https://wa.me/${form.phone}?text=${encodeURIComponent(
        `Halo, saya ${form.name}.\n\n${form.message}`
      )}`
    : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, []);

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
          <p className="font-medium text-gray-200 lg:text-lg">
            Kami dari Himti Paramadina siap melayani pertanyaan, masukan, maupun
            aspirasi dari civitas akademika Universitas Paramadina. Baik seputar
            kegiatan keislaman, kajian, donasi, hingga program sosial. Silakan
            hubungi kami kapan saja.
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
    
      <section id="ngadukyok">
      <div className="md:px-24 px-11 md:mb-0 mb-12 text-white">
        <h2 className="md:text-[40px] text-4xl leading-[130%] font-main text-brand-main">
          NgadukYok
        </h2>
        <p className="text-base mt-2 font-normal text-dark-dark">
          Yooo warga HIMTI! Ada kritik? Saran? Pertanyaan? Curhat percintaan?
          Atau cuma mau marah-marah halus? Gas aja isi form ini! Santai… semua
          isi form ini rahasia, gak bakal diumbar ke grup keluarga atau story
          kampus. Ini cuma biar HIMTI makin upgrade kayak HP baru, bukan nambah
          drama kayak sinetron, Thanks yang udah ngadu, kamu keren
        </p>
      </div>

      <div className="min-h-screen bg-[#0B0E1A] text-white flex lg:flex-row flex-col justify-center gap-12 mb-24 items-center px-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/images/services.svg"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
        />
        <form
          onSubmit={onSubmit}
          className="w-full max-w-2xl space-y-4 bg-[#111827] p-8 rounded-2xl shadow-xl"
        >
          <input
            className="w-full p-4 rounded-xl bg-[#1F2937] outline-none"
            placeholder="Nama kamu"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="w-full p-4 rounded-xl bg-[#1F2937] outline-none"
            placeholder="Telepon kamu (opsional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <select
            className="w-full p-4 rounded-xl bg-[#1F2937] outline-none"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            required
          >
            <option value="">Pilih tahun angkatan</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>

          <select
            className="w-full p-4 rounded-xl bg-[#1F2937] outline-none"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            required
          >
            <option value="">Pilih Jenis</option>
            <option>Curhat</option>
            <option>Kritik & Saran</option>
            <option>Pertanyaan</option>
          </select>

          <textarea
            className="w-full p-4 rounded-xl bg-[#1F2937] outline-none h-40"
            placeholder="Pesan"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button
            className="w-full p-4 font-bold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "KIRIM"}
          </button>

          {waLink && (
            <a
              href={waLink}
              target="_blank"
              className="block text-center p-3 rounded-xl border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
            >
              Kirim lewat WhatsApp
            </a>
          )}

          {success && (
            <p className="text-center text-green-400 font-semibold">
              Pesan berhasil dikirim!
            </p>
          )}
        </form>
      </div>
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
