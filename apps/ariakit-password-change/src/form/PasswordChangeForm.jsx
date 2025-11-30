import * as Ariakit from '@ariakit/react'

function PasswordChangeForm() {
  const logoutCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-password-change-current" className="label">
          Current password
        </label>
        <input
          id="ariakit-password-change-current"
          name="currentPassword"
          type="password"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-password-change-new" className="label">
          New password
        </label>
        <input
          id="ariakit-password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-password-change-confirm" className="label">
          Confirm new password
        </label>
        <input
          id="ariakit-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          className="input"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={logoutCheckbox}
          name="logoutOthers"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Sign out of other devices</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Update password
      </Ariakit.Button>
    </form>
  )
}

export default PasswordChangeForm
