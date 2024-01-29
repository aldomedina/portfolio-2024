import { create } from 'zustand'

const useLandingStore = create((set) => ({
  activeProject: false,
  setActiveProject: (activeProject) => set(() => ({ activeProject })),
}))

export default useLandingStore
