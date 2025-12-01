import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormCheck,
  CButton,
} from '@coreui/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-ticket-subject">Subject</CFormLabel>
        <CFormInput
          id="coreui-ticket-subject"
          name="subject"
          type="text"
          required
        />
      </div>
      <fieldset className="mb-3">
        <legend className="fs-6">Priority</legend>
        <CFormCheck
          type="radio"
          id="coreui-ticket-priority-low"
          name="priority"
          value="low"
          label="Low"
          required
        />
        <CFormCheck
          type="radio"
          id="coreui-ticket-priority-medium"
          name="priority"
          value="medium"
          label="Medium"
        />
        <CFormCheck
          type="radio"
          id="coreui-ticket-priority-high"
          name="priority"
          value="high"
          label="High"
        />
      </fieldset>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-ticket-description">Issue description</CFormLabel>
        <CFormTextarea
          id="coreui-ticket-description"
          name="description"
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-ticket-attachments">Attachments</CFormLabel>
        <CFormInput
          id="coreui-ticket-attachments"
          name="attachments"
          type="file"
          multiple
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Submit ticket
        </CButton>
      </div>
    </CForm>
  )
}

export default SupportTicketForm
