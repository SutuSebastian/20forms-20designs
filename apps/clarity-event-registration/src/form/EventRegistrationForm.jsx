import { CdsInput, CdsSelect, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-event-fullname"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-event-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Ticket type</label>
          <select id="clarity-event-ticket-type" name="ticketType" required>
            <option value="">Select ticket</option>
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </CdsSelect>

        <CdsInput>
          <label>Number of guests</label>
          <input
            id="clarity-event-guest-count"
            name="guestCount"
            type="number"
            min="0"
            max="10"
            defaultValue="0"
          />
        </CdsInput>

        <CdsCheckbox>
          <label>Sign up for event newsletter</label>
          <input
            id="clarity-event-newsletter"
            name="newsletter"
            type="checkbox"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Register
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default EventRegistrationForm
