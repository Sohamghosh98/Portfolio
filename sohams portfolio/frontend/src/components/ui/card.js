import * as React from "react";
import { cn } from "./button"; // Reusing the utility function

// Card wrapper
export function Card({ className, ...props }) {
  return (
    <div
      className={cn("rounded-2xl border bg-white/5 shadow-md", className)}
      {...props}
    />
  );
}

// Card content
export const CardContent = React.forwardRef(function CardContent(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("p-6", className)}
      {...props}
    />
  );
});
