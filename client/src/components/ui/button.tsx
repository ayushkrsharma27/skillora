import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
       "rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95",

        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",

        variant === "secondary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700",

        variant === "outline" &&
          "border border-slate-300 bg-white hover:bg-slate-100",

        className
      )}
    >
      {children}
    </button>
  );
}