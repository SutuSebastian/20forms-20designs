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

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-login-email" style={styles.label}>
          Email or username
        </label>
        <input
          id="user-login-email"
          name="identifier"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your email or username"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-login-password" style={styles.label}>
          Password
        </label>
        <input
          id="user-login-password"
          name="password"
          type="password"
          required
          style={styles.input}
          placeholder="Enter your password"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root
          id="user-login-remember"
          name="remember"
          style={styles.checkbox}
        >
          <Checkbox.Indicator style={styles.checkboxIndicator}>
            ✓
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="user-login-remember" style={styles.checkboxLabel}>
          Keep me signed in
        </label>
      </div>
      <div style={styles.buttonGroup}>
        <button type="submit" style={styles.button}>
          Sign in
        </button>
        <button
          type="button"
          onClick={() => alert('Password reset link flow placeholder')}
          style={styles.buttonOutline}
        >
          Forgot password?
        </button>
      </div>
    </form>
  )
}

export default UserLoginForm
