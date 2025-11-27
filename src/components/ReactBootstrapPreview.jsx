import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles'
import FormErrorBoundary from './FormErrorBoundary'

function ReactBootstrapPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>React Bootstrap previews</h2>
        <p style={styles.previewHelper}>
          React Bootstrap form implementations rendered when React Bootstrap is
          selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their React Bootstrap implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`react-bootstrap-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>React Bootstrap</div>
                </div>
                <div style={styles.previewFormWrapper}>
                  <FormErrorBoundary
                    formName={form}
                    libraryName="React Bootstrap"
                    resetKey={`react-bootstrap-${form}`}
                  >
                    <FormComponent />
                  </FormErrorBoundary>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ReactBootstrapPreview
