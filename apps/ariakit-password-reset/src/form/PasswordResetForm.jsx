import * as Ariakit from '@ariakit/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <p className="description">Request a password reset link via email.</p>
      <div className="form-field">
        <label htmlFor="ariakit-password-reset-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-password-reset-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Send reset link
      </Ariakit.Button>
    </form>
  )
}

export default PasswordResetForm
