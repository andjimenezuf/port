"use client"
import React, { useCallback, useRef, useState } from "react"
import LiquidGlass from "@/components/glass/LiquidGlass"

type Intensity = "subtle" | "light" | "medium" | "strong" | "intense"

type GlassContainerProps = {
  children: React.ReactNode
  intensity?: Intensity
  blur?: number
  saturation?: number
  cornerRadius?: number
  mode?: "standard" | "polar" | "prominent" | "shader"
  className?: string
  style?: React.CSSProperties
  mouseTracking?: boolean
  useAdvancedEffects?: boolean
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  intensity = "medium",
  blur = 20,
  saturation = 180,
  cornerRadius = 24,
  mode = "prominent",
  className = "",
  style,
  mouseTracking = true,
  useAdvancedEffects = true,
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
  const blurPx = Math.round(blur * intensityMul)
  const satPct = Math.round(saturation * intensityMul)
  const overlayOpacity = useAdvancedEffects ? 0.35 : 0.15
  const spotlight = `radial-gradient(600px 600px at ${Math.round(mouse.x * 100)}% ${Math.round(mouse.y * 100)}%, rgba(255,255,255,${overlayOpacity}), transparent 60%)`

  return (
    <LiquidGlass
      cornerRadius={cornerRadius}
      mode={mode}
      className={`relative text-white ${className}`}
      style={{
        backdropFilter: `blur(${blurPx}px) saturate(${satPct}%)`,
        WebkitBackdropFilter: `blur(${blurPx}px) saturate(${satPct}%)`,
        ...style,
      }}
    >
      {useAdvancedEffects && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ backgroundImage: spotlight }}
        />
      )}
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </LiquidGlass>
  )
}

export default GlassContainer
