import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CFormCheck,
  CButton,
} from '@coreui/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-contact-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-contact-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-contact-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-contact-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-contact-topic">Topic</CFormLabel>
        <CFormSelect id="coreui-contact-topic" name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-contact-message">Message</CFormLabel>
        <CFormTextarea
          id="coreui-contact-message"
          name="message"
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-contact-consent"
          name="consent"
          label="Allow follow-up communication"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Submit inquiry
        </CButton>
      </div>
    </CForm>
  )
}

export default ContactInquiryForm
