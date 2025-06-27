import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime" // Import JSX to declare the variable

// Display Text Component (Hero headlines)
const displayVariants = cva("font-light tracking-tight leading-tight", {
  variants: {
    size: {
      sm: "text-4xl sm:text-5xl",
      md: "text-5xl sm:text-6xl lg:text-7xl",
      lg: "text-6xl sm:text-7xl lg:text-8xl",
    },
    color: {
      default: "text-gray-900",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})

export interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof displayVariants> {
  as?: "h1" | "h2" | "h3"
}

export function Display({ className, size, color, as: Comp = "h1", ...props }: DisplayProps) {
  return <Comp className={cn(displayVariants({ size, color }), className)} {...props} />
}

// Heading Components
const headingVariants = cva("tracking-tight", {
  variants: {
    level: {
      1: "text-4xl font-light leading-tight",
      2: "text-3xl font-light leading-tight",
      3: "text-2xl font-normal leading-snug",
      4: "text-xl font-medium leading-snug",
      5: "text-lg font-medium leading-normal",
      6: "text-base font-semibold leading-normal",
    },
    color: {
      default: "text-gray-900",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      white: "text-white",
    },
  },
  defaultVariants: {
    level: 2,
    color: "default",
  },
})

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({ className, level, color, as, ...props }: HeadingProps) {
  const Comp = as || (`h${level}` as keyof JSX.IntrinsicElements)
  return <Comp className={cn(headingVariants({ level, color }), className)} {...props} />
}

// Body Text Component
const bodyVariants = cva("leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm font-normal",
      md: "text-base font-normal",
      lg: "text-lg font-normal",
      xl: "text-xl font-light",
    },
    color: {
      default: "text-gray-900",
      secondary: "text-gray-600",
      muted: "text-gray-500",
      white: "text-white",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    weight: "normal",
  },
})

export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof bodyVariants> {
  as?: "p" | "span" | "div"
}

export function Body({ className, size, color, weight, as: Comp = "p", ...props }: BodyProps) {
  return <Comp className={cn(bodyVariants({ size, color, weight }), className)} {...props} />
}

// Caption/Small Text Component
const captionVariants = cva("font-medium leading-normal", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
    },
    color: {
      default: "text-gray-700",
      secondary: "text-gray-500",
      muted: "text-gray-400",
      primary: "text-blue-600",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
  },
})

export interface CaptionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof captionVariants> {
  as?: "span" | "p" | "div" | "small"
}

export function Caption({ className, size, color, as: Comp = "span", ...props }: CaptionProps) {
  return <Comp className={cn(captionVariants({ size, color }), className)} {...props} />
}

// Link Component
const linkVariants = cva("transition-colors duration-200 font-medium", {
  variants: {
    variant: {
      default: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline",
      subtle: "text-gray-600 hover:text-blue-600",
      nav: "text-gray-600 hover:text-blue-600 no-underline",
      button: "text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-md no-underline",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {}

export function Link({ className, variant, size, ...props }: LinkProps) {
  return <a className={cn(linkVariants({ variant, size }), className)} {...props} />
}

// Label Component (for forms and UI elements)
const labelVariants = cva("font-medium leading-none", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
    },
    color: {
      default: "text-gray-900",
      secondary: "text-gray-700",
      muted: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
  },
})

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

export function Label({ className, size, color, ...props }: LabelProps) {
  return <label className={cn(labelVariants({ size, color }), className)} {...props} />
}

// Quote Component
const quoteVariants = cva("italic border-l-4 border-blue-200 pl-6", {
  variants: {
    size: {
      md: "text-lg font-light leading-relaxed",
      lg: "text-xl font-light leading-relaxed",
    },
    color: {
      default: "text-gray-700",
      secondary: "text-gray-600",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})

export interface QuoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof quoteVariants> {}

export function Quote({ className, size, color, ...props }: QuoteProps) {
  return <blockquote className={cn(quoteVariants({ size, color }), className)} {...props} />
}

// Code Component
const codeVariants = cva("font-mono rounded px-1.5 py-0.5", {
  variants: {
    variant: {
      inline: "bg-gray-100 text-gray-800 text-sm",
      block: "bg-gray-900 text-gray-100 p-4 rounded-lg text-sm leading-relaxed",
    },
  },
  defaultVariants: {
    variant: "inline",
  },
})

export interface CodeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof codeVariants> {
  as?: "code" | "pre"
}

export function Code({ className, variant, as: Comp = "code", ...props }: CodeProps) {
  return <Comp className={cn(codeVariants({ variant }), className)} {...props} />
}
