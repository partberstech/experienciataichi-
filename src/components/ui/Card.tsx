import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative overflow-hidden transition-all duration-300 ease-spring",
  {
    variants: {
      variant: {
        default:
          "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-card hover:shadow-card-hover hover:-translate-y-1",
        elevated:
          "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-elevated",
        flat:
          "bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50",
        glass:
          "glass",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      radius: {
        none: "",
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        xl: "rounded-3xl",
        full: "rounded-full",
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      radius: "lg",
      interactive: true,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  padding,
  radius,
  interactive,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding, radius, interactive, className }))}
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
        "font-heading font-semibold text-neutral-900 dark:text-neutral-50",
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
      className={cn(
        "text-sm text-neutral-600 dark:text-neutral-400 mt-1",
        className
      )}
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
      className={cn("mt-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50 flex items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}