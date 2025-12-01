import { CdsInput, CdsPassword, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-user-registration-name"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-user-registration-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Username</label>
          <input
            id="clarity-user-registration-username"
            name="username"
            type="text"
            minLength="3"
            required
          />
        </CdsInput>

        <CdsPassword>
          <label>Password</label>
          <input
            id="clarity-user-registration-password"
            name="password"
            type="password"
            minLength="8"
            required
          />
        </CdsPassword>

        <CdsPassword>
          <label>Confirm password</label>
          <input
            id="clarity-user-registration-confirm"
            name="confirmPassword"
            type="password"
            minLength="8"
            required
          />
        </CdsPassword>

        <CdsCheckbox>
          <label>I agree to the terms and conditions</label>
          <input
            type="checkbox"
            name="terms"
            required
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Create account
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default UserRegistrationForm
