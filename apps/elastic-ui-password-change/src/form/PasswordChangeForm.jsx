import { useState, useCallback } from 'react'
import { EuiForm, EuiFormRow, EuiFieldPassword, EuiButton } from '@elastic/eui'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password changed successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Current password">
        <EuiFieldPassword
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="New password">
        <EuiFieldPassword
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Confirm new password">
        <EuiFieldPassword
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Change password
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default PasswordChangeForm
