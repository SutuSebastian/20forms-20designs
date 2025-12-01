import { Field, Label } from '@headlessui/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <p className="description">Request a password reset link via email.</p>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-password-reset-email">
          Email address
        </Label>
        <input
          id="headlessui-password-reset-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>
      <button type="submit" className="button button-primary">
        Send reset link
      </button>
    </form>
  )
}

export default PasswordResetForm
