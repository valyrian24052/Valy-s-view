// app/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, Mail, Github, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

import { Heading } from "@components/Heading"
import { Link } from "@components/Link"
import { Display, Body, Caption } from "@components/TextElements"
import { DarkModeToggle } from "@components/DarkModeToggle"
import { ExperienceStats } from "@components/ExperienceStats"
import { ProjectStats } from "@components/ProjectStats"
import { MaterialTimeline } from "@components/MaterialTimeline"
import { MaterialProjectCard } from "@components/MaterialProjectCard"

import { experiences } from "@data/experiences"
import { projects } from "@data/projects"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
  "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma",
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false)
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false)

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
    document.documentElement.classList.toggle("dark", !isDarkMode)
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light")
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuredProjectsCount = 0
  const displayedProjects = isProjectsExpanded ? projects : projects.slice(0, featuredProjectsCount)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
        ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#">
              <Heading level={5} className="font-semibold">Shashank Sharma</Heading>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" variant="nav">About</Link>
              <Link href="#experience" variant="nav">Experience</Link>
              <Link href="#work" variant="nav">Work</Link>
              <Link href="#contact" variant="nav">Contact</Link>
              <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
            </div>
            <div className="md:hidden flex items-center space-x-3">
              <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
              <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 rounded-b-lg shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link href="#about" variant="nav" className="block px-3 py-2">About</Link>
                <Link href="#experience" variant="nav" className="block px-3 py-2">Experience</Link>
                <Link href="#work" variant="nav" className="block px-3 py-2">Work</Link>
                <Link href="#contact" variant="nav" className="block px-3 py-2">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <Heading level={1} className="mb-4">Hi, I'm Shashank Sharma</Heading>
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
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
          <Heading level={1} className="mb-8 text-gray-900 dark:text-white">About Me</Heading>
            <Body size="lg" color="secondary" className="mb-8 max-w-3xl mx-auto">
              I'm a passionate product designer and full-stack developer with over 5 years of experience creating
              digital solutions that users love. I believe in the power of design thinking to solve complex problems.
            </Body>
            <Body size="lg" color="secondary" className="mb-12 max-w-3xl mx-auto">
              When I'm not designing or coding, you can find me exploring new technologies, contributing to open source
              projects, or sharing knowledge with the design community.
            </Body>
            <div className="mb-8">
              <Heading level={4} className="mb-6 text-gray-900 dark:text-white">Skills & Technologies</Heading>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
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
            <Heading level={1} className="mb-6 text-gray-900 dark:text-white">Work Experience</Heading>
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
              {isExperienceExpanded ? (
                <>
                  Hide All Experiences <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View All Experiences <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {isExperienceExpanded && (
            <div className="pt-8">
              <MaterialTimeline items={experiences} />
            </div>
          )}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading level={1} className="mb-6 text-gray-900 dark:text-white">Featured Work</Heading>
            <Body size="xl" color="secondary" className="max-w-3xl mx-auto mb-12">
              A selection of projects that showcase my approach to design and development.
            </Body>
          </div>

          <ProjectStats />

          <div className="text-center mb-12">
            <Button
              onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {isProjectsExpanded ? (
                <>
                  Hide All Projects <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <MaterialProjectCard key={project.company} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-black text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Heading level={1} className="mb-6 text-gray-900 dark:text-white ">Let's Work Together</Heading>
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
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={() => window.open("https://github.com/valyrian24052", "_blank", "noopener,noreferrer")}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-200 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/shashanksharma1214/", "_blank", "noopener,noreferrer")}
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-center">
        <Caption color="secondary">© 2024 Shashank Sharma. Designed and built with care.</Caption>
      </footer>
    </div>
  )
}
