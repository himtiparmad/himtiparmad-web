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
        <p className="md:text-4xl text-md text-light-main">{title}</p>
      </div>
      <div>
        <Icon
          href={href}
          icon={"material-symbols:arrow-right-alt"}
          className={`md:w-12 md:h-12 w-4 h-4 transform rotate-[-45deg] ${
            backgroundColor === "green" ? "text-white" : "text-brand-main"
          }`}
        />
      </div>
    </Link>
  );
};

export default Programs;
