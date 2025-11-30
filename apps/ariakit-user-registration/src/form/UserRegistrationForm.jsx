import * as Ariakit from '@ariakit/react'

function UserRegistrationForm() {
  const termsCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-user-registration-name" className="label">
          Full name
        </label>
        <input
          id="ariakit-user-registration-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-user-registration-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-user-registration-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-user-registration-username" className="label">
          Username
        </label>
        <input
          id="ariakit-user-registration-username"
          name="username"
          type="text"
          minLength="3"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-user-registration-password" className="label">
          Password
        </label>
        <input
          id="ariakit-user-registration-password"
          name="password"
          type="password"
          minLength="8"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-user-registration-confirm" className="label">
          Confirm password
        </label>
        <input
          id="ariakit-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          className="input"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={termsCheckbox}
          name="terms"
          className="checkbox"
          required
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">
          I agree to the terms and conditions
        </span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Create account
      </Ariakit.Button>
    </form>
  )
}

export default UserRegistrationForm
