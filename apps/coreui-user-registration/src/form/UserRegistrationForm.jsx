import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
} from '@coreui/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-registration-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-registration-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-user-registration-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-registration-username">Username</CFormLabel>
        <CFormInput
          id="coreui-user-registration-username"
          name="username"
          type="text"
          minLength={3}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-registration-password">Password</CFormLabel>
        <CFormInput
          id="coreui-user-registration-password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-user-registration-confirm">Confirm password</CFormLabel>
        <CFormInput
          id="coreui-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-user-registration-terms"
          name="terms"
          label="I agree to the terms and conditions"
          required
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Create account
        </CButton>
      </div>
    </CForm>
  )
}

export default UserRegistrationForm
