import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ArticleCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  src,
  alt,
  title,
  description,
  href,
}) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <Image
          src={src}
          alt={alt}
          width={190}
          height={190}
          className="rounded-md"
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-xl font-semibold text-brand-main mb-2">{title}</h2>
        <p className="text-base text-dark-dark pb-[98px]">{description}</p>
        <Link href={href} legacyBehavior>
          <a className="text-brand-main flex items-center">
            Read more
            <Icon
              icon={"material-symbols:arrow-right-alt"}
              className="w-6 h-6 ml-2 transform rotate-[-45deg]"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
