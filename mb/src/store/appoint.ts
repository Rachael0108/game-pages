import { create } from 'zustand'

export const useTimerStore = create((set) => ({
  hiddenTimer: false,
  setHiddenTimer: (val) => set(() => ({ hiddenTimer: val })),
  removeAllStores: () => set({ hiddenTimer: false }),
}))
