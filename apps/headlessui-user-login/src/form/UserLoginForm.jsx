import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'

function UserLoginForm() {
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-user-login-email">
          Email or username
        </Label>
        <input
          id="headlessui-user-login-email"
          name="identifier"
          type="text"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-user-login-password">
          Password
        </Label>
        <input
          id="headlessui-user-login-password"
          name="password"
          type="password"
          className="input"
          required
        />
      </Field>
      <Field className="checkbox-wrapper">
        <Checkbox
          checked={remember}
          onChange={setRemember}
          name="remember"
          className="checkbox"
        >
          {remember && (
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
        <Label className="checkbox-label">Keep me signed in</Label>
      </Field>
      <div className="form-row">
        <button type="submit" className="button button-primary">
          Sign in
        </button>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </button>
      </div>
    </form>
  )
}

export default UserLoginForm
