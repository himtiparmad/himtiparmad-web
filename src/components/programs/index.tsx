import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ProgramsProps {
  title: string;
  href: string;
  backgroundColor?: "white" | "green";
}

const Programs: React.FC<ProgramsProps> = ({
  title,
  href,
  backgroundColor,
}) => {
  return (
    <Link
      href={href}
      className={`w-full  p-6 flex flex-row items-center justify-between rounded-lg ${
        backgroundColor === "green" ? "bg-brand-main" : "bg-white bg-opacity-5"
      }`}
    >
      <div>
        <p className="text-4xl text-light-main">{title}</p>
      </div>
      <div>
        <Icon
          href={href}
          icon={"material-symbols:arrow-right-alt"}
          className={`w-12 h-12 transform rotate-[-45deg] ${
            backgroundColor === "green" ? "text-white" : "text-brand-main"
          }`}
        />
      </div>
    </Link>
  );
};

export default Programs;
