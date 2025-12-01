import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-newsletter-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-newsletter-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-newsletter-frequency">Frequency</CFormLabel>
        <CFormSelect id="coreui-newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-newsletter-agree"
          name="agree"
          label="Receive product updates"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Subscribe
        </CButton>
      </div>
    </CForm>
  )
}

export default NewsletterSubscriptionForm
