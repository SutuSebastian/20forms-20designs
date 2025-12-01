import { CdsInput, CdsButton, CdsFormGroup } from '@cds/react/forms'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ marginBottom: '16px' }}>Enter the code from your authenticator app or SMS.</p>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Verification code</label>
          <input
            id="clarity-two-factor-code"
            name="code"
            type="text"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength="6"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Backup code (optional)</label>
          <input
            id="clarity-two-factor-backup"
            name="backupCode"
            type="text"
            pattern="[A-Za-z0-9]{6,12}"
          />
        </CdsInput>

        <div cds-layout="horizontal gap:sm" style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Verify
          </CdsButton>
          <CdsButton
            type="button"
            action="outline"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default TwoFactorAuthForm
