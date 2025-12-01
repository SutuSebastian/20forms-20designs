import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <p className="mb-3">Request a password reset link via email.</p>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-password-reset-email">
          Email address
        </CFormLabel>
        <CFormInput
          id="coreui-password-reset-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Send reset link
        </CButton>
      </div>
    </CForm>
  )
}

export default PasswordResetForm
