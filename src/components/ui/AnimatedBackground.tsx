import { motion, useReducedMotion } from 'framer-motion'

// Geometric shapes for visual interest
const SHAPES = [
  { id: 1, type: 'circle', size: 400, x: 15, y: 20, color: 'rgba(99, 102, 241, 0.25)' },
  { id: 2, type: 'circle', size: 350, x: 70, y: 60, color: 'rgba(59, 130, 246, 0.22)' },
  { id: 3, type: 'circle', size: 450, x: 50, y: 80, color: 'rgba(6, 182, 212, 0.20)' },
]

// Floating orbs with trails - reduced for performance
const ORBS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}))

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(135deg, #0f1729 0%, #020510 100%)',
        }}
      />
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* ── 1. Rich gradient base - static for performance ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(135deg,
              #0a0f1e 0%,
              #0d1321 25%,
              #050a1a 50%,
              #020510 75%,
              #000408 100%
            )
          `,
        }}
      />

      {/* ── 2. Animated mesh gradient overlay - optimized ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(at 20% 20%, rgba(99, 102, 241, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 30%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(6, 182, 212, 0.18) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 10% 60%, rgba(14, 165, 233, 0.12) 0px, transparent 50%)
          `,
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ── 3. Large animated gradient blobs - GPU optimized ─────────────────────────────────────────── */}
      {SHAPES.map((shape, index) => (
        <motion.div
          key={shape.id}
          style={{
            position: 'absolute',
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
            filter: 'blur(70px)',
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, 60 * (index % 2 === 0 ? 1 : -1), 0],
            y: [0, 45 * (index % 2 === 0 ? -1 : 1), 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 28 + index * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 2,
          }}
        />
      ))}

      {/* ── 4. Floating luminous orbs - reduced and optimized ─────────────────────────────────────────── */}
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          style={{
            position: 'absolute',
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background:
              orb.id % 4 === 0
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)'
                : orb.id % 4 === 1
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, transparent 70%)'
                : orb.id % 4 === 2
                ? 'radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, transparent 70%)',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -120 - orb.id * 8, 0],
            x: [0, Math.sin(orb.id) * 40, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* ── 5. Animated light streaks ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '120%',
          height: 1.5,
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.7) 50%, transparent)',
          filter: 'blur(1px)',
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '-10%',
          width: '120%',
          height: 1.5,
          background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6) 50%, transparent)',
          filter: 'blur(1px)',
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 10,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* ── 6. Diagonal light rays ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '30%',
          width: 200,
          height: '140%',
          background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.15) 50%, transparent)',
          transform: 'rotate(15deg)',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '25%',
          width: 180,
          height: '140%',
          background: 'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.12) 50%, transparent)',
          transform: 'rotate(-15deg)',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* ── 7. Geometric grid pattern - static for performance ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.4,
        }}
      />

      {/* ── 8. Radial burst from center - optimized ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 800,
          height: 800,
          marginLeft: -400,
          marginTop: -400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ── 9. Corner accent glows - static for performance ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          borderRadius: '0 0 100% 0',
          background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 400,
          height: 400,
          borderRadius: '100% 0 0 0',
          background: 'radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          opacity: 0.6,
        }}
      />

      {/* ── 10. Enhanced vignette ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 110% 110% at 50% 50%, transparent 30%, rgba(2,5,16,0.4) 70%, rgba(2,5,16,0.85) 100%)
          `,
        }}
      />

      {/* ── 11. Subtle noise texture ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* ── 12. Glassmorphism overlay hints - optimized rotation ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 250,
          height: 250,
          borderRadius: '30%',
          background: 'rgba(99, 102, 241, 0.05)',
          border: '1px solid rgba(99, 102, 241, 0.1)',
          willChange: 'transform',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          width: 200,
          height: 200,
          borderRadius: '40%',
          background: 'rgba(6, 182, 212, 0.04)',
          border: '1px solid rgba(6, 182, 212, 0.08)',
          willChange: 'transform',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
