import { CdsInput, CdsTextarea, CdsButton, CdsFormGroup } from '@cds/react/forms'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-appointment-fullname"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-appointment-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Preferred date</label>
          <input
            id="clarity-appointment-date"
            name="date"
            type="date"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Preferred time</label>
          <input
            id="clarity-appointment-time"
            name="time"
            type="time"
            required
          />
        </CdsInput>

        <CdsTextarea>
          <label>Reason for appointment</label>
          <textarea
            id="clarity-appointment-reason"
            name="reason"
            rows="4"
            required
          />
        </CdsTextarea>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Request appointment
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default AppointmentRequestForm
