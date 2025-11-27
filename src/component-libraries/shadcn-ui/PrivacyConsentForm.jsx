import * as Checkbox from '@radix-ui/react-checkbox'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    lineHeight: '20px',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  fieldset: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  legend: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    padding: '0 8px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  checkboxIndicator: {
    color: '#ffffff',
    fontSize: '12px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#0f172a',
    cursor: 'pointer',
  },
  button: {
    height: '40px',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#18181b',
    color: '#fafafa',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="privacy-name" style={styles.label}>
          Full name
        </label>
        <input
          id="privacy-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="privacy-email" style={styles.label}>
          Email address
        </label>
        <input
          id="privacy-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <fieldset style={styles.fieldset}>
        <legend style={styles.legend}>Communication channels</legend>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="privacy-email-opt" name="emailOptIn" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="privacy-email-opt" style={styles.checkboxLabel}>
            Email updates
          </label>
        </div>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="privacy-sms-opt" name="smsOptIn" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="privacy-sms-opt" style={styles.checkboxLabel}>
            SMS notifications
          </label>
        </div>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="privacy-phone-opt" name="phoneOptIn" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="privacy-phone-opt" style={styles.checkboxLabel}>
            Phone calls
          </label>
        </div>
      </fieldset>
      <fieldset style={styles.fieldset}>
        <legend style={styles.legend}>Privacy options</legend>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="privacy-analytics" name="analytics" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="privacy-analytics" style={styles.checkboxLabel}>
            Allow analytics cookies
          </label>
        </div>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="privacy-personalization" name="personalization" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="privacy-personalization" style={styles.checkboxLabel}>
            Allow personalized content
          </label>
        </div>
      </fieldset>
      <div style={styles.fieldGroup}>
        <label htmlFor="privacy-notes" style={styles.label}>
          Additional notes
        </label>
        <textarea
          id="privacy-notes"
          name="notes"
          rows="3"
          style={styles.textarea}
          placeholder="Any additional preferences (optional)"
        />
      </div>
      <button type="submit" style={styles.button}>
        Save preferences
      </button>
    </form>
  )
}

export default PrivacyConsentForm
