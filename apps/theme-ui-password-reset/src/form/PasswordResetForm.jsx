/** @jsxImportSource theme-ui */

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
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

  return (
    <form onSubmit={handleSubmit}>
      <p sx={{ marginBottom: 3, color: 'text' }}>
        Request a password reset link via email.
      </p>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-password-reset-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-password-reset-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Send reset link
      </button>
    </form>
  )
}

export default PasswordResetForm
