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
  checkboxChecked: {
    backgroundColor: '#18181b',
    borderColor: '#18181b',
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

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-registration-name" style={styles.label}>
          Full name
        </label>
        <input
          id="user-registration-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-registration-email" style={styles.label}>
          Email address
        </label>
        <input
          id="user-registration-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-registration-username" style={styles.label}>
          Username
        </label>
        <input
          id="user-registration-username"
          name="username"
          type="text"
          minLength="3"
          required
          style={styles.input}
          placeholder="Choose a username"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-registration-password" style={styles.label}>
          Password
        </label>
        <input
          id="user-registration-password"
          name="password"
          type="password"
          minLength="8"
          required
          style={styles.input}
          placeholder="Create a password"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="user-registration-confirm" style={styles.label}>
          Confirm password
        </label>
        <input
          id="user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
          style={styles.input}
          placeholder="Confirm your password"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root
          id="user-registration-terms"
          name="terms"
          required
          style={styles.checkbox}
        >
          <Checkbox.Indicator style={styles.checkboxIndicator}>
            ✓
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="user-registration-terms" style={styles.checkboxLabel}>
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Create account
      </button>
    </form>
  )
}

export default UserRegistrationForm
