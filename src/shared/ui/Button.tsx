import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "px-8 py-3 bg-black hover:bg-gray-900 text-white font-medium rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
);