const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  description: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
    lineHeight: '20px',
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
  buttonOutline: {
    height: '40px',
    padding: '8px 16px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'transparent',
    color: '#18181b',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
}

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <p style={styles.description}>
        Enter the code from your authenticator app or SMS.
      </p>
      <div style={styles.fieldGroup}>
        <label htmlFor="two-factor-code" style={styles.label}>
          Verification code
        </label>
        <input
          id="two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength="6"
          required
          style={styles.input}
          placeholder="Enter 6-digit code"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="two-factor-backup" style={styles.label}>
          Backup code (optional)
        </label>
        <input
          id="two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          style={styles.input}
          placeholder="Enter backup code"
        />
      </div>
      <div style={styles.buttonGroup}>
        <button type="submit" style={styles.button}>
          Verify
        </button>
        <button
          type="button"
          onClick={() => alert('A new code has been sent!')}
          style={styles.buttonOutline}
        >
          Resend code
        </button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
