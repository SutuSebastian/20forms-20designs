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

const topics = [
  { value: '', label: 'Select topic' },
  { value: 'support', label: 'Support' },
  { value: 'sales', label: 'Sales' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
]

function ContactInquiryForm() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [allowFollowUp, setAllowFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedTopic.value) {
      alert('Please select a topic')
      return
    }
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-contact-inquiry-fullname">
          Full name
        </Label>
        <input
          id="headlessui-contact-inquiry-fullname"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-contact-inquiry-email">
          Email address
        </Label>
        <input
          id="headlessui-contact-inquiry-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Topic</Label>
        <div className="select-wrapper">
          <Listbox value={selectedTopic} onChange={setSelectedTopic}>
            <ListboxButton className="select-button">
              <span>{selectedTopic.label}</span>
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
              {topics.map((topic) => (
                <ListboxOption
                  key={topic.value}
                  value={topic}
                  className="select-option"
                >
                  {topic.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-contact-inquiry-message">
          Message
        </Label>
        <textarea
          id="headlessui-contact-inquiry-message"
          name="message"
          rows={4}
          className="textarea"
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={allowFollowUp}
          onChange={setAllowFollowUp}
          name="allowFollowUp"
          className="checkbox"
        >
          {allowFollowUp && (
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
        <Label className="checkbox-label">Allow follow-up communication</Label>
      </Field>

      <button type="submit" className="button button-primary">
        Submit inquiry
      </button>
    </form>
  )
}

export default ContactInquiryForm
