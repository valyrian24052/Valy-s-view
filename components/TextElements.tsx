// components/TextElements.tsx
import { cn } from "@/lib/utils"

export function Display({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-gray-900 dark:text-white",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function Body({
  children,
  size = "md",
  color = "default",
  className = "",
}: {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  color?: "default" | "secondary" | "muted"
  className?: string
}) {
  const sizes = {
    sm: "text-sm font-normal",
    md: "text-base font-normal",
    lg: "text-lg font-normal",
    xl: "text-xl font-light",
  }
  const colors = {
    default: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-gray-300",
    muted: "text-gray-500 dark:text-gray-400",
  }
  return <p className={cn(sizes[size], colors[color], "leading-relaxed", className)}>{children}</p>
}

export function Caption({
  children,
  color = "default",
  className = "",
}: {
  children: React.ReactNode
  color?: "default" | "secondary" | "muted"
  className?: string
}) {
  const colors = {
    default: "text-gray-700 dark:text-gray-200",
    secondary: "text-gray-500 dark:text-gray-400",
    muted: "text-gray-400 dark:text-gray-500",
  }
  return <span className={cn("text-sm font-medium", colors[color], className)}>{children}</span>
}
