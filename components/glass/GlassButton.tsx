"use client"
import React from "react"
import GlassContainer from "@/components/glass/GlassContainer"

type GlassButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "ghost" | "default"
  size?: "small" | "medium" | "large"
  intensity?: "subtle" | "light" | "medium" | "strong" | "intense"
  mouseTracking?: boolean
  useAdvancedEffects?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const sizeMap: Record<NonNullable<GlassButtonProps["size"]>, string> = {
  small: "px-4 py-1.5 text-sm",
  medium: "px-6 py-2 text-sm",
  large: "px-8 py-2.5 text-base",
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "medium",
  intensity = "strong",
  mouseTracking = true,
  useAdvancedEffects = true,
  onClick,
}) => {
  const sizeCls = sizeMap[size]
  const variantCls = variant === "primary" ? "text-primary-content" : "text-base-content"

  return (
    <GlassContainer
      intensity={intensity}
      mouseTracking={mouseTracking}
      useAdvancedEffects={useAdvancedEffects}
      className={`inline-block rounded-full ${className}`}
    >
      <div
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        className={`inline-flex w-full items-center justify-center rounded-full font-semibold tracking-wide ${sizeCls} ${variantCls}`}
      >
        {children}
      </div>
    </GlassContainer>
  )
}

export default GlassButton
