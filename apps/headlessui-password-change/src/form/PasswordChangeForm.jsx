import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'

function PasswordChangeForm() {
  const [signOutOtherDevices, setSignOutOtherDevices] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-password-change-current">
          Current password
        </Label>
        <input
          id="headlessui-password-change-current"
          name="currentPassword"
          type="password"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-password-change-new">
          New password
        </Label>
        <input
          id="headlessui-password-change-new"
          name="newPassword"
          type="password"
          className="input"
          minLength={8}
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-password-change-confirm">
          Confirm new password
        </Label>
        <input
          id="headlessui-password-change-confirm"
          name="confirmPassword"
          type="password"
          className="input"
          minLength={8}
          required
        />
      </Field>
      <Field className="checkbox-wrapper">
        <Checkbox
          checked={signOutOtherDevices}
          onChange={setSignOutOtherDevices}
          name="signOutOtherDevices"
          className="checkbox"
        >
          {signOutOtherDevices && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">Sign out of other devices</Label>
      </Field>
      <div className="form-row">
        <button type="submit" className="button button-primary">
          Update password
        </button>
      </div>
    </form>
  )
}

export default PasswordChangeForm
