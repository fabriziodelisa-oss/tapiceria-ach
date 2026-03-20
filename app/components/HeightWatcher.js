'use client'

import { useEffect } from 'react'

export default function HeightWatcher() {
  useEffect(() => {
    const topbar = document.querySelector('.topbar')
    if (!topbar) return

    const update = () => {
      const h = topbar.getBoundingClientRect().height
      document.documentElement.style.setProperty('--topbar-height', `${h}px`)
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(topbar)
    window.addEventListener('resize', update)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return null
}
