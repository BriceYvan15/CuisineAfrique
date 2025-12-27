import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost" | "destructive"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-transform shadow-md": variant === "default",
                        "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary/10 hover:scale-105 transition-transform": variant === "secondary",
                        "border border-input bg-background hover:bg-muted hover:text-muted-foreground": variant === "outline",
                        "hover:bg-muted hover:text-muted-foreground": variant === "ghost",
                        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "destructive", // Utilizing destructive slot for primary brand color actions if needed, or just keeping standard
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-12 px-8 text-base": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
