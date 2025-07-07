import { Rocket, Code, Users } from "lucide-react"
import { Heading } from "@components/Heading"
import { Body } from "@components/TextElements"

export function ProjectStats() {
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
