import { useRef } from 'react'
import { useScrollLock } from './useScrollLock.ts'

export const useSwiper = (handleNext: () => void, handlePrev: () => void) => {
  const MIN_TOUCH_DISTANCE = 50;
  const startX = useRef(0);
  const endX = useRef(0);

  const { addScrollLock, removeScrollLock } = useScrollLock()

  const handleStart = (e) => {
    addScrollLock()
    startX.current = e.touches[0].clientX;
  }
  const handleMove = (e) => {
    endX.current = e.touches[0].clientX;
  }
  const handleEnd = () => {
    const distance = Math.abs(startX.current - endX.current)
    if(distance > MIN_TOUCH_DISTANCE) {
      if(startX.current > endX.current) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    removeScrollLock()
  }

  return {
    handleStart,
    handleMove,
    handleEnd
  }
}
