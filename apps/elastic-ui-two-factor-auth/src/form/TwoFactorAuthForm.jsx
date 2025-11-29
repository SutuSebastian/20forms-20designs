import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Two-factor authentication verified!')
  }, [])

  const handleResend = useCallback(() => {
    alert('Verification code resent!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow>
        <EuiText size="s">
          <p>Enter the 6-digit code from your authenticator app</p>
        </EuiText>
      </EuiFormRow>

      <EuiFormRow label="Verification code">
        <EuiFieldText
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          placeholder="000000"
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Verify
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleResend}>Resend code</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default TwoFactorAuthForm
