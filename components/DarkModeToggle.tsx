"use client"

import { Moon, Sun } from "lucide-react"

export function DarkModeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
      )}
    </button>
  )
}