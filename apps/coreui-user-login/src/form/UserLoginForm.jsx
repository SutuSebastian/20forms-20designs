import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
} from '@coreui/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-login-email">Email or username</CFormLabel>
        <CFormInput
          id="coreui-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-login-password">Password</CFormLabel>
        <CFormInput
          id="coreui-user-login-password"
          name="password"
          type="password"
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-user-login-remember"
          name="remember"
          label="Keep me signed in"
        />
      </div>
      <div className="d-grid gap-2">
        <CButton type="submit" color="primary">
          Sign in
        </CButton>
        <CButton
          type="button"
          color="link"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </CButton>
      </div>
    </CForm>
  )
}

export default UserLoginForm
