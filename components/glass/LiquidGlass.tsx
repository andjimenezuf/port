import React from "react"

type Mode = "standard" | "polar" | "prominent" | "shader"

type LiquidGlassProps = {
  children: React.ReactNode
  displacementScale?: number
  blurAmount?: number
  saturation?: number
  elasticity?: number
  cornerRadius?: number
  mode?: Mode
  className?: string
  style?: React.CSSProperties
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  displacementScale = 70,
  blurAmount = 0.0625,
  saturation = 140,
  elasticity = 0.15,
  cornerRadius = 16,
  mode = "standard",
  className = "",
  style = {},
}) => {
  const blurPx = Math.round(blurAmount * 160)
  const radius = cornerRadius

  const base =
    "relative overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(5,6,11,0.45)] text-white"
  const prominent =
    "bg-white/10 border-white/15 shadow-[0_20px_60px_rgba(5,6,11,0.65)]"

  const modeClass = mode === "prominent" ? prominent : ""

  return (
    <div
      className={[base, modeClass, className].join(" ")}
      style={{
        borderRadius: radius,
        backdropFilter: `blur(${blurPx}px) saturate(${saturation}%)`,
        WebkitBackdropFilter: `blur(${blurPx}px) saturate(${saturation}%)`,
        ...style,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        style={{ mixBlendMode: "soft-light" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/30 opacity-50"
        style={{ boxShadow: "inset 0 0 25px rgba(255,255,255,0.12)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"
      />
      {children}
    </div>
  )
}

export default LiquidGlass
