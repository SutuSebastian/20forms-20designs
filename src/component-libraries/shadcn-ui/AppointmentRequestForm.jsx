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

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="appointment-name" style={styles.label}>
          Full name
        </label>
        <input
          id="appointment-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your full name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="appointment-email" style={styles.label}>
          Email address
        </label>
        <input
          id="appointment-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="appointment-date" style={styles.label}>
          Preferred date
        </label>
        <input
          id="appointment-date"
          name="date"
          type="date"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="appointment-time" style={styles.label}>
          Preferred time
        </label>
        <input
          id="appointment-time"
          name="time"
          type="time"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="appointment-reason" style={styles.label}>
          Reason for visit
        </label>
        <textarea
          id="appointment-reason"
          name="reason"
          rows="3"
          required
          style={styles.textarea}
          placeholder="Describe the reason for your visit"
        />
      </div>
      <button type="submit" style={styles.button}>
        Request appointment
      </button>
    </form>
  )
}

export default AppointmentRequestForm
