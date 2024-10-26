import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-xs bg-dark-main text-white py-8 rounded-md mb-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
        {/* Menu Section */}
        <div className="mb-4 lg:w-1/3 lg:mb-0">
          <div>
            <h3 className="text-xs font-bold mb-2">MENU</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/events" legacyBehavior>
                  <a className="hover:text-gray-300">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/articles" legacyBehavior>
                  <a className="hover:text-gray-300">Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/programs" legacyBehavior>
                  <a className="hover:text-gray-300">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs" legacyBehavior>
                  <a className="hover:text-gray-300">FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Camp Section */}
        <div className="mb-4 lg:w-1/3 lg:mb-0">
          <div>
            <h3 className="text-xs font-bold mb-2">OUR CAMP</h3>
            <p className="text-xs">About Us</p>
            <p className="text-xs">
              Jl. Raya Mabes Hankam No.Kav 9, Setu, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 16680
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center lg:justify-end items-center lg:w-1/3">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/images/logo.svg" width={320.01} height={144} alt="logo" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
