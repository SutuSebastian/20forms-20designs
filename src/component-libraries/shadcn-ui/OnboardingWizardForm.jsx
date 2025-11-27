import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#0f172a',
    margin: 0,
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
  selectTrigger: {
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
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  selectContent: {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    zIndex: 50,
  },
  selectViewport: {
    padding: '4px',
  },
  selectItem: {
    fontSize: '14px',
    color: '#0f172a',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
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
  buttonGroup: {
    display: 'flex',
    gap: '8px',
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
}

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Step 1: Account</h3>
        <div style={styles.fieldGroup}>
          <label htmlFor="onboarding-email" style={styles.label}>
            Work email
          </label>
          <input
            id="onboarding-email"
            name="email"
            type="email"
            required
            style={styles.input}
            placeholder="Enter your work email"
          />
        </div>
        <div style={styles.fieldGroup}>
          <label htmlFor="onboarding-password" style={styles.label}>
            Password
          </label>
          <input
            id="onboarding-password"
            name="password"
            type="password"
            minLength="8"
            required
            style={styles.input}
            placeholder="Create a password"
          />
        </div>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Step 2: Team</h3>
        <div style={styles.fieldGroup}>
          <label htmlFor="onboarding-team-name" style={styles.label}>
            Team name
          </label>
          <input
            id="onboarding-team-name"
            name="teamName"
            type="text"
            required
            style={styles.input}
            placeholder="Enter team name"
          />
        </div>
        <div style={styles.fieldGroup}>
          <label htmlFor="onboarding-size" style={styles.label}>
            Team size
          </label>
          <Select.Root name="teamSize" required>
            <Select.Trigger id="onboarding-size" style={styles.selectTrigger}>
              <Select.Value placeholder="Select size" />
              <Select.Icon>▼</Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
                <Select.Viewport style={styles.selectViewport}>
                  <Select.Item value="1-5" style={styles.selectItem}>
                    <Select.ItemText>1-5</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="6-20" style={styles.selectItem}>
                    <Select.ItemText>6-20</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="21-50" style={styles.selectItem}>
                    <Select.ItemText>21-50</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="50+" style={styles.selectItem}>
                    <Select.ItemText>50+</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Step 3: Preferences</h3>
        <div style={styles.fieldGroup}>
          <label htmlFor="onboarding-goal" style={styles.label}>
            Primary goal
          </label>
          <textarea
            id="onboarding-goal"
            name="goal"
            rows="3"
            required
            style={styles.textarea}
            placeholder="What's your primary goal?"
          />
        </div>
        <div style={styles.checkboxContainer}>
          <Checkbox.Root id="onboarding-updates" name="updates" style={styles.checkbox}>
            <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="onboarding-updates" style={styles.checkboxLabel}>
            Send me product tips
          </label>
        </div>
      </section>
      <div style={styles.buttonGroup}>
        <button
          type="button"
          onClick={() => alert('Back action placeholder')}
          style={styles.buttonOutline}
        >
          Back
        </button>
        <button type="submit" style={styles.button}>
          Finish setup
        </button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
