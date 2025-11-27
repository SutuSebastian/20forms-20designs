import styles from '../styles'

function ReactNoCssPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>React + No CSS previews</h2>
        <p style={styles.previewHelper}>Plain HTML forms rendered when React + No CSS is selected.</p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their React + No CSS implementations.
        </p>
      ) : (
        <div style={styles.previewGrid}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]

            return (
              <div key={`react-no-css-${form}`} style={styles.previewCard}>
                <div style={styles.comboLabel}>{form}</div>
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

export default ReactNoCssPreview
