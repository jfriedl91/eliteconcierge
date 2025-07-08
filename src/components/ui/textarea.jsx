import React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-none border-b-2 border-gold/40 bg-transparent px-3 py-2 text-base text-platinum ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }