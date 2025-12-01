import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-event-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-event-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-event-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-event-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-event-ticket">Ticket type</CFormLabel>
        <CFormSelect id="coreui-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-event-guests">Number of guests</CFormLabel>
        <CFormInput
          id="coreui-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-event-newsletter"
          name="newsletter"
          label="Notify me about future events"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Register
        </CButton>
      </div>
    </CForm>
  )
}

export default EventRegistrationForm
