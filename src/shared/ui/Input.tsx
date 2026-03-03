import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-base placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  )
);