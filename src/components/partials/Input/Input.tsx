import { forwardRef } from "react";
import cx from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(
          "w-full rounded-lg border p-4 text-sm focus:outline-none focus:ring-2 transition-all",
          {
            "border-gray-300 focus:ring-blue-500": !error,
            "border-red-500 focus:ring-red-500": error,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";