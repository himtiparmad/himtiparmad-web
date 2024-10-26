import React from "react";

const questionsAndAnswers = [
  {
    question: "Apa kepanjangan dari HIMTI Paramadina?",
    answer: "HIMTI Paramadina merupakan akronim atau kependekan dari Himpunan Mahasiswa Teknik Informatika Universitas Paramadina."
  },
  {
    question: "Apa nama kabinet HIMTI Paramadina?",
    answer: "Setiap kepengurusan memiliki nama kabinet yang berbeda-beda. HIMTI Paramadina Kepengurusan 24/25 memiliki nama kabinet ‘Neocosmic’. Neocosmic memiliki arti alam yang baru, dengan filosofi menciptakan dimensi baru, dengan arah gerak baru, yang berfokus pada riset dan pengembangan."
  },
  {
    question: "Apakah HIMTI Neocosmic memiliki slogan/tagline?",
    answer: "HIMTI Neocosmic memiliki slogan “A Team Like No Other”. Slogan ini memiliki arti bahwa HIMTI Neocosmic akan menjadi tim baru yang berbeda, baik itu dengan HIMTI yang sebelumnya maupun dengan tim/organisasi yang lain."
  },
  {
    question: "Bagaimana struktur organisasi HIMTI Neocosmic?",
    answer: "Susunan struktur organisasi HIMTI Neocosmic terdiri dari seorang Ketua Umum, seorang Wakil Ketua, dan 6 Departemen. Departemen tersebut diantaranya Dept. Administrasi dan Keuangan, Dept. Riset dan Teknologi, Dept. Pendidikan dan Pelatihan, Dept. Kreatif dan Desain, Dept. Media dan Publikasi, Dept. Humas dan Diplomasi."
  },
  {
    question: "Siapa saja yang boleh menjadi pengurus HIMTI Neocosmic?",
    answer: "Siapa saja boleh untuk mendaftarkan dirinya menjadi pengurus HIMTI selama ia adalah mahasiswa Program Studi Teknik Informatika Universitas Paramadina."
  },
  {
    question: "Apakah bisa menjalin kerja sama dengan HIMTI? Bagaimana Caranya?",
    answer: "HIMTI Neocosmic sangat terbuka untuk berbagai bentuk kerja sama. JIka ada ide untuk menjalin kerja sama, kamu dapat menghubungi HIMTI melalui media sosial HIMTI di instagram @himtiparamadina dan tim media akan merespon atau bisa juga melalui email HIMTI di himti@paramadina.ac.id"
  },
  {
    question: "Jika ada pertanyaan terkait HIMTI, bagaimana caranya untuk dapat bertanya?",
    answer: "Sama seperti ajakan kerja sama atau yang lainnya, apapaun itu baik bentuknya pertanyaan, ajakan, tawaran, dll. dapat langsung menghubungi HIMTI via media sosial HIMTI di instagram @himtiparamadina atau email di himti@paramadina.ac.id"
  },
];

const About = () => {
  return (
    <div className="mt-10 mb-28 ">
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="mt-10 mb-10 text-base font-normal">
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="lg:w-1/2">
              <p className="text-base font-semibold">{qa.question}</p>
            </div>
            <div className="lg:w-1/2 text-dark-dark">
              <p className="text-base">{qa.answer}</p>
            </div>
          </div>
          {index < questionsAndAnswers.length - 1 && <hr className="border-t border-dark-dark w-full mt-10" />} {/* HR line */}
        </div>
      ))}
    </div>
  );
};

export default About;
