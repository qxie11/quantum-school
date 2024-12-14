import { forwardRef, ButtonHTMLAttributes } from "react";
import cx from "classnames";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "large" | "medium" | "small";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", size = "medium", className, ...props },
    ref
  ) => {
    const baseStyles = `font-medium rounded-lg transition-all duration-150 focus:outline-none hover:shadow-[0px_1px_11px_5px_rgba(255,255,255,0.5)]
    focus:shadow-[0px_1px_11px_5px_rgba(255,255,255,0.5)]`;

    const variantStyles = {
      primary:
        "bg-primary text-white hover:brightness-125 hover:shadow-[0px_1px_11px_5px_rgba(255,255,255,0.5)]",
      ghost:
        "bg-transparent text-primary border-4 border-primary hover:bg-primary hover:text-white",
    };

    const sizeStyles = {
      large: "px-20 py-6 text-lg",
      medium: "px-12 py-4 text-base",
      small: "px-6 py-2 text-sm",
    };

    const buttonClasses = cx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
