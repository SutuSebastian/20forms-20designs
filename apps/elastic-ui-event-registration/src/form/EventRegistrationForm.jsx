import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const ticketTypeOptions = [
  { value: '', text: 'Select ticket type' },
  { value: 'general', text: 'General Admission' },
  { value: 'vip', text: 'VIP' },
  { value: 'student', text: 'Student' },
  { value: 'group', text: 'Group (5+)' },
]

const attendeeCountOptions = [
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' },
  { value: '5', text: '5+' },
]

function EventRegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [attendeeCount, setAttendeeCount] = useState('1')
  const [dietaryRequirements, setDietaryRequirements] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="First name">
            <EuiFieldText
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Last name">
            <EuiFieldText
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Phone number">
        <EuiFieldText
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </EuiFormRow>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Ticket type">
            <EuiSelect
              options={ticketTypeOptions}
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Number of attendees">
            <EuiSelect
              options={attendeeCountOptions}
              value={attendeeCount}
              onChange={(e) => setAttendeeCount(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Dietary requirements (optional)">
        <EuiTextArea
          value={dietaryRequirements}
          onChange={(e) => setDietaryRequirements(e.target.value)}
          rows={3}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="agreeTerms"
          label="I agree to the terms and conditions"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Register
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default EventRegistrationForm
