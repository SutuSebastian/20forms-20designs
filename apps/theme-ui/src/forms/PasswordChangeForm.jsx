/** @jsxImportSource theme-ui */

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
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
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-password-change-current" sx={labelStyles}>
          Current password
        </label>
        <input
          id="theme-ui-password-change-current"
          name="currentPassword"
          type="password"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-password-change-new" sx={labelStyles}>
          New password
        </label>
        <input
          id="theme-ui-password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-password-change-confirm" sx={labelStyles}>
          Confirm new password
        </label>
        <input
          id="theme-ui-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label
          sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}
        >
          <input name="logoutOthers" type="checkbox" />
          Sign out of other devices
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Update password
      </button>
    </form>
  )
}

export default PasswordChangeForm
