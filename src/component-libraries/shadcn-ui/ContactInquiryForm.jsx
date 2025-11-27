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

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="contact-name" style={styles.label}>
          Full name
        </label>
        <input
          id="contact-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="contact-email" style={styles.label}>
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="contact-topic" style={styles.label}>
          Topic
        </label>
        <Select.Root name="topic" required>
          <Select.Trigger id="contact-topic" style={styles.selectTrigger}>
            <Select.Value placeholder="Select topic" />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              style={styles.selectContent}
              position="popper"
              sideOffset={4}
            >
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="support" style={styles.selectItem}>
                  <Select.ItemText>Support</Select.ItemText>
                </Select.Item>
                <Select.Item value="sales" style={styles.selectItem}>
                  <Select.ItemText>Sales</Select.ItemText>
                </Select.Item>
                <Select.Item value="feedback" style={styles.selectItem}>
                  <Select.ItemText>Feedback</Select.ItemText>
                </Select.Item>
                <Select.Item value="other" style={styles.selectItem}>
                  <Select.ItemText>Other</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="contact-message" style={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          required
          style={styles.textarea}
          placeholder="Enter your message"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root
          id="contact-consent"
          name="consent"
          style={styles.checkbox}
        >
          <Checkbox.Indicator style={styles.checkboxIndicator}>
            ✓
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="contact-consent" style={styles.checkboxLabel}>
          Allow follow-up communication
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Submit inquiry
      </button>
    </form>
  )
}

export default ContactInquiryForm
