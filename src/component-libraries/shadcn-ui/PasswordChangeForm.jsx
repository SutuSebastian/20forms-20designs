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

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="password-change-current" style={styles.label}>
          Current password
        </label>
        <input
          id="password-change-current"
          name="currentPassword"
          type="password"
          required
          style={styles.input}
          placeholder="Enter current password"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="password-change-new" style={styles.label}>
          New password
        </label>
        <input
          id="password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          required
          style={styles.input}
          placeholder="Enter new password"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="password-change-confirm" style={styles.label}>
          Confirm new password
        </label>
        <input
          id="password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
          style={styles.input}
          placeholder="Confirm new password"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="password-change-logout" name="logoutOthers" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="password-change-logout" style={styles.checkboxLabel}>
          Sign out of other devices
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Update password
      </button>
    </form>
  )
}

export default PasswordChangeForm
