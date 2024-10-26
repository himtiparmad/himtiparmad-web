import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Himpunan Mahasiswa Teknik Informatika - Universitas Negeri Paramadina",
  description: "HIMTI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark-himti`}>
        <NavigationBar />
        <main className="w-full max-w-[1400px] flex mx-auto">{children}</main>
      </body>
    </html>
  );
}
