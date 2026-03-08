'use client'

import { createContext, useContext, useCallback, useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const AUDIO_SRC = '/audio/bushveld.mp3'

type AmbientContext = {
  isPlaying: boolean
  toggle: () => void
}

const AmbientContext = createContext<AmbientContext | null>(null)

export function useAmbient() {
  const ctx = useContext(AmbientContext)
  return ctx
}

export function AmbientAudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggle = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev
      if (audioRef.current) {
        if (next) {
          audioRef.current.play().catch(() => {})
        } else {
          audioRef.current.pause()
        }
      }
      return next
    })
  }, [])

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.volume = 0.15
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false))
    else audioRef.current.pause()
  }, [isPlaying])

  return (
    <AmbientContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </AmbientContext.Provider>
  )
}

export function AmbientAudioToggle() {
  const ctx = useAmbient()
  if (!ctx) return null
  return (
    <button
      type="button"
      onClick={ctx.toggle}
      className="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 -m-2 text-white/80 hover:text-gold-500 transition-colors"
      aria-label={ctx.isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
    >
      {ctx.isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  )
}
