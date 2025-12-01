import { CdsInput, CdsPassword, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Email or username</label>
          <input
            id="clarity-user-login-email"
            name="identifier"
            type="text"
            required
          />
        </CdsInput>

        <CdsPassword>
          <label>Password</label>
          <input
            id="clarity-user-login-password"
            name="password"
            type="password"
            required
          />
        </CdsPassword>

        <CdsCheckbox>
          <label>Keep me signed in</label>
          <input
            type="checkbox"
            name="remember"
          />
        </CdsCheckbox>

        <div cds-layout="horizontal gap:sm" style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Sign in
          </CdsButton>
          <CdsButton
            type="button"
            action="outline"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default UserLoginForm
