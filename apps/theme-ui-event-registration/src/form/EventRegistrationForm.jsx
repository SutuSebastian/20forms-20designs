/** @jsxImportSource theme-ui */

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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

  const selectStyles = {
    ...inputStyles,
    appearance: 'none',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '16px',
    paddingRight: '32px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-event-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-event-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-event-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-event-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-event-ticket" sx={labelStyles}>
          Ticket type
        </label>
        <select
          id="theme-ui-event-ticket"
          name="ticketType"
          required
          sx={selectStyles}
        >
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-event-guests" sx={labelStyles}>
          Number of guests
        </label>
        <input
          id="theme-ui-event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label
          sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}
        >
          <input name="newsletter" type="checkbox" />
          Notify me about future events
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Register
      </button>
    </form>
  )
}

export default EventRegistrationForm
