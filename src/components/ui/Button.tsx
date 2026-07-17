"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5e6ad2] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#f7f8f8] text-black hover:bg-white",
        secondary:
          "bg-white/5 text-[#f7f8f8] border border-white/10 hover:bg-white/10 hover:border-white/15",
        ghost:
          "text-[#a6a6a6] hover:text-[#f7f8f8] hover:bg-white/5",
        accent:
          "bg-[#5e6ad2] text-white hover:bg-[#7170ff]",
      },
      size: {
        sm: "h-8 px-4 text-[13px]",
        md: "h-10 px-5 text-[14px]",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-9 text-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}