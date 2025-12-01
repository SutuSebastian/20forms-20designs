import { CdsPassword, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsPassword>
          <label>Current password</label>
          <input
            id="clarity-password-change-current"
            name="currentPassword"
            type="password"
            required
          />
        </CdsPassword>

        <CdsPassword>
          <label>New password</label>
          <input
            id="clarity-password-change-new"
            name="newPassword"
            type="password"
            minLength="8"
            required
          />
        </CdsPassword>

        <CdsPassword>
          <label>Confirm new password</label>
          <input
            id="clarity-password-change-confirm"
            name="confirmPassword"
            type="password"
            minLength="8"
            required
          />
        </CdsPassword>

        <CdsCheckbox>
          <label>Sign out of other devices</label>
          <input
            type="checkbox"
            name="logoutOthers"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Update password
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default PasswordChangeForm
