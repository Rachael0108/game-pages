
import { useCallback } from 'react';

export function useScrollLock() {
  const lockScroll = useCallback((e) => {
    e.preventDefault();
  }, []);

  const addScrollLock = useCallback(() => {
    document.body.addEventListener('touchmove', lockScroll, { passive: false });
    document.body.addEventListener('mousewheel', lockScroll, { passive: false });
    document.body.addEventListener('wheel', lockScroll, { passive: false });
  }, [lockScroll]);

  const removeScrollLock = useCallback(() => {
    document.body.removeEventListener('touchmove', lockScroll);
    document.body.removeEventListener('mousewheel', lockScroll);
    document.body.removeEventListener('wheel', lockScroll);
  }, [lockScroll]);

  return {
    addScrollLock,
    removeScrollLock,
  };
}
