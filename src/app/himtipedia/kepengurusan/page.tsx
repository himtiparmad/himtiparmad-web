'use client';
import { useState } from 'react';
import Image from 'next/image';

const managementData = [
  {
    years: [
      "2024/2025",
      "2023/2024",
      "2022/2023",
      "2021/2022",
      "2020/2021",
      "2019/2020",
      "2018/2019",
      "2017/2018",
      "2016/2017",
      "2015/2016"
    ],
    sections: [
      {
        title: "Eksekutif",
        content: (
          <div>
            <div className="mb-2">
              <p className="font-normal text-brand-main mb-4">Ketua Umum</p>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Muhamad Adillah Fatih"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Muhamad Adillah Fatih</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2021</p>
                  <p className='mb-2 font-normal'>muhamadfatih@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 821 2248 4581</p>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Wakil Ketua</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Viyyza Athar Sutthana Hakim"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Viyrza Azhar Sulthonul Hakim</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>viyrza.sulthonul@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 858 8324 5565</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Administrasi dan Keuangan",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Bendahara Utama</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Syahla Nadya Putri Syabrina"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Syahla Nadya Putri Syabrina</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>syahla.putri@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 812 2849 8548</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Sekretaris Utama</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Firdayanti"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Firdayanti</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>firdayanti@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 882 9207 8042</p>
                </div>
              </div>
            </div>
          <div className="mb-4">
            <div className="font-normal text-brand-main mb-4">Bendahara Anggota</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Pindy Putri Zalsabila"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Pindy Putri Zalsabila</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2023</p>
                  <p className='mb-2 font-normal'>pindy.zalsabila@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 878 8777 7603</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <div className="font-normal text-brand-main mb-4">Sekretaris Anggota</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Syaqilla Maulidia"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-bold'>Syaqilla Maulidia</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2023</p>
                  <p className='mb-2 font-normal'>syaqilla.maulidia@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 858 9439 5070</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Riset dan Teknologi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Pendidikan dan Pelatihan",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Kreatif dan Desain",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Media dan Publikasi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Humas dan Diplomasi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-main mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-main mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/path/to/image-placeholder.png"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-bold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
    ],
  },
];

const Management = () => {
  const [activeYear, setActiveYear] = useState("2024/2025");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row p-4 mt-40">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-4">
        <h2 className="text-sm w-full text-center mb-4 bg-white rounded-lg py-4">Tahun Kepengurusan</h2>
        <ul className="space-y-2">
          {managementData[0].years.map((year) => (
            <li key={year}>
              <button
                className={`w-full text-center py-4 px-4 rounded-lg ${
                  activeYear === year 
                    ? "border border-brand-main bg-white text-brand-main" 
                    : "bg-white"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[1180px]">
  {managementData[0].sections.map((section, index) => (
    <div key={index} className="mb-4 bg-white rounded-lg ">
      <button
        className="flex justify-between w-full p-4 text-brand-main text-left"
        onClick={() =>
          setActiveSection(activeSection === section.title ? null : section.title)
        }
      >
        <div className="font-normal text-[22px]">{section.title}</div>
        <Image
          src='/images/dropdown.svg' 
          alt="Dropdown Icon"
          width={32} 
          height={32} 
          className={`transition-transform ${activeSection === section.title ? "rotate-180" : ""}`}
        />
      </button>
      {activeSection === section.title && (
        <div className="p-4 bg-white rounded-b-lg shadow-lg">
        {section.content}
        </div>
          )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
