import styles from '../styles'

function ShadcnUiPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>shadcn/ui previews</h2>
        <p style={styles.previewHelper}>
          shadcn/ui form implementations rendered when shadcn/ui is selected.
        </p>
      </div>

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
                <div style={styles.previewFormWrapper}>
                  <FormComponent />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ShadcnUiPreview
