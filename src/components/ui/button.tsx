import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-fancy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:brightness-110 shadow-sm border border-transparent",

                // SECONDARY (Solid Gold): Para destacar acciones alternativas
                // secondary:
                //   "bg-secondary text-secondary-foreground hover:brightness-110 shadow-sm border border-transparent",

                outline:
                    "border border-border bg-background text-foreground hover:bg-surface hover:text-foreground",

                ghost:
                    "hover:bg-surface hover:text-foreground text-muted-foreground",

            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-10 text-base",
                icon: "h-11 w-11",
            },
            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            fullWidth: false,
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, isLoading, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && (
                    <span className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin-slow text-current" />
                    </span>
                )}

                <span
                    className={cn(
                        "flex items-center gap-2 transition-opacity duration-200",
                        isLoading ? "opacity-0" : "opacity-100"
                    )}
                >
                    {children}
                </span>
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }