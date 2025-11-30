import * as Ariakit from '@ariakit/react'

function UserLoginForm() {
  const checkbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-user-login-email" className="label">
          Email or username
        </label>
        <input
          id="ariakit-user-login-email"
          name="identifier"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-user-login-password" className="label">
          Password
        </label>
        <input
          id="ariakit-user-login-password"
          name="password"
          type="password"
          className="input"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox store={checkbox} name="remember" className="checkbox">
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Keep me signed in</span>
      </label>
      <div className="form-row">
        <Ariakit.Button type="submit" className="button button-primary">
          Sign in
        </Ariakit.Button>
        <Ariakit.Button
          type="button"
          className="button button-secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Ariakit.Button>
      </div>
    </form>
  )
}

export default UserLoginForm
