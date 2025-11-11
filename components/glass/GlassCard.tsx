"use client"
import React, { useCallback, useRef, useState } from "react"
import LiquidGlass from "@/components/glass/LiquidGlass"

type Intensity = "subtle" | "light" | "medium" | "strong" | "intense"

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  variant?: "subtle" | "intense"
  interactive?: boolean
  specular?: boolean
  intensity?: Intensity
  mouseTracking?: boolean
  useAdvancedEffects?: boolean
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "subtle",
  interactive = false,
  specular = false,
  intensity = "medium",
  mouseTracking = false,
  useAdvancedEffects = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!mouseTracking || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const clampedX = Math.max(0, Math.min(1, x))
      const clampedY = Math.max(0, Math.min(1, y))
      setMouse({ x: clampedX, y: clampedY })
    },
    [mouseTracking]
  )

  const handleMouseLeave = useCallback(() => {
    if (!mouseTracking) return
    setMouse({ x: 0.5, y: 0.5 })
  }, [mouseTracking])

  const intensityMul =
    intensity === "subtle"
      ? 0.8
      : intensity === "light"
      ? 1
      : intensity === "medium"
      ? 1.2
      : intensity === "strong"
      ? 1.45
      : 1.7
  const overlayOpacity = useAdvancedEffects ? 0.35 : 0.15
  const spotlight = `radial-gradient(400px 400px at ${Math.round(mouse.x * 100)}% ${Math.round(
    mouse.y * 100
  )}%, rgba(255,255,255,${overlayOpacity}), transparent 60%)`

  const motion = interactive ? "transition-transform duration-300 hover:scale-[1.02]" : ""

  return (
    <LiquidGlass
      className="rounded-xl text-white"
      cornerRadius={24}
      mode="prominent"
      blurAmount={0.05 * intensityMul}
      saturation={160 * intensityMul}
    >
      <div
        ref={ref}
        className={[
          "relative overflow-hidden border border-white/10 bg-white/5 text-white",
          variant === "intense" ? "bg-white/10" : "",
          motion,
          className,
        ].join(" ")}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {specular && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 to-transparent [mask-image:radial-gradient(white,transparent_60%)]"
          />
        )}
        {useAdvancedEffects && mouseTracking && (
          <div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: spotlight }} />
        )}
        <div className="relative z-[1]">{children}</div>
      </div>
    </LiquidGlass>
  )
}

export default GlassCard
