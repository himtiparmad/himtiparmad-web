"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const nav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Division", href: "/division" },
  { name: "NgaduYok", href: "/programs" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [showFirst, setShowFirst] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur-md bg-[#050607]/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[65px] h-[65px] overflow-hidden">
            <AnimatePresence mode="wait">
              {showFirst ? (
                <motion.div
                  key="logo1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="logo1"
                    width={70}
                    height={36}
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="logo2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/images/logo_kabinet.png"
                    alt="logo2"
                    width={70}
                    height={40}
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {nav.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`relative font-medium transition ${
                  isActive(item.href)
                    ? "text-brand-main"
                    : scrolled
                    ? "text-white hover:text-brand-main"
                    : "text-white hover:text-brand-dark"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-brand-main rounded"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-brand-main hover:bg-brand-dark text-white shadow-md transition"
          >
            <Icon icon="material-symbols:arrow-right-alt" className="w-5 h-5" />
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              className="w-7 h-7"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050607]/95 backdrop-blur-md text-white shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {nav.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition ${
                      isActive(item.href)
                        ? "text-brand-main"
                        : "hover:text-brand-main"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-brand-main hover:bg-brand-dark text-white shadow-md transition mt-2"
              >
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  className="w-5 h-5"
                />
                Contact Us
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
