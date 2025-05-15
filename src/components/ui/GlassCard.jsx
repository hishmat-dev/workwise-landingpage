function GlassCard({
  children,
  className = "",
  blur = "backdrop-blur-md",
  background = "bg-white/30",
  border = "border border-white/20",
  shadow = "shadow-lg",
  hover = "hover:bg-white/40 hover:shadow-xl",
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={`${background} ${blur} ${border} ${shadow} ${hover} ${rounded} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassCard
