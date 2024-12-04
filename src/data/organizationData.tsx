
import Image from "next/image";
export interface Section {
  title: string;
  content: string;
}

export interface Organization {
  years: string[];
  sections: Section[];
}

const organizationData = [
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
          title: "Nama Kabinet",
          content: `HIMTI Neocosmic - Nama kabinet untuk HIMTI periode 2024/2025 yang terdiri dari dua kata, yaitu ‘Neo’ yang berarti baru dan ‘Cosmic’ merujuk pada kosmos atau alam semesta. Secara terminologi, Neocosmic berarti alam yang baru. Filosofi kami adalah mengukir jejak di lanskap inovasi, menciptakan dimensi baru, dengan arah gerak baru, yang berfokus pada riset dan pengembangan.`,
        },
        {
          title: "Visi Organisasi",
          content: `Membawa HIMTI Paramadina mencapai banyak prestasi dengan menjadikan himpunan sebagai mikro-kosmik riset dan pengembangan terutama bidang teknologi dan menjadikan himpunan sebagai rumah self improvement untuk upskilling, reskilling, dan newskilling bagi seluruh mahasiswa Teknik Informatika Universitas Paramadina.`,
        },
        {
          title: "Misi Organisasi",
          content: (
            <div>
              <ol className="list-decimal pl-5">
                <li>
                  <strong>Peningkatan Fokus Riset dan Pengembangan:</strong> Menggalang semangat anggota HIMTI untuk aktif berkontribusi dalam riset dan pengembangan teknologi informatika melalui proyek-proyek inovatif yang menjadi terobosan minimal di tingkat universitas.
                </li>
                <li>
                  <strong>Fokus pada Self Improvement:</strong> Menyediakan program-program yang mendukung pengembangan pribadi mahasiswa Teknik Informatika melalui pelatihan, workshop, dan mentoring untuk meningkatkan keterampilan interpersonal, kepemimpinan, dan kreativitas.
                </li>
                <li>
                  <strong>Pusat Upskilling, Reskilling, dan Newskilling:</strong> Menjadi tempat utama bagi mahasiswa untuk meningkatkan keterampilan teknis dalam bidang teknologi informatika melalui kursus, seminar, dan pelatihan yang relevan dengan kebutuhan industri saat ini.
                </li>
                <li>
                  <strong>Mendorong Pencapaian Prestasi:</strong> Memberikan dukungan dan fasilitasi yang diperlukan bagi anggota untuk meraih prestasi baik di tingkat lokal maupun nasional dalam berbagai kompetisi dan proyek yang relevan.
                </li>
              </ol>
            </div>
          ),
        },
        {
          title: "Tujuan Strategis Organisasi",
          content: (
            <div>
              <ul className="list-disc pl-5">
                <li>Peningkatan Citra Baik HIMTI Paramadina.</li>
                <li>Peningkatan Eksplorasi Riset Berorientasi Produk.</li>
                <li>Peningkatan Partisipasi Anggota dalam Kompetisi.</li>
                <li>Perbanyak Jumlah Kerjasama dengan Internal maupun Eksternal Kampus.</li>
                <li>Peningkatan Keterlibatan Alumni.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Struktur Organisasi",
          content: (
            <div>
              <Image src="images/organization.png" width={0} height={0} sizes="100%" alt="so" className="w-full h-auto mb-4" />
              <h4 className="font-semibold">Eksekutif Organisasi</h4> <br />
              <p>Sebagai pilar utama kepemimpinan HIMTI, Eksekutif Organisasi, terdiri dari Ketua dan Wakil Ketua, memimpin dan membimbing organisasi menuju pencapaian visi dan misi yang diusung. Mereka berfungsi sebagai representasi HIMTI di berbagai forum dan memastikan koordinasi efektif.</p> <br />
              <h3>Fungsi:</h3>
                <ul>
                  <li>Mengarahkan dan mengkoordinasi seluruh kegiatan HIMTI.</li>
                  <li>Menyelaraskan visi dan misi dengan seluruh anggota dan departemen.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Mengambil keputusan strategis untuk kemajuan HIMTI.</li>
                  <li>Menetapkan arah dan prioritas organisasi.</li>
                </ul>
  
              <h4 className="font-semibold mt-4">Departemen Administrasi dan Keuangan</h4> <br />
                <p>
                  Bertanggung jawab atas administrasi harian, rapat, dan
                  keuangan organisasi, memastikan kelancaran operasional dan
                  transparansi keuangan.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Mengelola dokumen dan catatan organisasi.</li>
                  <li>Menyelenggarakan rapat dan mendokumentasikan hasilnya.</li>
                  <li>Mengelola keuangan dan pembayaran organisasi.</li>
                  <li>Menyusun dan memelihara arsip organisasi.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Menentukan kebijakan terkait administrasi dan keuangan.</li>
                  <li>Menentukan alokasi anggaran untuk kegiatan organisasi.</li>
                  <li>Menetapkan prosedur untuk pengelolaan dokumen dan catatan.</li>
                </ul><br />
  
              <h4 className="font-semibold mt-4">Departemen Riset dan Teknologi</h4>
              <p>
                  Menjadi pusat inovasi dan riset, mengelola proyek riset, serta
                  mendorong partisipasi anggota dalam pengembangan teknologi.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Mengidentifikasi peluang riset dan proyek teknologi.</li>
                  <li>Mengelola dan mengkoordinasi proyek riset yang melibatkan anggota HIMTI.</li>
                  <li>Mengorganisir seminar, konferensi, dan lokakarya riset.</li>
                  <li>Membangun jaringan kerjasama dengan entitas riset eksternal.</li>
                  <li>Mendorong dan mendukung partisipasi anggota dalam kompetisi riset dan teknologi.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <p>
                  Berkomitmen untuk meningkatkan kualitas pendidikan dan pelatihan
                  mahasiswa Teknik Informatika, memastikan pengembangan akademis
                  dan profesional yang optimal.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Mengembangkan program pendidikan dan kurikulum HIMTI.</li>
                  <li>Menyusun dan melaksanakan kursus, seminar, workshop, dan pengabdian kepada masyarakat.</li>
                  <li>Mendorong kolaborasi dengan lembaga pendidikan dan industri.</li>
                  <li>Memantau perkembangan akademis anggota HIMTI.</li>
                  <li>Memberikan dukungan dalam persiapan anggota untuk menghadapi tantangan akademis dan profesional.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Menentukan struktur kurikulum dan materi pendidikan HIMTI.</li>
                  <li>Mengalokasikan sumber daya untuk kegiatan pendidikan dan pelatihan.</li>
                  <li>Menyusun kebijakan terkait evaluasi kinerja akademis anggota.</li>
                  <li>Mengembangkan program mentoring dan bimbingan akademis.</li>
                  <li>Menentukan strategi untuk memperkuat kerjasama dengan institusi pendidikan dan mitra industri.</li>
                </ul><br />
  
              <h4 className="font-semibold mt-4">Departemen Kreatif dan Desain</h4>
              <p>
                  Bertugas merancang identitas visual HIMTI, menciptakan desain
                  grafis kreatif, dan meningkatkan daya tarik acara dan program.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Menghasilkan desain visual untuk materi promosi dan dokumentasi acara.</li>
                  <li>Memberikan inovasi kreatif dalam penyelenggaraan acara dan kegiatan HIMTI.</li>
                  <li>Membangun identitas visual yang kuat dan konsisten.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Menentukan konsep visual untuk setiap acara HIMTI.</li>
                  <li>Mengelola dan memutuskan penggunaan aspek kreatif dalam kegiatan organisasi.</li>
                </ul>
  
              <h4 className="font-semibold mt-4">Departemen Media dan Publikasi</h4>
                <p>
                  Mengelola media sosial, konten situs web, dan publikasi untuk
                  menyampaikan informasi HIMTI secara efektif dan membangun
                  kehadiran digital.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Menangani branding, promosi, dan dokumentasi kegiatan HIMTI melalui media sosial, situs web, dan media publikasi lainnya.</li>
                  <li>Mengelola konten dan jadwal publikasi.</li>
                  <li>Memastikan kualitas dan konsistensi materi publikasi.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Menetapkan pedoman dan strategi branding HIMTI.</li>
                  <li>Menentukan konten dan jadwal posting untuk media sosial.</li>
                </ul><br />
  
              <h4 className="font-semibold mt-4">Departemen Humas dan Diplomasi</h4>
              <p>
                  Membangun hubungan positif dengan pihak eksternal, menjaga
                  citra organisasi, dan menjalin kerjasama dengan alumni dan
                  mitra industri.
                </p><br />
  
                <h3>Fungsi:</h3>
                <ul>
                  <li>Membangun dan menjaga hubungan dengan alumni dan pihak eksternal.</li>
                  <li>Menangani publikasi positif dan citra HIMTI.</li>
                  <li>Menjalin kerjasama dengan organisasi dan perusahaan eksternal.</li>
                </ul><br />
  
                <h3>Wewenang:</h3>
                <ul>
                  <li>Menetapkan strategi hubungan masyarakat dan diplomasi.</li>
                  <li>Menentukan kebijakan terkait kerjasama eksternal dan publikasi positif.</li>
                  <li>Menentukan protokol untuk kunjungan dan pertemuan dengan pihak eksternal.</li>
                </ul>
            </div>
          ),
        },
      ],
    },
  ];

  export default organizationData; 
