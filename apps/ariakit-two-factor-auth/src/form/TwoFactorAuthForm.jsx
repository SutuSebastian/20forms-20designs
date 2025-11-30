import * as Ariakit from '@ariakit/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <p className="description">
        Enter the code from your authenticator app or SMS.
      </p>
      <div className="form-field">
        <label htmlFor="ariakit-two-factor-code" className="label">
          Verification code
        </label>
        <input
          id="ariakit-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength="6"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-two-factor-backup" className="label">
          Backup code (optional)
        </label>
        <input
          id="ariakit-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          className="input"
        />
      </div>
      <div className="form-row">
        <Ariakit.Button type="submit" className="button button-primary">
          Verify
        </Ariakit.Button>
        <Ariakit.Button
          type="button"
          className="button button-secondary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Ariakit.Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
