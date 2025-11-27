import * as RadioGroup from '@radix-ui/react-radio-group'

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
    border: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  legend: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    lineHeight: '20px',
    marginBottom: '8px',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  radio: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#18181b',
  },
  radioLabel: {
    fontSize: '14px',
    color: '#0f172a',
    cursor: 'pointer',
  },
  fileInput: {
    width: '100%',
    fontSize: '14px',
    color: '#0f172a',
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

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="ticket-subject" style={styles.label}>
          Subject
        </label>
        <input
          id="ticket-subject"
          name="subject"
          type="text"
          required
          style={styles.input}
          placeholder="Enter subject"
        />
      </div>
      <fieldset style={styles.fieldset}>
        <legend style={styles.legend}>Priority</legend>
        <RadioGroup.Root name="priority" required style={styles.radioGroup}>
          <div style={styles.radioContainer}>
            <RadioGroup.Item value="low" id="ticket-priority-low" style={styles.radio}>
              <RadioGroup.Indicator style={styles.radioIndicator} />
            </RadioGroup.Item>
            <label htmlFor="ticket-priority-low" style={styles.radioLabel}>
              Low
            </label>
          </div>
          <div style={styles.radioContainer}>
            <RadioGroup.Item value="medium" id="ticket-priority-medium" style={styles.radio}>
              <RadioGroup.Indicator style={styles.radioIndicator} />
            </RadioGroup.Item>
            <label htmlFor="ticket-priority-medium" style={styles.radioLabel}>
              Medium
            </label>
          </div>
          <div style={styles.radioContainer}>
            <RadioGroup.Item value="high" id="ticket-priority-high" style={styles.radio}>
              <RadioGroup.Indicator style={styles.radioIndicator} />
            </RadioGroup.Item>
            <label htmlFor="ticket-priority-high" style={styles.radioLabel}>
              High
            </label>
          </div>
        </RadioGroup.Root>
      </fieldset>
      <div style={styles.fieldGroup}>
        <label htmlFor="ticket-description" style={styles.label}>
          Issue description
        </label>
        <textarea
          id="ticket-description"
          name="description"
          rows="4"
          required
          style={styles.textarea}
          placeholder="Describe your issue"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="ticket-attachments" style={styles.label}>
          Attachments
        </label>
        <input
          id="ticket-attachments"
          name="attachments"
          type="file"
          multiple
          style={styles.fileInput}
        />
      </div>
      <button type="submit" style={styles.button}>
        Submit ticket
      </button>
    </form>
  )
}

export default SupportTicketForm
