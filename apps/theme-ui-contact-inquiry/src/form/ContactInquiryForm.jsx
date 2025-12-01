/** @jsxImportSource theme-ui */

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '100px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-contact-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-contact-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-contact-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-contact-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-contact-topic" sx={labelStyles}>
          Topic
        </label>
        <select
          id="theme-ui-contact-topic"
          name="topic"
          required
          sx={selectStyles}
        >
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-contact-message" sx={labelStyles}>
          Message
        </label>
        <textarea
          id="theme-ui-contact-message"
          name="message"
          rows="4"
          required
          sx={textareaStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label
          sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}
        >
          <input name="consent" type="checkbox" />
          Allow follow-up communication
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Submit inquiry
      </button>
    </form>
  )
}

export default ContactInquiryForm
