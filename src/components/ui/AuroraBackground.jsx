import { Stars, Float } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

// Using the brand colors for the aurora effect
const COLORS = ["#64C4B2", "#45C6EE", "#526BB1", "#DA1D81", "#FED33C"]

// Custom big star component
function BigStar({ position, size, color }) {
  const ref = useRef()

  useFrame((state) => {
    // Add subtle pulsing effect
    ref.current.scale.setScalar(size * (1 + Math.sin(state.clock.elapsedTime) * 0.1))
  })

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} />
        <pointLight color={color} intensity={1} distance={20} />
      </mesh>
    </Float>
  )
}

// Generate random positions for big stars
function generateBigStars(count) {
  return Array.from({ length: count }, () => ({
    position: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 50 - 25],
    size: Math.random() * 0.5 + 0.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }))
}

// Scene component with stars
function StarScene() {
  const bigStars = generateBigStars(15)

  return (
    <>
      <Stars count={2500} factor={4} fade speed={2} />
      {bigStars.map((star, i) => (
        <BigStar key={i} {...star} />
      ))}
      <ambientLight intensity={0.1} />
    </>
  )
}

function AuroraBackground({ children }) {
  const color = useMotionValue(COLORS[0])

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })
  }, [color])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py- text-gray-200"
    >
      {/* Content landing-container */}
      <div className="relative z-10">{children}</div>

      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 50], fov: 45 }}>
          <StarScene />
        </Canvas>
      </div>
    </motion.section>
  )
}

export default AuroraBackground
