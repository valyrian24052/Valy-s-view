import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@components/Heading"
import { Body, Caption } from "@components/TextElements"

export function MaterialProjectCard({ project }: { project: any }) {
  return (
    <div className="group bg-white dark:bg-[#1d1d27] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={project.mockupImage || "/placeholder.svg"}
          alt={project.company}
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </div>

      <div className="p-6">
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

        <Body color="secondary" className="text-sm leading-relaxed mb-6 line-clamp-3">
          {project.problemSolved}
        </Body>

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
