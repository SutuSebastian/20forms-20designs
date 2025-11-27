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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="feedback-name" style={styles.label}>
          Name
        </label>
        <input
          id="feedback-name"
          name="name"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="feedback-email" style={styles.label}>
          Email address
        </label>
        <input
          id="feedback-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="feedback-rating" style={styles.label}>
          Overall rating
        </label>
        <Select.Root name="rating" required>
          <Select.Trigger id="feedback-rating" style={styles.selectTrigger}>
            <Select.Value placeholder="Select rating" />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="excellent" style={styles.selectItem}>
                  <Select.ItemText>Excellent</Select.ItemText>
                </Select.Item>
                <Select.Item value="good" style={styles.selectItem}>
                  <Select.ItemText>Good</Select.ItemText>
                </Select.Item>
                <Select.Item value="average" style={styles.selectItem}>
                  <Select.ItemText>Average</Select.ItemText>
                </Select.Item>
                <Select.Item value="poor" style={styles.selectItem}>
                  <Select.ItemText>Poor</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="feedback-comments" style={styles.label}>
          Comments
        </label>
        <textarea
          id="feedback-comments"
          name="comments"
          rows="4"
          required
          style={styles.textarea}
          placeholder="Share your feedback"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="feedback-followup" name="followUp" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="feedback-followup" style={styles.checkboxLabel}>
          I would like a follow-up
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Send feedback
      </button>
    </form>
  )
}

export default CustomerFeedbackForm
