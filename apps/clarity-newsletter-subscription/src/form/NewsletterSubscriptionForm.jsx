import { CdsInput, CdsSelect, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-newsletter-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Frequency</label>
          <select id="clarity-newsletter-frequency" name="frequency" required>
            <option value="">Select frequency</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </CdsSelect>

        <CdsCheckbox>
          <label>Receive product updates</label>
          <input
            type="checkbox"
            name="agree"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Subscribe
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default NewsletterSubscriptionForm
