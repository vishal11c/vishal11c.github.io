import { useState } from 'react'
import { motion } from 'framer-motion'
import { Circle, Square } from 'lucide-react'

interface ProfilePhotoCardProps {
  src: string
  alt: string
  name: string
  title: string
  showToggle?: boolean
  initialShape?: 'round' | 'square'
}

export function ProfilePhotoCard({
  src,
  alt,
  name,
  title,
  showToggle = true,
  initialShape = 'round',
}: ProfilePhotoCardProps) {
  const [shape, setShape] = useState<'round' | 'square'>(initialShape)
  const [isHovering, setIsHovering] = useState(false)

  const shapeClasses = {
    round: 'rounded-full',
    square: 'rounded-lg',
  }

  return (
    <div className="flex flex-col items-start gap-4">
      {showToggle && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShape('round')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              shape === 'round'
                ? 'border border-primary-main bg-primary-main/20 text-primary-main'
                : 'border border-white/20 bg-white/5 text-text-gray hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <Circle size={14} />
            Round
          </button>
          <button
            onClick={() => setShape('square')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              shape === 'square'
                ? 'border border-primary-main bg-primary-main/20 text-primary-main'
                : 'border border-white/20 bg-white/5 text-text-gray hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <Square size={14} />
            Square
          </button>
        </div>
      )}

      <motion.div
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Outer Glow Layer */}
        <motion.div
          className={`absolute inset-0 -z-10 ${shapeClasses[shape]} bg-gradient-to-br from-primary-main/40 via-primary-secondary/20 to-primary-main/20 blur-xl`}
          animate={{
            opacity: isHovering ? 1 : 0.6,
            scale: isHovering ? 1.15 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border Glow Effect */}
        <motion.div
          className={`absolute inset-0 -z-10 ${shapeClasses[shape]} bg-gradient-to-r from-primary-main/60 via-primary-secondary/40 to-primary-main/60`}
          animate={{
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main Image Container */}
        <div
          className={`relative overflow-hidden border-2 border-white/20 shadow-2xl ${shapeClasses[shape]}`}
        >
          <motion.img
            src={src}
            alt={alt}
            className="h-48 w-48 object-cover object-top"
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Overlay Shine Effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent ${shapeClasses[shape]}`}
            animate={{
              opacity: isHovering ? 0.6 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Text Info */}
      <div className="space-y-1">
        <p className="font-semibold text-text-light">{name}</p>
        <p className="text-sm text-text-gray">{title}</p>
      </div>
    </div>
  )
}
