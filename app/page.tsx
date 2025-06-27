"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Briefcase,
  Code,
  Calendar,
  Building,
  Zap,
  Rocket,
  Users,
  Award,
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

// Enhanced typography components with Material Design principles
function Display({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

function Heading({
  children,
  level = 2,
  className = "",
}: { children: React.ReactNode; level?: number; className?: string }) {
  const sizes = {
    1: "text-4xl font-normal",
    2: "text-3xl font-normal",
    3: "text-2xl font-medium",
    4: "text-xl font-semibold",
    5: "text-lg font-semibold",
  }
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={cn(
        sizes[level as keyof typeof sizes],
        "tracking-tight leading-tight text-gray-900 dark:text-white",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

function Body({
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

function Caption({
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

function Link({
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
    <a href={href} className={cn("transition-colors duration-200", variants[variant], className)} {...props}>
      {children}
    </a>
  )
}

// Material Design inspired dark mode toggle
function DarkModeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
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

// Material Design Timeline Component
function MaterialTimeline({ items }: { items: any[] }) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="space-y-8">
          {items.map((item, index) => {
            const isExpanded = expandedItems.has(index)
            const isCurrent = index === 0

            return (
              <div key={`${item.company}-${index}`} className="relative group">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center mb-4">
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-4 transition-all duration-300",
                      isCurrent
                        ? "bg-blue-500 border-blue-200 dark:bg-blue-400 dark:border-blue-600 shadow-lg shadow-blue-500/30"
                        : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 group-hover:border-blue-400 dark:group-hover:border-blue-500",
                    )}
                  />
                  {isCurrent && (
                    <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping opacity-20" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <div
                    className={cn(
                      "bg-white dark:bg-[#1d1d27] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700",
                      "hover:-translate-y-1 hover:shadow-2xl",
                      isCurrent && "ring-2 ring-blue-500/20 dark:ring-blue-400/20",
                    )}
                    onClick={() => toggleExpanded(index)}
                  >
                    {/* Card header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <Heading
                              level={4}
                              className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                            >
                              {item.role}
                            </Heading>
                            {isCurrent && (
                              <Badge className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                <Zap className="w-3 h-3 mr-1" />
                                Current
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <Heading level={5} className="text-blue-600 dark:text-blue-400 font-semibold">
                              {item.company}
                            </Heading>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                        </div>

                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <Body color="secondary" className="leading-relaxed">
                          {item.details}
                        </Body>
                      </div>
                    </div>

                    {/* Expand hint */}
                    {!isExpanded && (
                      <div className="px-6 pb-4">
                        <Caption color="muted" className="text-xs">
                          Click to expand details
                        </Caption>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Material Design Project Cards
function MaterialProjectCard({ project }: { project: any }) {
  return (
    <div className="group bg-white dark:bg-[#1d1d27] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
      {/* Image section with overlay */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={project.mockupImage || "/placeholder.svg"}
          alt={project.company}
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating action button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <Heading
              level={4}
              className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1"
            >
              {project.company}
            </Heading>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs px-2 py-1 rounded-full font-medium ml-2 flex-shrink-0">
              {project.keyOutcome}
            </Badge>
          </div>
          <Caption className="text-gray-600 dark:text-gray-400 font-normal">{project.role}</Caption>
        </div>

        {/* Description */}
        <Body color="secondary" className="text-sm leading-relaxed mb-6 line-clamp-3">
          {project.problemSolved}
        </Body>

        {/* Tech stack */}
        <div className="mb-6">
          <Caption className="text-gray-700 dark:text-gray-300 mb-3 font-semibold">Tech Stack</Caption>
          <div className="flex flex-wrap gap-2">
            {project.techStack
              .split(", ")
              .slice(0, 4)
              .map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors px-3 py-1 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            {project.techStack.split(", ").length > 4 && (
              <Badge
                variant="outline"
                className="text-xs border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full"
              >
                +{project.techStack.split(", ").length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Action button */}
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg group-hover:bg-blue-700">
            <span>View Project</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </div>
  )
}

// Material Design inspired stats component for Experience
function ExperienceStats() {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-blue-600 dark:text-blue-400">
            4+
          </Heading>
          <Body color="secondary" className="font-medium">
            Years of Experience
          </Body>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow">
            <Users className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-green-600 dark:text-green-400">
            12+
          </Heading>
          <Body color="secondary" className="font-medium">
            Projects Worked
          </Body>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow">
            <Award className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-purple-600 dark:text-purple-400">
            100+
          </Heading>
          <Body color="secondary" className="font-medium">
            Bugs Resolved
          </Body>
        </div>
      </div>
    </div>
  )
}

// Material Design inspired stats component for Projects
function ProjectStats() {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-orange-600 dark:text-orange-400">
            14
          </Heading>
          <Body color="secondary" className="font-medium">
            Projects Built
          </Body>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-shadow">
            <Code className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-teal-600 dark:text-teal-400">
            20+
          </Heading>
          <Body color="secondary" className="font-medium">
            Technologies Used
          </Body>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white dark:bg-[#1d1d27] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-shadow">
            <Users className="h-8 w-8 text-white" />
          </div>
          <Heading level={2} className="mb-3 text-pink-600 dark:text-pink-400">
            100+
          </Heading>
          <Body color="secondary" className="font-medium">
            Users Impacted
          </Body>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false)
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false)

  // Dark mode persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      company: "ZS Associates",
      role: "Decision Analyst Associate",
      period: "Sep 2024 - Present",
      details:
        "Delivered actionable insights through pre-launch reports and competitive intelligence, shaping strategic decisions for Fortune 500 clients in healthcare. Led cross-functional teams to analyze market trends and competitor strategies, resulting in data-driven recommendations that influenced multi-million dollar product positioning decisions.",
    },
    {
      company: "Mrikal Studios",
      role: "Data Engineer",
      period: "Jun 2024 - Sep 2024",
      details:
        "Automated NoSQL-to-SQL data migration via custom scripts, optimizing project delivery timelines by identifying workflow bottlenecks. Built scalable data pipelines processing 10M+ records daily, implementing real-time monitoring dashboards that reduced project delays by 25% through early bottleneck identification.",
    },
    {
      company: "Megaminds Technologies",
      role: "SDE ML Intern",
      period: "Sep 2023 - Jun 2024",
      details:
        "Created machine learning models for CAN network intrusion detection with 95% accuracy through architecture research. Implemented deep learning algorithms using TensorFlow and PyTorch, contributing to a patent-pending security framework that enhanced vehicle network protection against cyber threats.",
    },
    {
      company: "ShopUp",
      role: "Business Finance Intern",
      period: "Apr 2023 - Aug 2023",
      details:
        "Designed standardized pricing SOPs and executive dashboards, driving 5% revenue growth through actionable cost analysis. Collaborated with C-suite executives to streamline financial workflows, implementing automated reporting systems that saved 15+ hours weekly in manual data compilation.",
    },
    {
      company: "Echo",
      role: "SDE ML Intern",
      period: "Feb 2023 - Mar 2023",
      details:
        "Architected cloud-based system for fine-tuning OpenAI LLMs on e-commerce reviews, enabling scalable sentiment analysis. Developed microservices architecture handling 100K+ daily API requests, implementing caching strategies that improved response times by 60% while reducing infrastructure costs.",
    },
    {
      company: "Ignitus",
      role: "SDE ML Intern",
      period: "Sep 2022 - Jan 2023",
      details:
        "Applied unsupervised learning to CRM data, improving targeting accuracy by 30% through cluster analysis. Implemented K-means and hierarchical clustering algorithms on customer datasets of 50K+ records, creating actionable segments that increased marketing campaign effectiveness and customer retention rates.",
    },
    {
      company: "MTAB",
      role: "Data Analyst Intern",
      period: "Aug 2022 - Oct 2022",
      details:
        "Created interactive Tableau dashboards revealing $50K+ in potential margin improvements across product lines. Performed comprehensive data analysis on sales patterns, inventory turnover, and customer behavior, delivering insights that informed strategic pricing decisions and inventory optimization.",
    },
  ]

  const projects = [
    {
      company: "Aierd",
      role: "Personal AI Assistant",
      keyOutcome: "Task Automation",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/AIERD.png",
      problemSolved:
        "Developed an AI assistant to automate routine tasks and provide personalized insights, reducing manual effort and improving decision-making efficiency for users across various domains.",
      techStack: "Python, TensorFlow, PyTorch, React, Node.js, FastAPI, PostgreSQL",
      projectLink: "https://aired.vercel.app/",
    },
    {
      company: "CredWise",
      role: "Find Credit Card of your choice",
      keyOutcome: "Card comparison app",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/cred.png",
      problemSolved:
        "Built an application to list all the credit cards available and conveniently let the user compare the best suitable one.",
      techStack: "React, Node.js, Express.js, PostgreSQL, Socket.IO",
      projectLink: "https://credwise.vercel.app/",
    },
    {
      company: "TaskFlow",
      role: "Keep track of your time and tasks",
      keyOutcome: "Task Management App",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/task.png",
      problemSolved:
        "Built a comprehensive task management application to help users organize their work, track time, and improve productivity through intuitive interfaces and smart scheduling features.",
      techStack: "React, Node.js, Express.js, PostgreSQL, Socket.IO",
      projectLink: "https://taskflowwwbeta.vercel.app/",
    },
    {
      company: "TaskFlow Pro",
      role: "Advanced Task Management Suite",
      keyOutcome: "Enterprise Task Management",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/task.png",
      problemSolved:
        "Built an enterprise-grade task management platform with advanced features like team collaboration, project templates, time tracking, and detailed analytics for improved productivity across organizations.",
      techStack: "React, Node.js, Express.js, PostgreSQL, Redis, WebSocket",
      projectLink: "https://taskflowwwbeta.vercel.app/",
    },
    {
      company: "Dosevisor",
      role: "Medical Prescription Reader",
      keyOutcome: "Prescription OCR",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/DOSEVISOR.png",
      problemSolved:
        "Created a medical prescription reader that accurately digitizes handwritten and printed prescriptions, minimizing human error and enhancing patient safety in medication management.",
      techStack: "Python, OpenCV, Tesseract OCR, Flask, React Native, MongoDB",
      projectLink: "https://dosevisor.vercel.app/",
    },
    {
      company: "Time Until",
      role: "Time until specific events",
      keyOutcome: "Event Tracking App",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/until.png",
      problemSolved:
        "Developed an application to accurately track time until specific events, helping users manage their schedules and anticipation for personal or professional milestones.",
      techStack: "React, Node.js, Express.js, PostgreSQL, Socket.IO",
      projectLink: "https://time-untill-psi.vercel.app/",
    },
    {
      company: "Flix",
      role: "Personalized Movie Recommendation",
      keyOutcome: "Movie Recs AI",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/FLIX.png",
      problemSolved:
        "Implemented a personalized movie recommendation system to combat decision fatigue and provide users with highly relevant film suggestions based on their viewing history and preferences.",
      techStack: "Python, Scikit-learn, Pandas, Flask, React, MongoDB",
      projectLink: "https://flixxxxx.vercel.app/",
    },
    {
      company: "Driftio",
      role: "AI Generated Newsletter",
      keyOutcome: "AI Newsletters",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/DRIFTIO.png",
      problemSolved:
        "Designed an AI-driven platform for generating personalized newsletters, addressing information overload by delivering tailored content to users based on their interests and preferences.",
      techStack: "Python, GPT-3/GPT-4 (OpenAI API), LangChain, Next.js, Express.js, Redis",
      projectLink: "https://driftio.vercel.app/",
    },
    {
      company: "MigrEngine",
      role: "Automated data warehousing",
      keyOutcome: "DB Migration Tool",
      mockupImage: "https://raw.githubusercontent.com/valyrian24052/Project-Demo/main/mig.png",
      problemSolved:
        "Developed an automated solution for migrating data from non-relational databases to relational data warehouses, reducing manual effort, improving data integrity, and accelerating data analytics processes.",
      techStack: "Python, Apache Spark, Kafka, AWS S3, Redshift, Glue, DynamoDB",
      projectLink: "https://github.com/valyrian24052/NoSQL-to-PgSQL-Automated-Migration",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Figma",
  ]

  // Show only first 6 projects initially
  const featuredProjectsCount = 0
  const displayedProjects = isProjectsExpanded ? projects : projects.slice(0, featuredProjectsCount)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm dark:shadow-gray-800/20 border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#">
              <Heading level={5} className="font-semibold">
                Shashank Sharma
              </Heading>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" variant="nav">
                About
              </Link>
              <Link href="#experience" variant="nav">
                Experience
              </Link>
              <Link href="#work" variant="nav">
                Work
              </Link>
              <Link href="#contact" variant="nav">
                Contact
              </Link>
              <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
              <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu size={24} className="text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 rounded-b-lg shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link href="#about" variant="nav" className="block px-3 py-2">
                  About
                </Link>
                <Link href="#experience" variant="nav" className="block px-3 py-2">
                  Experience
                </Link>
                <Link href="#work" variant="nav" className="block px-3 py-2">
                  Work
                </Link>
                <Link href="#contact" variant="nav" className="block px-3 py-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Display className="mb-8">
              Product Designer &<br />
              <span className="text-blue-600 dark:text-blue-400">Developer</span>
            </Display>
            <Body size="xl" color="secondary" className="mb-12 max-w-3xl mx-auto">
              I create digital experiences that bridge the gap between beautiful design and functional technology.
            </Body>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
              onClick={() => window.open("https://github.com/valyrian24052", "_blank", "noopener,noreferrer")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="mb-8">
              About Me
            </Heading>
            <Body size="lg" color="secondary" className="mb-8 max-w-3xl mx-auto">
              I'm a passionate product designer and full-stack developer with over 5 years of experience creating
              digital solutions that users love. I believe in the power of design thinking to solve complex problems.
            </Body>
            <Body size="lg" color="secondary" className="mb-12 max-w-3xl mx-auto">
              When I'm not designing or coding, you can find me exploring new technologies, contributing to open source
              projects, or sharing knowledge with the design community.
            </Body>

            <div className="mb-8">
              <Heading level={4} className="mb-6">
                Skills & Technologies
              </Heading>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 px-4 py-2 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading level={1} className="mb-6">
              Work Experience
            </Heading>
            <Body size="xl" color="secondary" className="max-w-3xl mx-auto mb-12">
              My professional journey across data science, engineering, and business analytics.
            </Body>
          </div>

          <ExperienceStats />

          <div className="text-center mb-8">
            <Button
              onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {isExperienceExpanded ? "Hide" : "View"} All Experiences
              {isExperienceExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          <div
            className={cn(
              "transition-all duration-500 overflow-hidden",
              isExperienceExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="pt-8">
              <MaterialTimeline items={experiences} />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading level={1} className="mb-6">
              Featured Work
            </Heading>
            <Body size="xl" color="secondary" className="max-w-3xl mx-auto mb-12">
              A selection of projects that showcase my approach to design and development.
            </Body>
          </div>

          <ProjectStats />

          {/* Show More/Less Projects Button - Positioned right after stats */}
          <div className="text-center mb-12">
            <Button
              onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {isProjectsExpanded ? "Hide All Projects" : "View All Projects"}
              {isProjectsExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <MaterialProjectCard key={project.company} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Heading level={1} className="mb-6">
            Let's Work Together
          </Heading>
          <Body size="xl" color="secondary" className="mb-12 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's create something amazing together.
          </Body>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={() => window.location.href = "mailto:shashanksharma.1214@gmail.com"}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={() => window.open("https://github.com/valyrian24052", "_blank", "noopener,noreferrer")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/shashanksharma1214/", "_blank", "noopener,noreferrer")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Caption color="secondary" className="font-medium">
              © 2024 Shashank Sharma. Designed and built with care.
            </Caption>
          </div>
        </div>
      </footer>
    </div>
  )
}
