import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CFormCheck,
  CButton,
} from '@coreui/react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-feedback-name">Name</CFormLabel>
        <CFormInput
          id="coreui-feedback-name"
          name="name"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-feedback-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-feedback-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-feedback-rating">Overall rating</CFormLabel>
        <CFormSelect id="coreui-feedback-rating" name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-feedback-comments">Comments</CFormLabel>
        <CFormTextarea
          id="coreui-feedback-comments"
          name="comments"
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-feedback-followup"
          name="followUp"
          label="I would like a follow-up"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Send feedback
        </CButton>
      </div>
    </CForm>
  )
}

export default CustomerFeedbackForm
