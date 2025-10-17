import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("px-10 py-3 cursor-pointer rounded-lg font-medium", {
  variants: {
    variant: {
      default: "bg-white text-black",
      outlined: "bg-white text-white border-transparent bg-clip-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Button = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
