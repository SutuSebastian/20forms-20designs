import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <p className="mb-3">Enter the code from your authenticator app or SMS.</p>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-two-factor-code">
          Verification code
        </CFormLabel>
        <CFormInput
          id="coreui-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-two-factor-backup">
          Backup code (optional)
        </CFormLabel>
        <CFormInput
          id="coreui-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </div>
      <div className="d-grid gap-2">
        <CButton type="submit" color="primary">
          Verify
        </CButton>
        <CButton
          type="button"
          color="secondary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </CButton>
      </div>
    </CForm>
  )
}

export default TwoFactorAuthForm
