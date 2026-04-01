import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "brand" | "ghost";
  size?: "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "brand",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-headline font-bold rounded-2xl transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed brand-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

    const variants = {
      brand:
        "bg-gradient-to-br from-primary to-primary-container text-white shadow-xl",
      ghost:
        "bg-surface-container-low text-heading hover:opacity-80",
    };

    const sizes = {
      md: "px-6 md:px-8 py-3 text-sm",
      lg: "px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
