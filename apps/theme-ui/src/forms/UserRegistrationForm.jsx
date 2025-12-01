/** @jsxImportSource theme-ui */

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
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
        <label htmlFor="theme-ui-user-registration-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-user-registration-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-registration-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-user-registration-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-registration-username" sx={labelStyles}>
          Username
        </label>
        <input
          id="theme-ui-user-registration-username"
          name="username"
          type="text"
          minLength="3"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-registration-password" sx={labelStyles}>
          Password
        </label>
        <input
          id="theme-ui-user-registration-password"
          name="password"
          type="password"
          minLength="8"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-user-registration-confirm" sx={labelStyles}>
          Confirm password
        </label>
        <input
          id="theme-ui-user-registration-confirm"
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
          <input name="terms" type="checkbox" required />I agree to the terms
          and conditions
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Create account
      </button>
    </form>
  )
}

export default UserRegistrationForm
