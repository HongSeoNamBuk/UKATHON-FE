import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "text-display-20 flex cursor-pointer items-center justify-center gap-2.5 rounded-lg transition-colors disabled:cursor-not-allowed py-4",
  {
    variants: {
      variant: {
        primary:
          "text-display-20 bg-main text-white disabled:bg-50 disabled:text-white",
        secondary:
          "text-display-20 bg-white text-90",
      },
    },
    defaultVariants: {variant: "primary" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant}), className)}
      {...props}
    />
  )
);

Button.displayName = "Button";