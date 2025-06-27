"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading, Body, Caption } from "@/components/ui/typography"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  company: string
  role: string
  period: string
  details: string
  type?: "current" | "past"
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
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
      <div className="space-y-6">
        {items.map((item, index) => {
          const isExpanded = expandedItems.has(index)
          const isCurrent = index === 0

          return (
            <Card
              key={`${item.company}-${index}`}
              className={cn(
                "group cursor-pointer transition-all duration-200 border border-gray-200 hover:border-gray-300 bg-white",
                "hover:shadow-md",
                isCurrent ? "ring-1 ring-blue-100 bg-blue-50/30" : "",
              )}
              onClick={() => toggleExpanded(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Heading level={4} className="group-hover:text-blue-600 transition-colors duration-200">
                        {item.role}
                      </Heading>
                      {isCurrent && (
                        <Badge
                          variant="default"
                          className="bg-green-500 hover:bg-green-500 text-white text-xs px-2 py-1"
                        >
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mb-1">
                      <Heading level={5} color="primary" className="font-medium">
                        {item.company}
                      </Heading>
                      <Caption color="secondary" className="font-normal">
                        {item.period}
                      </Caption>
                    </div>
                  </div>
                  <button className="ml-6 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Expandable details */}
                <div
                  className={cn(
                    "transition-all duration-300 overflow-hidden",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="pt-6 border-t border-gray-100">
                    <Body color="secondary" className="leading-relaxed">
                      {item.details}
                    </Body>
                  </div>
                </div>

                {/* Expand hint */}
                {!isExpanded && (
                  <div className="mt-4">
                    <Caption color="muted" className="text-xs font-normal">
                      Click to view details
                    </Caption>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

// Clean stats component
export function TimelineStats({ items }: { items: TimelineItem[] }) {
  const totalExperience = items.length
  const currentYear = new Date().getFullYear()
  const startYear = 2022
  const yearsOfExperience = currentYear - startYear

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Heading level={2} className="mb-2 text-gray-900">
            {totalExperience}
          </Heading>
          <Body color="secondary" className="font-normal">
            Total Positions
          </Body>
        </div>
        <div className="text-center">
          <Heading level={2} className="mb-2 text-gray-900">
            {yearsOfExperience}+
          </Heading>
          <Body color="secondary" className="font-normal">
            Years Experience
          </Body>
        </div>
        <div className="text-center">
          <Heading level={2} className="mb-2 text-gray-900">
            7
          </Heading>
          <Body color="secondary" className="font-normal">
            Companies
          </Body>
        </div>
      </div>
    </div>
  )
}
