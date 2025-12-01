import { Field, Label } from '@headlessui/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  const handleResendCode = () => {
    alert('A new code has been sent!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <p className="description">
        Enter the code from your authenticator app or SMS.
      </p>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-two-factor-auth-code">
          Verification code
        </Label>
        <input
          id="headlessui-two-factor-auth-code"
          name="verificationCode"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-two-factor-auth-backup">
          Backup code (optional)
        </Label>
        <input
          id="headlessui-two-factor-auth-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          className="input"
        />
      </Field>
      <div className="form-row">
        <button type="submit" className="button button-primary">
          Verify
        </button>
        <button
          type="button"
          className="button button-secondary"
          onClick={handleResendCode}
        >
          Resend code
        </button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
