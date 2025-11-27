import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'

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

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="event-name" style={styles.label}>
          Full name
        </label>
        <input
          id="event-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="event-email" style={styles.label}>
          Email address
        </label>
        <input
          id="event-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="event-ticket" style={styles.label}>
          Ticket type
        </label>
        <Select.Root name="ticketType" required>
          <Select.Trigger id="event-ticket" style={styles.selectTrigger}>
            <Select.Value placeholder="Select ticket" />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="general" style={styles.selectItem}>
                  <Select.ItemText>General admission</Select.ItemText>
                </Select.Item>
                <Select.Item value="vip" style={styles.selectItem}>
                  <Select.ItemText>VIP</Select.ItemText>
                </Select.Item>
                <Select.Item value="student" style={styles.selectItem}>
                  <Select.ItemText>Student</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="event-guests" style={styles.label}>
          Number of guests
        </label>
        <input
          id="event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          required
          style={styles.input}
          placeholder="0"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="event-newsletter" name="newsletter" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="event-newsletter" style={styles.checkboxLabel}>
          Notify me about future events
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Register
      </button>
    </form>
  )
}

export default EventRegistrationForm
