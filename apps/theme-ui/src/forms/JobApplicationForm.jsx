/** @jsxImportSource theme-ui */

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-full-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-job-full-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-job-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-phone" sx={labelStyles}>
          Phone number
        </label>
        <input
          id="theme-ui-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-role" sx={labelStyles}>
          Role applied for
        </label>
        <input
          id="theme-ui-job-role"
          name="role"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-resume" sx={labelStyles}>
          Resume link
        </label>
        <input
          id="theme-ui-job-resume"
          name="resume"
          type="url"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-job-cover-letter" sx={labelStyles}>
          Cover letter
        </label>
        <textarea
          id="theme-ui-job-cover-letter"
          name="coverLetter"
          rows="4"
          required
          sx={textareaStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label
          sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}
        >
          <input name="updates" type="checkbox" />
          Keep me informed about future roles
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Submit application
      </button>
    </form>
  )
}

export default JobApplicationForm
