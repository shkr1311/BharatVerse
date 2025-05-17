"use client"

import { type ReactNode, useEffect } from "react"
import { motion } from "framer-motion"
import { usePageTransition } from "./page-transition-provider"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const { setIsAnimating } = usePageTransition()

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 600)

    return () => clearTimeout(timeout)
  }, [setIsAnimating])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
