import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-white/[0.02] border border-white/[0.08] rounded-xl",
        elevated:
          "bg-white/[0.03] border border-white/[0.08] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]",
        glass:
          "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl",
        glow:
          "bg-white/[0.02] border border-[#5e6ad2]/30 rounded-xl shadow-[0_0_30px_rgba(94,106,210,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  interactive?: boolean;
}

export function Card({
  className,
  variant,
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant }),
        interactive && "cursor-pointer hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_0_60px_rgba(0,0,0,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-medium text-[#f7f8f8] text-lg tracking-[-0.01em]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[14px] text-[#a6a6a6] leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 pt-4 border-t border-white/5 flex items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}