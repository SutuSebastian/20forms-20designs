import {
  CdsInput,
  CdsSelect,
  CdsTextarea,
  CdsCheckbox,
  CdsButton,
  CdsFormGroup,
} from '@cds/react/forms'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-contact-name"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-contact-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Topic</label>
          <select id="clarity-contact-topic" name="topic" required>
            <option value="">Select topic</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </CdsSelect>

        <CdsTextarea>
          <label>Message</label>
          <textarea
            id="clarity-contact-message"
            name="message"
            rows="4"
            required
          />
        </CdsTextarea>

        <CdsCheckbox>
          <label>Allow follow-up communication</label>
          <input type="checkbox" name="consent" />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Submit inquiry
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default ContactInquiryForm
