import Link from "next/link";
import React from "react";

type ButtonProps = {
  text?: string;
  variant: "green";
  onClick?: () => void;
  icon?: React.ReactNode | null;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
};

const Button = (props: ButtonProps) => {
  const {
    text,
    variant,
    onClick,
    icon,
    iconPosition = "left",
    href,
    size,
    className,
  } = props;

  const variantClasses = {
    green: "bg-brand-main text-black",
  }[variant];

  const content = (
    <div className="flex flex-row gap-2">
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text ? <span className={`text-${size}`}>{text}</span> : null}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${variantClasses} flex items-center justify-center`}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${className} ${variantClasses} flex items-center justify-center`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
