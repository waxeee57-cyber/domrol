'use client'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`sr-hidden${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
