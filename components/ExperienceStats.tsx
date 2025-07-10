import { Briefcase, Users, Award } from "lucide-react"
import { Heading } from "@components/Heading"
import { Body } from "@components/TextElements"

export function ExperienceStats() {
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
