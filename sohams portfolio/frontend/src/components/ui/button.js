import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

// Utility to merge class names
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Button component
export const Button = React.forwardRef(function Button(
  { className, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
