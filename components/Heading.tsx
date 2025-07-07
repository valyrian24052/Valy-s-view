import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

const sizes = {
  1: "text-4xl font-normal",
  2: "text-3xl font-normal",
  3: "text-2xl font-medium",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
}

export function Heading({
  children,
  level = 2,
  className = "",
}: {
  children: React.ReactNode
  level?: number
  className?: string
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Tag className={cn(sizes[level as keyof typeof sizes], "tracking-tight leading-tight", className)}>
      {children}
    </Tag>
  )
}
