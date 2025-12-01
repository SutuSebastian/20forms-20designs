/** @jsxImportSource theme-ui */

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
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
    minHeight: '100px',
  }

  const fieldsetStyles = {
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    padding: 3,
    marginBottom: 3,
  }

  const legendStyles = {
    fontWeight: 'bold',
    color: 'text',
    padding: '0 8px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-ticket-subject" sx={labelStyles}>
          Subject
        </label>
        <input
          id="theme-ui-ticket-subject"
          name="subject"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <fieldset sx={fieldsetStyles}>
        <legend sx={legendStyles}>Priority</legend>
        <div sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input
              id="theme-ui-ticket-priority-low"
              type="radio"
              name="priority"
              value="low"
              required
            />
            Low
          </label>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input
              id="theme-ui-ticket-priority-medium"
              type="radio"
              name="priority"
              value="medium"
            />
            Medium
          </label>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input
              id="theme-ui-ticket-priority-high"
              type="radio"
              name="priority"
              value="high"
            />
            High
          </label>
        </div>
      </fieldset>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-ticket-description" sx={labelStyles}>
          Issue description
        </label>
        <textarea
          id="theme-ui-ticket-description"
          name="description"
          rows="4"
          required
          sx={textareaStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-ticket-attachments" sx={labelStyles}>
          Attachments
        </label>
        <input
          id="theme-ui-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          sx={{
            color: 'text',
          }}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Submit ticket
      </button>
    </form>
  )
}

export default SupportTicketForm
