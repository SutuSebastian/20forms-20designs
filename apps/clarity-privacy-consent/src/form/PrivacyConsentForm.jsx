import { CdsInput, CdsCheckbox, CdsTextarea, CdsButton, CdsFormGroup } from '@cds/react/forms'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Consent saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-consent-name"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email</label>
          <input
            id="clarity-consent-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <fieldset style={{ border: 'none', padding: 0, margin: '16px 0' }}>
          <legend style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
            Required Consents
          </legend>
          <CdsCheckbox>
            <label>I agree to the Terms of Service</label>
            <input
              type="checkbox"
              id="clarity-consent-terms"
              name="termsAccepted"
              required
            />
          </CdsCheckbox>
          <CdsCheckbox>
            <label>I agree to the Privacy Policy</label>
            <input
              type="checkbox"
              id="clarity-consent-privacy"
              name="privacyAccepted"
              required
            />
          </CdsCheckbox>
        </fieldset>

        <fieldset style={{ border: 'none', padding: 0, margin: '16px 0' }}>
          <legend style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
            Optional Consents
          </legend>
          <CdsCheckbox>
            <label>I would like to receive marketing emails</label>
            <input
              type="checkbox"
              id="clarity-consent-marketing"
              name="marketingConsent"
            />
          </CdsCheckbox>
          <CdsCheckbox>
            <label>I agree to share data with partners</label>
            <input
              type="checkbox"
              id="clarity-consent-partners"
              name="partnerConsent"
            />
          </CdsCheckbox>
        </fieldset>

        <CdsTextarea>
          <label>Additional notes</label>
          <textarea
            id="clarity-consent-notes"
            name="notes"
            rows={3}
          />
        </CdsTextarea>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Save preferences
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default PrivacyConsentForm
