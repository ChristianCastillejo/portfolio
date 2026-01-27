"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-[10rem] border border-border bg-neutral-white px-5 py-[13px] text-base font-medium disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[#B68045] text-[#ffffff] border-[#B68045] hover:opacity-90 shadow-lg shadow-[#B68045]/20",
        secondary: "bg-neutral-white text-text-black border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-[#ffffff]",
        ghost: "text-text-black border-border hover:bg-[#B68045] hover:text-[#ffffff] hover:border-[#B68045]",
      },
      size: {
        default: "px-5 py-[13px]",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: true,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const MotionSlot = motion(Slot);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? MotionSlot : motion.button;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || (props).disabled}

        // ✨ CONFIGURACIÓN "NO-BOUNCE" (Sin rebote) ✨
        // 1. whileHover: Sube 2 píxeles.
        // 2. whileTap: Se encoge ligeramente.
        // 3. transition: Usamos 'easeOut'. El movimiento es directo: A -> B y frena.
        //    Sin oscilaciones, sin "bajar un poco". Sólido.
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}

        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span
              className={cn(
                "inline-flex items-center justify-center gap-2 transition-opacity duration-200",
                isLoading ? "opacity-0" : "opacity-100"
              )}
            >
              {children}
            </span>

            {isLoading && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  viewBox="0 0 26.349 26.35"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <circle cx="13.792" cy="3.082" r="3.082" />
                      <circle cx="13.792" cy="24.501" r="1.849" />
                      <circle cx="6.219" cy="6.218" r="2.774" />
                      <circle cx="21.365" cy="21.363" r="1.541" />
                      <circle cx="3.082" cy="13.792" r="2.465" />
                      <circle cx="24.501" cy="13.791" r="1.232" />
                      <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05 C6.902,18.996,5.537,18.988,4.694,19.84z" />
                      <circle cx="21.364" cy="6.218" r="0.924" />
                    </g>
                  </g>
                </svg>
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };