import { cn } from "@/lib/utils"

export function Link({
  children,
  href,
  variant = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  href: string
  variant?: "default" | "nav" | "button"
  className?: string
  [key: string]: any
}) {
  const variants = {
    default:
      "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline-offset-4 hover:underline font-medium",
    nav: "text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 no-underline font-medium",
    button:
      "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-md no-underline font-medium",
  }
  return (
    <a
      href={href}
      className={cn("transition-colors duration-200", variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  )
}