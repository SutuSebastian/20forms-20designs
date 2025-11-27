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

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-full-name" style={styles.label}>
          Full name
        </label>
        <input
          id="job-full-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-email" style={styles.label}>
          Email address
        </label>
        <input
          id="job-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-phone" style={styles.label}>
          Phone number
        </label>
        <input
          id="job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          style={styles.input}
          placeholder="Enter your phone number"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-role" style={styles.label}>
          Role applied for
        </label>
        <input
          id="job-role"
          name="role"
          type="text"
          required
          style={styles.input}
          placeholder="Enter the role you're applying for"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-resume" style={styles.label}>
          Resume link
        </label>
        <input
          id="job-resume"
          name="resume"
          type="url"
          required
          style={styles.input}
          placeholder="https://example.com/resume.pdf"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="job-cover-letter" style={styles.label}>
          Cover letter
        </label>
        <textarea
          id="job-cover-letter"
          name="coverLetter"
          rows="4"
          required
          style={styles.textarea}
          placeholder="Write your cover letter here"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="job-updates" name="updates" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="job-updates" style={styles.checkboxLabel}>
          Keep me informed about future roles
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Submit application
      </button>
    </form>
  )
}

export default JobApplicationForm
