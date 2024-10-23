import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ArticleCardProps {
  src: string;
  alt: string;
  title: string;
  author: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  src,
  alt,
  title,
  author,
  href,
}) => {
  return (
    <div className="flex gap-6">
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={190}
          height={190}
          className="rounded-md bg-white bg-opacity-5 p-16"
        />
      </Link>

      <Link href={href} className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-light-main mb-2">
            {title}
          </h2>
          <p className="text-base text-[#797979] italic">{author}</p>
        </div>
        <div>
          <a className="text-brand-main flex items-center">
            Read more
            <Icon
              icon={"material-symbols:arrow-right-alt"}
              className="w-6 h-6 ml-2 transform rotate-[-45deg]"
            />
          </a>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
