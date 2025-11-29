import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LIBRARIES, FORMS } from './config'

export type ThemeMode = 'light' | 'dark'
export type GroupBy = 'library' | 'form'

interface AppState {
  // State
  themeMode: ThemeMode
  groupBy: GroupBy
  selectedForms: string[]
  selectedLibraries: string[]

  // Actions
  setThemeMode: (theme: ThemeMode) => void
  setGroupBy: (groupBy: GroupBy) => void
  toggleFormSelection: (form: string) => void
  selectAllForms: () => void
  selectNoForms: () => void
  toggleLibrarySelection: (library: string) => void
  selectAllLibraries: () => void
  selectNoLibraries: () => void
}

// Default selections
const defaultSelectedForms = FORMS.slice(0, 3)
const defaultSelectedLibraries = LIBRARIES.filter((lib) => lib.implemented)
  .slice(0, 3)
  .map((lib) => lib.name)

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      themeMode: 'light',
      groupBy: 'library',
      selectedForms: defaultSelectedForms,
      selectedLibraries: defaultSelectedLibraries,

      // Actions
      setThemeMode: (themeMode) => set({ themeMode }),
      setGroupBy: (groupBy) => set({ groupBy }),

      toggleFormSelection: (form) =>
        set((state) => ({
          selectedForms: state.selectedForms.includes(form)
            ? state.selectedForms.filter((f) => f !== form)
            : [...state.selectedForms, form],
        })),

      selectAllForms: () => set({ selectedForms: [...FORMS] }),
      selectNoForms: () => set({ selectedForms: [] }),

      toggleLibrarySelection: (library) =>
        set((state) => ({
          selectedLibraries: state.selectedLibraries.includes(library)
            ? state.selectedLibraries.filter((l) => l !== library)
            : [...state.selectedLibraries, library],
        })),

      selectAllLibraries: () =>
        set({
          selectedLibraries: LIBRARIES.filter((lib) => lib.implemented).map(
            (lib) => lib.name
          ),
        }),
      selectNoLibraries: () => set({ selectedLibraries: [] }),
    }),
    {
      name: 'forms-comparison-storage',
    }
  )
)
