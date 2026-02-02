import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

const buttonVariants = cva(
    "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-display font-medium text-lg border transition duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 w-full md:w-auto", {
    variants: {
        variant: {
            primary:
                "bg-primary border-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90",
            secondary:
                'bg-white/80 backdrop-blur-md border-border/60 text-foreground shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:text-black',
        },
        stable: {
            true: "active:scale-[0.95]",
            false: "hover:-translate-y-0.5 active:scale-[0.95]",
        },
    },
    defaultVariants: {
        variant: "secondary",
        stable: false,
    },
}
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    icon?: LucideIcon | React.ElementType
    href?: string
    target?: string
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant, stable, asChild = false, icon: Icon, href, children, ...props }, ref) => {

        const internalContent = (
            <>
                <span>{children}</span>
                {Icon && (
                    <Icon
                        size={18}
                        className={cn(
                            "transition duration-300 ease-out opacity-90 group-hover:opacity-100",
                            variant === "primary"
                                ? "text-white"
                                : "text-neutral-500 group-hover:text-black"
                        )}
                    />
                )}
            </>
        )

        const commonClasses = cn(buttonVariants({ variant, stable, className }))

        if (asChild) {
            return (
                <Slot className={commonClasses} ref={ref} {...props}>
                    {children}
                </Slot>
            )
        }

        if (href) {
            return (
                <Link
                    href={href}
                    className={commonClasses}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    target={props.target || "_blank"}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {internalContent}
                </Link>
            )
        }

        return (
            <button
                className={commonClasses}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...props}
            >
                {internalContent}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }