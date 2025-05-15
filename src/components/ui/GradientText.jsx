function GradientText({
  children,
  className = "",
  from = "from-blue-hosta",
  via = "via-vivid-cerise",
  to = "to-bright-sun",
  animate = false,
}) {
  const gradientClasses = `bg-gradient-to-r ${from} ${via ? via : ""} ${to} bg-clip-text text-transparent`
  const animationClasses = animate ? "animate-gradient-x bg-size-200" : ""

  return <span className={`${gradientClasses} ${animationClasses} ${className}`}>{children}</span>
}

export default GradientText
