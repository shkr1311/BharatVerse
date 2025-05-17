"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PageTransitionContextType {
  isAnimating: boolean
  setIsAnimating: (value: boolean) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function usePageTransition() {
  const context = useContext(PageTransitionContext)
  if (context === undefined) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider")
  }
  return context
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <PageTransitionContext.Provider value={{ isAnimating, setIsAnimating }}>{children}</PageTransitionContext.Provider>
  )
}
