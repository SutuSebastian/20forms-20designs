/** @jsxImportSource theme-ui */

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
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

  const secondaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: 'transparent',
    color: 'primary',
    border: '1px solid',
    borderColor: 'primary',
  }

  return (
    <form onSubmit={handleSubmit}>
      <p sx={{ marginBottom: 3, color: 'text' }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-two-factor-code" sx={labelStyles}>
          Verification code
        </label>
        <input
          id="theme-ui-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength="6"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-two-factor-backup" sx={labelStyles}>
          Backup code (optional)
        </label>
        <input
          id="theme-ui-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          sx={inputStyles}
        />
      </div>
      <div sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <button type="submit" sx={buttonStyles}>
          Verify
        </button>
        <button
          type="button"
          onClick={() => alert('A new code has been sent!')}
          sx={secondaryButtonStyles}
        >
          Resend code
        </button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
