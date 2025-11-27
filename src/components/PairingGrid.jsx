import styles from '../styles'

function PairingGrid({ combinations }) {
  return (
    <section style={styles.combosSection}>
      <h2 style={styles.sectionTitle}>Selected pairings</h2>
      {combinations.length === 0 ? (
        <p style={styles.placeholderText}>
          Choose at least one form and one component library to see the grid of implementations.
        </p>
      ) : (
        <div style={styles.comboGrid}>
          {combinations.map((combo) => (
            <div key={`${combo.form}-${combo.library}`} style={styles.comboCard}>
              <div style={styles.comboLabel}>{combo.form}</div>
              <div style={styles.comboSubLabel}>{combo.library}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default PairingGrid
