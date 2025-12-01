/** @jsxImportSource theme-ui */

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  const inputStyles = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    backgroundColor: 'inputBg',
    color: 'text',
    outline: 'none',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: '0 0 0 2px rgba(0, 119, 204, 0.2)',
    },
  }

  const labelStyles = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: 'text',
  }

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'primary',
    border: 'none',
    borderRadius: 'default',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  }

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '80px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-appointment-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-appointment-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-appointment-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-appointment-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-appointment-date" sx={labelStyles}>
          Preferred date
        </label>
        <input
          id="theme-ui-appointment-date"
          name="date"
          type="date"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-appointment-time" sx={labelStyles}>
          Preferred time
        </label>
        <input
          id="theme-ui-appointment-time"
          name="time"
          type="time"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-appointment-reason" sx={labelStyles}>
          Reason for visit
        </label>
        <textarea
          id="theme-ui-appointment-reason"
          name="reason"
          rows="3"
          required
          sx={textareaStyles}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Request appointment
      </button>
    </form>
  )
}

export default AppointmentRequestForm
