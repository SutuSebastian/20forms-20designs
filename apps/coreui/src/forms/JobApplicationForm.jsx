import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormCheck,
  CButton,
} from '@coreui/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-full-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-job-full-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-email">Email address</CFormLabel>
        <CFormInput id="coreui-job-email" name="email" type="email" required />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-phone">Phone number</CFormLabel>
        <CFormInput
          id="coreui-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-role">Role applied for</CFormLabel>
        <CFormInput id="coreui-job-role" name="role" type="text" required />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-resume">Resume link</CFormLabel>
        <CFormInput id="coreui-job-resume" name="resume" type="url" required />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-job-cover-letter">Cover letter</CFormLabel>
        <CFormTextarea
          id="coreui-job-cover-letter"
          name="coverLetter"
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-job-updates"
          name="updates"
          label="Keep me informed about future roles"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Submit application
        </CButton>
      </div>
    </CForm>
  )
}

export default JobApplicationForm
