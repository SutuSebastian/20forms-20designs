import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const frequencyOptions = [
  { value: 'daily', text: 'Daily' },
  { value: 'weekly', text: 'Weekly' },
  { value: 'monthly', text: 'Monthly' },
]

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('weekly')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Subscribed to newsletter successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email frequency">
        <EuiSelect
          options={frequencyOptions}
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="acceptTerms"
          label="I agree to receive marketing emails"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Subscribe
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default NewsletterSubscriptionForm
