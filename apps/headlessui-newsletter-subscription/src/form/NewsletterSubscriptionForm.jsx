import {
  Checkbox,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

const frequencies = [
  { value: '', label: 'Select frequency' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
]

function NewsletterSubscriptionForm() {
  const [selectedFrequency, setSelectedFrequency] = useState(frequencies[0])
  const [productUpdates, setProductUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedFrequency.value) {
      alert('Please select a frequency')
      return
    }
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-newsletter-subscription-email"
        >
          Email address
        </Label>
        <input
          id="headlessui-newsletter-subscription-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Frequency</Label>
        <div className="select-wrapper">
          <Listbox value={selectedFrequency} onChange={setSelectedFrequency}>
            <ListboxButton className="select-button">
              <span>{selectedFrequency.label}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {frequencies.map((frequency) => (
                <ListboxOption
                  key={frequency.value}
                  value={frequency}
                  className="select-option"
                >
                  {frequency.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={productUpdates}
          onChange={setProductUpdates}
          name="productUpdates"
          className="checkbox"
        >
          {productUpdates && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">Receive product updates</Label>
      </Field>

      <button type="submit" className="button button-primary">
        Subscribe
      </button>
    </form>
  )
}

export default NewsletterSubscriptionForm
