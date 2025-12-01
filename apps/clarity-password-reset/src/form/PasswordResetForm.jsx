import { CdsInput, CdsButton, CdsFormGroup } from '@cds/react/forms'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ marginBottom: '16px' }}>Request a password reset link via email.</p>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-password-reset-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Send reset link
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default PasswordResetForm
