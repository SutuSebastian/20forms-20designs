// Inlined styles from styles.js
const styles = {
  previewSection: { marginTop: '32px' },
  placeholderText: { margin: '12px 0' },
  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },
  previewCard: {
    border: '1px solid #c1c7cd',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '420px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  frameHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  comboLabel: { fontWeight: 600, marginBottom: '2px', fontSize: '0.95rem' },
  libraryChip: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '999px',
    backgroundColor: '#f1f3f8',
    color: '#1f2933',
    fontWeight: 600,
    fontSize: '0.9rem',
    width: 'fit-content',
  },
  previewFormWrapper: { padding: '10px', display: 'block' },
}
import '../tailwind-no-preflight.css'
import FormErrorBoundary from './FormErrorBoundary'
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewSectionHeader from './PreviewSectionHeader'

function ShadcnUiPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  // Use prefers-color-scheme as fallback if no themeMode prop
  const getThemeMode = () => {
    if (typeof window !== 'undefined' && !themeMode) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return themeMode || 'light'
  }
  const currentTheme = getThemeMode()

  return (
    <section style={styles.previewSection}>
      <PreviewSectionHeader
        title="shadcn/ui previews"
        description="shadcn/ui form implementations rendered when shadcn/ui is selected."
      />

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their shadcn/ui implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`shadcn-ui-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>shadcn/ui</div>
                </div>
                <PreviewFormWrapper
                  formName={form}
                  libraryName="shadcn/ui"
                  resetKey={`shadcn-ui-${form}`}
                  themeMode={currentTheme}
                >
                  <FormComponent />
                </PreviewFormWrapper>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ShadcnUiPreview
