"use client"

import { type ReactNode, useState } from "react"

interface TooltipProps {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onTouchStart={() => setIsVisible(true)}
        onTouchEnd={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg shadow-purple-500/40 pointer-events-none z-50">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rotate-45"></div>
        </div>
      )}
    </div>
  )
}
