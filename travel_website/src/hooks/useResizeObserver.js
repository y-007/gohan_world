import { useState, useEffect, useRef } from 'react'

export function useResizeObserver() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    setWidth(el.getBoundingClientRect().width)
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, width]
}

// Maps containerWidth linearly between minPx and maxPx over the range [minW, maxW]
export function fluidSize(width, minPx, maxPx, minW = 300, maxW = 1000) {
  if (width <= minW) return minPx
  if (width >= maxW) return maxPx
  return minPx + (maxPx - minPx) * (width - minW) / (maxW - minW)
}
