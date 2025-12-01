import { Checkbox, Field, Fieldset, Label, Legend } from '@headlessui/react'
import { useState } from 'react'

function PrivacyConsentForm() {
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  const CheckboxIcon = ({ checked }) =>
    checked ? (
      <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 8L6 11L11 3"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : null

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-privacy-name">
          Full name
        </Label>
        <input
          id="headlessui-privacy-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-privacy-email">
          Email address
        </Label>
        <input
          id="headlessui-privacy-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Fieldset className="fieldset">
        <Legend className="legend">Communication channels</Legend>
        <div className="form-stack">
          <Field className="checkbox-wrapper">
            <Checkbox
              checked={emailOptIn}
              onChange={setEmailOptIn}
              name="emailOptIn"
              className="checkbox"
            >
              <CheckboxIcon checked={emailOptIn} />
            </Checkbox>
            <Label className="checkbox-label">Email updates</Label>
          </Field>

          <Field className="checkbox-wrapper">
            <Checkbox
              checked={smsOptIn}
              onChange={setSmsOptIn}
              name="smsOptIn"
              className="checkbox"
            >
              <CheckboxIcon checked={smsOptIn} />
            </Checkbox>
            <Label className="checkbox-label">SMS notifications</Label>
          </Field>

          <Field className="checkbox-wrapper">
            <Checkbox
              checked={phoneOptIn}
              onChange={setPhoneOptIn}
              name="phoneOptIn"
              className="checkbox"
            >
              <CheckboxIcon checked={phoneOptIn} />
            </Checkbox>
            <Label className="checkbox-label">Phone calls</Label>
          </Field>
        </div>
      </Fieldset>

      <Fieldset className="fieldset">
        <Legend className="legend">Privacy options</Legend>
        <div className="form-stack">
          <Field className="checkbox-wrapper">
            <Checkbox
              checked={analytics}
              onChange={setAnalytics}
              name="analytics"
              className="checkbox"
            >
              <CheckboxIcon checked={analytics} />
            </Checkbox>
            <Label className="checkbox-label">Allow analytics cookies</Label>
          </Field>

          <Field className="checkbox-wrapper">
            <Checkbox
              checked={personalization}
              onChange={setPersonalization}
              name="personalization"
              className="checkbox"
            >
              <CheckboxIcon checked={personalization} />
            </Checkbox>
            <Label className="checkbox-label">Allow personalized content</Label>
          </Field>
        </div>
      </Fieldset>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-privacy-notes">
          Additional notes
        </Label>
        <textarea
          id="headlessui-privacy-notes"
          name="notes"
          rows="3"
          className="textarea"
        />
      </Field>

      <button type="submit" className="button button-primary">
        Save preferences
      </button>
    </form>
  )
}

export default PrivacyConsentForm
