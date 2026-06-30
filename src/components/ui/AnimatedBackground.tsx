import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'

// ─── Constellation network ────────────────────────────────────────
const NODES = [
  { id: 0,  cx: 5,  cy: 18, r: 2   },
  { id: 1,  cx: 18, cy: 6,  r: 2.5 },
  { id: 2,  cx: 33, cy: 20, r: 2   },
  { id: 3,  cx: 14, cy: 38, r: 3   },
  { id: 4,  cx: 50, cy: 9,  r: 2.5 },
  { id: 5,  cx: 63, cy: 24, r: 2   },
  { id: 6,  cx: 78, cy: 8,  r: 2   },
  { id: 7,  cx: 92, cy: 20, r: 2.5 },
  { id: 8,  cx: 88, cy: 42, r: 2   },
  { id: 9,  cx: 72, cy: 50, r: 3   },
  { id: 10, cx: 55, cy: 40, r: 2   },
  { id: 11, cx: 38, cy: 52, r: 2.5 },
  { id: 12, cx: 22, cy: 63, r: 2   },
  { id: 13, cx: 8,  cy: 70, r: 3   },
  { id: 14, cx: 28, cy: 82, r: 2   },
  { id: 15, cx: 46, cy: 76, r: 2.5 },
  { id: 16, cx: 60, cy: 86, r: 2   },
  { id: 17, cx: 76, cy: 73, r: 2   },
  { id: 18, cx: 90, cy: 65, r: 2.5 },
  { id: 19, cx: 96, cy: 82, r: 2   },
  { id: 20, cx: 42, cy: 93, r: 3   },
  { id: 21, cx: 16, cy: 92, r: 2   },
  { id: 22, cx: 68, cy: 60, r: 2.5 },
  { id: 23, cx: 47, cy: 30, r: 3.5 }, // hub — larger, cyan
]

const EDGES: [number, number][] = [
  [0,1],[1,2],[2,4],[4,6],[6,7],[7,8],
  [0,3],[1,3],[2,3],[1,4],[4,5],[5,6],
  [2,23],[4,23],[5,23],[5,9],[5,10],
  [3,12],[6,9],[8,9],[9,22],[9,17],
  [10,23],[10,11],[10,22],
  [11,12],[11,15],[12,13],[13,21],
  [14,21],[14,15],[15,16],[15,20],
  [16,17],[17,18],[17,22],
  [18,19],[19,8],[20,16],[21,20],
]

// Animated data pulses that travel along edges
const PULSES = [
  { from: 1,  to: 4,  color: '#3B82F6', dur: 3.0, delay: 0,   rd: 7  },
  { from: 4,  to: 23, color: '#06B6D4', dur: 2.5, delay: 1.2, rd: 8  },
  { from: 23, to: 10, color: '#3B82F6', dur: 3.5, delay: 0.4, rd: 9  },
  { from: 10, to: 15, color: '#8B5CF6', dur: 2.8, delay: 2.0, rd: 7  },
  { from: 5,  to: 9,  color: '#06B6D4', dur: 3.0, delay: 3.5, rd: 8  },
  { from: 9,  to: 17, color: '#3B82F6', dur: 2.5, delay: 0.8, rd: 9  },
  { from: 3,  to: 12, color: '#8B5CF6', dur: 3.0, delay: 4.5, rd: 7  },
  { from: 12, to: 13, color: '#06B6D4', dur: 2.0, delay: 1.5, rd: 8  },
  { from: 6,  to: 5,  color: '#3B82F6', dur: 2.8, delay: 5.0, rd: 9  },
  { from: 22, to: 17, color: '#8B5CF6', dur: 3.2, delay: 2.5, rd: 7  },
]

