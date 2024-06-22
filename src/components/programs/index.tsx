import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ProgramsProps {
  title: string;
  href: string;
}

const Programs: React.FC<ProgramsProps> = ({ title, href }) => {
  return (
    <div className="w-full bg-white bg-opacity-5 p-6 flex flex-row items-center justify-between rounded-lg">
      <Link href={href}>
        <p className="text-4xl text-light-main">{title}</p>
      </Link>
      <Icon
        href={href}
        icon={"material-symbols:arrow-right-alt"}
        className="w-12 h-12 transform rotate-[-45deg] text-brand-main"
      />
    </div>
  );
};

export default Programs;
