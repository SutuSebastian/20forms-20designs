/** @jsxImportSource theme-ui */

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
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
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-login-email" sx={labelStyles}>
          Email or username
        </label>
        <input
          id="theme-ui-user-login-email"
          name="identifier"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-login-password" sx={labelStyles}>
          Password
        </label>
        <input
          id="theme-ui-user-login-password"
          name="password"
          type="password"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}>
          <input name="remember" type="checkbox" />
          Keep me signed in
        </label>
      </div>
      <div sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <button type="submit" sx={buttonStyles}>
          Sign in
        </button>
        <button
          type="button"
          onClick={() => alert('Password reset link flow placeholder')}
          sx={secondaryButtonStyles}
        >
          Forgot password?
        </button>
      </div>
    </form>
  )
}

export default UserLoginForm
