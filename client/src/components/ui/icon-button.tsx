import * as React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    };

    const variantClasses = {
      default: "text-yaqeen-gray hover:text-yaqeen-teal",
      outline: "border border-yaqeen-gray text-yaqeen-gray hover:text-yaqeen-teal hover:border-yaqeen-teal",
      ghost: "text-yaqeen-gray hover:text-yaqeen-teal hover:bg-yaqeen-light-gray",
    };

    return (
      <button
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          "inline-flex items-center justify-center rounded-md transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
