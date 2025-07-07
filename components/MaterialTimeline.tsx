"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar, Building, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Heading } from "@components/Heading"
import { Body, Caption } from "@components/TextElements"

export function MaterialTimeline({ items }: { items: any[] }) {
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

                <div className="flex-1">
                  <div
                    className={cn(
                      "bg-white dark:bg-[#1d1d27] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700",
                      "hover:-translate-y-1 hover:shadow-2xl",
                      isCurrent && "ring-2 ring-blue-500/20 dark:ring-blue-400/20",
                    )}
                    onClick={() => toggleExpanded(index)}
                  >
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

                    <div className={cn("overflow-hidden transition-all duration-300", isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <Body color="secondary" className="leading-relaxed">
                          {item.details}
                        </Body>
                      </div>
                    </div>

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