// Vertical light traces — fall from top to bottom periodically
const TRACES = [
  { left: '12%', dur: 4.0, delay: 0,   h: 180, c: 'rgba(59,130,246,0.65)'  },
  { left: '28%', dur: 5.5, delay: 2.0, h: 130, c: 'rgba(6,182,212,0.55)'   },
  { left: '45%', dur: 3.8, delay: 0.8, h: 200, c: 'rgba(139,92,246,0.55)'  },
  { left: '58%', dur: 4.5, delay: 4.0, h: 160, c: 'rgba(59,130,246,0.45)'  },
  { left: '72%', dur: 6.0, delay: 1.5, h: 220, c: 'rgba(6,182,212,0.50)'   },
  { left: '85%', dur: 3.5, delay: 3.0, h: 150, c: 'rgba(139,92,246,0.45)'  },
  { left: '93%', dur: 5.0, delay: 6.0, h: 170, c: 'rgba(59,130,246,0.55)'  },
]

// Four corner UI brackets — give a "tech interface" frame feel
const CORNERS: CSSProperties[] = [
  { top: '20px',    left: '20px',  borderTop: '1px solid rgba(59,130,246,0.28)',    borderLeft:   '1px solid rgba(59,130,246,0.28)' },
  { top: '20px',    right: '20px', borderTop: '1px solid rgba(59,130,246,0.28)',    borderRight:  '1px solid rgba(59,130,246,0.28)' },
  { bottom: '20px', left: '20px',  borderBottom: '1px solid rgba(59,130,246,0.28)', borderLeft:   '1px solid rgba(59,130,246,0.28)' },
  { bottom: '20px', right: '20px', borderBottom: '1px solid rgba(59,130,246,0.28)', borderRight:  '1px solid rgba(59,130,246,0.28)' },
]

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 30% 40%, #0f172a 0%, #020817 100%)',
        }}
      />
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* ── 1 · Deep base with modern gradient ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 120% 90% at 50% 10%, #0f1729 0%, #020817 45%, #030b1f 100%)',
        }}
      />

      {/* ── 1.5 · Mesh gradient overlay for depth ─────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(139, 92, 246, 0.12) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(6, 182, 212, 0.10) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.08) 0px, transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.4, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ── 2 · Enhanced Aurora bands — smooth gradient waves ─────── */}
      <motion.div
        style={{
          position: 'absolute', top: '-30%', left: '-20%',
          width: '140%', height: '35%',
          background:
            'linear-gradient(135deg, transparent, rgba(59,130,246,0.16) 30%, rgba(6,182,212,0.14) 50%, rgba(59,130,246,0.12) 70%, transparent)',
          transform: 'rotate(-18deg)',
          filter: 'blur(50px)',
        }}
        initial={{ x: -8, y: -6 }}
        animate={{
          x: [- 8, 12, -8],
          y: [-6, 8, -6],
          opacity: [0.6, 0.85, 0.6]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute', top: '20%', left: '-30%',
          width: '160%', height: '25%',
          background:
            'linear-gradient(125deg, transparent, rgba(139,92,246,0.13) 30%, rgba(59,130,246,0.11) 50%, rgba(139,92,246,0.09) 70%, transparent)',
          transform: 'rotate(-14deg)',
          filter: 'blur(55px)',
        }}
        initial={{ x: -10, y: -4 }}
        animate={{
          x: [-10, 14, -10],
          y: [-4, 6, -4],
          opacity: [0.5, 0.75, 0.5]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
      <motion.div
        style={{
          position: 'absolute', top: '55%', left: '-10%',
          width: '130%', height: '30%',
          background:
            'linear-gradient(140deg, transparent, rgba(6,182,212,0.12) 30%, rgba(34,197,94,0.09) 50%, rgba(6,182,212,0.08) 70%, transparent)',
          transform: 'rotate(-20deg)',
          filter: 'blur(50px)',
        }}
        initial={{ x: -6, y: -5 }}
        animate={{
          x: [-6, 10, -6],
          y: [-5, 7, -5],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 15 }}
      />

      {/* ── 2.5 · Floating gradient orbs ─────── */}
      <motion.div
        style={{
          position: 'absolute', top: '15%', right: '20%',
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [-20, 20, -20],
          y: [-30, 30, -30],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        style={{
          position: 'absolute', bottom: '25%', left: '15%',
          width: 350, height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0.07) 40%, transparent 70%)',
          filter: 'blur(45px)',
        }}
        animate={{
          x: [20, -20, 20],
          y: [25, -25, 25],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
      />

      {/* ── 3 · Constellation SVG — nodes + edges + data pulses ─────── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Node glow filter */}
          <filter id="nglow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Pulse dot glow filter */}
          <filter id="pglow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.45" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Fine background grid */}
          <pattern id="bgrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(148,163,184,0.055)" strokeWidth="0.15" />
          </pattern>
        </defs>

        {/* Fine grid */}
        <rect width="100" height="100" fill="url(#bgrid)" />

        {/* Network edges */}
        {EDGES.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b]
          return (
            <line
              key={i}
              x1={na.cx} y1={na.cy}
              x2={nb.cx} y2={nb.cy}
              stroke="rgba(148,163,184,0.13)"
              strokeWidth="0.2"
            />
          )
        })}

        {/* Network nodes — enhanced pulse with scale */}
        {NODES.map((n) => (
          <motion.g key={n.id}>
            {/* Outer ring pulse */}
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r * 2.5}
              fill="none"
              stroke={n.id === 23 ? 'rgba(6,182,212,0.4)' : 'rgba(59,130,246,0.3)'}
              strokeWidth="0.3"
              animate={{
                r: [n.r * 2.5, n.r * 4, n.r * 2.5],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3 + (n.id % 3),
                repeat: Infinity,
                delay: (n.id * 0.19) % 4.2,
                ease: 'easeOut',
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.id === 23 ? 'rgba(6,182,212,0.95)' : 'rgba(59,130,246,0.85)'}
              filter="url(#nglow)"
              animate={{
                opacity: [0.4, 1, 0.6, 1, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3 + (n.id % 3),
                repeat: Infinity,
                delay: (n.id * 0.19) % 4.2,
                ease: 'easeInOut',
              }}
            />
          </motion.g>
        ))}

        {/* Data pulses — travel along edges */}
        {PULSES.map((p, i) => {
          const fn = NODES[p.from]
          const tn = NODES[p.to]
          return (
            <motion.circle
              key={`p${i}`}
              r={1.6}
              fill={p.color}
              filter="url(#pglow)"
              initial={{ cx: fn.cx, cy: fn.cy, opacity: 0 }}
              animate={{
                cx: [fn.cx, fn.cx, tn.cx, tn.cx],
                cy: [fn.cy, fn.cy, tn.cy, tn.cy],
                opacity: [0, 1, 0.85, 0],
              }}
              transition={{
                duration: p.dur,
                times: [0, 0.06, 0.86, 1],
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: p.rd,
                ease: 'linear',
              }}
            />
          )
        })}
      </svg>

      {/* ── 4 · Vertical light traces — fall periodically ─────────── */}
      {TRACES.map((t, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: t.left,
            width: 1,
            height: t.h,
            background: `linear-gradient(180deg, transparent 0%, ${t.c} 35%, ${t.c} 65%, transparent 100%)`,
            filter: 'blur(0.5px)',
          }}
          animate={{ y: ['-100vh', '115vh'], opacity: [0, 0.92, 0.92, 0] }}
          transition={{
            duration: t.dur,
            repeat: Infinity,
            delay: t.delay,
            repeatDelay: 5.5 + i * 1.6,
            ease: 'linear',
          }}
        />
      ))}

      {/* ── 5 · Enhanced glowing cores with subtle pulse ── */}
      <motion.div
        style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '-18%', left: '-12%',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.24) 0%, rgba(6,182,212,0.10) 40%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '-14%', right: '-8%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Additional accent glow - top right */}
      <motion.div
        style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
          filter: 'blur(35px)',
          top: '10%', right: '-5%',
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 10,
        }}
      />

      {/* ── 6 · Corner UI brackets ────────────────────────────────── */}
      {CORNERS.map((c, i) => (
        <div
          key={i}
          style={{ position: 'fixed', width: 26, height: 26, ...c }}
        />
      ))}

      {/* ── 7 · Enhanced edge vignette with gradient border ─────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 115% 115% at 50% 50%, transparent 35%, rgba(2,8,23,0.60) 75%, rgba(2,8,23,0.85) 100%)',
        }}
      />

      {/* Subtle gradient borders at edges */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4) 50%, transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)',
        }}
      />

    </div>
  )
}

